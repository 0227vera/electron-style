const { ipcRenderer, shell, remote } = require("electron");
const { dialog, clipboard } = remote;

window.onload = () => {
  document.querySelector("#btn").onclick = () => {
    window.open("new.html");
    // ipcRenderer.send("add");
  };
  document.querySelector("#openInBrowser").onclick = (e) => {
    e.preventDefault();
    shell.openExternal("https://0227vera.github.io/");
  };
  document.querySelector("#btntoopenchild").onclick = (e) => {
    ipcRenderer.send("add", "https://0227vera.github.io/");
  };
  // 接收子窗口传递的信息
  window.addEventListener("message", (res) => {
    console.log(res);
    document.querySelector("#myText").innerHTML = res.data;
  });

  document.querySelector("#showNotice").onclick = (e) => {
    // 调用对话框
    dialog
      .showMessageBox({
        type: "warning",
        title: "message",
        message: "info message, a question?",
        buttons: ["yes", "no"],
      })
      .then((res) => {
        console.log(res.response); // button的下标
      });
  };

  // 对于网络的监听
  window.addEventListener("online", () => {
    dialog.showMessageBox({
      title: "message",
      type: "info",
      message: "网络连接成功",
    });
  });

  window.addEventListener("offline", () => {
    dialog.showMessageBox({
      title: "message",
      type: "error",
      message: "网络开小差了",
    });
  });
  // 消息通知
  document.querySelector("#notice").onclick = () => {
    const option = {
      title: "notice",
      body: "this is content body",
    };
    new window.Notification(option.title, option);
  };

  // 将数据复制到剪切板上去
  document.querySelector("#copy").onclick = () => {
    clipboard.writeText(document.querySelector("#text").innerHTML);
  };
};
