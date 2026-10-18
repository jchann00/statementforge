# StatementForge 🏦⚡
> **Autonomous FinTech Bank Statement PDF to Excel, CSV & QuickBooks (.QBO) Converter**  
> Global-First SaaS Platform with Zero-Server Client-Side Privacy, Multi-Language i18n, and Automated Mathematical Reconciliation.

[![Live Netlify](https://img.shields.io/badge/Netlify-Live_Production-00C7B7?style=flat&logo=netlify)](https://statementforge-ai.netlify.app/)
[![GitHub Pages](https://img.shields.io/badge/GitHub_Pages-Backup_Edge-222222?style=flat&logo=github)](https://jchann00.github.io/statementforge/)
[![PayPal Live](https://img.shields.io/badge/PayPal-Live_Subscribed-003087?style=flat&logo=paypal)](https://statementforge-ai.netlify.app/)
[![Client-Side Privacy](https://img.shields.io/badge/Privacy-100%25_In--Browser-2ea44f?style=flat&logo=shield)](https://statementforge-ai.netlify.app/)

---

## 🌐 Live Production Links

- **Primary Global SaaS**: [https://statementforge-ai.netlify.app/](https://statementforge-ai.netlify.app/)
- **Failover / Clean CDN**: [https://jchann00.github.io/statementforge/](https://jchann00.github.io/statementforge/)
- **Product Hunt Launch**: Scheduled for PST 00:01 / KST 16:00

---

## 📚 Structured Knowledge Base & Documentation

Detailed engineering, operational, and go-to-market guides are available in the [`docs/`](file:///c:/Users/jchan/Documents/ai/statementforge/docs/) directory:

1. [**🏛️ System Architecture & Specs**](file:///c:/Users/jchan/Documents/ai/statementforge/docs/01_SYSTEM_ARCHITECTURE.md)
   - Zero-server client-side PDF.js OCR extraction pipeline.
   - Deterministic mathematical balance reconciliation algorithm (`Opening + Deposits - Withdrawals = Ending Balance`).
   - Native QuickBooks Web Connect (.QBO) and SheetJS Excel (.xlsx) builders.
   - 4-language i18n localization engine (EN, KO, JA, ES).

2. [**🌐 Deployment & Operations Guide**](file:///c:/Users/jchan/Documents/ai/statementforge/docs/02_DEPLOYMENT_OPERATIONS.md)
   - Netlify Edge automated CI/CD and build script synchronization (`build.js`).
   - GitHub Pages automated Actions deployment (`.github/workflows/deploy.yml`).
   - Google Search Console domain ownership verification (`googleeae2dbdd1057a6b1.html`) and XML Sitemap configuration.

3. [**🎯 Global GTM & Marketing Playbook**](file:///c:/Users/jchan/Documents/ai/statementforge/docs/03_GTM_MARKETING_PLAYBOOK.md)
   - Reddit Community Growth & Anti-Ban playbook (`r/SideProject`, `r/QuickBooks`, `r/Accounting`, `r/Bookkeeping`).
   - Product Hunt official launch guidelines, first maker comment, and marketing assets.
   - LinkedIn B2B direct networking for US/UK/Canada virtual bookkeepers and CPA firms.

4. [**💰 Monetization & Unit Economics**](file:///c:/Users/jchan/Documents/ai/statementforge/docs/04_MONETIZATION_UNIT_ECONOMICS.md)
   - PayPal Live Subscription production credentials and tier plan IDs ($19 Pro / $49 CPA).
   - Zero marginal server cost analysis with ~96.5% net profit margins.
   - MRR and ARR growth projections.

---

## 📂 Project Structure

```bash
statementforge/
├── docs/                                # Structured Knowledge Base
│   ├── 01_SYSTEM_ARCHITECTURE.md        # Technical specifications & parsing math
│   ├── 02_DEPLOYMENT_OPERATIONS.md      # CI/CD, Search Console, & DNS
│   ├── 03_GTM_MARKETING_PLAYBOOK.md     # Reddit, Product Hunt, & LinkedIn playbooks
│   └── 04_MONETIZATION_UNIT_ECONOMICS.md# PayPal Live setup & unit economics
├── producthunt_assets/                  # High-resolution 3D logos & showcase images
│   ├── 1_logo_thumbnail.jpg             # 1:1 App icon badge
│   ├── 2_gallery_dashboard.jpg          # 16:9 Dashboard & export showcase
│   └── 3_gallery_security_banks.jpg     # 16:9 Zero-cloud privacy & bank support
├── index.html                           # Single-page application structure & semantic layout
├── styles.css                           # FinTech dark theme styling & responsive grid
├── app.js                               # FinTech OCR parsing engine, 4-language i18n, & PayPal Live
├── build.js                             # Automated production synchronization script
├── netlify.toml                         # Netlify build & redirect routing configuration
├── sitemap.xml                          # Search engine XML sitemap
├── robots.txt                           # Web crawler directives
├── googleeae2dbdd1057a6b1.html          # Google Search Console ownership verification token
└── dist/                                # Compiled production distribution bundle
```

---

## 🚀 Key Feature Highlights

1. **100% In-Browser Privacy**: Bank statements are processed entirely in the local browser sandbox via Web Workers and WebAssembly. No files are ever sent to an external server or public LLM.
2. **Reconciliation Proof**: Automated delta calculation prevents undetected OCR dropouts before users import transactions into accounting ledgers.
3. **Multi-Format 1-Click Export**: Supports Microsoft Excel (.xlsx), CSV, QuickBooks Web Connect (.QBO), and OFX.
4. **Instant Zero-Credit Benchmarks**: Built-in test statements for Chase, Bank of America, and American Express allowing users to test accuracy before signup.

---

## 📄 License
StatementForge © 2026. All Rights Reserved.
