<div align="center">

<img src="https://capsule-render.vercel.app/api?type=waving&color=gradient&customColorList=6,11,20&height=210&section=header&text=Emmanuel%20Ruiz&fontSize=56&fontColor=fff&fontAlignY=36&animation=fadeIn&desc=Software%20engineering%20manager%20%C2%B7%20Arthrex&descSize=20&descAlignY=56" width="100%" />

**Web platform engineer and manager** | TypeScript · Node.js · Next.js · Astro · Playwright · AWS · AI agents as a team

<a href="https://mister99.dev">
  <img src="https://readme-typing-svg.demolab.com/?font=Fira+Code&size=20&pause=1200&color=2563EB&center=true&vCenter=true&width=720&lines=The+web+platform+behind+arthrex.com+and+its+family+of+sites;X-Ray%3A+a+quality+gate+that+audits+~50+sites+every+week;Working+with+AI+agents+as+a+team%2C+with+quality+as+the+floor;Writing+about+it+at+mister99.dev" alt="Typing SVG" />
</a>

[![Website](https://img.shields.io/badge/mister99.dev-Essays-2563EB?style=for-the-badge&logo=jekyll&logoColor=white)](https://mister99.dev)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/emmanuel-r-28131761/)
[![GitHub](https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/ehnruiz)

<br>

![Role](https://img.shields.io/badge/🏥_Arthrex-Web_Platform_%26_Quality-1D4ED8?style=for-the-badge&labelColor=1E3A8A)
![Location](https://img.shields.io/badge/🌴_Southwest_Florida-US_%2F_FR-0F766E?style=for-the-badge&labelColor=134E4A)
![Open source](https://img.shields.io/badge/🤝_Open_source-Contributing-B45309?style=for-the-badge&labelColor=78350F)
![Writing](https://img.shields.io/badge/✍️_Essays-Monthly-7C3AED?style=for-the-badge&labelColor=4C1D95)

</div>

---

<div align="center">

### 🧭 Quick Navigation

[👋 About](#-about-me) · [🚀 What I build](#-what-i-build) · [🛠️ Toolbox](#️-toolbox) · [🔭 Current interests](#-current-interests) · [📊 Activity](#-activity) · [✍️ Writing](#️-writing)

</div>

---

## 👋 About Me

```typescript
const emmanuel: Engineer = {
  name:     "Emmanuel Ruiz",
  role:     "Software engineering manager, Arthrex (global medical device company)",
  location: "Southwest Florida · speaks English and French",

  focus: [
    "🌐 The web platform behind arthrex.com and its family of sites",
    "🩻 X-Ray: a Playwright quality gate that audits ~50 sites every week and on demand",
    "🤖 Working with AI agents as a team: skills, MCP servers, review loops, handoffs",
    "📈 SEO, structured data and AI visibility for a regulated industry",
    "🧑‍🤝‍🧑 Leading a team that ships weekly without trading away quality",
  ],

  stack: {
    languages:  ["TypeScript", "JavaScript", "Python", "Ruby", "Shell"],
    web:        ["Next.js", "React", "Astro", "Jekyll", "Rails", "MDX docs"],
    quality:    ["Playwright", "Vitest", "Lighthouse", "axe", "CodeQL"],
    delivery:   ["GitHub Actions", "Docker", "Kubernetes manifests", "AWS CDK", "Azure"],
    ai:         ["Claude Code", "MCP", "agent skills", "embeddings", "LLM-as-judge"],
  },

  principle: "Pace is a feature. Quality is the floor, not the ceiling.",
};
```

---

## 🚀 What I Build

### ⭐ Flagship: X-Ray, a quality gate for a family of websites

**X-Ray** crawls a site with Playwright and checks it before it goes live and every week after: content, links, images, rendering, browser errors, SEO, accessibility, consent and brand terms. It runs on about 50 Arthrex sites and reports to a dashboard, to Teams and to Jira.

- 🧪 **60+ checks, each a pure function over a page snapshot**, every heuristic shipped with a negative test, so a false positive is treated as a bug
- 🏷️ **A Site Health Score** that discloses what did not run instead of awarding partial credit
- 🔌 **An MCP server and a CLI**, so people and agents can start an audit, read findings and ask what a check means
- 🤖 **Built with AI agents as a team**: a supervisor routes scoped tickets to cheaper models, reviewers judge diffs, hooks guard secrets and the test gate
- 📝 The story of its first month is in [One Month at the Frontier](https://mister99.dev/essay/one-month-at-the-frontier/)

![TypeScript](https://img.shields.io/badge/-TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white) ![Node.js](https://img.shields.io/badge/-Node_22-339933?style=flat-square&logo=node.js&logoColor=white) ![Playwright](https://img.shields.io/badge/-Playwright-2EAD33?style=flat-square&logo=playwright&logoColor=white) ![Vitest](https://img.shields.io/badge/-Vitest-6E9F18?style=flat-square&logo=vitest&logoColor=white) ![MCP](https://img.shields.io/badge/-MCP-000000?style=flat-square) ![GitHub Actions](https://img.shields.io/badge/-GitHub_Actions-2088FF?style=flat-square&logo=githubactions&logoColor=white)

> 🔒 Internal to Arthrex, so the repository is private. The essay above is the public write-up.

### 🌐 Platforms and sites

| Project | What it is | Tech | Where |
|---|---|---|---|
| 🏥 **arthrex.com platform** | The Next.js platform behind arthrex.com: structured data for videos and techniques, ISR, 404 handling, SEO hardening and performance work. | ![Next.js](https://img.shields.io/badge/-Next.js-000000?style=flat-square&logo=next.js&logoColor=white) ![TypeScript](https://img.shields.io/badge/-TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white) | [arthrex.com](https://www.arthrex.com) · 🔒 private repo |
| 🚀 **Astro + design tokens** | Rebuilding a marketing site on Astro with a token-based design system, measured against the live site with X-Ray and Lighthouse. | ![Astro](https://img.shields.io/badge/-Astro-BC52EE?style=flat-square&logo=astro&logoColor=white) | 🔒 private proof of concept |
| 🖥️ **X-Ray portal** | A Next.js front end over X-Ray's reports: history per site, findings by rule across the portfolio, signed report links, deployed with AWS CDK. | ![Next.js](https://img.shields.io/badge/-Next.js-000000?style=flat-square&logo=next.js&logoColor=white) ![AWS](https://img.shields.io/badge/-AWS_CDK-FF9900?style=flat-square&logo=amazonaws&logoColor=white) | 🔒 private repo |
| ✍️ **mister99.dev** | Essays on building software with AI agents, published with Jekyll and GitHub Pages, with generated link-preview cards. | ![Jekyll](https://img.shields.io/badge/-Jekyll-CC0000?style=flat-square&logo=jekyll&logoColor=white) | [Visit](https://mister99.dev) · [Repo](https://github.com/ehnruiz/ehnruiz.github.io) |

### 🤝 Open source

| Project | Contribution | Tech | Where |
|---|---|---|---|
| 🧰 **claude-skills** | My Claude Code skills and subagents, rewritten for any repository: route work across model tiers, build test-first, debug from a failing loop, hand off between sessions, write tickets people read, and catch skills that compete for the same request. Install as a plugin or with `npx skills add ehnruiz/claude-skills`. | ![Python](https://img.shields.io/badge/-Python-3776AB?style=flat-square&logo=python&logoColor=white) ![Claude Code](https://img.shields.io/badge/-Claude_Code-D97757?style=flat-square) | [Repo](https://github.com/ehnruiz/claude-skills) |
| 🧱 **Instatic** | Evaluating an open-source visual CMS for static sites; fixing what I hit on the way: CSS custom properties dropped by the publisher, imported color and font tokens whose `var()` references were not rewritten. | ![TypeScript](https://img.shields.io/badge/-TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white) | [Pull requests](https://github.com/CoreBunch/Instatic/pulls?q=is%3Apr+author%3Aehnruiz) · [Issues](https://github.com/CoreBunch/Instatic/issues?q=is%3Aissue+author%3Aehnruiz) |

<div align="center">

<a href="https://github.com/ehnruiz/claude-skills">
  <img src="https://github-readme-stats.vercel.app/api/pin/?username=ehnruiz&repo=claude-skills&theme=default&hide_border=true" width="48%" />
</a>
<a href="https://github.com/ehnruiz/ehnruiz.github.io">
  <img src="https://github-readme-stats.vercel.app/api/pin/?username=ehnruiz&repo=ehnruiz.github.io&theme=default&hide_border=true" width="48%" />
</a>
<a href="https://github.com/CoreBunch/Instatic">
  <img src="https://github-readme-stats.vercel.app/api/pin/?username=CoreBunch&repo=Instatic&theme=default&hide_border=true" width="48%" />
</a>

</div>

---

## 🛠️ Toolbox

<div align="center">

<a href="https://skillicons.dev">
  <img src="https://skillicons.dev/icons?i=ts,js,nodejs,react,nextjs,astro,html,css,ruby,rails,py,bash,docker,kubernetes,aws,azure,githubactions,terraform,md&perline=10" />
</a>

</div>

<br>

| Area | What I reach for |
|---|---|
| **Web platforms** | Next.js, React, Astro, Jekyll, Rails, Webflow, headless CMSs (Kontent.ai, Builder.io, Instatic) |
| **Quality and testing** | Playwright, Vitest, Lighthouse, axe, CrUX field data, CodeQL, test-first checks with negative cases |
| **SEO and content** | Structured data (JSON-LD), hreflang, canonicals, Core Web Vitals, brand and claim validation, AI visibility |
| **Delivery and infra** | GitHub Actions, Docker, Kubernetes manifests, AWS CDK and App Runner, Azure, GitHub Packages |
| **AI tooling** | Claude Code skills and hooks, MCP servers, multi-model supervision, LLM-as-judge evals, embeddings |
| **Automation** | Power Automate and Teams flows, Jira and Confluence integrations, scheduled audits |

---

## 🔭 Current Interests

- 🤖 **AI agents as a team, not a tool.** Supervisor and worker roles on different models, skills that encode how a repo is judged, hooks that block secrets and loose files, handoffs between sessions. The skills I use every day are public in [claude-skills](https://github.com/ehnruiz/claude-skills). The question I keep asking: how far can a small team's pace go without the quality floor moving?
- 📡 **AI visibility.** How LLM answer engines read, cite and rank sites, and which page-level signals move that for a regulated industry. Measured, not guessed.
- 🧱 **Static-first publishing.** Astro, design tokens and an open-source visual CMS as an alternative to Webflow for marketing sites, judged by the same audit as the sites they would replace.
- 🧠 **Embeddings in quality checks.** Paraphrase detection for approved claims, portfolio overlap and prompt answerability, on small open models.
- 🍪 **Consent that actually works.** Checking that each consent category only activates its own tags, on real banners, with a real browser.
- ✍️ **Writing it down.** One essay a month on what building at this pace teaches, at [mister99.dev](https://mister99.dev).

---

## 📊 Activity

<div align="center">

<img src="https://streak-stats.demolab.com/?user=ehnruiz&theme=default&hide_border=true" width="60%" />
<br><br>
<a href="https://github.com/ehnruiz"><img src="https://ghchart.rshah.org/2563EB/ehnruiz" alt="Contribution calendar" width="90%" /></a>

</div>

> Most of my commits land in private Arthrex repositories: about 1,900 contributions across 24 repositories in the past year (October 2026). The graph above counts them; the public repository list does not.

---

## ✍️ Writing

<!-- writing:start -->
<div align="center">

<a href="https://mister99.dev/essay/the-cheapest-model-that-can-do-it/">
  <img src="https://mister99.dev/assets/cards/the-cheapest-model-that-can-do-it.png" alt="The Cheapest Model That Can Do It" width="70%" />
</a>

**[The Cheapest Model That Can Do It](https://mister99.dev/essay/the-cheapest-model-that-can-do-it/)**
*Three weeks of routing agent work by model tier, read back from the session logs*

</div>

Earlier essays:

- **[Worth a Stranger's Five Minutes](https://mister99.dev/essay/worth-a-strangers-five-minutes/)**. Rewriting the docs of my Claude Code skills repository with evidence, and the hook bug the evidence turned up
- **[One Month at the Frontier](https://mister99.dev/essay/one-month-at-the-frontier/)**. What thirty days of building X-Ray taught me about pace, quality and leading with AI
- **[Found, Read and Quoted](https://mister99.dev/essay/found-read-and-quoted/)**. Auditing my own site with X-Ray, and what it took to go from 84 to 100
<!-- writing:end -->

---

<div align="center">

<img src="https://capsule-render.vercel.app/api?type=waving&color=gradient&customColorList=6,11,20&height=100&section=footer" width="100%" />

</div>
