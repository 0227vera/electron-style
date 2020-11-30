const { remote } = require("electron");
const fs = require("fs");
const { Menu, MenuItem, dialog } = remote;

window.onload = () => {
  //右键菜单
  const menu = new Menu();
  menu.append(
    new MenuItem({
      label: "放大",
      click: function () {
        console.log("item 1 clicked");
      },
    })
  );
  menu.append(new MenuItem({ type: "separator" })); //分割线
  menu.append(new MenuItem({ label: "缩小", type: "checkbox", checked: true })); //选中

  window.addEventListener(
    "contextmenu",
    (e) => {
      e.preventDefault();
      menu.popup({ window: remote.getCurrentWindow() });
    },
    false
  );

  document.querySelector("#clickbtn").onclick = () => {
    // 向父窗口传递信息，只有本窗口为子窗口的时候才可以使用
    window.opener.postMessage("子窗口传过来的信息");
  };

  document.querySelector("#clicktoopendialog").onclick = (e) => {
    // 使用electron的空间实现附件上传功能
    dialog
      .showOpenDialog({
        title: "图片选择",
        // defaultPath: "/",
        filters: [{ name: "img", extensions: ["jpg", "jpge", "png", "svg"] }],
        buttonLabel: "打开图片",
      })
      .then((res) => {
        document.querySelector("#img").setAttribute("src", res.filePaths[0]);
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  document.querySelector("#clickOpenfile").onclick = (e) => {
    dialog
      .showSaveDialog({
        title: "文件保存",
      })
      .then((res) => {
        fs.writeFile(res.filePath, "salvatore text info", (err) => {
          if (err) {
            console.log(err);
          }
          alert("保存写入文件成功");
        });
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };
};
