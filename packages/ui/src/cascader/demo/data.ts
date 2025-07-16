// 示例数据
export const options = [
  {
    text: "浙江省",
    value: "330000",
    children: [
      {
        text: "杭州市",
        value: "330100",
        children: [
          { text: "上城区", value: "330102" },
          { text: "下城区", value: "330103" },
          { text: "江干区", value: "330104" },
        ],
      },
      {
        text: "宁波市",
        value: "330200",
        children: [
          { text: "海曙区", value: "330203" },
          { text: "江北区", value: "330205" },
          { text: "北仑区", value: "330206" },
        ],
      },
      {
        text: "温州市",
        value: "330300",
        children: [
          { text: "鹿城区", value: "330302" },
          { text: "龙湾区", value: "330303" },
          { text: "瓯海区", value: "330304" },
        ],
      },
    ],
  },
  {
    text: "江苏省",
    value: "320000",
    children: [
      {
        text: "南京市",
        value: "320100",
        children: [
          { text: "玄武区", value: "320102" },
          { text: "秦淮区", value: "320104" },
          { text: "建邺区", value: "320105" },
        ],
      },
      {
        text: "无锡市",
        value: "320200",
        children: [
          { text: "锡山区", value: "320205" },
          { text: "惠山区", value: "320206" },
          { text: "滨湖区", value: "320211" },
        ],
      },
    ],
  },
];

// 自定义字段名的示例数据
export const customFieldOptions = [
  {
    name: "浙江省",
    code: "330000",
    items: [
      {
        name: "杭州市",
        code: "330100",
        items: [
          { name: "上城区", code: "330102" },
          { name: "下城区", code: "330103" },
        ],
      },
      {
        name: "宁波市",
        code: "330200",
        items: [
          { name: "海曙区", code: "330203" },
          { name: "江北区", code: "330205" },
        ],
      },
    ],
  },
  {
    name: "江苏省",
    code: "320000",
    items: [
      {
        name: "南京市",
        code: "320100",
        items: [
          { name: "玄武区", code: "320102" },
          { name: "秦淮区", code: "320104" },
        ],
      },
      {
        name: "无锡市",
        code: "320200",
        items: [
          { name: "锡山区", code: "320205" },
          { name: "惠山区", code: "320206" },
        ],
      },
    ],
  },
];
