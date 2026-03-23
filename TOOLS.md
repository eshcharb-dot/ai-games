# Agentic Ventures — Tools & Infrastructure Reference
## Last Updated: 2026-03-23

This file documents all tools, services, and platforms available to every project in this studio.
Any Claude Code session working on any project here should read this first.

---

## Shell Environment
- **OS:** Windows 11
- **Shell:** PowerShell
- **CRITICAL:** Use `;` not `&&` to chain commands
- **Git:** available, GitHub CLI (`gh`) available and authenticated as `eshcharb-dot`
- **Node.js:** v24.x available
- **Claude Code:** `claude --permission-mode bypassPermissions --print` (no PTY needed)

---

## Deployment Platforms

### GitHub Pages (static sites)
- **Use for:** Static HTML/JS sites, games, landing pages
- **How:** Push to `master` branch → auto-deploys via `.github/workflows/static.yml`
- **Example:** `eshcharb-dot.github.io/ai-games`
- **Auth:** `gh` CLI authenticated, `git push` works directly

### Railway (Node.js apps)
- **Use for:** Express servers, APIs, apps with persistent processes
- **Account:** eshcharb@gmail.com
- **CLI:** `railway` (installed globally via npm)
- **Deploy flow:**
  1. Create standalone repo (app files at root, no subfolder)
  2. `railway login --browserless` (if not already logged in)
  3. Create project in Railway dashboard → connect GitHub repo
  4. Root Directory: leave empty
  5. Env vars: set in Railway dashboard → Variables tab
  6. Auto-deploys on every `git push origin master`
- **Known issues:**
  - `better-sqlite3` fails on Railway — use `sql.js` instead (pure JS)
  - Monorepo subfolders sometimes fail — create standalone deployment repo
  - SQLite DB is ephemeral (resets on redeploy) — use Google Sheets or Postgres for persistence
- **Example project:** redefine-q1-feedback-production.up.railway.app

### Vercel (Next.js / static + serverless)
- **Use for:** Next.js apps, React apps, serverless API routes
- **Account:** eshcharb@gmail.com
- **Deploy flow:** Connect GitHub repo → auto-deploys on push
- **Example project:** signal-pr (Next.js) — see `projects/signal-pr/app/.vercel/`
- **Limitations:** No persistent processes, no SQLite — use Vercel KV or Postgres for data

### Netlify (static sites — drag & drop)
- **Use for:** Quick one-off static deploys, sharing HTML files
- **How:** Drag HTML file to app.netlify.com/drop
- **No account needed for one-off drops**

---

## Email

### Resend
- **Use for:** Transactional email (welcome, notifications, waitlist confirmations)
- **API:** `resend.com` — requires `RESEND_API_KEY` in `.env`
- **npm package:** `resend`
- **From domain:** Configure in Resend dashboard (DNS records needed)
- **Example usage:**
```js
const { Resend } = require('resend');
const resend = new Resend(process.env.RESEND_API_KEY);
await resend.emails.send({
  from: 'noreply@yourdomain.com',
  to: 'user@example.com',
  subject: 'Welcome!',
  html: '<p>Hello</p>'
});
```

---

## Database

### Supabase (Postgres + Auth + Realtime)
- **Use for:** Production databases, user auth, real-time features
- **Account:** eshcharb@gmail.com at supabase.com
- **npm package:** `@supabase/supabase-js`
- **Env vars needed:** `SUPABASE_URL`, `SUPABASE_ANON_KEY`
- **Use when:** App needs persistent data that survives redeployments, multi-user auth, or real-time subscriptions

### sql.js (SQLite in-memory/file)
- **Use for:** Simple local apps, internal tools, prototypes
- **Why not better-sqlite3:** Requires native compilation — breaks on Railway/Linux
- **Pattern:** Load from file on startup, save to file after every write
- **Not suitable for:** Railway production (ephemeral storage), multi-user apps

### Google Sheets (via Apps Script webhook)
- **Use for:** Simple data collection, shared with non-technical team members
- **Pattern:** POST JSON to Apps Script web app URL — no auth tokens needed
- **Webhook URL pattern:** `https://script.google.com/macros/s/[ID]/exec`
- **Apps Script deploy:** Execute as: Me | Who has access: Anyone
- **Example:** Q1 feedback app syncs every submission to Google Sheets

---

## CRM & Data

### HubSpot
- **Account:** Redefine Meat HubSpot (via API key)
- **API Key:** in `RE-001_sales-ops-agent/dashboard/.env`
- **npm package:** Use `axios` with Bearer token auth
- **Base URL:** `https://api.hubapi.com`
- **Key endpoints:** `/crm/v3/objects/deals/search`, `/crm/v3/owners`

### SAP (Redefine Meat ERP)
- **Access:** Via Excel exports only (no direct API)
- **File format:** `.xlsx` with columns: CustName, OrderNumber, DeliveryDate, RDM SKU, ItemName, Qty, Country, channel, USD/EUR/ILS values
- **Parse with:** ExcelJS (NOT xlsx package — has security vulnerabilities)

---

## FX Rates

### Frankfurter API (free, no key needed)
- **Use for:** EUR→USD, GBP→USD conversion
- **Endpoint:** `https://api.frankfurter.app/{start}..{end}?from=EUR&to=USD`
- **Example:** `https://api.frankfurter.app/2026-01-01..2026-03-31?from=EUR&to=USD`
- Returns daily rates — average for period

---

## Source Control

### GitHub
- **Account:** `eshcharb-dot`
- **CLI:** `gh` (authenticated)
- **Create repo:** `gh repo create <name> --private --source=. --remote=origin --push`
- **Active repos:**
  - `eshcharb-dot/ai-games` — mila-beli-mila game (GitHub Pages)
  - `eshcharb-dot/redefine-sales-ops` — full sales ops monorepo
  - `eshcharb-dot/redefine-q1-feedback` — Railway deployment repo for Q1 app

---

## AI & APIs

### Anthropic / Claude
- **Claude Code CLI:** `claude --permission-mode bypassPermissions --print "task"`
- **Background:** Add `background:true` to exec tool for long tasks
- **No PTY needed** for Claude Code (unlike Codex)

### OpenAI
- Check `.env` files in individual projects for API keys

---

## Project Inventory

| Code | Name | Status | Stack | Deployment |
|------|------|--------|-------|------------|
| PR-001 | Agentic Ventures (studio) | Active | — | — |
| PR-003 | MenuGenie | Live | Landing page | menu-genie.com |
| PR-004 | AI Games (mila-beli-mila) | Live | HTML/JS | GitHub Pages |
| PR-006 | Investment Analyst | Active | Node.js | Local (cron) |
| RE-001 | Sales Ops Agent | Active | Node.js + TS | Railway + GitHub |
| RE-002 | AI SDR | Active | Node.js | Local |
| signal-pr | Signal PR | In dev | Next.js | Vercel |

---

## Patterns & Conventions

### Starting a new web app
1. Build locally first, test with `node server.js`
2. Create standalone GitHub repo (flat structure, no subfolders for deployment)
3. Connect to Railway (Node.js) or Vercel (Next.js)
4. Set env vars in platform dashboard
5. Add `CLAUDE.md` to repo with full context

### Environment variables
- Never commit `.env` files
- Always use platform dashboard to set production env vars
- Local: `.env` file loaded with `dotenv`
- Standard vars: `PORT`, `HUBSPOT_API_KEY`, `RESEND_API_KEY`, `SUPABASE_URL`, `SUPABASE_ANON_KEY`, `GOOGLE_SHEETS_WEBHOOK_URL`

### Database choice
- Prototype / internal tool → sql.js or Google Sheets
- Production SaaS → Supabase (Postgres)
- Never use better-sqlite3 for Railway deployments

### When to use which deployment
- Static HTML → GitHub Pages
- Node.js server → Railway
- Next.js / React → Vercel
- Quick share → Netlify drop
