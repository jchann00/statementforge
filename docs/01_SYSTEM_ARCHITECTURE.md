# 🏛️ StatementForge: System Architecture & Technical Specifications

> **High-Performance Client-Side FinTech Document Parsing Engine**  
> Zero-Cloud Uploads, 100% Client-Side In-Browser Processing, and Automated Balance Reconciliation.

---

## 1. Architectural Philosophy: Zero-Cost, Maximum-Privacy Serverless

StatementForge is engineered with a **Zero-Cloud-Processing Architecture**:
- **Zero Server Costs**: The entire PDF parsing, OCR text extraction, regex table structure normalization, and export generation run directly inside the end user's web browser using client-side JavaScript (HTML5 Web APIs, PDF.js, and WebAssembly).
- **Client Financial Privacy**: Traditional OCR and AI converters upload sensitive financial statements to third-party cloud servers or external LLMs, violating CPA non-disclosure agreements (NDAs) and bank confidentiality rules. StatementForge keeps 100% of the document data in-memory within the local browser sandbox.
- **Instant Speed**: No network upload latency for 50MB+ scanned statements.

---

## 2. Core Technical Components

### 2.1 PDF Parsing & Table Extraction Engine
- **Engine**: Mozilla `pdf.js` (v3.11.174) with embedded Web Worker thread.
- **Normalization Pipeline**:
  1. Multi-page text coordinate mapping ($x, y$ coordinates).
  2. Date format normalization (ISO, US MM/DD/YYYY, EU DD/MM/YYYY).
  3. Debit/Credit split detection and multi-line transaction description stitching.
  4. Running balance extraction and polarity validation.

### 2.2 Mathematical Balance Reconciliation Audit
To guarantee accounting-grade reliability, the engine executes a deterministic arithmetic proof on every extracted statement:

$$\text{Opening Balance} + \sum \text{Deposits (Credits)} - \sum \text{Withdrawals (Debits)} = \text{Ending Balance}$$

- **Variance Tolerance**: Strict floating-point arithmetic precision check ($|\text{Variance}| < \$0.01$).
- **Visual Audit Badge**:
  - `✓ Reconciled ($0.00 Variance)`: Green verified status badge.
  - `⚠️ Discrepancy Detected ($X.XX)`: Red warning indicating missing lines or bad bank scan.

### 2.3 Multi-Format Export Pipelines
1. **QuickBooks Web Connect (.QBO)**:
   - Structured OFX/XML compliant with Intuit QuickBooks Online and Desktop import standards.
   - Bank ID, Account ID, and Transaction Type (`CREDIT` / `DEBIT`) tag mapping.
2. **Microsoft Excel (.xlsx)**:
   - Generated client-side via `SheetJS (xlsx.full.min.js)`.
   - Native cell styling, auto-column widths, and numeric currency formatting.
3. **Comma-Separated Values (.CSV)**:
   - Universal RFC 4180 standard for Xero, Wave, FreshBooks, and custom ERPs.
4. **ZIP Batch Bundling**:
   - `JSZip` bundling for multi-statement batch jobs.

### 2.4 4-Language Localization (i18n)
- 100% synchronization across 164 UI strings, error states, modals, and benchmark previews.
- Supported Locales:
  - 🇺🇸 English (`en`) - Default Global
  - 🇰🇷 한국어 (`ko`)
  - 🇯🇵 日本語 (`ja`)
  - 🇪🇸 Español (`es`)
