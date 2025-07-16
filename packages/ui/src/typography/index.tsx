import { Link } from "./Link";
import { Text } from "./Text";

import { Title } from "./Title";
import Typography from "./Typography";
import "./style/index.less";

const TypographyNamespace = Object.assign(Typography, { Text, Title, Link });

export { TypographyNamespace as Typography };
export type {
  TypographyBaseProps as TypographyProps,
  TypographySize,
  TypographyTitleLevel,
  TypographyType,
} from "./PropsType";
