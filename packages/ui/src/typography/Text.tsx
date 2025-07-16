import type { FC } from "react";
import type { TypographyTextProps } from "./PropsType";
import Typography from "./Typography";

export const Text: FC<TypographyTextProps> = (props) => {
  return <Typography renderType="text" tag="span" {...props} />;
};
