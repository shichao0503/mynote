# MyNote

施超的个人网站与学习记录仓库。个人介绍页面及配套教程已整理到独立的 `personal_homepage/` 目录，方便以后添加其他内容。

- [访问个人主页](https://shichao0503.github.io/mynote/personal_homepage/)
- [查看个人主页源码与说明](personal_homepage/)
- [制作过程与修改指南](personal_homepage/docs/制作过程.md)
- [实际制作与目录迁移记录](personal_homepage/docs/实操记录.md)

## 目录结构

```text
mynote/
├── index.html                  # 旧地址入口，自动跳转到个人主页
├── README.md                   # 仓库总说明
├── .nojekyll                   # GitHub Pages 静态发布配置
├── .gitignore
└── personal_homepage/
    ├── index.html              # 个人主页正文
    ├── assets/                 # CSS、JavaScript、图标
    ├── docs/                   # 制作教程、实操记录
    ├── scripts/serve.mjs       # 本地预览脚本
    └── README.md               # 个人主页使用说明
```

## 本地预览

在仓库根目录运行：

```powershell
node personal_homepage/scripts/serve.mjs
```

打开 <http://127.0.0.1:4321/mynote/personal_homepage/>。

旧地址 <https://shichao0503.github.io/mynote/> 会自动跳转到新的个人主页地址。GitHub Pages 继续使用 `main → / (root)` 发布，无需更改设置。
