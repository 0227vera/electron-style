const { Menu } = require("electron");

const template = [
  {
    label: "这是菜单",
    submenu: [
      {
        label: "submenu11",
        accelerator: "CmdOrCtrl+Z",
        click() {
          console.log(111);
        },
      },
      {
        label: "submenu12",
        accelerator: "Shift+CmdOrCtrl+Z", // 快捷键
        click() {
          // 点击事件
          console.log(112);
        },
      },
    ],
  },
  {
    label: "menu2",
    submenu: [
      { label: "submenu21" },
      {
        type: "separator", // 添加分割线
      },
      { label: "submenu22" },
    ],
  },
  {
    label: "menu3",
    submenu: [{ label: "submenu31" }, { label: "submenu32" }],
  },
];
const menu = Menu.buildFromTemplate(template);

Menu.setApplicationMenu(menu);
