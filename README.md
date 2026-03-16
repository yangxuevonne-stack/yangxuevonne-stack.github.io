# Evonne Law 网站 — 完整使用说明

## 文件结构

```
evonne-site/
├── index.html              ← 首页
├── blog.html               ← 文章列表（自动读取）
├── videos.html             ← 视频列表（自动读取）
├── netlify.toml            ← Netlify 部署配置
├── admin/
│   ├── index.html          ← 后台入口
│   └── config.yml          ← 后台功能配置
├── _posts/
│   ├── blog/               ← 博客文章（Markdown）
│   └── videos/             ← 视频内容（Markdown）
├── _data/settings.json     ← 网站基本信息
├── css/style.css
├── js/main.js
└── images/uploads/         ← 后台上传的图片
```

---

## 🚀 上线步骤（共4步，约30分钟）

### 第1步：上传到 GitHub
1. github.com → 注册账号
2. New repository → 名字填 `你的用户名.github.io`
3. 上传这个文件夹里的所有文件
4. Commit changes

### 第2步：部署到 Netlify
1. netlify.com → 用 GitHub 登录
2. Add new site → Import from GitHub → 选你的仓库
3. 点 Deploy → 等1分钟上线

### 第3步：开启后台（必须做）
在 Netlify 控制台依次操作：
```
① Site settings → Identity → Enable Identity
② Identity → Registration → Invite only（只允许受邀者）
③ Identity → Services → Enable Git Gateway
④ Identity → Invite users → 填你的邮箱 → 收邮件设置密码
```

### 第4步：登录后台
```
访问：https://你的网站.netlify.app/admin
用你的邮箱 + 密码登录 ✅
```

---

## ✍️ 后台发文章
后台 → 📝 博客文章 → New 文章 → 写内容 → Publish ✅

## 🎬 后台添加视频
后台 → 🎬 视频内容 → New 视频 → 粘贴YouTube/Bilibili链接 → Publish ✅

## ⚙️ 修改网站信息
后台 → ⚙️ 网站设置 → 改联系方式/简介/统计数字 ✅

## 📬 接收客户表单
1. formspree.io 注册 → 创建表单 → 复制ID
2. index.html 搜索 YOUR_FORMSPREE_ID → 替换 ✅

## 🌐 绑定域名
Netlify → Domain management → Add custom domain
域名商 DNS 添加：CNAME www → 你的网站.netlify.app ✅
