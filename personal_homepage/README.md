# 施超的个人主页

一个基于真实职业经历制作的个人介绍网站，内容包括个人简介、技术栈、工作经历、教育认证和联系方式。

- 网站地址：<https://shichao0503.github.io/mynote/personal_homepage/>
- 从零学习：[制作过程与修改指南](docs/制作过程.md)
- 本次实施：[实操记录](docs/实操记录.md)

## 本地查看

最简单：双击 `index.html`。它可以直接打开，不需要安装依赖；复制邮箱功能可能受到本地文件权限限制。

推荐：电脑安装 Node.js 后，在当前 `personal_homepage` 目录执行（也可在仓库根目录运行 `node personal_homepage/scripts/serve.mjs`）：

```powershell
node scripts/serve.mjs
```

浏览器打开 <http://127.0.0.1:4321/mynote/personal_homepage/>。修改文件后刷新即可，按 `Ctrl+C` 停止预览。

## 文件职责

```text
personal_homepage/
├── index.html          # 网站文字、链接、页面结构
├── assets/
│   ├── style.css       # 配色、排版、手机适配
│   ├── main.js         # 复制邮箱、年份更新
│   └── favicon.svg     # 浏览器标签页图标
├── scripts/serve.mjs   # 本地预览服务，不参与线上运行
├── docs/               # 中文教程与制作记录
└── README.md           # 当前页面使用说明
```

## 发布配置

仓库 **Settings → Pages → Build and deployment**：

本仓库已完成以下设置，首次 Pages 发布工作流已成功；下列步骤供学习或重建时参考。

1. Source：`Deploy from a branch`
2. Branch：`main`
3. Folder：`/ (root)`
4. 点击 Save，等待 Actions 中的 Pages 发布完成。

**这版是原生静态页面，因此选择分支发布，无需自己编写 Actions 工作流。** 以后提交到 `main`，GitHub 会自动更新网站。

发布目录仍然选择仓库根目录。根目录的 `index.html` 负责兼容旧地址，自动跳转到 `personal_homepage/`；`.nojekyll` 和 `.gitignore` 也保留在仓库根目录。

## 后续修改

修改内容用 `index.html`，修改颜色和布局用 `assets/style.css`。邮箱在 `index.html` 和 `assets/main.js` 两处使用，变更时请同时更新。具体示例见[制作教程](docs/制作过程.md)。

未将原始简历文件上传到仓库；网页仅保留职业介绍所需内容，不展示手机号、年龄、性别及民族。首屏基础设施图是工作方式示意，不连接真实业务系统。
