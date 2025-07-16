import type { FC } from "react";
import type { TypographyLinkProps } from "./PropsType";
import Typography from "./Typography";

export const Link: FC<TypographyLinkProps> = (props) => {
  return <Typography renderType="link" tag="a" {...props} />;
};
