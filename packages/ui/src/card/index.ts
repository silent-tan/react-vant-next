import _Card, { CardBody, CardCover, CardFooter, CardHeader } from "./Card";
import "./style/index.less";

const Card = Object.assign(_Card, {
  Header: CardHeader,
  Body: CardBody,
  Footer: CardFooter,
  Cover: CardCover,
});

export default Card;
export { Card };
