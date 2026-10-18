# 🌐 StatementForge: Deployment & Operations Guide

> **Continuous Integration, Dual-Edge Hosting & Search Engine Optimization**

---

## 1. Production Endpoints

| Environment | Live URL | Platform | Purpose |
| :--- | :--- | :--- | :--- |
| **Primary Production** | [statementforge-ai.netlify.app](https://statementforge-ai.netlify.app/) | Netlify Edge | Global CDN, Custom domain target, SSL termination |
| **Failover / Clean CDN** | [jchann00.github.io/statementforge](https://jchann00.github.io/statementforge/) | GitHub Pages | Non-AI domain for strict community guidelines & backup |

---

## 2. Automated CI/CD Pipelines

### 2.1 Netlify Pipeline
- **Configuration**: [`netlify.toml`](file:///c:/Users/jchan/Documents/ai/statementforge/netlify.toml)
- **Build Script**: [`build.js`](file:///c:/Users/jchan/Documents/ai/statementforge/build.js) (`node build.js`)
- **Publish Directory**: `dist/`
- **Routing & SPA Fallback**:
  - `_redirects`:
    ```text
    /googleeae2dbdd1057a6b1.html  /googleeae2dbdd1057a6b1.html  200
    /sitemap.xml                  /sitemap.xml                  200
    /robots.txt                   /robots.txt                   200
    /*                            /index.html                   200
    ```

### 2.2 GitHub Pages Pipeline
- **Workflow**: [`.github/workflows/deploy.yml`](file:///c:/Users/jchan/Documents/ai/statementforge/.github/workflows/deploy.yml)
- **Trigger**: Automatic on push to `main` branch.
- **Actions**: Official `actions/deploy-pages@v4` with artifact upload.

---

## 3. Google Search Console & SEO Configuration

1. **Ownership Verification Token**:
   - File verification: `googleeae2dbdd1057a6b1.html`
   - Meta tag: `<meta name="google-site-verification" content="googleeae2dbdd1057a6b1" />`
   - Status: Verified on Google Search Console.
2. **Sitemap Index**:
   - URL: `https://statementforge-ai.netlify.app/sitemap.xml`
   - Referenced in `robots.txt` as `Sitemap: https://statementforge-ai.netlify.app/sitemap.xml`.
3. **Indexing Verification**:
   - Submissions made via Search Console URL Inspection tool.
