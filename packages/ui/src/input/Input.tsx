import type { InputInstance, InputProps } from "./PropsType";
import { usePropsValue } from "@react-vant-next/hooks";
import { Clear } from "@react-vant-next/icons";
import {
  createNamespace,
  formatNumber,
  isDef,
  mergeProps,
  preventDefault,
  resetScroll,
} from "@react-vant-next/utils";
import clsx from "clsx";
import React, {
  useImperativeHandle,
  useMemo,
  useRef,
  useState,
} from "react";

const [bem] = createNamespace("input");

function Input({ ref, ...p }: InputProps & { ref?: React.RefObject<InputInstance | null> }) {
  const props = mergeProps(p, {
    clearIcon: <Clear />,
    clearTrigger: "focus",
    defaultValue: "",
  });
  const inputRef = useRef<HTMLInputElement>(void 0);
  const [inputFocus, setInputFocus] = useState(false);
  const compositionStartRef = useRef(false);
  const [value, setValue] = usePropsValue(props);

  const {
    className,
    style,
    align,
    type,
    name,
    placeholder,
    disabled,
    readOnly,
    maxLength,
    autoFocus,
  } = props;

  const focus = () => {
    if (inputRef?.current) {
      inputRef.current.focus();
    }
  };

  const blur = () => {
    if (inputRef?.current) {
      inputRef.current.blur();
    }
  };

  useImperativeHandle(ref, () => ({
    clear: () => {
      setValue("");
    },
    focus,
    blur,
    get nativeElement() {
      return inputRef.current;
    },
  }));

  const showClear = useMemo(() => {
    if (props.clearable && !readOnly) {
      const hasValue = value !== "";
      const trigger
        = props.clearTrigger === "always"
          || (props.clearTrigger === "focus" && inputFocus);
      return hasValue && trigger;
    }
    return false;
  }, [props.clearable, props.clearTrigger, readOnly, value, inputFocus]);

  const handleValueChange = (inputValue?: string) => {
    let finalValue = inputValue;

    if (!compositionStartRef.current) {
      if (isDef(maxLength) && finalValue.length > +maxLength) {
        finalValue = finalValue.slice(0, maxLength);
        props.onOverlimit?.();
      }

      if (type === "number" || type === "digit") {
        const isNumber = type === "number";
        finalValue = formatNumber(finalValue, isNumber, isNumber);
      }
    }

    setValue(finalValue);
  };

  const handleFocus = (e: React.FocusEvent<HTMLInputElement>) => {
    setInputFocus(true);
    props.onFocus?.(e);

    // readOnly not work in legacy mobile safari
    if (readOnly) {
      blur();
    }
  };

  const handleBulr = (e: React.FocusEvent<HTMLInputElement>) => {
    setInputFocus(false);
    props.onBlur?.(e);
    resetScroll();
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter" || +e.charCode === 13) {
      preventDefault(e);
      // trigger blur after click keyboard search button
      if (props.type === "search") {
        blur();
      }
    }
    props.onKeyPress?.(e);
  };

  const renderInput = () => {
    let inputType = type;
    let inputMode;

    // type="number" is weired in iOS, and can't prevent dot in Android
    // so use inputmode to set keyboard in mordern browers
    if (type === "number") {
      inputType = "text";
      inputMode = "decimal";
    }

    if (type === "digit") {
      inputType = "tel";
      inputMode = "numeric";
    }

    return (
      <input
        value={value}
        type={inputType}
        inputMode={inputMode}
        ref={inputRef}
        name={name}
        className={clsx(bem("control"))}
        disabled={disabled}
        autoFocus={autoFocus}
        readOnly={readOnly}
        placeholder={placeholder || ""}
        onBlur={handleBulr}
        onFocus={handleFocus}
        onChange={e => handleValueChange(e?.currentTarget?.value)}
        onKeyPress={handleKeyPress}
        autoCapitalize={props.autoCapitalize}
        autoCorrect={props.autoCorrect}
        onKeyDown={props.onKeyDown}
        onKeyUp={props.onKeyUp}
        onCompositionStart={(e) => {
          compositionStartRef.current = true;
          props.onCompositionStart?.(e);
        }}
        onCompositionEnd={(e) => {
          compositionStartRef.current = false;
          props.onCompositionEnd?.(e);
          handleValueChange(e?.currentTarget?.value);
        }}
        onClick={props.onClick}
      />
    );
  };

  const handleClear = (e: React.MouseEvent<HTMLDivElement>) => {
    setValue("");
    props.onClear?.(e);
  };

  return (
    <div className={clsx(bem([align]), className)} style={style}>
      {props.prefix && (
        <div className={clsx(bem("prefix"))}>{props.prefix}</div>
      )}
      {renderInput()}
      {showClear
        && React.cloneElement<any>(
          (props.clearIcon || <Clear />) as React.ReactElement,
          {
            className: clsx(bem("clear")),
            onTouchStart: handleClear,
          },
        )}
      {props.suffix && (
        <div className={clsx(bem("suffix"))}>{props.suffix}</div>
      )}
    </div>
  );
}

export default Input;
