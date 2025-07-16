import type {
  CalendarDayItem,
  CalendarDayType,
  CalendarMonthProps,
} from "./PropsType";
import { addUnit, createNamespace, getRect, setScrollTop } from "@react-vant-next/utils";
import cls from "clsx";
import React, {
  use,
  useEffect,
  useImperativeHandle,
  useMemo,
  useRef,
  useState,
} from "react";
import ConfigProviderContext from "../config-provider/ConfigProviderContext";
import { getMonthEndDay } from "../datetime-picker/utils";
import CalendarDay from "./CalendarDay";
import { compareDay, formatMonthTitle, getNextDay, getPrevDay } from "./utils";

const [bem] = createNamespace("calendar");

function CalenderMonth({ ref, ...props }: CalendarMonthProps & { ref?: React.RefObject<unknown | null> }) {
  const [visible, setVisible] = useState();
  const daysRef = useRef<HTMLDivElement>(void 0);
  const [monthRef, setMonthRef] = useState<HTMLDivElement>();
  const height = useRef<number>(0);

  const { locale } = use(ConfigProviderContext);
  const {
    formatMonthTitle: formatMonthTitleProp,
    date: dateProp,
    firstDayOfWeek,
    rowHeight: rowHeightProp,
    formatter: formatterProp,
  } = props;

  useEffect(() => {
    if (monthRef) {
      height.current = getRect(monthRef).height;
    }
  }, [monthRef]);

  const title = useMemo(() => {
    return formatMonthTitleProp
      ? formatMonthTitleProp(dateProp)
      : locale.vanCalendar.monthTitle(...formatMonthTitle(dateProp));
  }, [dateProp, formatMonthTitleProp, locale]);

  const rowHeight = useMemo(() => addUnit(rowHeightProp), [rowHeightProp]);
  const offset = useMemo(() => {
    const realDay = dateProp.getDay();

    if (firstDayOfWeek) {
      return (realDay + 7 - firstDayOfWeek) % 7;
    }
    return realDay;
  }, [dateProp, firstDayOfWeek]);

  const totalDay = useMemo(
    () => getMonthEndDay(dateProp.getFullYear(), dateProp.getMonth() + 1),
    [dateProp],
  );

  const shouldRender = useMemo(() => visible || !props.lazyRender, [visible]);

  const getTitle = () => title;

  const scrollIntoView = (body: Element) => {
    const el = props.showSubtitle ? daysRef.current : monthRef;

    const scrollTop
      = el?.getBoundingClientRect().top
        - body.getBoundingClientRect().top
        + body.scrollTop;

    setScrollTop(body, scrollTop);
  };

  const getMultipleDayType = (day: Date) => {
    const isSelected = (date: Date) =>
      (props.currentDate as Date[]).some(item => compareDay(item, date) === 0);

    if (isSelected(day)) {
      const prevDay = getPrevDay(day);
      const nextDay = getNextDay(day);
      const prevSelected = isSelected(prevDay);
      const nextSelected = isSelected(nextDay);

      if (prevSelected && nextSelected) {
        return "multiple-middle";
      }
      if (prevSelected) {
        return "end";
      }
      if (nextSelected) {
        return "start";
      }
      return "multiple-selected";
    }

    return "";
  };

  const getRangeDayType = (day: Date) => {
    const [startDay, endDay] = props.currentDate as Date[];

    if (!startDay) {
      return "";
    }

    const compareToStart = compareDay(day, startDay);

    if (!endDay) {
      return compareToStart === 0 ? "start" : "";
    }

    const compareToEnd = compareDay(day, endDay);

    if (props.allowSameDay && compareToStart === 0 && compareToEnd === 0) {
      return "start-end";
    }
    if (compareToStart === 0) {
      return "start";
    }
    if (compareToEnd === 0) {
      return "end";
    }
    if (compareToStart > 0 && compareToEnd < 0) {
      return "middle";
    }

    return "";
  };

  const getDayType = (day: Date): CalendarDayType => {
    const { type, minDate, maxDate, currentDate } = props;

    if (compareDay(day, minDate) < 0 || compareDay(day, maxDate) > 0) {
      return "disabled";
    }

    if (currentDate === null) {
      return "";
    }

    if (Array.isArray(currentDate)) {
      if (type === "multiple") {
        return getMultipleDayType(day);
      }
      if (type === "range") {
        return getRangeDayType(day);
      }
    }
    else if (type === "single") {
      return compareDay(day, currentDate as Date) === 0 ? "selected" : "";
    }

    return "";
  };

  const getBottomInfo = (dayType: CalendarDayType) => {
    if (props.type === "range") {
      if (dayType === "start") {
        return locale.vanCalendar.start;
      }
      if (dayType === "end") {
        return locale.vanCalendar.end;
      }
      if (dayType === "start-end") {
        return locale.vanCalendar.startEnd;
      }
    }
    return null;
  };

  const renderTitle = () => {
    if (props.showMonthTitle) {
      return <div className={cls(bem("month-title"))}>{title}</div>;
    }
    return null;
  };

  const renderMark = () => {
    if (props.showMark && shouldRender) {
      return (
        <div className={cls(bem("month-mark"))}>
          {props.date.getMonth() + 1}
        </div>
      );
    }
    return null;
  };

  const placeholders = useMemo<CalendarDayItem[]>(() => {
    const count = Math.ceil((totalDay + offset) / 7);
    return Array.from({ length: count }, () => ({ type: "placeholder" }));
  }, [totalDay, offset]);

  const days = useMemo(() => {
    const internalDays: CalendarDayItem[] = [];
    const year = dateProp.getFullYear();
    const month = dateProp.getMonth();

    for (let day = 1; day <= totalDay; day++) {
      const date = new Date(year, month, day);
      const type = getDayType(date);

      let config: CalendarDayItem = {
        date,
        type,
        text: day,
        bottomInfo: getBottomInfo(type),
      };

      if (formatterProp) {
        config = formatterProp(config);
      }

      internalDays.push(config);
    }

    return internalDays;
  }, [getDayType, dateProp, formatterProp, totalDay]);

  const renderDay = (item: CalendarDayItem, index: number) => (
    <CalendarDay
      key={index}
      item={item}
      index={index}
      color={props.color}
      offset={offset}
      rowHeight={rowHeight}
      onClick={props.onClick}
      topInfoRender={props.topInfoRender}
      bottomInfoRender={props.bottomInfoRender}
    />
  );

  const renderDays = () => (
    <div ref={daysRef} role="grid" className={cls(bem("days"))}>
      {renderMark()}
      {(shouldRender ? days : placeholders).map(renderDay)}
    </div>
  );

  useImperativeHandle(ref, () => ({
    getTitle,
    getHeight: () => height.current,
    setVisible,
    scrollIntoView,
  }));

  return (
    <div className={cls(bem("month"))} ref={setMonthRef}>
      {renderTitle()}
      {renderDays()}
    </div>
  );
}

export default CalenderMonth;
