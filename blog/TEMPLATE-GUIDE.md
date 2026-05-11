# 博客发文模板使用指南
*文件: `blog/_template.html` · 最后更新: 2026-05-11*

这份指南规定了徐律师事务所网站博客文章的标准发布流程、设计语言、与写作风格规则。所有由 Claude 协助生成的文章默认按本指南执行。

---

## 一、三档使用模式

发文请求时，开头一句话决定 Claude 走哪条路径：

### 模式 1 · 默认模板（90% 用这条）
用法: **"用模板发一篇关于 X 的文章"** / **"based on template, write about X"**

Claude 会用 `_template.html` 作为骨架，套现有组件库（hero、TOC、stat-grid、callout、timeline 等），交付完整 HTML + 同步更新 5 个站点配置文件。10 分钟产出。

### 模式 2 · 模板 + 局部创新
用法: **"用模板，但 X 部分要 Y"** / **"template + new component Y for section X"**

例如「用模板，但 hero 改成全屏视频背景」「用模板，新增一个 3D 对比卡片」。Claude 基于模板改局部，发文完成后会问是否把新组件沉淀进模板库。

### 模式 3 · 完全自由
用法: **"这篇要全新的视觉语言"** / **"scrap the template, fresh design"**

Claude 完全脱开模板，先给 2-3 个方向草图描述，确认后实现。适合年度回顾、互动式数据可视化、节日特辑。

### 模糊时 Claude 必问
如果你说「发一篇关于 X 的有趣文章」而没指明模式，Claude 会停下来问你想要模式 1 还是模式 2/3，再动手。

---

## 二、Five-Step Publishing Workflow（已写进 CLAUDE.md）

每发一篇新文章 Claude 必须改这 5 个文件：

1. **`blog/<文件名>.html`** — 文章本体（基于 `_template.html`）
2. **`blog.html`** — posts 数组开头插入新条目，原置顶改 `featured: false`
3. **`posts.json`** — 首页预览数据同步
4. **`index.html`** POSTS 数组 — 主页博客预览同步
5. **`sitemap.xml`** — 新增文章 URL

跳过任何一步都算发文未完成。

---

## 三、House Style · 写作风格硬规定

### 1. 标点
- **绝不**用「——」双破折号（一眼 AI 痕迹）。改用：
  - 单破折号「—」
  - 冒号「：」
  - 顿号「、」（并列）
  - 重写句式
- 例: ~~"QSBS 是美国税法中最慷慨的礼物——它能完全免税"~~ → "QSBS 是美国税法中最慷慨的礼物：它能完全免税"

### 2. 数字
- 写具体: "约 3 周" 不写 "几周"；"$15M" 不写 "上千万"
- 货币格式: 中文「$1,500 万」/「$15M」均可；英文统一 "$15M" / "$15 million"
- 时间: 中文「2025 年 7 月 4 日」/ 英文「July 4, 2025」

### 3. 句式
- 段落优先（prose-first）。列表/bullet 只在真正并列、且 3 项以上时才用
- 主动语态（"IRS 会判定" 而非 "可能被判定"）
- 不写"值得注意的是 / 重要的是 / It's worth noting that..." 这类填充词

### 4. 双语
- 每个对外可见字符串必须有 `data-lang="zh"` + `data-lang="en"` 两版
- 中文不写英文原文（专有名词例外，如 "OBBBA"、"CFIUS"、"IRC § 1202"）
- 英文用美式拼写（"organize" 不写 "organise"）

### 5. 引用与来源
- 涉及法条、数据、判例时必须有来源链接或注释
- 数据时效性: 写"截至 2026 年 X 月"

---

## 四、组件库速查（Component Zoo）

模板里在 `<article>` 内部以 HTML 注释形式列出所有组件。下面是何时用什么组件的指引：

| 组件 | 用途 | 何时用 |
|---|---|---|
| `.stat-grid` | 3 个并列数字 | section 开头放统计 / 锚定关键数字 |
| `.callout` | 提示框 | 段落中间补充说明 |
| `.callout-warn` | 警告框（红） | 风险 / 红线 / 易错点 |
| `.callout-tip` | 机会框（绿） | 规划机会 / Tip |
| `.pullquote` | 强调引言 | section 中段或结尾，提炼金句 |
| `.formula-box` | 公式 / 代码 | 数学公式、代码片段 |
| `.law-table` | 3 列对比表 | 新旧规则 / A vs B 比较 |
| `.trust-table` | 多列轻量表 | 选项对比、矩阵 |
| `.tier-track` | 三档进阶 | 50%/75%/100% 之类分级 |
| `.req-box` | 要件列表 | 资格条件、checklist |
| `.two-col` | 两个卡片并排 | 维度对照、两选项 |
| `.timeline` | 垂直时间线 | 流程步骤、风险清单、规划倒推 |
| `.stack-diagram` | 累加可视化 | 多行 bar + 合计（如 stacking 示意） |
| `.worked-ex` | 深色案例块 | 情境 A vs B、税务计算示例 |

> **何时跳出模板（提示 Claude 走模式 3）：** 文章核心需要交互（如可拖拽的滑块、点击展开的对比工具）、需要图表（D3、Chart.js）、或视觉本身就是内容（如年度回顾的封面级设计）。普通深度文不需要跳出模板。

---

## 五、模板里所有占位符（fill-in checklist）

按文章生成顺序：

**头部 (head)**
- `{{TITLE_ZH}}` · 中文文章标题
- `{{META_DESCRIPTION_ZH}}` · 100 字内中文摘要（SEO）

**Hero**
- `{{HERO_EYEBROW_ZH}}` / `{{HERO_EYEBROW_EN}}` · 顶部小字标签
- `{{TITLE_ZH_PART_A}} {{TITLE_ZH_HIGHLIGHT}} {{TITLE_ZH_PART_B}}` · 大标题（高亮词用 `<em>`）
- 英文同上
- `{{HERO_SUB_ZH}}` / `{{HERO_SUB_EN}}` · 副标题
- `{{READ_TIME}}` · 阅读分钟数
- `{{TAG_1}}` `{{TAG_2}}` · meta 标签
- `{{YEAR}}` · 年份

**Summary Strip**
- `{{SUMMARY_ZH}}` / `{{SUMMARY_EN}}` · 60-100 字摘要

**TOC**
- `{{TOC_N_ZH}}` / `{{TOC_N_EN}}` · 每个 section 的目录条目（N = 1..最大）

**每个 Section**
- `{{SN_KICKER_ZH}}` / `{{SN_KICKER_EN}}` · section 序号上的小标签
- `{{SN_TITLE_*}}` · section 大标题（含 `<em>` 高亮）
- `{{SN_SUBTITLE_EN_ONELINER}}` · 大标题下的英文小副标题
- `{{SN_P*_ZH}}` / `{{SN_P*_EN}}` · 段落
- `{{SN_SUB_*}}` · h3 子标题
- 按需嵌入组件库元素

**CTA**
- `{{CTA_HEADLINE_*}}` · CTA 大字标题（含 `<em>` 高亮）
- `{{CTA_BODY_ZH}}` / `{{CTA_BODY_EN}}` · CTA 正文

**作者栏**
- 默认保留 "Evonne Xu / 并购律师 · AI法律工程师 / 跨境并购 + AI 合规简介"。如果某篇文章要换 bio，单独说。

---

## 六、模板进化机制

模板不是死的。每当我们在某篇文章里发明一个**有复用价值**的新组件，发文完成后 Claude 会主动问：「这个 X 组件要不要也加进模板库？」

如果加，Claude 会：
1. 把组件的 CSS 添加到 `_template.html` 的 `<style>` 块
2. 把 HTML 用法添加到 `_template.html` 底部的 COMPONENT ZOO 注释
3. 更新本指南的「组件库速查」表

这样模板会随时间越来越丰富。

---

## 七、几个反例

❌ 不要这样:
- "在 QSBS 这个领域——它是税法的核心——创始人..." （双破折号）
- "本文将系统性地介绍..." （填充词 + 被动语态）
- "你需要注意的是..." （噪音开头）
- 用 bullet 列出只有 2 项的并列（直接写散文）

✅ 要这样:
- "QSBS 是税法的核心。它给创始人..."
- "本文拆解三件事：资格、改革、风险。"
- 直接写出要点，不预告
- 2 项并列就写在一句话里

---

*指南即立即生效。下次发文请按本规则执行。*
