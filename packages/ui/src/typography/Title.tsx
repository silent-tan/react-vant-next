import type { FC } from "react";
import type { TypographyTitleProps } from "./PropsType";
import Typography from "./Typography";

export const Title: FC<TypographyTitleProps> = (props) => {
  return <Typography renderType="title" tag="h1" {...props} />;
};
