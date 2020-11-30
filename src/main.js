/*
 * @Author: salvatore
 * @Date: 2020-10-09 14:54:54
 * @LastEditTime: 2020-10-12 12:03:37
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /electron/main.js
 */
const {
  app,
  BrowserWindow,
  ipcMain,
  BrowserView,
  globalShortcut,
  dialog,
} = require("electron");
let mainWin;
const createWindow = () => {
  mainWin = new BrowserWindow({
    width: 800,
    height: 600,
    // 启用所有的node相关的技术
    webPreferences: {
      nodeIntegration: true, // 是否集成nodejs
      enableRemoteModule: true, // 是否允许module中使用remote对象
    },
  });

  globalShortcut.register("ctrl+z", () => {
    dialog.showMessageBox({
      title: "message",
      message: "快捷键的使用",
    });
  });
  // 加载菜单
  // require("./public/mune/mune.js");
  // 并且为你的应用加载index.html
  mainWin.loadFile("index.html");
  // 添加一个网站到electron
  // const view = new BrowserView();
  // mainWin.setBrowserView(view);
  // view.setBounds({
  //   x: 0,
  //   y: 200,
  //   width: 600,
  //   height: 600,
  // });
  // view.webContents.loadURL("https://0227vera.github.io/");
  // 打开开发者工具
  mainWin.webContents.openDevTools();
};
app.whenReady().then(createWindow);
app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    globalShortcut.unregisterAll();
    app.quit();
  }
});
app.on("activate", () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});

let newWin;
ipcMain.on("add", (url) => {
  newWin = new BrowserWindow({
    width: 600,
    height: 400,
    parent: mainWin,
    // 启用所有的node相关的技术
    webPreferences: {
      nodeIntegration: true,
      enableRemoteModule: true,
    },
  });
  newWin.loadFile("new.html"); //new.html是新开窗口的渲染进程
  if (url) {
    newWin.loadURL("https://0227vera.github.io/");
  } else {
    newWin.loadFile("new.html"); //new.html是新开窗口的渲染进程
  }
  newWin.on("closed", () => {
    newWin = null;
  });
});
