# CLAUDE.md — Evonne Xu Law 网站 Agent 操作手册

> 每次操作网站前，先读完这份文档。严格遵守所有规范。

---

## 网站基本信息

| 项目 | 内容 |
|------|------|
| 网站 | evonnexulegal.com |
| 托管 | GitHub Pages（唯一托管，无 Netlify，无 /admin） |
| 仓库 | yangxuevonne-stack/yangxuevonne-stack.github.io |
| 部署 | push 后约 1 分钟自动生效 |
| Formspree | mlgpoyyk |
| Calendly | https://calendly.com/evonne-xu-legal/30min |
| Newsletter | https://evonnexulegal.beehiiv.com |
| Email | evonne.xu.legal@gmail.com |
| Google Analytics | G-4XPB5RY7C2 |

---

## ⚠️ 绝对禁止事项

- **永远不要动 `CNAME` 文件** — 删除或修改会导致域名失效
- **永远不要动 `CLAUDE.md`** — 除非用户明确要求更新
- **不要引入任何 npm / node_modules / 构建工具** — 纯静态站点
- **不要使用任何外部 CSS 框架**（Bootstrap、Tailwind 等）
- **不要删除 Google Analytics 代码**（index.html 第 9–16 行）
- **push 前必须告知用户将要改动哪些文件**，等确认后再执行

---

## 文件结构

```
/
├── CNAME                       ← 域名配置，绝对不动
├── CLAUDE.md                   ← 本文件
├── index.html                  ← 首页（中英双语）
├── blog.html                   ← 博客列表页
├── videos.html                 ← 视频列表页
├── sitemap.xml                 ← SEO，新增文章必须更新
├── posts.json                  ← 首页博客预览数据
├── css/style.css               ← 全站样式
├── js/main.js                  ← 全站 JS
├── blog/                       ← 博客文章 HTML 文件
├── _posts/videos/              ← 视频内容 Markdown
├── _data/settings.json         ← 动态数据（统计数字、联系方式等）
├── images/                     ← 图片资源
│   ├── photo.jpg               ← Hero 区人物照片
│   └── photo-about.jpg         ← 关于我区人物照片
├── legal-ai-tools/             ← AI 工具页（独立子页）
└── ai-laws-tracker/            ← AI 立法追踪器（独立子页）
```

---

## 设计规范（严格遵守）

所有新增 HTML/CSS 必须使用以下变量和字体，**不得自创新颜色或引入新字体**。

### CSS 颜色变量
```css
--cream: #F7F3EE
--warm-white: #FAF8F5
--rose-gold: #C49A7A      /* 主题色，按钮、高亮 */
--rose-deep: #A67A5B      /* hover 状态 */
--champagne: #E8D5C0
--dark: #1C1510           /* 主背景深色 */
--mid: #4A3728
--light-text: #8C7060
--border: rgba(196,154,122,0.2)
```

### 字体
```css
标题：font-family: 'Cormorant Garamond', serif; font-weight: 300;
正文：font-family: 'DM Sans', sans-serif; font-weight: 300;
中文：font-family: 'Noto Serif SC', serif;
```

### 风格原则
- 极简、优雅、奢华感
- 大量留白，不堆砌元素
- 标题用斜体 `<em>` 做玫瑰金高亮
- 卡片有 `border: 1px solid var(--border)`，hover 时 `border-color: var(--rose-gold)`

---

## 双语系统（每次新增内容必须提供中英两版）

```html
<!-- block 元素 -->
<div data-lang="zh">中文内容</div>
<div data-lang="en">English content</div>

<!-- inline 元素 -->
<span data-lang="zh">中文</span>
<span data-lang="en">English</span>
```

**规则**：所有面向用户的文字，必须同时有 `data-lang="zh"` 和 `data-lang="en"` 两个版本。缺一不可。

---

## ⚡ 发布新博客文章（必须同时改 4 个地方）

### 第 1 步：创建文章文件
新建 `blog/文章名.html`，参考以下模板：

```html
<!DOCTYPE html>
<html lang="zh">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>文章标题 | Evonne Xu Law</title>
  <meta name="description" content="文章摘要，100字以内">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,300;1,400&family=DM+Sans:wght@300;400;500&family=Noto+Serif+SC:wght@300;400;600&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="../css/style.css">
  <!-- Google Analytics -->
  <script async src="https://www.googletagmanager.com/gtag/js?id=G-4XPB5RY7C2"></script>
  <script>window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','G-4XPB5RY7C2');</script>
</head>
<body class="lang-zh">

<nav>
  <a href="../index.html" class="nav-logo">E<span>.</span>LAW</a>
  <ul class="nav-links">
    <li><a href="../index.html#about"><span data-lang="zh">关于我</span><span data-lang="en">About</span></a></li>
    <li><a href="../index.html#services"><span data-lang="zh">服务</span><span data-lang="en">Services</span></a></li>
    <li><a href="../blog.html">Blog</a></li>
    <li><a href="../index.html#contact" class="nav-cta"><span data-lang="zh">预约咨询</span><span data-lang="en">Book a Call</span></a></li>
  </ul>
  <div class="lang-switch">
    <button class="lang-btn active" id="btn-zh" onclick="switchLang('zh')">CN</button>
    <button class="lang-btn" id="btn-en" onclick="switchLang('en')">EN</button>
  </div>
</nav>

<article style="max-width:800px;margin:120px auto 80px;padding:0 40px;">
  <div style="margin-bottom:12px;font-size:11px;letter-spacing:2px;text-transform:uppercase;color:var(--rose-gold);">
    <span data-lang="zh">分类标签</span><span data-lang="en">Category Tag</span>
  </div>
  <h1 style="font-family:'Cormorant Garamond',serif;font-size:clamp(2rem,4vw,3.2rem);font-weight:300;line-height:1.2;color:var(--dark);margin-bottom:24px;">
    <span data-lang="zh">中文标题</span>
    <span data-lang="en">English Title</span>
  </h1>
  <div style="font-size:12px;color:var(--light-text);letter-spacing:1px;margin-bottom:48px;padding-bottom:32px;border-bottom:1px solid var(--border);">
    April 2026 · 10 min read
  </div>

  <!-- 文章正文 -->
  <div style="font-family:'DM Sans',sans-serif;font-size:15px;line-height:1.9;color:var(--mid);">
    <div data-lang="zh">
      <!-- 中文正文 -->
    </div>
    <div data-lang="en">
      <!-- English body -->
    </div>
  </div>
</article>

<footer>
  <div class="footer-inner">
    <div class="footer-brand">
      <div class="footer-logo">E<span>.</span>LAW</div>
    </div>
  </div>
  <div class="footer-bottom">
    <p>© 2026 Evonne Xu Law</p>
  </div>
</footer>

<script>
function switchLang(lang){
  document.body.className='lang-'+lang;
  document.getElementById('btn-zh').classList.toggle('active',lang==='zh');
  document.getElementById('btn-en').classList.toggle('active',lang==='en');
  localStorage.setItem('evonne-lang',lang);
}
const saved=localStorage.getItem('evonne-lang')||'zh';
switchLang(saved);
</script>
</body>
</html>
```

### 第 2 步：更新 `blog.html` 底部 posts 数组
找到 `const posts = [`，在**最前面**插入（新文章设 `featured: true`，同时把原来 `featured: true` 的改为 `false`）：

```javascript
{
  file: "blog/文章名.html",
  titleZh: "中文标题",
  titleEn: "English Title",
  excerptZh: "中文摘要（50字以内）",
  excerptEn: "English excerpt (under 50 words)",
  catZh: "分类 · 子分类",
  catEn: "Category · Subcategory",
  date: "April 2026",
  readTime: "10 min",
  featured: true
},
```

### 第 3 步：更新 `posts.json`（首页预览用）
在数组**最前面**插入同样格式的记录。

### 第 4 步：更新 `sitemap.xml`
在 `</urlset>` 前插入：
```xml
<url><loc>https://evonnexulegal.com/blog/文章名.html</loc><priority>0.6</priority><changefreq>monthly</changefreq></url>
```

---

## 更新动态数据（settings.json）

直接编辑 `_data/settings.json`：

```json
{
  "stat1Num": "12+",
  "stat2Num": "5k+",
  "stat3Num": "200+",
  "email": "evonne.xu.legal@gmail.com",
  "xiaohongshu": "@Evonne美国公司咨询",
  "linkedin": "linkedin.com/in/evonnexu",
  "calendly": "https://calendly.com/evonne-xu-legal/30min",
  "subscriberCount": "2,400+"
}
```

---

## 添加 AI 工具卡片

只改 `index.html`，找到 `<div class="portfolio-grid">`，在里面追加：

```html
<a href="工具URL" target="_blank" class="portfolio-card">
  <div class="portfolio-card-preview">
    <div class="portfolio-card-icon">🔧</div>
    <div class="portfolio-card-tag">LIVE TOOL</div>
  </div>
  <div class="portfolio-card-body">
    <div class="portfolio-card-title">
      <span data-lang="zh">中文工具名</span>
      <span data-lang="en">English Tool Name</span>
    </div>
    <p class="portfolio-card-desc">
      <span data-lang="zh">中文描述</span>
      <span data-lang="en">English description</span>
    </p>
    <div class="portfolio-card-link">
      <span data-lang="zh">访问工具</span><span data-lang="en">Visit Tool</span> →
    </div>
  </div>
</a>
```

---

## 替换个人照片

在 `index.html` 中找到两处照片区域：

**Hero 区**（搜索 `hero-photo-img`）：
```html
<!-- 改前 -->
<img src="images/photo.jpg" alt="Evonne Xu" class="hero-photo-img" style="display:none">
<div class="photo-placeholder-box">...</div>

<!-- 改后 -->
<img src="images/photo.jpg" alt="Evonne Xu" class="hero-photo-img" style="display:block">
<!-- 删掉整个 photo-placeholder-box div -->
```

**关于我区**（搜索 `about-photo-wrap`）：
```html
<!-- 改前 -->
<img src="images/photo-about.jpg" alt="Evonne Xu" style="display:none">
<div class="about-photo-initial">E</div>
<div class="about-photo-label">...</div>

<!-- 改后 -->
<img src="images/photo-about.jpg" alt="Evonne Xu" style="display:block">
<!-- 删掉 about-photo-initial 和 about-photo-label 两个 div -->
```

---

## Git 操作规范

每次完成修改后，按此顺序执行：

```bash
cd /path/to/yangxuevonne-stack.github.io

git add .

# commit message 格式：[类型] 简短描述
# 类型：blog / update / fix / feature
git commit -m "blog: 发布新文章《文章标题》"

git push origin main
```

**Push 前必须**：告诉用户"即将修改以下文件：xxx，确认后执行 push"。

---

## 常见任务快查

| 用户说 | Agent 应做 |
|--------|-----------|
| "发一篇新文章" | 执行「发布新博客」4步流程 |
| "更新订阅人数" | 改 `_data/settings.json` → push |
| "加一个 AI 工具卡片" | 改 `index.html` portfolio-grid → push |
| "换照片" | 保存图片到 images/ → 改 index.html 显示逻辑 → push |
| "改联系方式" | 改 `_data/settings.json` → push |
| "加视频" | 建 `_posts/videos/xx.md` + 更新 `videos.html` → push |
| "改网站标题/描述" | 改 `index.html` `<title>` 和 `<meta name="description">` → push |

---

*最后更新：2026年4月*
