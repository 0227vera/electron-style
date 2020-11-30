# Electron

1. electron 是 github 开发的开源框架（意思就是可以进行商用）
2. electron 可以使用 web 技术

Electron = Chromium + Node.js + Native API

- Chromium: 为 Electron 提供了强大的 UI 能力，可以不考虑兼容性的情况下，利用强大的 Web 生态来开发界面。
- Node.js: 让 Electron 有了底层的操作能力，比如文件的读写，甚至是集成 C++等等操作，并可以使用大量开源的 npm 包来完成开发需求。
- Native API: Native API 让 Electron 有了跨平台和桌面端的原生能力，比如说它有统一的原生界面，窗口、托盘这些。

## 使用场景

1. 公司没有专门的桌面应用开发者，而需要前端兼顾来进行开发时，用 Electron 就是一个不错的选择
2. 一个应用同时开发 Web 端和桌面端的时候，那使用 Electron 来进行开发可以节约人员成本
3. 开发一个效率工具
4. 一些 IM 产品

## 哪些应用是使用的 electron 开发的

VSCode

Atom

飞书

## 如何和系统之间做交互

使用 nodeJS 来访问系统以及本地资源的相关问题，IM 系的产品

## 使用 electron 的优势

效率问题：跨端的问题很好的解决

## 使用 electron 的劣势

体积会比较大
内存占用比较高（chrome 本身内存比较高）
界面性能无法与 native 原生相比较，但是还好
代码安全，js 是明文的，导致的的相关身份信息可能泄漏

## 运行方式

代码是打在本地的，导致的，通过 nodejs 去访问 file

## 目前的开发工具

脚手架：electron-builder

## 输入的时候好用的编辑器

CKEditor 富文本编辑器

## 技术点

fs 文件读取

ipcRenderer 主进程和渲染进程通信
