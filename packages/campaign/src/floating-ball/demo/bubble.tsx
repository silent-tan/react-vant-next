import { FloatingBall } from "@react-vant-next/campaign";
import { Chat } from "@react-vant-next/icons";
import { Flex } from "@react-vant-next/ui";

export default (props) => {
  return (
    <FloatingBall
      className="demo-floating-box-bubble"
      offset={{
        right: 20,
        bottom: 20,
      }}
      style={{
        "--rv-floating-box-size": "60px",
      }}
      adsorb={{
        // 滚动缩进比例
        indent: 0.5,
        // 近边停靠距离
        distance: 20,
      }}
      {...props}
    >
      <Flex align="center" justify="center" className="main-button">
        <Chat />
      </Flex>
    </FloatingBall>
  );
};
