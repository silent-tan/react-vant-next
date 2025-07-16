import { FloatingBall } from "@react-vant-next/campaign";
import {
  CartCircleO,
  ChatO,
  GoldCoinO,
  Plus,
  StarO,
  WapHomeO,
} from "@react-vant-next/icons";
import { Flex, Toast } from "@react-vant-next/ui";
import clsx from "clsx";

const icons = [StarO, CartCircleO, GoldCoinO, WapHomeO, ChatO];

export default ({ menu = {}, ...props }) => {
  return (
    <FloatingBall
      className="demo-floating-box-menu"
      offset={{
        right: 20,
        bottom: "14vh",
      }}
      menu={{
        ...menu,
        items: icons.map((Ico, i) => (
          <Flex
            align="center"
            justify="center"
            onClick={() => Toast.info(`点击了第${i + 1}个`)}
            key={i}
            className="menu-item"
          >
            <Ico />
          </Flex>
        )),
      }}
      {...props}
    >
      {({ active }) => (
        <Flex
          align="center"
          justify="center"
          className={clsx("main-button", {
            "main-button--active": active,
          })}
        >
          <Plus />
        </Flex>
      )}
    </FloatingBall>
  );
};
