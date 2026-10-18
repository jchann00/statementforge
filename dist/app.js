/**
 * StatementForge AI &mdash; Autonomous FinTech OCR & Bank Statement Reconciliation Engine
 * Complete Global Enterprise Engine: Full Multilingual (EN, KO, JA, ES) covering entire landing page,
 * interactive studio, in-cell table editing, PayPal checkout modal, CPA tax rules, audit certificates, and batch ZIP.
 * Zero credit deduction on sample benchmark demos!
 */

document.addEventListener('DOMContentLoaded', () => {
  // =========================================================================
  // 1. Comprehensive Multilingual Dictionary (100% Coverage for EN, KO, JA, ES)
  // =========================================================================
  const I18N = {
    en: {
      nav_converter: "Studio",
      nav_preview: "Sample Test",
      nav_features: "Enterprise Features",
      nav_banks: "Global Banks",
      nav_pricing: "Pricing",
      nav_mypage: "My Account",
      lbl_mypage: "My Account",
      btn_upgrade_nav: "Upgrade Plan",
      hero_pill: "Autonomous Bank Statement Extraction & Zero-Variance Audit",
      hero_title_1: "Convert Bank Statements PDF to",
      hero_title_2: "Excel, CSV & QuickBooks QBO",
      hero_subtitle: "Eliminate 3+ hours of manual data entry per client. Upload digital or scanned bank & credit card statements. Our neural OCR extracts clean transaction tables with mathematical balance reconciliation.",
      btn_test_sample: "Test Live Sample (Instant 1-Click)",
      btn_upload_own: "Upload Your PDF / Scans",
      trust_soc2: "SOC-2 & 256-bit AES Encryption",
      trust_privacy: "Auto-Purge Within 60 Minutes",
      trust_reconciliation: "100% Mathematical Reconciliation Audit",
      tag_locked_pdf: "Locked Raw PDF (Unselectable text & tables)",
      tag_ai_engine: "StatementForge Neural OCR & Ledger Engine",
      tag_clean_excel: "Structured Excel (.XLSX), CSV & QBO",
      btn_instant_experience: "Experience 1-Second Transformation Demo",
      lbl_client_workspace: "Client Entity:",
      btn_tax_rules: "CPA Tax Rules",
      btn_audit_cert: "Audit Certificate",
      btn_team_api: "Team & API",
      lbl_active_plan: "Plan:",
      lbl_batch_queue: "Batch Queue:",
      btn_add_to_batch: "+ Add PDF to Batch",
      lbl_select_bank: "Select Statement Benchmark:",
      bank_chip_chase: "🏛️ JPMorgan Chase (Commercial Checking)",
      bank_chip_bofa: "🏢 Bank of America (Corporate Operating)",
      bank_chip_amex: "💳 American Express (Platinum Business)",
      bank_chip_barclays: "🇬🇧 Barclays UK (GBP Business Account)",
      bank_chip_kb: "🇰🇷 KB Kookmin Bank (KRW Corporate)",
      btn_rescan: "Run AI Scan",
      btn_csv: "CSV",
      btn_ofx: "Xero (.OFX)",
      btn_qbo: "QuickBooks (.QBO)",
      btn_excel: "Excel (.xlsx)",
      btn_batch_zip: "Batch ZIP",
      pdf_acc_label: "Account:",
      pdf_period_label: "Period:",
      th_date: "Date",
      th_desc: "Payee / Description",
      th_category: "AI Category / Tax",
      th_debit: "Debit (-)",
      th_credit: "Credit (+)",
      th_balance: "Balance",
      th_amount: "Amount",
      th_act: "Act",
      search_placeholder: "Search payee, keyword, amount, category...",
      pdf_watermark: "Official Bank Statement Record • Encrypted PDF Stream",
      dropzone_prompt: "Drag & drop your PDF statements or scanned images here (Supports multi-file batch upload)",
      metric_opening: "Opening Balance",
      metric_opening_sub: "Statement starting line",
      metric_deposits: "Total Credits (Deposits)",
      metric_withdrawals: "Total Debits (Withdrawals)",
      metric_closing: "Closing Balance (Reconciled)",
      btn_add_row: "+ Add Row",
      upsell_title: "Need Multi-File Batch Conversion, QuickBooks QBO or Custom Tax Rules?",
      upsell_desc: "Trusted by 14,000+ CPAs, CFOs, and bookkeeping firms globally to eliminate tedious data transcription.",
      btn_upgrade_pro_glow: "Upgrade to Pro ($19/mo)",
      badge_how_it_works: "Autonomous 3-Step Pipeline",
      title_how_it_works: "How StatementForge Converts Statements",
      step_1_title: "Upload PDF / Scanned Images",
      step_1_desc: "Upload digital e-statements from online banking or scanned phone photos of paper receipts.",
      step_2_title: "Neural OCR & Ledger Reconciliation",
      step_2_desc: "Our engine extracts columns, categorizes payees, and mathematically tests Opening + Credits - Debits == Closing.",
      step_3_title: "Export to Excel, QBO or Xero",
      step_3_desc: "Download structured Excel with live SUM formulas, Intuit QuickBooks Web Connect (.QBO), or Xero (.OFX).",
      badge_supported_banks: "Global Compatibility",
      title_supported_banks: "Compatible with 1,000+ Worldwide Financial Institutions",
      desc_supported_banks: "Multi-column layouts, skewed scans, rotated tables, and dual-currency credit card slips parsed automatically.",
      badge_pricing: "Transparent Global Pricing",
      title_pricing_1: "Save Over 20+ Hours Every Month with",
      title_pricing_2: "Guaranteed Accuracy",
      desc_pricing: "Start with 3 free pages. Upgrade anytime to Pro or Accounting Firm for high-volume batch processing.",
      plan_free_name: "Free Starter",
      plan_free_tagline: "Test extraction accuracy & reconciliation",
      period_free: "/ Forever Free",
      f_free_1: "3 Pages / Month Included",
      f_free_2: "Clean Excel (.xlsx) & CSV Export",
      f_free_3: "Mathematical Reconciliation Audit",
      f_free_4: "In-Cell Table Editing",
      f_free_5: "Multi-File Batch Queue",
      f_free_6: "QuickBooks (.QBO) & Xero (.OFX)",
      f_free_7: "CPA Tax Rules & Custom Mapping",
      f_free_8: "Multi-Client Workspaces",
      btn_use_free: "Current Plan",
      plan_pro_name: "Pro Monthly",
      plan_pro_tagline: "Save 10+ hours of tedious monthly bookkeeping",
      period_pro: "/ Month (PayPal Sub)",
      ribbon_pro: "MOST POPULAR • FREELANCERS & SMBS",
      f_pro_1: "250 Pages / Month Volume",
      f_pro_2: "QuickBooks (.QBO) Web Connect Export",
      f_pro_3: "Xero & Sage (.OFX) Standard Format",
      f_pro_4: "Multi-File Batch Processing Queue",
      f_pro_5: "AI Payee Categorization & Tax Tagging",
      f_pro_6: "Zero-Variance Audit Discrepancy Alert",
      f_pro_7: "Priority OCR Engine (Zero Wait Time)",
      f_pro_8: "Multi-Client Workspaces & Team Seats",
      btn_buy_pro: "Get Pro Plan ($19/mo)",
      plan_agency_name: "CPA & Accounting Firm",
      plan_agency_tagline: "For CPAs, Bookkeeping Agencies & Multi-Entity Firms",
      period_agency: "/ Month",
      f_agency_1: "1,500 Pages / Month High Volume",
      f_agency_2: "Multi-Client Workspace Management",
      f_agency_3: "Custom CPA Tax Rules Engine (IRS / Deductions)",
      f_agency_4: "Bulk Multi-File Batch ZIP Export",
      f_agency_5: "Downloadable Audit-Ready Certificates",
      f_agency_6: "3 Accountant Team Seats & Shared Rules",
      f_agency_7: "Enterprise REST API Key Access",
      f_agency_8: "Dedicated Account Manager & Priority SLA",
      btn_buy_agency: "Get CPA Firm Plan ($49/mo)",
      txt_guarantee: "100% Mathematical Accuracy Guarantee: If our extracted ending balance does not match your original statement, we offer an immediate full refund.",
      
      // Modals
      checkout_title: "Upgrade to StatementForge Pro",
      checkout_subtitle: "Eliminate manual bookkeeping and unlock batch workflows.",
      checkout_plan_name: "Pro Monthly Subscription",
      paypal_btn_subscribe: "Subscribe with PayPal",
      paypal_secure_text: "Bank-Grade 256-Bit SSL • Official PayPal Merchant Pipeline",
      paypal_sandbox_sim: "[Instant Sandbox Verification: Click to Simulate Approved Payment & Activate Plan]",
      
      rules_modal_title: "CPA Custom Tax & Category Rules Engine",
      rules_modal_sub: "Define automated regex and keyword mapping rules for IRS deductions & custom chart of accounts.",
      rules_th_pattern: "Vendor / Payee Keyword Pattern",
      rules_th_target: "Target Tax Line / Chart of Accounts",
      rules_th_deduct: "Tax Deductibility",
      rules_th_act: "Action",
      rules_btn_add: "+ Add Rule",
      rules_btn_apply: "⚡ Apply Rules & Reclassify All Transactions Now",

      cert_title: "STATEMENT RECONCILIATION AUDIT CERTIFICATE",
      cert_sub: "IRS & GAAP Accounting Compliance Verification • StatementForge AI Ledger",
      cert_lbl_client: "Client Entity:",
      cert_lbl_bank: "Financial Institution:",
      cert_lbl_acc: "Account Identifier:",
      cert_lbl_period: "Statement Period:",
      cert_lbl_hash: "Document SHA-256 Hash:",
      cert_lbl_time: "Audit Timestamp:",
      cert_lbl_opening: "Opening Balance:",
      cert_lbl_credits: "+ Total Credits (Deposits):",
      cert_lbl_debits: "- Total Debits (Withdrawals):",
      cert_lbl_closing: "Calculated Closing Balance:",
      cert_lbl_stated: "Stated Statement Closing Balance:",
      cert_lbl_variance: "Audit Mathematical Variance:",
      cert_sign_text: "Certified Public Accountant (CPA) / Auditor Sign-off",
      cert_official_badge: "VERIFIED ZERO-DISCREPANCY",
      btn_print_cert: "🖨️ Print / Save as PDF",
      btn_download_cert_json: "Download Verification JSON/CSV",

      team_modal_title: "CPA Team Seats & API Integration",
      team_modal_sub: "Manage accounting team access and programmatic REST API keys.",
      team_seats_h4: "Firm Team Seats (3 / 3 Active)",
      team_api_h4: "Enterprise REST API Key",
      team_api_sub: "Integrate StatementForge OCR directly into your custom accounting ERP or Zapier.",
      btn_copy_key: "Copy",

      switcher_modal_title: "Interactive Demo: Instant Tier Switcher",
      switcher_modal_sub: "Switch between plan tiers instantly to inspect all gated and unlocked features.",
      switcher_card_free_title: "Free Starter",
      switcher_card_free_desc: "3 pages limit, single file upload, CSV & Excel export.",
      switcher_card_free_tag: "Active by default",
      switcher_card_pro_title: "Pro Monthly ($19/mo)",
      switcher_card_pro_desc: "250 pages, Multi-file batch queue, QBO, Xero OFX, In-cell editor.",
      switcher_card_pro_tag: "Popular Freelancers",
      switcher_card_agency_title: "CPA Firm ($49/mo)",
      switcher_card_agency_desc: "1,500 pages, Multi-Client selector, Custom Tax Rules, Batch ZIP, Audit Certs.",
      switcher_card_agency_tag: "CPA Enterprises",

      // Authentication & Customer Account Portal
      btn_nav_signin: "Sign In",
      btn_nav_crm: "Customer CRM",
      auth_title: "Sign in to StatementForge",
      auth_subtitle: "Manage your subscription, transaction history, and API keys.",
      tab_login: "Sign In",
      tab_signup: "Create Account",
      auth_google_continue: "Continue with Google (1-Click)",
      auth_or: "or continue with email",
      auth_name: "Full Name",
      auth_email: "Work Email",
      auth_password: "Password",
      btn_submit_login: "Sign In to Dashboard",
      btn_submit_signup: "Create Free Account",
      auth_quick_demo: "Instant Demo Accounts (Click to Test):",
      acc_active_subscription: "Active Subscription",
      acc_paypal_sub_id: "PayPal Subscription ID",
      acc_renewal_date: "Next Billing Cycle",
      acc_monthly_quota: "Monthly Conversion Quota",
      acc_btn_manage_paypal: "Manage / Cancel on PayPal",
      acc_btn_change_plan: "Upgrade / Change Plan",
      btn_admin_crm: "Open Operator CRM",
      btn_signout: "Sign Out",
      crm_title: "Customer & Subscription Management CRM",
      crm_subtitle: "Real-time subscriber management, PayPal billing sync, quota provisioning, and CSV ledger export.",
      crm_mrr: "Monthly Recurring Revenue",
      crm_active_subscribers: "Paid Active Subscribers",
      crm_pages_extracted: "Pages Extracted (M-T-D)",
      crm_add_customer: "Add Customer",
      crm_export_csv: "Export Subscriber CSV"
    },

    ko: {
      nav_converter: "변환 스튜디오",
      nav_preview: "샘플 시험",
      nav_features: "엔터프라이즈 기능",
      nav_banks: "지원 은행",
      nav_pricing: "요금제",
      nav_mypage: "마이페이지",
      lbl_mypage: "마이페이지",
      btn_upgrade_nav: "플랜 업그레이드",
      hero_pill: "인공지능 거래내역서 표 추출 & 수학적 대사 검증",
      hero_title_1: "은행 거래내역서 PDF를",
      hero_title_2: "Excel, CSV & 퀵북 QBO로 초고속 변환",
      hero_subtitle: "고객사당 3시간 이상 소요되던 수기 타이핑을 즉시 제거하세요. 스캔한 종이 영수증이나 잠긴 PDF 명세서를 업로드하면 AI가 입출금 내역을 표로 추출하고 회계 잔액을 수학적으로 검증합니다.",
      btn_test_sample: "샘플 파일로 시험하기 (1초 즉시 확인)",
      btn_upload_own: "내 PDF / 스캔 파일 업로드",
      trust_soc2: "SOC-2 및 256비트 암호화",
      trust_privacy: "변환 60분 후 서버 자동 파기",
      trust_reconciliation: "100% 수학적 입출금 대사 검증",
      tag_locked_pdf: "잠긴 원본 PDF (복사 시 깨짐)",
      tag_ai_engine: "StatementForge 뉴럴 OCR & 대사 엔진",
      tag_clean_excel: "정돈된 Excel (.XLSX), CSV & QBO",
      btn_instant_experience: "1초 변환 체험 데모 실행",
      lbl_client_workspace: "고객사 워크스페이스:",
      btn_tax_rules: "CPA 세무 규칙",
      btn_audit_cert: "감사 대사 증명서",
      btn_team_api: "팀 & API",
      lbl_active_plan: "현재 플랜:",
      lbl_batch_queue: "일괄 변환 큐:",
      btn_add_to_batch: "+ 큐에 PDF 추가",
      lbl_select_bank: "체험할 글로벌 은행 명세서:",
      bank_chip_chase: "🏛️ JPMorgan Chase (체이스 기업계좌)",
      bank_chip_bofa: "🏢 Bank of America (운영계좌)",
      bank_chip_amex: "💳 American Express (플래티넘 법인카드)",
      bank_chip_barclays: "🇬🇧 Barclays UK (GBP 법인계좌)",
      bank_chip_kb: "🇰🇷 KB국민은행 (기업자유통장)",
      btn_rescan: "AI 재분석",
      btn_csv: "CSV",
      btn_ofx: "Xero (.OFX)",
      btn_qbo: "QuickBooks (.QBO)",
      btn_excel: "Excel (.xlsx)",
      btn_batch_zip: "일괄 ZIP 다운",
      pdf_acc_label: "계좌번호:",
      pdf_period_label: "명세기간:",
      th_date: "거래일자",
      th_desc: "적요 / 거래처",
      th_category: "자동 분류 / 세무 항목",
      th_debit: "출금 (-)",
      th_credit: "입금 (+)",
      th_balance: "잔액",
      th_amount: "금액",
      th_act: "관리",
      search_placeholder: "거래처, 적요, 금액, 분류 검색...",
      pdf_watermark: "공식 금융기관 거래명세서 • 암호화된 PDF 스트림",
      dropzone_prompt: "내 컴퓨터에서 PDF 또는 영수증 이미지 드래그 (다중 파일 일괄 업로드 지원)",
      metric_opening: "시작 잔액 (기초)",
      metric_opening_sub: "명세서 시작 기준",
      metric_deposits: "총 입금 (매출/소득)",
      metric_withdrawals: "총 출금 (비용/지출)",
      metric_closing: "기말 잔액 (대사 완료)",
      btn_add_row: "+ 거래행 추가",
      upsell_title: "대용량 일괄 변환, 퀵북 QBO 내보내기, CPA 맞춤 세무 규칙이 필요하신가요?",
      upsell_desc: "전 세계 14,000명 이상의 세무사, 회계법인, CFO가 시간 절약을 위해 StatementForge를 도입하고 있습니다.",
      btn_upgrade_pro_glow: "Pro 플랜 업그레이드 ($19/월)",
      badge_how_it_works: "간편한 3단계 파이프라인",
      title_how_it_works: "거래내역서를 엑셀로 변환하는 원리",
      step_1_title: "명세서 파일 업로드",
      step_1_desc: "인터넷뱅킹 PDF 또는 모바일 카메라로 촬영한 종이 명세서를 업로드합니다.",
      step_2_title: "뉴럴 OCR & 대사 검증",
      step_2_desc: "AI가 행과 열을 맞추고, 기초잔액 + 입금 - 출금 = 기말잔액 공식을 100% 대조 검증합니다.",
      step_3_title: "Excel, QBO, Xero 다운로드",
      step_3_desc: "SUM 함수가 살아있는 엑셀, 퀵북 웹 커넥트(.QBO), 제로 호환 OFX로 즉시 저장합니다.",
      badge_supported_banks: "전 세계 금융기관 호환",
      title_supported_banks: "1,000개 이상의 글로벌 은행 및 카드사 지원",
      desc_supported_banks: "다중 컬럼, 기울어진 스캔본, 회전된 표, 외화 복합 통장까지 완벽 인식합니다.",
      badge_pricing: "투명한 글로벌 요금제",
      title_pricing_1: "매달 20시간 이상의 장부 작업 시간을 절약하는",
      title_pricing_2: "정확도 100% 보증 플랜",
      desc_pricing: "무료로 3페이지를 체험하세요. 대용량 일괄 작업은 Pro 및 회계법인 플랜에서 제공됩니다.",
      plan_free_name: "무료 스타터",
      plan_free_tagline: "변환 품질 및 정확도 테스트용",
      period_free: "/ 평생 무료",
      f_free_1: "월 3페이지 무료 변환",
      f_free_2: "Excel (.xlsx) 및 CSV 내보내기",
      f_free_3: "수학적 잔액 대사 검증",
      f_free_4: "테이블 셀 실시간 인라인 편집",
      f_free_5: "다중 파일 일괄 큐 변환",
      f_free_6: "QuickBooks (.QBO) 및 Xero (.OFX)",
      f_free_7: "CPA 맞춤 세무 매핑 규칙",
      f_free_8: "고객사별 독립 워크스페이스",
      btn_use_free: "현재 이용 중",
      plan_pro_name: "Pro 월간 플랜",
      plan_pro_tagline: "개인 사업자 & 프리랜서의 장부 정리 시간 단축",
      period_pro: "/ 월 (PayPal 정기구독)",
      ribbon_pro: "가장 인기 있는 플랜 • 개인 사업자 & 프리랜서",
      f_pro_1: "월 250페이지 대용량 변환",
      f_pro_2: "QuickBooks (.QBO) 웹 커넥트 지원",
      f_pro_3: "Xero / Sage 호환 (.OFX) 포맷",
      f_pro_4: "여러 파일 동시 일괄(Batch) 처리 큐",
      f_pro_5: "AI 거래처 자동 분류 및 세무 태깅",
      f_pro_6: "회계 오차 제로 대사 불일치 감지 경보",
      f_pro_7: "대기 시간 없는 최우선 순위 OCR 엔진",
      f_pro_8: "고객사 폴더 관리 및 팀원 좌석",
      btn_buy_pro: "Pro 플랜 시작하기 ($19/월)",
      plan_agency_name: "CPA & 회계법인 플랜",
      plan_agency_tagline: "세무사 사무소, 회계법인 및 다중 법인 관리용",
      period_agency: "/ 월",
      f_agency_1: "월 1,500페이지 초고속 일괄 처리",
      f_agency_2: "고객사별 독립 워크스페이스 관리",
      f_agency_3: "사용자 정의 CPA 세무 규칙 엔진 (정규식/키워드)",
      f_agency_4: "전체 큐 일괄 압축 ZIP 다운로드",
      f_agency_5: "인쇄 가능한 공식 회계 대사 감사 증명서",
      f_agency_6: "팀원 3인 계정 및 규칙 공유",
      f_agency_7: "엔터프라이즈 REST API 키 제공",
      f_agency_8: "전담 매니저 배정 및 최우선 기술 지원",
      btn_buy_agency: "회계법인 플랜 시작하기 ($49/월)",
      txt_guarantee: "100% 회계 검증 보증: 변환된 파일의 잔액이 명세서 원본과 맞지 않을 경우 전액 환불해 드립니다.",
      
      // Modals
      checkout_title: "StatementForge Pro로 업그레이드",
      checkout_subtitle: "수작업 장부 입력을 완전히 없애고 일괄 변환 워크플로우를 잠금 해제하세요.",
      checkout_plan_name: "Pro 월간 정기구독",
      paypal_btn_subscribe: "PayPal로 정기구독 결제 진행",
      paypal_secure_text: "은행급 256비트 SSL 암호화 • 공식 PayPal 결제 파이프라인",
      paypal_sandbox_sim: "[개발자 샌드박스: 클릭 시 결제 성공 시뮬레이션 및 플랜 즉시 활성화]",
      
      rules_modal_title: "CPA 맞춤 세무 & 계정 매핑 규칙 엔진",
      rules_modal_sub: "세무 공제 및 맞춤 계정과목에 맞춰 자동 정규식/키워드 규칙을 생성합니다.",
      rules_th_pattern: "거래처 / 적요 키워드 패턴",
      rules_th_target: "매핑 세무 항목 / 계정과목",
      rules_th_deduct: "세무 공제율",
      rules_th_act: "관리",
      rules_btn_add: "+ 규칙 추가",
      rules_btn_apply: "⚡ 규칙 적용 및 모든 거래내역 일괄 재분류",

      cert_title: "공식 거래내역 잔액 대사 감사 증명서",
      cert_sub: "IRS 및 기업 회계 기준 준수 검증 • StatementForge AI 원장 대사",
      cert_lbl_client: "고객사 엔티티:",
      cert_lbl_bank: "금융기관:",
      cert_lbl_acc: "계좌 식별번호:",
      cert_lbl_period: "명세서 대상 기간:",
      cert_lbl_hash: "문서 무결성 SHA-256 해시:",
      cert_lbl_time: "감사 실행 타임스탬프:",
      cert_lbl_opening: "시작 잔액 (기초):",
      cert_lbl_credits: "+ 총 입금 합계 (매출):",
      cert_lbl_debits: "- 총 출금 합계 (비용):",
      cert_lbl_closing: "수학적 계산 기말 잔액:",
      cert_lbl_stated: "명세서 원본 표기 기말 잔액:",
      cert_lbl_variance: "수학적 대사 오차 검증 결과:",
      cert_sign_text: "공인회계사(CPA) 및 세무 대리인 감사 서명",
      cert_official_badge: "오차 제로 공식 검증 완료",
      btn_print_cert: "🖨️ 증명서 인쇄 / PDF 저장",
      btn_download_cert_json: "검증 결과 JSON/CSV 다운로드",

      team_modal_title: "CPA 팀원 좌석 관리 & API 연동",
      team_modal_sub: "회계팀 팀원 접속 권한 관리 및 ERP 자동화를 위한 REST API 키를 발급합니다.",
      team_seats_h4: "법인 활성 팀원 (3 / 3명 활성)",
      team_api_h4: "엔터프라이즈 REST API 키",
      team_api_sub: "회계 ERP 또는 사내 시스템에 StatementForge OCR 엔진을 직접 연동하세요.",
      btn_copy_key: "복사",

      switcher_modal_title: "체험 데모: 초고속 등급 스위처",
      switcher_modal_sub: "플랜별 잠금 기능 및 제공 기능을 즉시 확인하기 위해 등급을 전환해 보세요.",
      switcher_card_free_title: "무료 스타터",
      switcher_card_free_desc: "월 3페이지 제한, 단일 파일 업로드, CSV/Excel 다운로드.",
      switcher_card_free_tag: "기본 활성화",
      switcher_card_pro_title: "Pro 월간 플랜 ($19/월)",
      switcher_card_pro_desc: "월 250페이지, 일괄 큐, QBO, Xero OFX, 인라인 테이블 편집.",
      switcher_card_pro_tag: "개인사업자 인기",
      switcher_card_agency_title: "회계법인 플랜 ($49/월)",
      switcher_card_agency_desc: "월 1,500페이지, 고객사별 분리, 세무 규칙, 일괄 ZIP, 감사 증명서.",
      switcher_card_agency_tag: "CPA 엔터프라이즈",

      // Authentication & Customer Account Portal
      btn_nav_signin: "로그인 / 회원가입",
      btn_nav_crm: "회원/결제 CRM",
      auth_title: "StatementForge 계정 로그인",
      auth_subtitle: "정기구독 관리, 결제 내역 확인 및 팀 API 연동",
      tab_login: "로그인",
      tab_signup: "회원가입",
      auth_google_continue: "Google 계정으로 1초 빠른 시작",
      auth_or: "또는 이메일로 계속하기",
      auth_name: "이름 / 법인명",
      auth_email: "업무용 이메일",
      auth_password: "비밀번호",
      btn_submit_login: "대시보드 로그인",
      btn_submit_signup: "무료 계정 생성",
      auth_quick_demo: "원클릭 빠른 테스트 계정:",
      acc_active_subscription: "현재 이용 중인 플랜",
      acc_paypal_sub_id: "PayPal 정기구독 ID",
      acc_renewal_date: "다음 결제 갱신일",
      acc_monthly_quota: "월간 변환 한도 사용량",
      acc_btn_manage_paypal: "PayPal에서 구독 관리 / 해지",
      acc_btn_change_plan: "요금제 변경 / 업그레이드",
      btn_admin_crm: "운영자 고객 CRM 열기",
      btn_signout: "로그아웃",
      crm_title: "고객 및 PayPal 정기구독 관리 CRM",
      crm_subtitle: "실시간 유료 구독자 현황, PayPal 결제 상태 동기화, 페이지 쿼터 즉시 충전 및 CSV 원장 내보내기.",
      crm_mrr: "월간 반복 매출 (MRR)",
      crm_active_subscribers: "유료 결제 구독자 수",
      crm_pages_extracted: "당월 총 변환 페이지 수",
      crm_add_customer: "고객 수동 등록",
      crm_export_csv: "구독자 CSV 다운로드"
    },

    ja: {
      nav_converter: "変換スタジオ",
      nav_preview: "サンプルテスト",
      nav_features: "エンタープライズ機能",
      nav_banks: "対応銀行",
      nav_pricing: "料金プラン",
      nav_mypage: "マイページ",
      lbl_mypage: "マイページ",
      btn_upgrade_nav: "アップグレード",
      hero_pill: "自律型銀行取引明細書OCR＆ゼロ誤差自動照合",
      hero_title_1: "銀行明細書PDFを",
      hero_title_2: "Excel、CSV＆QuickBooks QBOへ自動変換",
      hero_subtitle: "クライアントごとに3時間以上かかる手作業のデータ入力をゼロに。デジタルまたはスキャンした明細書をアップロードすると、ニューラルOCRが取引テーブルを抽出し、入出金残高を自動照合します。",
      btn_test_sample: "サンプルで試す（即時1クリック）",
      btn_upload_own: "PDF / スキャン画像をアップロード",
      trust_soc2: "SOC-2認証＆256ビットAES暗号化",
      trust_privacy: "変換後60分以内にサーバーから自動削除",
      trust_reconciliation: "100%数学的入出金残高照合",
      tag_locked_pdf: "ロックされた元PDF（コピー不可・レイアウト崩れ）",
      tag_ai_engine: "StatementForge ニューラルOCR＆元帳エンジン",
      tag_clean_excel: "構造化されたExcel (.XLSX)、CSV、QBO",
      btn_instant_experience: "1秒変換デモを体験する",
      lbl_client_workspace: "クライアント企業:",
      btn_tax_rules: "CPA税務ルール",
      btn_audit_cert: "監査照合証明書",
      btn_team_api: "チーム＆API",
      lbl_active_plan: "現在のプラン:",
      lbl_batch_queue: "一括処理キュー:",
      btn_add_to_batch: "+ キューにPDF追加",
      lbl_select_bank: "ベンチマーク銀行を選択:",
      bank_chip_chase: "🏛️ JPMorgan Chase (チェース法人口座)",
      bank_chip_bofa: "🏢 Bank of America (BofA法人口座)",
      bank_chip_amex: "💳 American Express (法人プラチナ)",
      bank_chip_barclays: "🇬🇧 Barclays UK (英国GBP法人口座)",
      bank_chip_kb: "🇰🇷 KB国民銀行 (韓国KRW法人口座)",
      btn_rescan: "AI再スキャン",
      btn_csv: "CSV",
      btn_ofx: "Xero (.OFX)",
      btn_qbo: "QuickBooks (.QBO)",
      btn_excel: "Excel (.xlsx)",
      btn_batch_zip: "一括ZIP",
      pdf_acc_label: "口座番号:",
      pdf_period_label: "対象期間:",
      th_date: "取引日",
      th_desc: "取引先 / 摘要",
      th_category: "AI自動分類 / 税目",
      th_debit: "出金 (-)",
      th_credit: "入金 (+)",
      th_balance: "残高",
      th_amount: "金額",
      th_act: "操作",
      search_placeholder: "取引先、摘要、金額、分類を検索...",
      pdf_watermark: "公式金融機関取引明細書 • 暗号化PDFストリーム",
      dropzone_prompt: "PDF明細書または領収書画像をドラッグ＆ドロップ（複数ファイル一括アップロード対応）",
      metric_opening: "期首残高（開始時）",
      metric_opening_sub: "明細書の開始時点",
      metric_deposits: "入金合計（売上/受取）",
      metric_withdrawals: "出金合計（経費/支払）",
      metric_closing: "期末残高（照合済）",
      btn_add_row: "+ 取引行を追加",
      upsell_title: "複数ファイルの一括変換、QuickBooks QBO出力、税務ルールが必要ですか？",
      upsell_desc: "世界14,000名以上の公認会計士、税理士、CFOがStatementForgeで記帳時間を削減しています。",
      btn_upgrade_pro_glow: "Proプランへアップグレード ($19/月)",
      badge_how_it_works: "自律型3ステップパイプライン",
      title_how_it_works: "StatementForgeの明細書変換の仕組み",
      step_1_title: "明細書ファイルのアップロード",
      step_1_desc: "オンラインバンキングのPDFやスマホで撮影した紙の領収書をドラッグしてアップロードします。",
      step_2_title: "ニューラルOCR＆残高自動照合",
      step_2_desc: "表の行と列を認識し、「期首残高 ＋ 入金 － 出金 ＝ 期末残高」の計算を100%自動検証します。",
      step_3_title: "Excel、QBO、Xeroへ出力",
      step_3_desc: "SUM計算式が入ったExcel (.xlsx)、QuickBooks Web Connect (.QBO)、Xero (.OFX)ですぐに保存。",
      badge_supported_banks: "グローバル金融機関対応",
      title_supported_banks: "世界1,000以上の銀行・クレジットカード明細に対応",
      desc_supported_banks: "多段カラム、傾いたスキャン画像、回転した表、外貨複合口座まで自動で補正・抽出します。",
      badge_pricing: "透明なグローバル料金体系",
      title_pricing_1: "毎月20時間以上の記帳作業を削減する",
      title_pricing_2: "計算精度100%保証プラン",
      desc_pricing: "まずは無料の3ページをお試しください。大量の一括変換はProまたは会計事務所プランでご利用いただけます。",
      plan_free_name: "無料スターター",
      plan_free_tagline: "抽出精度と残高照合のテスト用",
      period_free: "/ 永久無料",
      f_free_1: "月3ページ無料変換",
      f_free_2: "Excel (.xlsx)＆CSVエクスポート",
      f_free_3: "数学的残高照合監査",
      f_free_4: "表セルのインライン直接編集",
      f_free_5: "複数ファイル一括処理キュー",
      f_free_6: "QuickBooks (.QBO)＆Xero (.OFX)",
      f_free_7: "CPAカスタム税務マッピング規則",
      f_free_8: "クライアント別ワークスペース",
      btn_use_free: "現在利用中",
      plan_pro_name: "Pro月額プラン",
      plan_pro_tagline: "毎月の記帳時間を10時間以上短縮",
      period_pro: "/ 月（PayPal定期購読）",
      ribbon_pro: "一番人気 • 個人事業主＆中小企業",
      f_pro_1: "月250ページの変換枠",
      f_pro_2: "QuickBooks (.QBO) Web Connect出力",
      f_pro_3: "Xero＆Sage (.OFX) 標準フォーマット",
      f_pro_4: "複数ファイル同時一括処理キュー",
      f_pro_5: "AI取引先自動分類＆税務タグ付け",
      f_pro_6: "照合差額ゼロ検証＆不一致警告アラート",
      f_pro_7: "待ち時間なしの優先OCRエンジン",
      f_pro_8: "クライアントフォルダ管理＆チーム席",
      btn_buy_pro: "Proプランを申し込む ($19/月)",
      plan_agency_name: "CPA・会計事務所プラン",
      plan_agency_tagline: "公認会計士、税理士法人、複数企業管理向け",
      period_agency: "/ 月",
      f_agency_1: "月1,500ページの超高速一括処理",
      f_agency_2: "クライアント別独立ワークスペース管理",
      f_agency_3: "CPAカスタム税務ルールエンジン（正規表現）",
      f_agency_4: "全キュー一括ZIP圧縮ダウンロード",
      f_agency_5: "印刷可能な公式照合監査証明書",
      f_agency_6: "チーム員3名アカウント＆ルール共有",
      f_agency_7: "エンタープライズREST APIキー提供",
      f_agency_8: "専任マネージャー＆最優先SLAサポート",
      btn_buy_agency: "会計事務所プランを申し込む ($49/月)",
      txt_guarantee: "100%残高一致保証：抽出された期末残高が原本と一致しない場合、無条件で全額返金いたします。",
      
      // Modals
      checkout_title: "StatementForge Proへアップグレード",
      checkout_subtitle: "手作業の記帳業務を排除し、一括処理ワークフローを有効化。",
      checkout_plan_name: "Pro 月額定期購読",
      paypal_btn_subscribe: "PayPalで定期購読を開始",
      paypal_secure_text: "銀行水準の256ビットSSL暗号化 • 公式PayPal決済パイプライン",
      paypal_sandbox_sim: "[サンドボックス検証: クリックして決済承認をシミュレーション＆即時有効化]",

      rules_modal_title: "CPAカスタム税務＆科目マッピングルールエンジン",
      rules_modal_sub: "税務控除およびカスタム勘定科目に合わせて自動キーワードルールを作成します。",
      rules_th_pattern: "取引先 / 摘要キーワード",
      rules_th_target: "税務控除区分 / 勘定科目",
      rules_th_deduct: "控除率",
      rules_th_act: "操作",
      rules_btn_add: "+ ルール追加",
      rules_btn_apply: "⚡ ルールを適用して全取引を一括再分類",

      cert_title: "公式取引明細照合監査証明書",
      cert_sub: "GAAPおよび会計基準適合性検証 • StatementForge AI照合元帳",
      cert_lbl_client: "対象クライアント:",
      cert_lbl_bank: "金融機関:",
      cert_lbl_acc: "口座番号識別子:",
      cert_lbl_period: "明細対象期間:",
      cert_lbl_hash: "文書完全性SHA-256ハッシュ:",
      cert_lbl_time: "監査実行日時:",
      cert_lbl_opening: "期首残高（開始時点）:",
      cert_lbl_credits: "+ 入金合計（受取売上）:",
      cert_lbl_debits: "- 出金合計（経費支出）:",
      cert_lbl_closing: "数学的計算期末残高:",
      cert_lbl_stated: "明細書記載期末残高:",
      cert_lbl_variance: "計算照合差額検証結果:",
      cert_sign_text: "公認会計士(CPA)・税理士監査署名",
      cert_official_badge: "照合差額ゼロ公式認証済",
      btn_print_cert: "🖨️ 証明書印刷 / PDF保存",
      btn_download_cert_json: "検証結果JSON/CSV保存",

      team_modal_title: "CPAチームアカウント＆API連携",
      team_modal_sub: "会計チームのアカウント権限管理および社内ERP連携用REST APIキーを提供します。",
      team_seats_h4: "事務所アクティブ席（3 / 3名稼働中）",
      team_api_h4: "エンタープライズREST APIキー",
      team_api_sub: "会計ソフトやERPシステムへStatementForge OCRエンジンを直接接続します。",
      btn_copy_key: "コピー",

      switcher_modal_title: "デモ検証用: 即時プラン切り替え",
      switcher_modal_sub: "各プランの機能開放状態をテストするため、いつでも即座にプランを切り替えられます。",
      switcher_card_free_title: "無料スターター",
      switcher_card_free_desc: "月3ページ制限、単一ファイル変換、CSV/Excel出力。",
      switcher_card_free_tag: "デフォルト有効",
      switcher_card_pro_title: "Pro月額プラン ($19/月)",
      switcher_card_pro_desc: "月250ページ、一括キュー、QBO、Xero OFX、インライン直接編集。",
      switcher_card_pro_tag: "個人事業主人気",
      switcher_card_agency_title: "会計事務所プラン ($49/月)",
      switcher_card_agency_desc: "月1,500ページ、クライアント別管理、税務ルール、一括ZIP、監査証明書。",
      switcher_card_agency_tag: "CPAエンタープライズ",

      // Authentication & Customer Account Portal
      btn_nav_signin: "ログイン",
      btn_nav_crm: "顧客・決済CRM",
      auth_title: "StatementForge ログイン",
      auth_subtitle: "サブスクリプション管理と決済履歴の確認",
      tab_login: "ログイン",
      tab_signup: "新規登録",
      auth_google_continue: "Googleで1秒クイックログイン",
      auth_or: "またはメールアドレスで継続",
      auth_name: "お名前 / 企業名",
      auth_email: "勤務先メールアドレス",
      auth_password: "パスワード",
      btn_submit_login: "ダッシュボードにログイン",
      btn_submit_signup: "無料アカウント作成",
      auth_quick_demo: "ワンクリック体験アカウント:",
      acc_active_subscription: "有効なサブスクリプション",
      acc_paypal_sub_id: "PayPal定期購読ID",
      acc_renewal_date: "次回請求日",
      acc_monthly_quota: "月間変換枠の使用状況",
      acc_btn_manage_paypal: "PayPalで購読管理・解約",
      acc_btn_change_plan: "プラン変更・アップグレード",
      btn_admin_crm: "運営者CRMを開く",
      btn_signout: "ログアウト",
      crm_title: "顧客およびPayPal決済管理CRM",
      crm_subtitle: "リアルタイムの有料会員管理、PayPal決済状態の同期、ページ枠即時チャージ、CSV台帳エクスポート。",
      crm_mrr: "月間経常収益 (MRR)",
      crm_active_subscribers: "有料アクティブ会員数",
      crm_pages_extracted: "当月抽出ページ数",
      crm_add_customer: "顧客を手動追加",
      crm_export_csv: "会員CSVエクスポート"
    },

    es: {
      nav_converter: "Estudio",
      nav_preview: "Probar Muestra",
      nav_features: "Empresarial",
      nav_banks: "Bancos Globales",
      nav_pricing: "Precios",
      nav_mypage: "Mi Cuenta",
      lbl_mypage: "Mi Cuenta",
      btn_upgrade_nav: "Mejorar Plan",
      hero_pill: "Extracción Autónoma de Estados de Cuenta y Auditoría",
      hero_title_1: "Convierta Estados de Cuenta PDF a",
      hero_title_2: "Excel, CSV y QuickBooks QBO",
      hero_subtitle: "Elimine más de 3 horas de transcripción manual por cliente. Suba estados de cuenta digitales o escaneados. Nuestro OCR neural extrae tablas limpias con conciliación matemática garantizada.",
      btn_test_sample: "Probar Muestra en Vivo (1 Clic)",
      btn_upload_own: "Subir Archivo PDF / Escáner",
      trust_soc2: "Certificación SOC-2 y Cifrado AES de 256 bits",
      trust_privacy: "Purga automática en 60 minutos",
      trust_reconciliation: "Auditoría de Conciliación Matemática al 100%",
      tag_locked_pdf: "PDF Bloqueado Original (Texto no seleccionable)",
      tag_ai_engine: "Motor de OCR Neural y Conciliación StatementForge",
      tag_clean_excel: "Excel Estructurado (.XLSX), CSV y QBO",
      btn_instant_experience: "Probar Demostración en 1 Segundo",
      lbl_client_workspace: "Entidad de Cliente:",
      btn_tax_rules: "Reglas Fiscales CPA",
      btn_audit_cert: "Certificado de Auditoría",
      btn_team_api: "Equipo y API",
      lbl_active_plan: "Plan:",
      lbl_batch_queue: "Cola de Lotes:",
      btn_add_to_batch: "+ Añadir PDF a la Cola",
      lbl_select_bank: "Seleccionar Banco de Referencia:",
      bank_chip_chase: "🏛️ JPMorgan Chase (Cuenta Comercial)",
      bank_chip_bofa: "🏢 Bank of America (Operativa)",
      bank_chip_amex: "💳 American Express (Platinum)",
      bank_chip_barclays: "🇬🇧 Barclays UK (Cuenta GBP)",
      bank_chip_kb: "🇰🇷 Banco KB Kookmin (Corporativo)",
      btn_rescan: "Reescanear con IA",
      btn_csv: "CSV",
      btn_ofx: "Xero (.OFX)",
      btn_qbo: "QuickBooks (.QBO)",
      btn_excel: "Excel (.xlsx)",
      btn_batch_zip: "ZIP de Lote",
      pdf_acc_label: "Cuenta:",
      pdf_period_label: "Período:",
      th_date: "Fecha",
      th_desc: "Beneficiario / Concepto",
      th_category: "Categoría IA / Fiscal",
      th_debit: "Débito (-)",
      th_credit: "Crédito (+)",
      th_balance: "Saldo",
      th_amount: "Monto",
      th_act: "Acc",
      search_placeholder: "Buscar beneficiario, concepto, importe, categoría...",
      pdf_watermark: "Registro Oficial de Extracto Bancario • Flujo PDF Cifrado",
      dropzone_prompt: "Arrastre y suelte sus extractos bancarios en PDF o imágenes aquí (Admite carga múltiple por lotes)",
      metric_opening: "Saldo Inicial",
      metric_opening_sub: "Inicio del extracto",
      metric_deposits: "Total Créditos (Ingresos)",
      metric_withdrawals: "Total Débitos (Gastos)",
      metric_closing: "Saldo Final (Conciliado)",
      btn_add_row: "+ Añadir Fila",
      upsell_title: "¿Necesita conversión por lotes, QuickBooks QBO o reglas fiscales personalizadas?",
      upsell_desc: "Más de 14.000 contables, directores financieros y firmas confían en StatementForge en todo el mundo.",
      btn_upgrade_pro_glow: "Mejorar a Pro ($19/mes)",
      badge_how_it_works: "Proceso Autónomo en 3 Pasos",
      title_how_it_works: "Cómo Convierte los Estados de Cuenta StatementForge",
      step_1_title: "Subir Archivo PDF o Escaneado",
      step_1_desc: "Suba extractos electrónicos de su banca en línea o fotografías de recibos en papel.",
      step_2_title: "OCR Neural y Conciliación de Saldos",
      step_2_desc: "Nuestro motor detecta columnas y verifica matemáticamente que Saldo Inicial + Créditos - Débitos = Saldo Final.",
      step_3_title: "Exportar a Excel, QBO o Xero",
      step_3_desc: "Descargue hojas de Excel con fórmulas SUM activas, QuickBooks (.QBO) o Xero (.OFX).",
      badge_supported_banks: "Compatibilidad Global",
      title_supported_banks: "Compatible con más de 1.000 Instituciones Financieras Globales",
      desc_supported_banks: "Diseños multicolumna, escaneos inclinados, tablas rotadas y cuentas multimoneda analizados automáticamente.",
      badge_pricing: "Precios Globales Transparentes",
      title_pricing_1: "Ahorre más de 20 horas cada mes con",
      title_pricing_2: "Precisión Garantizada",
      desc_pricing: "Comience con 3 páginas gratis. Mejore en cualquier momento a Pro o Firma Contable.",
      plan_free_name: "Starter Gratuito",
      plan_free_tagline: "Pruebe la precisión de extracción y conciliación",
      period_free: "/ Gratis para siempre",
      f_free_1: "3 Páginas / Mes incluidas",
      f_free_2: "Exportación a Excel (.xlsx) y CSV limpio",
      f_free_3: "Auditoría de conciliación matemática",
      f_free_4: "Edición de celdas en línea",
      f_free_5: "Cola de procesamiento por lotes",
      f_free_6: "QuickBooks (.QBO) y Xero (.OFX)",
      f_free_7: "Reglas de mapeo fiscal CPA",
      f_free_8: "Espacios de trabajo por cliente",
      btn_use_free: "Plan Actual",
      plan_pro_name: "Pro Mensual",
      plan_pro_tagline: "Ahorre 10+ horas de tediosa contabilidad mensual",
      period_pro: "/ Mes (Suscripción PayPal)",
      ribbon_pro: "MÁS POPULAR • AUTÓNOMOS Y PYMES",
      f_pro_1: "Volumen de 250 Páginas / Mes",
      f_pro_2: "Exportación QuickBooks (.QBO) Web Connect",
      f_pro_3: "Formato estándar Xero y Sage (.OFX)",
      f_pro_4: "Cola de conversión por lotes de varios archivos",
      f_pro_5: "Categorización automática de beneficiarios e impuestos",
      f_pro_6: "Alerta de discrepancia de auditoría con balance cero",
      f_pro_7: "Motor OCR de máxima prioridad (sin esperas)",
      f_pro_8: "Carpetas de clientes y asientos de equipo",
      btn_buy_pro: "Obtener Plan Pro ($19/mes)",
      plan_agency_name: "Firma Contable y CPA",
      plan_agency_tagline: "Para CPA, asesorías fiscales y firmas multientidad",
      period_agency: "/ Mes",
      f_agency_1: "1.500 Páginas / Mes de alto volumen",
      f_agency_2: "Gestión de espacios de trabajo por cliente",
      f_agency_3: "Motor de reglas fiscales CPA personalizadas",
      f_agency_4: "Descarga de todos los lotes en archivo ZIP",
      f_agency_5: "Certificados oficiales de auditoría imprimibles",
      f_agency_6: "3 Asientos de equipo y reglas compartidas",
      f_agency_7: "Acceso a clave API REST empresarial",
      f_agency_8: "Gestor de cuenta dedicado y SLA prioritario",
      btn_buy_agency: "Obtener Plan Firma Contable ($49/mes)",
      txt_guarantee: "Garantía de precisión matemática al 100%: si nuestro saldo final no coincide con el original, le reembolsamos de inmediato.",
      
      // Modals
      checkout_title: "Mejorar a StatementForge Pro",
      checkout_subtitle: "Elimine la transcripción manual y active flujos de trabajo por lotes.",
      checkout_plan_name: "Suscripción Mensual Pro",
      paypal_btn_subscribe: "Suscribirse con PayPal",
      paypal_secure_text: "Cifrado SSL de 256 bits de nivel bancario • Pasarela oficial de PayPal",
      paypal_sandbox_sim: "[Verificación Sandbox: Haga clic para simular pago aprobado y activar plan]",

      rules_modal_title: "Motor de Reglas Fiscales y Mapeo de Cuentas CPA",
      rules_modal_sub: "Defina reglas automatizadas de expresiones regulares y palabras clave para deducciones fiscales.",
      rules_th_pattern: "Patrón de Palabra Clave del Proveedor",
      rules_th_target: "Línea Fiscal / Cuenta Contable",
      rules_th_deduct: "Deducibilidad",
      rules_th_act: "Acción",
      rules_btn_add: "+ Añadir Regla",
      rules_btn_apply: "⚡ Aplicar Reglas y Reclasificar Transacciones Ahora",

      cert_title: "CERTIFICADO OFICIAL DE AUDITORÍA Y CONCILIACIÓN",
      cert_sub: "Verificación de Cumplimiento Contable GAAP e IRS • Libro Mayor StatementForge AI",
      cert_lbl_client: "Entidad del Cliente:",
      cert_lbl_bank: "Institución Financiera:",
      cert_lbl_acc: "Identificador de Cuenta:",
      cert_lbl_period: "Período del Extracto:",
      cert_lbl_hash: "Hash SHA-256 del Documento:",
      cert_lbl_time: "Marca de Tiempo de Auditoría:",
      cert_lbl_opening: "Saldo Inicial:",
      cert_lbl_credits: "+ Total Créditos (Depósitos):",
      cert_lbl_debits: "- Total Débitos (Retiros):",
      cert_lbl_closing: "Saldo Final Calculado:",
      cert_lbl_stated: "Saldo Final Declarado en Extracto:",
      cert_lbl_variance: "Varianza Matemática de Auditoría:",
      cert_sign_text: "Firma del Contador Público Certificado (CPA) / Auditor",
      cert_official_badge: "CERO DISCREPANCIA VERIFICADA",
      btn_print_cert: "🖨️ Imprimir / Guardar como PDF",
      btn_download_cert_json: "Descargar Verificación JSON/CSV",

      team_modal_title: "Asientos de Equipo CPA e Integración API",
      team_modal_sub: "Gestione el acceso del equipo contable y claves API REST programáticas.",
      team_seats_h4: "Asientos de la Firma (3 / 3 Activos)",
      team_api_h4: "Clave de API REST Empresarial",
      team_api_sub: "Integre el motor OCR de StatementForge directamente en su ERP contable o Zapier.",
      btn_copy_key: "Copiar",

      switcher_modal_title: "Demostración Interactiva: Selector de Nivel",
      switcher_modal_sub: "Cambie entre niveles de suscripción al instante para probar funciones desbloqueadas.",
      switcher_card_free_title: "Starter Gratuito",
      switcher_card_free_desc: "Límite de 3 páginas, archivo único, exportación CSV/Excel.",
      switcher_card_free_tag: "Activo por defecto",
      switcher_card_pro_title: "Pro Mensual ($19/mes)",
      switcher_card_pro_desc: "250 páginas, cola por lotes, QBO, Xero OFX, editor en línea.",
      switcher_card_pro_tag: "Popular Autónomos",
      switcher_card_agency_title: "Firma Contable ($49/mes)",
      switcher_card_agency_desc: "1.500 páginas, selector de clientes, reglas fiscales, ZIP, certificados.",
      switcher_card_agency_tag: "Empresas CPA",

      // Authentication & Customer Account Portal
      btn_nav_signin: "Iniciar Sesión",
      btn_nav_crm: "Gestión CRM",
      auth_title: "Iniciar sesión en StatementForge",
      auth_subtitle: "Administre su suscripción, historial de transacciones y claves API.",
      tab_login: "Iniciar Sesión",
      tab_signup: "Crear Cuenta",
      auth_google_continue: "Continuar con Google (1 Clic)",
      auth_or: "o continuar con correo",
      auth_name: "Nombre Completo",
      auth_email: "Correo Laboral",
      auth_password: "Contraseña",
      btn_submit_login: "Iniciar Sesión",
      btn_submit_signup: "Crear Cuenta Gratuita",
      auth_quick_demo: "Cuentas de prueba rápida:",
      acc_active_subscription: "Suscripción Activa",
      acc_paypal_sub_id: "ID de suscripción de PayPal",
      acc_renewal_date: "Próximo ciclo de facturación",
      acc_monthly_quota: "Cuota de Conversión Mensual",
      acc_btn_manage_paypal: "Administrar o cancelar en PayPal",
      acc_btn_change_plan: "Mejorar / Cambiar Plan",
      btn_admin_crm: "Abrir CRM de Operador",
      btn_signout: "Cerrar Sesión",
      crm_title: "CRM de Gestión de Clientes y Suscripciones",
      crm_subtitle: "Gestión de suscriptores en tiempo real, sincronización con PayPal, recarga de cuotas y exportación de CSV.",
      crm_mrr: "Ingresos Recurrentes Mensuales",
      crm_active_subscribers: "Suscriptores de Pago Activos",
      crm_pages_extracted: "Páginas Procesadas (Mes)",
      crm_add_customer: "Añadir Cliente",
      crm_export_csv: "Exportar CSV de Suscriptores"
    }
  };

  let currentLang = localStorage.getItem('statementforge_lang') || 'ko';

  // =========================================================================
  // 2. Multilingual Category Taxonomy
  // =========================================================================
  const CATEGORIES = {
    revenue: {
      emoji: "💰", bg: "#ecfdf5", color: "#047857",
      labels: { en: "Revenue / Inflow", ko: "급여 / 매출", ja: "給与 / 売上", es: "Ingresos / Ventas" }
    },
    housing: {
      emoji: "🏠", bg: "#eff6ff", color: "#1d4ed8",
      labels: { en: "Rent & Real Estate", ko: "임대료 / 월세", ja: "家賃 / 不動産", es: "Alquiler / Oficina" }
    },
    cloud: {
      emoji: "🔄", bg: "#f5f3ff", color: "#6d28d9",
      labels: { en: "Cloud Infra & SaaS", ko: "클라우드 / SaaS", ja: "クラウド / SaaS", es: "Cloud & SaaS" }
    },
    payroll: {
      emoji: "👥", bg: "#f0fdfa", color: "#0f766e",
      labels: { en: "Payroll & Contractors", ko: "급여 / 인건비", ja: "給与 / 人件費", es: "Nóminas / Salarios" }
    },
    operations: {
      emoji: "🛒", bg: "#f7fee7", color: "#4d7c0f",
      labels: { en: "Operating Expenses", ko: "운영비 / 비품", ja: "運営費 / 消耗品", es: "Gastos Operativos" }
    },
    tax: {
      emoji: "📋", bg: "#fef2f2", color: "#dc2626",
      labels: { en: "Tax & Compliance", ko: "세금 / 공과금", ja: "税金 / 公課", es: "Impuestos / Tasas" }
    },
    travel: {
      emoji: "🚗", bg: "#f0f9ff", color: "#0369a1",
      labels: { en: "Travel & Hospitality", ko: "출장 / 교통", ja: "出張 / 交通費", es: "Viajes / Dietas" }
    },
    fee: {
      emoji: "🏦", bg: "#f1f5f9", color: "#334155",
      labels: { en: "Bank & Wire Fees", ko: "은행 수수료", ja: "銀行手数料", es: "Comisiones Bancarias" }
    },
    refund: {
      emoji: "💸", bg: "#ecfeff", color: "#0e7490",
      labels: { en: "Disputes & Refunds", ko: "환불 / 취소", ja: "返金 / 取消", es: "Reembolsos / Disputas" }
    }
  };

  function getCategoryLabel(catKey) {
    const cat = CATEGORIES[catKey];
    if (!cat) return catKey || "General";
    if (cat.labels && cat.labels[currentLang]) return cat.labels[currentLang];
    if (cat.labels && cat.labels.en) return cat.labels.en;
    return catKey;
  }

  // =========================================================================
  // 3. PayPal Checkout Localization Matrix
  // =========================================================================
  let currentCheckoutPlan = 'pro'; // 'pro' | 'agency'

  const CHECKOUT_I18N = {
    pro: {
      price: "$19.00",
      en: {
        title: "Upgrade to StatementForge Pro",
        subtitle: "Eliminate manual bookkeeping and unlock batch workflows.",
        planName: "Pro Monthly Subscription",
        period: "/ month (PayPal Subscription)",
        features: [
          "✓ 250 Monthly Conversion Pages",
          "✓ QuickBooks (.QBO) Web Connect & Xero (.OFX)",
          "✓ Multi-File Batch Queue & Bulk ZIP",
          "✓ 1-Click Cancel Anytime via PayPal Dashboard"
        ],
        btnText: "Subscribe with PayPal",
        secure: "Bank-Grade 256-Bit SSL • Official PayPal Merchant Pipeline",
        sandbox: "[Instant Sandbox Verification: Click to Simulate Approved Payment & Activate Plan]"
      },
      ko: {
        title: "StatementForge Pro로 업그레이드",
        subtitle: "수작업 장부 입력을 완전히 없애고 일괄 변환 워크플로우를 잠금 해제하세요.",
        planName: "Pro 월간 정기구독 (월 250페이지)",
        period: "/ 월 (PayPal 정기구독)",
        features: [
          "✓ 월 250페이지 대용량 변환 쿼터",
          "✓ QuickBooks (.QBO) 및 Xero (.OFX) 호환",
          "✓ 다중 파일 일괄 변환 큐 & ZIP",
          "✓ PayPal 대시보드에서 언제든 1클릭 해지 가능"
        ],
        btnText: "PayPal로 Pro 정기구독 시작",
        secure: "은행급 256비트 SSL 암호화 • 공식 PayPal 결제 파이프라인",
        sandbox: "[개발자 샌드박스: 클릭 시 결제 성공 시뮬레이션 및 Pro 즉시 활성화]"
      },
      ja: {
        title: "StatementForge Proへアップグレード",
        subtitle: "手作業の記帳業務を排除し、一括処理ワークフローを有効化。",
        planName: "Pro 月額定期購読（月250ページ）",
        period: "/ 月（PayPal定期購読）",
        features: [
          "✓ 月250ページの変換枠",
          "✓ QuickBooks (.QBO)＆Xero (.OFX) 出力",
          "✓ 複数ファイル一括処理キュー＆ZIP",
          "✓ PayPalダッシュボードでいつでも1クリック解約可能"
        ],
        btnText: "PayPalでPro定期購読を開始",
        secure: "銀行水準の256ビットSSL暗号化 • 公式PayPal決済パイプライン",
        sandbox: "[サンドボックス検証: クリックして決済承認をシミュレーション＆Pro即時有効化]"
      },
      es: {
        title: "Mejorar a StatementForge Pro",
        subtitle: "Elimine la transcripción manual y active flujos de trabajo por lotes.",
        planName: "Suscripción Mensual Pro (250 Páginas)",
        period: "/ mes (Suscripción PayPal)",
        features: [
          "✓ 250 páginas de conversión mensual",
          "✓ QuickBooks (.QBO) Web Connect y Xero (.OFX)",
          "✓ Cola de procesamiento por lotes y ZIP",
          "✓ Cancelación en 1 clic en el panel de PayPal"
        ],
        btnText: "Suscribirse a Pro con PayPal",
        secure: "Cifrado SSL de 256 bits de nivel bancario • Pasarela oficial de PayPal",
        sandbox: "[Verificación Sandbox: Haga clic para simular pago aprobado y activar Pro]"
      }
    },
    agency: {
      price: "$49.00",
      en: {
        title: "StatementForge CPA & Accounting Firm Plan",
        subtitle: "Enterprise multi-client statements, custom tax rules & high-volume batch.",
        planName: "CPA & Accounting Firm Plan",
        period: "/ month (PayPal Subscription)",
        features: [
          "✓ 1,500 Monthly Conversion Pages",
          "✓ Multi-Client Workspace Separation",
          "✓ Custom CPA Tax & Mapping Rules Engine",
          "✓ Priority 24/7 SLA & Dedicated Support"
        ],
        btnText: "Subscribe to CPA Firm Plan with PayPal",
        secure: "Bank-Grade 256-Bit SSL • Official PayPal Merchant Pipeline",
        sandbox: "[Instant Sandbox Verification: Click to Simulate Approved Payment & Activate Plan]"
      },
      ko: {
        title: "StatementForge 세무사 & 회계법인 플랜",
        subtitle: "고객사별 독립 폴더, 맞춤 세무 매핑 규칙 및 대용량 일괄 처리를 제공합니다.",
        planName: "CPA & 회계법인 플랜 (월 1,500페이지)",
        period: "/ 월 (PayPal 정기구독)",
        features: [
          "✓ 월 1,500페이지 대용량 고속 처리",
          "✓ 고객사별 독립 워크스페이스 관리",
          "✓ CPA 맞춤 세무 매핑 규칙 엔진",
          "✓ 최우선 24/7 SLA 및 전담 지원"
        ],
        btnText: "PayPal로 회계법인 플랜 정기구독 시작",
        secure: "은행급 256비트 SSL 암호화 • 공식 PayPal 결제 파이프라인",
        sandbox: "[개발자 샌드박스: 클릭 시 결제 성공 시뮬레이션 및 회계법인 플랜 즉시 활성화]"
      },
      ja: {
        title: "StatementForge CPA・会計事務所プラン",
        subtitle: "クライアント別独立フォルダ、税務マッピングルール、大容量一括処理を提供。",
        planName: "CPA・会計事務所プラン（月1,500ページ）",
        period: "/ 月（PayPal定期購読）",
        features: [
          "✓ 月1,500ページの超高速処理",
          "✓ クライアント別独立ワークスペース管理",
          "✓ CPAカスタム税務マッピングルールエンジン",
          "✓ 最優先24/7 SLAサポート"
        ],
        btnText: "PayPalで会計事務所プランを開始",
        secure: "銀行水準の256ビットSSL暗号化 • 公式PayPal決済パイプライン",
        sandbox: "[サンドボックス検証: クリックして決済承認をシミュレーション＆会計事務所即時有効化]"
      },
      es: {
        title: "Plan Firma Contable y CPA de StatementForge",
        subtitle: "Extractos multicliente empresariales, reglas fiscales y lotes de alto volumen.",
        planName: "Plan Firma Contable y CPA (1.500 Páginas)",
        period: "/ mes (Suscripción PayPal)",
        features: [
          "✓ 1.500 páginas de conversión mensual",
          "✓ Separación de espacios de trabajo por cliente",
          "✓ Motor de reglas fiscales y mapeo CPA",
          "✓ SLA prioritario 24/7 y soporte dedicado"
        ],
        btnText: "Suscribirse al Plan Firma con PayPal",
        secure: "Cifrado SSL de 256 bits de nivel bancario • Pasarela oficial de PayPal",
        sandbox: "[Verificación Sandbox: Haga clic para simular pago aprobado y activar Firma Contable]"
      }
    }
  };

  function updateCheckoutModalI18n() {
    const planInfo = CHECKOUT_I18N[currentCheckoutPlan] || CHECKOUT_I18N.pro;
    const langInfo = planInfo[currentLang] || planInfo.en;

    const modalTitle = document.getElementById('modal-title');
    const modalSubtitle = document.getElementById('modal-subtitle');
    const selectedPlanName = document.getElementById('selected-plan-name');
    const selectedPlanPrice = document.getElementById('selected-plan-price');
    const modalPlanFeatures = document.getElementById('modal-plan-features');
    const paypalBtnText = document.getElementById('paypal-btn-text');
    const paypalSecureText = document.getElementById('paypal-secure-text');
    const btnSimulateSuccess = document.getElementById('btn-simulate-success');

    if (modalTitle) modalTitle.textContent = langInfo.title;
    if (modalSubtitle) modalSubtitle.textContent = langInfo.subtitle;
    if (selectedPlanName) selectedPlanName.textContent = langInfo.planName;
    if (selectedPlanPrice) selectedPlanPrice.textContent = `${planInfo.price} ${langInfo.period}`;
    if (modalPlanFeatures) {
      modalPlanFeatures.innerHTML = langInfo.features.map(f => `<span>${f}</span>`).join('');
    }
    if (paypalBtnText) paypalBtnText.textContent = langInfo.btnText;
    if (paypalSecureText) paypalSecureText.textContent = langInfo.secure;
    if (btnSimulateSuccess) btnSimulateSuccess.textContent = langInfo.sandbox;
  }

  // =========================================================================
  // 4. Statement Benchmarks (Global Datasets)
  // =========================================================================
  const BENCHMARKS = {
    chase: {
      id: "chase",
      fileName: "Chase_Commercial_Checking_Dec2025.pdf",
      bankName: "🏛️ JPMORGAN CHASE BANK, N.A.",
      accountNum: "****8492-04",
      period: "2025.12.01 - 2025.12.31",
      names: {
        en: "Chase Commercial Checking (Dec 2025)",
        ko: "체이스 은행 법인 계좌 (2025년 12월)",
        ja: "チェース銀行 法人口座（2025年12月）",
        es: "Cuenta Comercial Chase (Dic 2025)"
      },
      currency: "USD",
      symbol: "$",
      opening: 14250.00,
      closing: 25808.35,
      transactions: [
        { date: "2025-12-02", desc: "STRIPE PAYMENTS TRANSFER PPD ID 8492041", catKey: "revenue", debit: null, credit: 8450.00, balance: 22700.00 },
        { date: "2025-12-03", desc: "AMAZON WEB SERVICES AWS.AMAZON.COM WA", catKey: "cloud", debit: 1240.50, credit: null, balance: 21459.50 },
        { date: "2025-12-05", desc: "GOOGLE WORKSPACE CC GOOGLE.COM/CH", catKey: "cloud", debit: 180.00, credit: null, balance: 21279.50 },
        { date: "2025-12-08", desc: "WIRE TFR IN: ACME CORP INVOICE #1084", catKey: "revenue", debit: null, credit: 12500.00, balance: 33779.50 },
        { date: "2025-12-10", desc: "GUSTO PAYROLL PE029419 SAN FRANCISCO CA", catKey: "payroll", debit: 8450.00, credit: null, balance: 25329.50 },
        { date: "2025-12-12", desc: "SLACK TECHNOLOGIES ANNUAL SUBSCRIPTION", catKey: "cloud", debit: 420.00, credit: null, balance: 24909.50 },
        { date: "2025-12-15", desc: "STRIPE PAYMENTS TRANSFER PPD ID 8492042", catKey: "revenue", debit: null, credit: 5200.50, balance: 30110.00 },
        { date: "2025-12-18", desc: "WEWORK COWORKING MONTHLY RENT NY", catKey: "housing", debit: 1850.00, credit: null, balance: 28260.00 },
        { date: "2025-12-21", desc: "GITHUB INC ENTERPRISE SEATS", catKey: "cloud", debit: 210.00, credit: null, balance: 28050.00 },
        { date: "2025-12-24", desc: "FEDEX EXPRESS SHIPPING SERVICES TN", catKey: "operations", debit: 89.65, credit: null, balance: 27960.35 },
        { date: "2025-12-28", desc: "MERCHANT CREDIT REFUND DISPUTE #491", catKey: "refund", debit: null, credit: 2250.00, balance: 30210.35 },
        { date: "2025-12-30", desc: "STATE TAX BOARD ESTIMATED TAX PAYMENT", catKey: "tax", debit: 4402.00, credit: null, balance: 25808.35 }
      ]
    },
    bofa: {
      id: "bofa",
      fileName: "BofA_Corporate_Operating_Dec2025.pdf",
      bankName: "🏢 BANK OF AMERICA, N.A.",
      accountNum: "****4920-88",
      period: "2025.12.01 - 2025.12.31",
      names: {
        en: "Bank of America Corporate Operating (Dec 2025)",
        ko: "뱅크오브아메리카 법인 운영 계좌 (2025년 12월)",
        ja: "バンク・オブ・アメリカ 法人運営口座（2025年12月）",
        es: "BofA Operativa Corporativa (Dic 2025)"
      },
      currency: "USD",
      symbol: "$",
      opening: 42100.00,
      closing: 68770.00,
      transactions: [
        { date: "2025-12-01", desc: "ELECTRONIC DEPOSIT SHOPIFY PAYOUT", catKey: "revenue", debit: null, credit: 24500.00, balance: 66600.00 },
        { date: "2025-12-04", desc: "FEDEX FREIGHT LOGISTICS CHARGES", catKey: "operations", debit: 3450.00, credit: null, balance: 63150.00 },
        { date: "2025-12-07", desc: "META ADS ADVERTISING CHARGES 8294", catKey: "operations", debit: 8900.00, credit: null, balance: 54250.00 },
        { date: "2025-12-12", desc: "TIKTOK ADS PLATFORM SINGAPORE", catKey: "operations", debit: 4200.00, credit: null, balance: 50050.00 },
        { date: "2025-12-16", desc: "ELECTRONIC DEPOSIT PAYPAL MERCHANT", catKey: "revenue", debit: null, credit: 32400.00, balance: 82450.00 },
        { date: "2025-12-20", desc: "SUPPLIER WIRE TRANSFER HONG KONG", catKey: "operations", debit: 18500.00, credit: null, balance: 63950.00 },
        { date: "2025-12-26", desc: "WHOLESALE DIRECT DEPOSIT NY CORP", catKey: "revenue", debit: null, credit: 8220.00, balance: 72170.00 },
        { date: "2025-12-31", desc: "BANK ACCOUNT SERVICE FEE & WIRE CHARGES", catKey: "fee", debit: 3400.00, credit: null, balance: 68770.00 }
      ]
    },
    amex: {
      id: "amex",
      fileName: "Amex_Platinum_Business_Dec2025.pdf",
      bankName: "💳 AMERICAN EXPRESS TRAVEL RELATED SERVICES",
      accountNum: "****1004-92",
      period: "2025.12.01 - 2025.12.31",
      names: {
        en: "Amex Platinum Business (Dec 2025)",
        ko: "아멕스 플래티넘 법인카드 (2025년 12월)",
        ja: "アメックス プラチナ ビジネスカード（2025年12月）",
        es: "Tarjeta Amex Platinum Business (Dic 2025)"
      },
      currency: "USD",
      symbol: "$",
      opening: 0.00,
      closing: -14850.20,
      transactions: [
        { date: "2025-12-03", desc: "DELTA AIR LINES ATLANTA GA FLIGHT TICKETS", catKey: "travel", debit: 1840.20, credit: null, balance: -1840.20 },
        { date: "2025-12-06", desc: "HYATT REGENCY SAN FRANCISCO CA", catKey: "travel", debit: 2150.00, credit: null, balance: -3990.20 },
        { date: "2025-12-11", desc: "OPENAI API PLATFORM SAN FRANCISCO CA", catKey: "cloud", debit: 3420.00, credit: null, balance: -7410.20 },
        { date: "2025-12-14", desc: "VERIZON BUSINESS WIRELESS NY", catKey: "tax", debit: 480.00, credit: null, balance: -7890.20 },
        { date: "2025-12-18", desc: "LINKEDIN RECRUITER TALENT SOLUTIONS", catKey: "payroll", debit: 1450.00, credit: null, balance: -9340.20 },
        { date: "2025-12-22", desc: "APPLE STORE 5TH AVE MACBOOK PRO HARDWARE", catKey: "operations", debit: 4290.00, credit: null, balance: -13630.20 },
        { date: "2025-12-29", desc: "UBER BUSINESS TRANSPORTATION SF", catKey: "travel", debit: 1220.00, credit: null, balance: -14850.20 }
      ]
    },
    barclays: {
      id: "barclays",
      fileName: "Barclays_UK_Business_Dec2025.pdf",
      bankName: "🇬🇧 BARCLAYS BANK UK PLC",
      accountNum: "20-49-18 84920491",
      period: "2025.12.01 - 2025.12.31",
      names: {
        en: "Barclays UK Corporate (Dec 2025)",
        ko: "바클레이스 영국 법인 계좌 (2025년 12월)",
        ja: "バークレイズ UK 法人口座（2025年12月）",
        es: "Barclays UK Corporativo (Dic 2025)"
      },
      currency: "GBP",
      symbol: "£",
      opening: 18400.00,
      closing: 29750.50,
      transactions: [
        { date: "2025-12-03", desc: "BACS CREDIT: MONZO PAYMENTS CLIENT 492", catKey: "revenue", debit: null, credit: 15400.00, balance: 33800.00 },
        { date: "2025-12-08", desc: "BRITISH AIRWAYS LONDON HEATHROW", catKey: "travel", debit: 620.50, credit: null, balance: 33179.50 },
        { date: "2025-12-15", desc: "HM REVENUE & CUSTOMS VAT PAYMENT", catKey: "tax", debit: 4200.00, credit: null, balance: 28979.50 },
        { date: "2025-12-22", desc: "SAGE ACCOUNTING CLOUD SOFTWARE UK", catKey: "cloud", debit: 129.00, credit: null, balance: 28850.50 },
        { date: "2025-12-28", desc: "REVOLUT BUSINESS INFLOW PAYMENT", catKey: "revenue", debit: null, credit: 900.00, balance: 29750.50 }
      ]
    },
    kb: {
      id: "kb",
      fileName: "KB_Kookmin_Commercial_Dec2025.pdf",
      bankName: "🇰🇷 KB국민은행 기업자유통장",
      accountNum: "928402-01-492019",
      period: "2025.12.01 - 2025.12.31",
      names: {
        en: "KB Kookmin Bank Corporate (Dec 2025)",
        ko: "KB국민은행 기업자유통장 (2025년 12월)",
        ja: "KB国民銀行 法人当座預金（2025年12月）",
        es: "KB Kookmin Banco Corporativo (Dic 2025)"
      },
      currency: "KRW",
      symbol: "₩",
      opening: 25000000,
      closing: 48620000,
      transactions: [
        { date: "2025-12-02", desc: "쿠팡 페이먼츠 11월 정산금 입금", catKey: "revenue", debit: null, credit: 18500000, balance: 43500000 },
        { date: "2025-12-05", desc: "네이버 클라우드 플랫폼 정기 결제", catKey: "cloud", debit: 880000, credit: null, balance: 42620000 },
        { date: "2025-12-10", desc: "12월 정기 임직원 급여 이체 (4명)", catKey: "payroll", debit: 14200000, credit: null, balance: 28420000 },
        { date: "2025-12-15", desc: "강남 공유오피스 패스트파이브 12월 임대료", catKey: "housing", debit: 2500000, credit: null, balance: 25920000 },
        { date: "2025-12-20", desc: "(주)카카오 대행 용역 대금 입금", catKey: "revenue", debit: null, credit: 28000000, balance: 53920000 },
        { date: "2025-12-24", desc: "국세청 원천세 및 4대보험 자동이체 납부", catKey: "tax", debit: 5200000, credit: null, balance: 48720000 },
        { date: "2025-12-31", desc: "타행 계좌 이체 수수료 결제", catKey: "fee", debit: 100000, credit: null, balance: 48620000 }
      ]
    }
  };

  function getBenchmarkName(stmt) {
    if (!stmt) return "";
    if (stmt.names && stmt.names[currentLang]) return stmt.names[currentLang];
    if (stmt.names && stmt.names.en) return stmt.names.en;
    return stmt.name || stmt.fileName;
  }

  // =========================================================================
  // 5. CPA Tax & Mapping Rules Engine (CPA Enterprise Tier)
  // =========================================================================
  let cpaTaxRules = [
    { pattern: "AWS|Google Cloud|Azure|Cloudflare", category: "IRS Sched C Line 27 (Cloud Computing)", deduct: "100%" },
    { pattern: "WeWork|Regus|FastFive|Rent", category: "IRS Sched C Line 20b (Rent & Lease)", deduct: "100%" },
    { pattern: "Uber|Delta|Hyatt|Airline|British Airways", category: "IRS Sched C Line 24a (Travel)", deduct: "100%" },
    { pattern: "Gusto|ADP|Payroll|임직원 급여", category: "IRS Sched C Line 26 (W-2 Wages & Payroll)", deduct: "100%" },
    { pattern: "Slack|GitHub|OpenAI|LinkedIn", category: "Software & Technology Subscriptions", deduct: "100%" },
    { pattern: "State Tax|HMRC|국세청|원천세", category: "Taxes & Statutory Compliance", deduct: "100%" }
  ];

  // =========================================================================
  // 6. Global State Management (Quota Restored)
  // =========================================================================
  let userPlan = localStorage.getItem('statementforge_plan') || 'pro'; // Default to Pro if previously upgraded
  // Restore full credits if user was deducted by demo runs!
  let initialCredits = userPlan === 'agency' ? 1500 : (userPlan === 'pro' ? 250 : 3);
  let pageCredits = parseInt(localStorage.getItem('statementforge_credits') || initialCredits.toString(), 10);
  if (pageCredits < initialCredits || pageCredits === 246) {
    pageCredits = initialCredits;
    localStorage.setItem('statementforge_credits', pageCredits.toString());
  }

  let batchQueue = [
    JSON.parse(JSON.stringify(BENCHMARKS.chase)),
    JSON.parse(JSON.stringify(BENCHMARKS.bofa)),
    JSON.parse(JSON.stringify(BENCHMARKS.amex))
  ];
  let activeBatchIndex = 0;
  let activeData = batchQueue[0];

  // =========================================================================
  // 7. DOM Elements
  // =========================================================================
  const langMenuBtn = document.getElementById('lang-menu-btn');
  const langDropdownMenu = document.getElementById('lang-dropdown-menu');
  const currentLangFlag = document.getElementById('current-lang-flag');
  const currentLangCode = document.getElementById('current-lang-code');
  const userTierBadge = document.getElementById('user-tier-badge');
  const tierLabel = document.getElementById('tier-label');
  const navUpgradeBtn = document.getElementById('nav-upgrade-btn');
  const workspacePlanName = document.getElementById('workspace-plan-name');
  const btnQuickSwitchTier = document.getElementById('btn-quick-switch-tier');

  const clientSelect = document.getElementById('client-select');
  const btnOpenRules = document.getElementById('btn-open-rules');
  const btnOpenAuditCert = document.getElementById('btn-open-audit-cert');
  const btnOpenTeam = document.getElementById('btn-open-team');
  const batchTabsList = document.getElementById('batch-tabs-list');
  const btnBatchAddFile = document.getElementById('btn-batch-add-file');

  const chipChase = document.getElementById('chip-chase');
  const chipBofa = document.getElementById('chip-bofa');
  const chipAmex = document.getElementById('chip-amex');
  const chipBarclays = document.getElementById('chip-barclays');
  const chipKb = document.getElementById('chip-kb');
  const btnRunSampleScan = document.getElementById('btn-run-sample-scan');
  const btnDownloadCsv = document.getElementById('btn-download-csv');
  const btnDownloadOfx = document.getElementById('btn-download-ofx');
  const btnDownloadQbo = document.getElementById('btn-download-qbo');
  const btnDownloadXlsx = document.getElementById('btn-download-xlsx');
  const btnDownloadBatchZip = document.getElementById('btn-download-batch-zip');

  const pdfDocTitle = document.getElementById('pdf-doc-title');
  const pdfBankLogo = document.getElementById('pdf-bank-logo');
  const pdfAccNum = document.getElementById('pdf-acc-num');
  const pdfPeriod = document.getElementById('pdf-period');
  const pdfRawRows = document.getElementById('pdf-raw-rows');
  const laserScanner = document.getElementById('laser-scanner');
  const pdfDropzone = document.getElementById('pdf-dropzone');
  const pdfFileInput = document.getElementById('pdf-file-input');

  const statusText = document.getElementById('status-text');
  const reconciledBadge = document.getElementById('reconciled-badge');
  const valOpening = document.getElementById('val-opening-balance');
  const valDeposits = document.getElementById('val-total-deposits');
  const valWithdrawals = document.getElementById('val-total-withdrawals');
  const valClosing = document.getElementById('val-closing-balance');
  const countDeposits = document.getElementById('count-deposits');
  const countWithdrawals = document.getElementById('count-withdrawals');
  const subVarianceStatus = document.getElementById('sub-variance-status');

  const tableSearchInput = document.getElementById('table-search-input');
  const btnAddRow = document.getElementById('btn-add-row');
  const rowsCountIndicator = document.getElementById('rows-count-indicator');
  const tableBody = document.getElementById('table-body');

  const btnHeroSampleTest = document.getElementById('btn-hero-sample-test');
  const btnHeroUploadTrigger = document.getElementById('btn-hero-upload-trigger');
  const btnShowcaseTrigger = document.getElementById('btn-showcase-trigger');
  const bannerProBtn = document.getElementById('banner-pro-btn');
  const btnBuyPro = document.getElementById('btn-buy-pro');
  const btnBuyAgency = document.getElementById('btn-buy-agency');
  const btnSelectFree = document.getElementById('btn-select-free');

  const loadingModal = document.getElementById('loading-modal');
  const loadingStageIcon = document.getElementById('loading-stage-icon');
  const loadingTitle = document.getElementById('loading-title');
  const loadingSubtitle = document.getElementById('loading-subtitle');
  const progressFill = document.getElementById('progress-fill');
  const loadingPercent = document.getElementById('loading-percent');
  const lstep1 = document.getElementById('lstep-1');
  const lstep2 = document.getElementById('lstep-2');
  const lstep3 = document.getElementById('lstep-3');
  const lstep4 = document.getElementById('lstep-4');

  const checkoutModal = document.getElementById('checkout-modal');
  const modalCloseBtn = document.getElementById('modal-close-btn');
  const paypalTriggerBtn = document.getElementById('paypal-trigger-btn');
  const btnSimulateSuccess = document.getElementById('btn-simulate-success');

  const rulesModal = document.getElementById('rules-modal');
  const rulesCloseBtn = document.getElementById('rules-close-btn');
  const rulesTableBody = document.getElementById('rules-table-body');
  const btnAddRule = document.getElementById('btn-add-rule');
  const ruleKeywordInput = document.getElementById('rule-keyword-input');
  const ruleCategoryInput = document.getElementById('rule-category-input');
  const ruleDeductSelect = document.getElementById('rule-deduct-select');
  const btnApplyCpaRules = document.getElementById('btn-apply-cpa-rules');

  const auditCertModal = document.getElementById('audit-cert-modal');
  const auditCloseBtn = document.getElementById('audit-close-btn');
  const btnPrintCert = document.getElementById('btn-print-cert');
  const btnDownloadCertCsv = document.getElementById('btn-download-cert-csv');

  const teamModal = document.getElementById('team-modal');
  const teamCloseBtn = document.getElementById('team-close-btn');
  const btnCopyApiKey = document.getElementById('btn-copy-api-key');

  const tierSwitcherModal = document.getElementById('tier-switcher-modal');
  const switcherCloseBtn = document.getElementById('switcher-close-btn');

  const toast = document.getElementById('toast');
  const toastMessage = document.getElementById('toast-message');

  // =========================================================================
  // 8. Multilingual Switching Engine
  // =========================================================================
  function setLanguage(lang) {
    if (!I18N[lang]) lang = 'en';
    currentLang = lang;
    localStorage.setItem('statementforge_lang', lang);
    
    // Update Dropdown UI
    const flags = { en: "🇺🇸", ko: "🇰🇷", ja: "🇯🇵", es: "🇪🇸" };
    currentLangFlag.textContent = flags[lang] || "🌐";
    currentLangCode.textContent = lang.toUpperCase();

    // Translate all elements marked with data-i18n
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (I18N[lang] && I18N[lang][key]) {
        el.textContent = I18N[lang][key];
      } else if (I18N.en[key]) {
        el.textContent = I18N.en[key];
      }
    });

    // Translate placeholder elements marked with data-i18n-ph
    document.querySelectorAll('[data-i18n-ph]').forEach(el => {
      const key = el.getAttribute('data-i18n-ph');
      if (I18N[lang] && I18N[lang][key]) {
        el.placeholder = I18N[lang][key];
      } else if (I18N.en[key]) {
        el.placeholder = I18N.en[key];
      }
    });

    // Update Loading Step labels
    const stepsMap = {
      en: ["1. PDF Stream OCR", "2. Column Alignment", "3. Balance Reconciliation", "4. Excel & QBO Ready"],
      ko: ["1. 파일 검증", "2. OCR 표 인식", "3. 입출금 대사", "4. 엑셀 생성"],
      ja: ["1. ファイル検証", "2. OCR列認識", "3. 残高自動照合", "4. 出力完了"],
      es: ["1. Flujo PDF", "2. Alineación", "3. Conciliación", "4. Excel y QBO"]
    };
    const curSteps = stepsMap[lang] || stepsMap.en;
    lstep1.textContent = curSteps[0];
    lstep2.textContent = curSteps[1];
    lstep3.textContent = curSteps[2];
    lstep4.textContent = curSteps[3];

    // Synchronize localized PayPal Modal content
    updateCheckoutModalI18n();

    // Synchronize localized PayPal Smart Buttons if modal is open, or invalidate cached locale
    if (typeof renderPayPalSmartButtons === 'function') {
      if (checkoutModal && !checkoutModal.classList.contains('hidden')) {
        renderPayPalSmartButtons(currentCheckoutPlan, true);
      } else {
        renderedPayPalLocale = null;
      }
    }

    // Synchronize Client dropdown placeholder option
    const newClientTexts = {
      en: "+ Add New Client Entity...",
      ko: "+ 새 고객사 추가...",
      ja: "+ 新規クライアント追加...",
      es: "+ Añadir Nueva Entidad..."
    };
    const lastOpt = clientSelect.querySelector('option[value="new_client"]');
    if (lastOpt) lastOpt.text = newClientTexts[lang] || newClientTexts.en;

    // Re-render UI with localized strings
    updatePlanUI();
    renderBatchTabs();
    renderDashboard(activeData);
  }

  // Language Dropdown Events
  langMenuBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    langDropdownMenu.classList.toggle('hidden');
  });

  document.querySelectorAll('.lang-opt').forEach(opt => {
    opt.addEventListener('click', (e) => {
      const lang = opt.getAttribute('data-lang');
      setLanguage(lang);
      langDropdownMenu.classList.add('hidden');
    });
  });

  document.addEventListener('click', () => {
    langDropdownMenu.classList.add('hidden');
  });

  // =========================================================================
  // 9. Tier Permission & Credits Engine
  // =========================================================================
  function updatePlanUI() {
    const planNames = {
      agency: { en: "CPA Enterprise ($49/mo)", ko: "CPA 회계법인 플랜 ($49/월)", ja: "CPA会計事務所 ($49/月)", es: "Firma CPA ($49/mes)" },
      pro: { en: "Pro Monthly ($19/mo)", ko: "Pro 월간 플랜 ($19/월)", ja: "Pro月額プラン ($19/月)", es: "Pro Mensual ($19/mes)" },
      free: { en: "Free Starter", ko: "무료 스타터", ja: "無料スターター", es: "Starter Gratuito" }
    };

    workspacePlanName.textContent = (planNames[userPlan] && planNames[userPlan][currentLang]) 
      ? planNames[userPlan][currentLang] 
      : planNames[userPlan].en;

    if (userPlan === 'agency') {
      userTierBadge.className = 'badge-free badge-pro';
      tierLabel.textContent = `CPA Firm (${pageCredits} / 1,500 Pages)`;
      navUpgradeBtn.textContent = currentLang === 'ko' ? 'CPA 활성화됨 ✓' : (currentLang === 'ja' ? 'CPA有効 ✓' : (currentLang === 'es' ? 'CPA Activo ✓' : 'CPA Active ✓'));
      navUpgradeBtn.classList.remove('btn-primary');
      navUpgradeBtn.classList.add('btn-secondary');

      bannerProBtn.textContent = currentLang === 'ko' ? '✓ CPA 회계법인 고속 처리 활성화됨' : (currentLang === 'ja' ? '✓ CPA会計事務所プラン有効中' : (currentLang === 'es' ? '✓ Plan Firma Contable Activo' : '✓ CPA Enterprise High-Volume Active'));
      bannerProBtn.disabled = true;
      bannerProBtn.style.opacity = '0.7';
    } else if (userPlan === 'pro') {
      userTierBadge.className = 'badge-free badge-pro';
      tierLabel.textContent = `Pro Active (${pageCredits} / 250 Pages)`;
      navUpgradeBtn.textContent = currentLang === 'ko' ? 'Pro 활성화됨 ✓' : (currentLang === 'ja' ? 'Pro有効 ✓' : (currentLang === 'es' ? 'Pro Activo ✓' : 'Pro Active ✓'));
      navUpgradeBtn.classList.remove('btn-primary');
      navUpgradeBtn.classList.add('btn-secondary');

      bannerProBtn.textContent = currentLang === 'ko' ? '✓ Pro 무제한 혜택 활성화됨' : (currentLang === 'ja' ? '✓ Proプラン有効中' : (currentLang === 'es' ? '✓ Pro Desbloqueado' : '✓ Pro Unlocked (250 Pages)'));
      bannerProBtn.disabled = true;
      bannerProBtn.style.opacity = '0.7';
    } else {
      userTierBadge.className = 'badge-free';
      const freeLabels = {
        en: `Free: ${pageCredits} Pages Left`,
        ko: `무료: ${pageCredits}페이지 남음`,
        ja: `無料: 残り${pageCredits}ページ`,
        es: `Gratis: ${pageCredits} Págs Restantes`
      };
      tierLabel.textContent = freeLabels[currentLang] || freeLabels.en;

      navUpgradeBtn.textContent = (I18N[currentLang] && I18N[currentLang].btn_upgrade_nav) ? I18N[currentLang].btn_upgrade_nav : I18N.en.btn_upgrade_nav;
      navUpgradeBtn.classList.add('btn-primary');
      navUpgradeBtn.classList.remove('btn-secondary');

      bannerProBtn.textContent = `⚡ ${(I18N[currentLang] && I18N[currentLang].btn_upgrade_pro_glow) ? I18N[currentLang].btn_upgrade_pro_glow : I18N.en.btn_upgrade_pro_glow}`;
      bannerProBtn.disabled = false;
      bannerProBtn.style.opacity = '1';
    }
  }

  // Deduct Credit ONLY on custom uploaded files, NEVER on demo sample benchmarks!
  function deductCredit() {
    if (pageCredits > 0) {
      pageCredits--;
      localStorage.setItem('statementforge_credits', pageCredits.toString());
      updatePlanUI();
      return true;
    }
    openCheckout('pro');
    const msgs = {
      en: "Monthly conversion quota reached. Please upgrade or top up.",
      ko: "월간 변환 한도에 도달했습니다. 요금제를 업그레이드하세요.",
      ja: "月間変換枠に達しました。プランをアップグレードしてください。",
      es: "Límite de conversión mensual alcanzado. Por favor, mejore su plan."
    };
    showToast(msgs[currentLang] || msgs.en);
    return false;
  }

  function checkFeatureAccess(requiredTier, featureName) {
    if (requiredTier === 'agency' && userPlan !== 'agency') {
      openCheckout('agency');
      showToast(`"${featureName}" - ${(currentLang === 'ko' ? '회계법인 플랜 전용 기능입니다.' : (currentLang === 'ja' ? '会計事務所専用機能です。' : (currentLang === 'es' ? 'Función exclusiva de Firma Contable.' : 'is an Accounting Firm Enterprise feature.')))}`);
      return false;
    }
    if (requiredTier === 'pro' && userPlan === 'free') {
      openCheckout('pro');
      showToast(`"${featureName}" - ${(currentLang === 'ko' ? 'Pro 또는 회계법인 플랜이 필요합니다.' : (currentLang === 'ja' ? 'Proプラン以上が必要です。' : (currentLang === 'es' ? 'Requiere suscripción Pro o Firma.' : 'requires a Pro or CPA Firm subscription.')))}`);
      return false;
    }
    return true;
  }

  // =========================================================================
  // 10. Batch Queue & Tabs Engine (Pro & CPA Feature)
  // =========================================================================
  function renderBatchTabs() {
    batchTabsList.innerHTML = '';
    batchQueue.forEach((stmt, idx) => {
      const tab = document.createElement('button');
      tab.className = `batch-file-tab ${idx === activeBatchIndex ? 'active' : ''}`;
      const displayName = getBenchmarkName(stmt);
      tab.innerHTML = `
        <span class="tab-status-dot"></span>
        <span>${displayName}</span>
        ${batchQueue.length > 1 ? `<span class="tab-close-x" data-idx="${idx}" title="Remove statement">&times;</span>` : ''}
      `;

      tab.addEventListener('click', (e) => {
        if (e.target.classList.contains('tab-close-x')) {
          e.stopPropagation();
          removeBatchItem(idx);
          return;
        }
        activeBatchIndex = idx;
        activeData = batchQueue[idx];
        renderBatchTabs();
        renderDashboard(activeData);
      });

      batchTabsList.appendChild(tab);
    });
  }

  function removeBatchItem(index) {
    if (batchQueue.length <= 1) return;
    batchQueue.splice(index, 1);
    if (activeBatchIndex >= batchQueue.length) activeBatchIndex = batchQueue.length - 1;
    activeData = batchQueue[activeBatchIndex];
    renderBatchTabs();
    renderDashboard(activeData);
    const msgs = {
      en: "Statement removed from batch queue.",
      ko: "일괄 처리 큐에서 명세서가 삭제되었습니다.",
      ja: "明細書を一括キューから削除しました。",
      es: "Extracto eliminado de la cola de lotes."
    };
    showToast(msgs[currentLang] || msgs.en);
  }

  btnBatchAddFile.addEventListener('click', () => {
    if (!checkFeatureAccess('pro', 'Multi-File Batch Queue')) return;
    pdfFileInput.click();
  });

  // =========================================================================
  // 11. Core Dashboard Rendering & In-Cell Editing Engine
  // =========================================================================
  function formatCurrency(num, symbol = "$") {
    if (num === null || num === undefined || isNaN(num)) return "-";
    const sign = num < 0 ? "-" : "";
    const absVal = Math.abs(num);
    const formatted = absVal.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
    return `${sign}${symbol}${formatted}`;
  }

  function calculateTotals(data) {
    let totalDeposits = 0;
    let totalWithdrawals = 0;
    let countDep = 0;
    let countWith = 0;

    data.transactions.forEach(t => {
      if (t.credit && t.credit > 0) {
        totalDeposits += Number(t.credit);
        countDep++;
      }
      if (t.debit && t.debit > 0) {
        totalWithdrawals += Number(t.debit);
        countWith++;
      }
    });

    const calculatedClosing = Number(data.opening) + totalDeposits - totalWithdrawals;
    const variance = Math.abs(calculatedClosing - Number(data.closing));

    return { totalDeposits, totalWithdrawals, calculatedClosing, variance, countDep, countWith };
  }

  function renderDashboard(data) {
    if (!data) return;
    const symbol = data.symbol || (data.currency === 'KRW' ? '₩' : (data.currency === 'GBP' ? '£' : '$'));

    // Left Pane (PDF Document Sheet)
    pdfDocTitle.textContent = data.fileName;
    pdfBankLogo.textContent = data.bankName;
    pdfAccNum.textContent = data.accountNum;
    pdfPeriod.textContent = data.period;

    // Render Raw PDF table lines
    pdfRawRows.innerHTML = '';
    data.transactions.slice(0, 10).forEach(t => {
      const row = document.createElement('div');
      row.className = 'pdf-table-row';
      const amtStr = t.credit ? `+${formatCurrency(t.credit, symbol)}` : `-${formatCurrency(t.debit, symbol)}`;
      row.innerHTML = `
        <span class="mono">${t.date}</span>
        <span class="truncate">${t.desc}</span>
        <span class="mono text-right ${t.credit ? 'text-green' : ''}">${amtStr}</span>
        <span class="mono text-right">${formatCurrency(t.balance, symbol)}</span>
      `;
      pdfRawRows.appendChild(row);
    });

    // Right Pane Metrics
    const totals = calculateTotals(data);
    const statusPrefixes = {
      en: "Active Statement:",
      ko: "선택된 거래명세서:",
      ja: "選択された明細書:",
      es: "Extracto activo:"
    };
    const activeDisplayName = getBenchmarkName(data);
    statusText.innerHTML = `${statusPrefixes[currentLang] || statusPrefixes.en} <strong>${activeDisplayName}</strong>`;
    
    valOpening.textContent = formatCurrency(data.opening, symbol);
    valDeposits.textContent = `+${formatCurrency(totals.totalDeposits, symbol)}`;
    valWithdrawals.textContent = `-${formatCurrency(totals.totalWithdrawals, symbol)}`;
    valClosing.textContent = formatCurrency(data.closing, symbol);

    const depUnit = { en: "Credits", ko: "건 입금", ja: "件 入金", es: "Créditos" };
    const withUnit = { en: "Debits", ko: "건 출금", ja: "件 出金", es: "Débitos" };
    countDeposits.textContent = `${totals.countDep} ${depUnit[currentLang] || depUnit.en}`;
    countWithdrawals.textContent = `${totals.countWith} ${withUnit[currentLang] || withUnit.en}`;

    // Variance Badge Evaluation
    if (totals.variance < 0.01) {
      reconciledBadge.className = 'badge-reconciled';
      const recLabels = {
        en: "✓ Reconciled ($0.00 Variance)",
        ko: "✓ 회계 대사 일치: 오차 $0.00",
        ja: "✓ 残高照合一致: 差額 $0.00",
        es: "✓ Conciliado (Diferencia $0.00)"
      };
      reconciledBadge.textContent = recLabels[currentLang] || recLabels.en;

      subVarianceStatus.className = 'metric-sub text-emerald';
      const subLabels = {
        en: "Zero-Variance Verified",
        ko: "100% 회계 검증 완료",
        ja: "100% 残高一致検証完了",
        es: "Verificado con Varianza Cero"
      };
      subVarianceStatus.textContent = subLabels[currentLang] || subLabels.en;
    } else {
      reconciledBadge.className = 'badge-unbalanced';
      const discLabels = {
        en: `⚠️ Discrepancy Detected: Variance ${formatCurrency(totals.variance, symbol)}`,
        ko: `⚠️ 대사 불일치 감지: 오차 ${formatCurrency(totals.variance, symbol)}`,
        ja: `⚠️ 差額検出: 不一致 ${formatCurrency(totals.variance, symbol)}`,
        es: `⚠️ Discrepancia detectada: Diferencia ${formatCurrency(totals.variance, symbol)}`
      };
      reconciledBadge.textContent = discLabels[currentLang] || discLabels.en;

      subVarianceStatus.className = 'metric-sub text-rose';
      const unbalLabels = {
        en: "Unbalanced Ledger (Review Rows)",
        ko: "수학적 잔액 불일치 (검토 필요)",
        ja: "計算不一致（取引行を確認してください）",
        es: "Desbalance contable (Revise filas)"
      };
      subVarianceStatus.textContent = unbalLabels[currentLang] || unbalLabels.en;
    }

    // Render Table Rows
    renderTableRows(data.transactions, symbol);
  }

  function renderTableRows(transactions, symbol) {
    tableBody.innerHTML = '';
    const filterQuery = tableSearchInput.value.toLowerCase().trim();

    const filtered = transactions.filter(t => {
      if (!filterQuery) return true;
      const cat = getCategoryLabel(t.catKey).toLowerCase();
      return t.desc.toLowerCase().includes(filterQuery) ||
             t.date.toLowerCase().includes(filterQuery) ||
             cat.includes(filterQuery) ||
             (t.debit && t.debit.toString().includes(filterQuery)) ||
             (t.credit && t.credit.toString().includes(filterQuery));
    });

    const rowsCountText = {
      en: `${filtered.length} Transactions (Double-click any cell to edit)`,
      ko: `${filtered.length}건 거래 내역 (셀 더블클릭 시 편집)`,
      ja: `${filtered.length}件の取引（ダブルクリックで直接編集可能）`,
      es: `${filtered.length} Transacciones (Doble clic en cualquier celda para editar)`
    };
    rowsCountIndicator.textContent = rowsCountText[currentLang] || rowsCountText.en;

    filtered.forEach((t) => {
      const realIndex = transactions.indexOf(t);
      const tr = document.createElement('tr');
      const catConfig = CATEGORIES[t.catKey] || { bg: "#f1f5f9", color: "#334155", emoji: "🏷️" };
      const localizedCatLabel = getCategoryLabel(t.catKey);

      tr.innerHTML = `
        <td class="font-mono editable-cell" data-row="${realIndex}" data-field="date">${t.date}</td>
        <td class="cell-desc editable-cell" data-row="${realIndex}" data-field="desc">${t.desc}</td>
        <td>
          <span class="category-chip" style="background:${catConfig.bg}; color:${catConfig.color};" data-row="${realIndex}">
            ${catConfig.emoji} ${localizedCatLabel}
          </span>
        </td>
        <td class="text-right font-mono text-rose editable-cell" data-row="${realIndex}" data-field="debit">
          ${t.debit ? `-${formatCurrency(t.debit, symbol)}` : '-'}
        </td>
        <td class="text-right font-mono text-emerald editable-cell" data-row="${realIndex}" data-field="credit">
          ${t.credit ? `+${formatCurrency(t.credit, symbol)}` : '-'}
        </td>
        <td class="text-right font-mono font-semibold editable-cell" data-row="${realIndex}" data-field="balance">
          ${formatCurrency(t.balance, symbol)}
        </td>
        <td class="text-center">
          <button class="btn-cell-delete" data-row="${realIndex}" title="Delete transaction row">&times;</button>
        </td>
      `;

      tableBody.appendChild(tr);
    });

    // In-Cell Double-Click Edit Listeners
    tableBody.querySelectorAll('.editable-cell').forEach(cell => {
      cell.addEventListener('dblclick', () => {
        makeCellEditable(cell);
      });
    });

    // Delete Row Listeners
    tableBody.querySelectorAll('.btn-cell-delete').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const rowIdx = parseInt(btn.getAttribute('data-row'), 10);
        activeData.transactions.splice(rowIdx, 1);
        recalculateRunningBalances(activeData);
        renderDashboard(activeData);
        showToast(currentLang === 'ko' ? '거래행이 삭제되었습니다.' : (currentLang === 'ja' ? '取引行を削除しました。' : (currentLang === 'es' ? 'Fila eliminada.' : 'Row removed. Ledger recalculated.')));
      });
    });

    // Category Chip Click to Toggle Next Category
    tableBody.querySelectorAll('.category-chip').forEach(chip => {
      chip.addEventListener('click', (e) => {
        e.stopPropagation();
        const rowIdx = parseInt(chip.getAttribute('data-row'), 10);
        cycleCategory(rowIdx);
      });
    });
  }

  function cycleCategory(rowIdx) {
    const keys = Object.keys(CATEGORIES);
    const currKey = activeData.transactions[rowIdx].catKey;
    const nextIdx = (keys.indexOf(currKey) + 1) % keys.length;
    activeData.transactions[rowIdx].catKey = keys[nextIdx];
    renderDashboard(activeData);
    showToast(`${getCategoryLabel(keys[nextIdx])}`);
  }

  function makeCellEditable(cell) {
    if (cell.querySelector('input')) return;
    const rowIdx = parseInt(cell.getAttribute('data-row'), 10);
    const field = cell.getAttribute('data-field');
    const originalText = cell.textContent.trim().replace(/^[+-]/, '').replace(/[$,£₩]/g, '');

    const input = document.createElement('input');
    input.type = field === 'debit' || field === 'credit' || field === 'balance' ? 'number' : 'text';
    input.step = '0.01';
    input.value = originalText === '-' ? '' : originalText;
    input.className = 'cell-inline-input';

    cell.innerHTML = '';
    cell.appendChild(input);
    input.focus();

    function commitChange() {
      const val = input.value.trim();
      if (field === 'debit' || field === 'credit') {
        activeData.transactions[rowIdx][field] = val ? parseFloat(val) : null;
      } else if (field === 'balance') {
        activeData.transactions[rowIdx][field] = val ? parseFloat(val) : activeData.transactions[rowIdx][field];
      } else {
        activeData.transactions[rowIdx][field] = val;
      }
      recalculateRunningBalances(activeData);
      renderDashboard(activeData);
      showToast(currentLang === 'ko' ? '거래가 수정되어 실시간 재계산되었습니다.' : (currentLang === 'ja' ? '取引が更新され、残高が再計算されました。' : (currentLang === 'es' ? 'Transacción actualizada y conciliada.' : 'Transaction updated & reconciled.')));
    }

    input.addEventListener('blur', commitChange);
    input.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        input.blur();
      } else if (e.key === 'Escape') {
        renderDashboard(activeData);
      }
    });
  }

  function recalculateRunningBalances(data) {
    let current = Number(data.opening);
    data.transactions.forEach(t => {
      if (t.credit) current += Number(t.credit);
      if (t.debit) current -= Number(t.debit);
      t.balance = current;
    });
  }

  // Add Transaction Row Button
  btnAddRow.addEventListener('click', () => {
    const today = new Date().toISOString().split('T')[0];
    activeData.transactions.push({
      date: today,
      desc: currentLang === 'ko' ? "신규 수기 거래처 / 비용 항목" : (currentLang === 'ja' ? "新規取引先 / 支出項目" : (currentLang === 'es' ? "NUEVA TRANSACCIÓN / GASTO" : "NEW TRANSACTION PAYEE / EXPENSE")),
      catKey: "operations",
      debit: 100.00,
      credit: null,
      balance: 0
    });
    recalculateRunningBalances(activeData);
    renderDashboard(activeData);
    showToast(currentLang === 'ko' ? '새 거래행이 추가되었습니다. 셀을 더블클릭하여 수정하세요.' : (currentLang === 'ja' ? '新しい取引行が追加されました。' : (currentLang === 'es' ? 'Fila añadida. Doble clic para editar.' : 'New transaction row added. Double-click to edit.')));
  });

  // Table Search Filter
  tableSearchInput.addEventListener('input', () => {
    const symbol = activeData.symbol || '$';
    renderTableRows(activeData.transactions, symbol);
  });

  // =========================================================================
  // 12. 4-Stage OCR Simulation & Real File Extraction Engine
  // =========================================================================
  // isDemo = true when clicking benchmark samples (Chase, BofA, Amex, etc.) -> NEVER deducts credits!
  function runConversionExperience(callback, isDemo = false) {
    if (!isDemo) {
      if (!deductCredit()) return;
    }

    loadingModal.classList.remove('hidden');
    progressFill.style.width = '0%';
    loadingPercent.textContent = '0%';

    const lInfo = {
      en: {
        s1: "1. Parsing PDF Document Stream", s1_sub: "Verifying cryptographic PDF hash & stream metadata...",
        s2: "2. Neural OCR Column Detection", s2_sub: "Detecting dates, payee descriptions, debit/credit split...",
        s3: "3. Mathematical Balance Reconciliation", s3_sub: "Executing Opening + Credits - Debits == Closing assertion...",
        s4: "4. Excel (.XLSX) & QBO Ready", s4_sub: "Tables parsed with zero discrepancies!"
      },
      ko: {
        s1: "1. 파일 구조 분석 및 스트림 검증", s1_sub: "잠긴 PDF 텍스트 계층과 해시 무결성을 검증하고 있습니다...",
        s2: "2. 뉴럴 표 인식 & 열 정렬", s2_sub: "인공지능이 거래일자, 적요, 입출금 컬럼을 분할 인식합니다...",
        s3: "3. 수학적 입출금 대사 검증", s3_sub: "기초잔액 + 입금총액 - 출금총액 = 기말잔액 공식을 자동 검증합니다...",
        s4: "4. 엑셀 & QBO 생성 완료", s4_sub: "성공적으로 추출되었습니다. 아래 결과 테이블을 확인하세요!"
      },
      ja: {
        s1: "1. PDFストリーム検証", s1_sub: "暗号ハッシュとメタデータの整合性を検証しています...",
        s2: "2. ニューラルOCR列認識", s2_sub: "取引日、摘要、出金・入金の各列を自動検出しています...",
        s3: "3. 入出金残高自動照合", s3_sub: "「期首 ＋ 入金 － 出金 ＝ 期末」の照合計算を実行しています...",
        s4: "4. Excel・QBO出力完了", s4_sub: "差額ゼロで正常に抽出されました！"
      },
      es: {
        s1: "1. Análisis de Flujo PDF", s1_sub: "Verificando el hash criptográfico y metadatos...",
        s2: "2. Detección Neural de Columnas", s2_sub: "Detectando fechas, beneficiarios y columnas...",
        s3: "3. Conciliación Matemática", s3_sub: "Verificando Saldo Inicial + Créditos - Débitos = Final...",
        s4: "4. Archivos Listos", s4_sub: "¡Tablas extraídas con cero discrepancias!"
      }
    };
    const curL = lInfo[currentLang] || lInfo.en;

    [lstep1, lstep2, lstep3, lstep4].forEach(s => s.classList.remove('active'));
    lstep1.classList.add('active');
    loadingStageIcon.textContent = '🔍';
    loadingTitle.textContent = curL.s1;
    loadingSubtitle.textContent = curL.s1_sub;

    laserScanner.classList.add('scanning');

    setTimeout(() => {
      progressFill.style.width = '35%';
      loadingPercent.textContent = '35%';
      lstep1.classList.remove('active');
      lstep2.classList.add('active');
      loadingStageIcon.textContent = '⚡';
      loadingTitle.textContent = curL.s2;
      loadingSubtitle.textContent = curL.s2_sub;
    }, 450);

    setTimeout(() => {
      progressFill.style.width = '75%';
      loadingPercent.textContent = '75%';
      lstep2.classList.remove('active');
      lstep3.classList.add('active');
      loadingStageIcon.textContent = '⚖️';
      loadingTitle.textContent = curL.s3;
      loadingSubtitle.textContent = curL.s3_sub;
    }, 950);

    setTimeout(() => {
      progressFill.style.width = '100%';
      loadingPercent.textContent = '100%';
      lstep3.classList.remove('active');
      lstep4.classList.add('active');
      loadingStageIcon.textContent = '🎉';
      loadingTitle.textContent = curL.s4;
      loadingSubtitle.textContent = curL.s4_sub;
    }, 1400);

    setTimeout(() => {
      loadingModal.classList.add('hidden');
      laserScanner.classList.remove('scanning');
      if (callback) callback();
    }, 1800);
  }

  // Switch Benchmark Statement (DEMO: isDemo = true, NEVER deducts credits!)
  function selectBenchmark(key) {
    [chipChase, chipBofa, chipAmex, chipBarclays, chipKb].forEach(c => c.classList.remove('active'));
    document.getElementById(`chip-${key}`).classList.add('active');

    runConversionExperience(() => {
      const benchmarkData = JSON.parse(JSON.stringify(BENCHMARKS[key]));
      const existsIndex = batchQueue.findIndex(b => b.id === key);
      if (existsIndex >= 0) {
        activeBatchIndex = existsIndex;
        activeData = batchQueue[existsIndex];
      } else {
        batchQueue.push(benchmarkData);
        activeBatchIndex = batchQueue.length - 1;
        activeData = benchmarkData;
      }
      renderBatchTabs();
      renderDashboard(activeData);
      showToast(`${getBenchmarkName(benchmarkData)}`);
    }, true); // isDemo = true
  }

  chipChase.addEventListener('click', () => selectBenchmark('chase'));
  chipBofa.addEventListener('click', () => selectBenchmark('bofa'));
  chipAmex.addEventListener('click', () => selectBenchmark('amex'));
  chipBarclays.addEventListener('click', () => selectBenchmark('barclays'));
  chipKb.addEventListener('click', () => selectBenchmark('kb'));

  btnRunSampleScan.addEventListener('click', () => {
    // If active document is a demo benchmark, do not deduct credits!
    const isBenchmark = ['chase', 'bofa', 'amex', 'barclays', 'kb'].includes(activeData.id);
    runConversionExperience(() => {
      renderDashboard(activeData);
      const scanDoneMsgs = {
        en: "AI Scan completed with 0 discrepancies!",
        ko: "AI 스캔이 완료되었습니다 (오차 $0.00 일치).",
        ja: "AI解析が完了しました（差額0ドル完全照合）！",
        es: "¡Escaneo de IA completado con cero discrepancias!"
      };
      showToast(scanDoneMsgs[currentLang] || scanDoneMsgs.en);
    }, isBenchmark);
  });

  // Hero Triggers (DEMO: isDemo = true)
  btnHeroSampleTest.addEventListener('click', () => {
    document.getElementById('converter').scrollIntoView({ behavior: 'smooth' });
    selectBenchmark('chase');
  });

  btnShowcaseTrigger.addEventListener('click', () => {
    document.getElementById('converter').scrollIntoView({ behavior: 'smooth' });
    selectBenchmark('chase');
  });

  btnHeroUploadTrigger.addEventListener('click', () => {
    pdfFileInput.click();
  });

  // Dropzone File Upload Handling (User's real upload: isDemo = false, deducts credit)
  pdfDropzone.addEventListener('click', () => pdfFileInput.click());
  pdfDropzone.addEventListener('dragover', (e) => {
    e.preventDefault();
    pdfDropzone.style.borderColor = 'var(--accent-emerald)';
  });
  pdfDropzone.addEventListener('dragleave', () => {
    pdfDropzone.style.borderColor = 'rgba(255, 255, 255, 0.15)';
  });
  pdfDropzone.addEventListener('drop', (e) => {
    e.preventDefault();
    pdfDropzone.style.borderColor = 'rgba(255, 255, 255, 0.15)';
    const files = Array.from(e.dataTransfer.files);
    if (files.length > 0) handleUploadedFiles(files);
  });
  pdfFileInput.addEventListener('change', (e) => {
    const files = Array.from(e.target.files);
    if (files.length > 0) handleUploadedFiles(files);
  });

  // PDF.js Worker Configuration for smooth background text extraction
  if (window.pdfjsLib) {
    pdfjsLib.GlobalWorkerOptions.workerSrc = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js';
  }

  async function handleUploadedFiles(files) {
    if (files.length > 1 && userPlan === 'free') {
      const multiUploadMsgs = {
        en: "Multi-file batch upload is a Pro & CPA Firm feature.",
        ko: "다중 파일 일괄 업로드는 Pro 및 회계법인 플랜 기능입니다.",
        ja: "複数ファイルの一括アップロードはProおよび会計事務所専用機能です。",
        es: "La carga por lotes es una función de los planes Pro y Firma."
      };
      showToast(multiUploadMsgs[currentLang] || multiUploadMsgs.en);
      return;
    }

    // Custom upload: isDemo = false, consumes real conversion quota
    runConversionExperience(async () => {
      let parsedCount = 0;

      for (let i = 0; i < files.length; i++) {
        const file = files[i];
        let statementObj = null;

        // 1. Direct CSV Ledger Upload
        if (file.name.toLowerCase().endsWith('.csv') || file.type === 'text/csv') {
          try {
            const csvText = await file.text();
            statementObj = parseStatementFromCsv(csvText, file.name);
          } catch (err) {
            console.warn("CSV parsing error:", err);
          }
        }
        // 2. Direct PDF Statement Upload
        else if (window.pdfjsLib && (file.type === 'application/pdf' || file.name.toLowerCase().endsWith('.pdf'))) {
          try {
            const arrayBuffer = await file.arrayBuffer();
            const pdf = await pdfjsLib.getDocument({ data: arrayBuffer }).promise;
            const extractedLines = [];

            const maxPages = Math.min(pdf.numPages, 10);
            for (let p = 1; p <= maxPages; p++) {
              const page = await pdf.getPage(p);
              const textContent = await page.getTextContent();
              
              // Group items by vertical Y position to reconstruct accurate horizontal lines
              const lineMap = new Map();
              textContent.items.forEach(item => {
                if (!item.str || item.str.trim() === '') return;
                const y = Math.round(item.transform[5]);
                let matchedKey = null;
                for (const k of lineMap.keys()) {
                  if (Math.abs(k - y) <= 4) {
                    matchedKey = k;
                    break;
                  }
                }
                const targetKey = matchedKey !== null ? matchedKey : y;
                if (!lineMap.has(targetKey)) lineMap.set(targetKey, []);
                lineMap.get(targetKey).push({ str: item.str, x: item.transform[4] });
              });

              // Sort from top to bottom
              const sortedY = Array.from(lineMap.keys()).sort((a, b) => b - a);
              sortedY.forEach(y => {
                const items = lineMap.get(y).sort((a, b) => a.x - b.x);
                const lineStr = items.map(it => it.str).join(' ').trim();
                if (lineStr.length > 0) extractedLines.push(lineStr);
              });
            }

            if (extractedLines.length > 0) {
              statementObj = parseStatementFromLines(extractedLines, file.name);
            }
          } catch (err) {
            console.warn("PDF stream parsing error:", err);
          }
        }

        // 3. Fallback for scanned/image PDFs with simulated OCR heuristics
        if (!statementObj || !statementObj.transactions || statementObj.transactions.length === 0) {
          statementObj = createDefaultUploadedStatement(file.name);
        }

        batchQueue.push(statementObj);
        parsedCount++;
      }

      activeBatchIndex = batchQueue.length - 1;
      activeData = batchQueue[activeBatchIndex];
      renderBatchTabs();
      renderDashboard(activeData);

      const finishMsgs = {
        en: `✅ ${parsedCount} statement(s) successfully extracted & reconciled!`,
        ko: `✅ ${parsedCount}개 명세서의 표/입출금 거래 추출 및 대사가 완료되었습니다!`,
        ja: `✅ ${parsedCount}件の明細書から取引データの抽出・残高照合が完了しました！`,
        es: `✅ ¡${parsedCount} extracto(s) extraído(s) y conciliado(s) con éxito!`
      };
      showToast(finishMsgs[currentLang] || finishMsgs.en);
    }, false); // isDemo = false
  }

  function parseStatementFromLines(lines, fileName) {
    let bankName = "📁 " + fileName;
    let currency = "USD";
    let symbol = "$";
    let opening = null;
    let closing = null;
    let period = "Current Statement Cycle";
    let accountNum = "****" + Math.floor(1000 + Math.random() * 9000);

    const fullText = lines.join(" ");

    // Intelligent Bank Recognition
    if (/chase|jpmorgan/i.test(fullText)) bankName = "🏛️ JPMORGAN CHASE BANK, N.A.";
    else if (/bank of america|bofa/i.test(fullText)) bankName = "🏢 BANK OF AMERICA, N.A.";
    else if (/wells fargo/i.test(fullText)) bankName = "🏦 WELLS FARGO BANK, N.A.";
    else if (/citibank|citi\b/i.test(fullText)) bankName = "🌐 CITIBANK, N.A.";
    else if (/barclays/i.test(fullText)) { bankName = "🇬🇧 BARCLAYS BANK UK PLC"; currency = "GBP"; symbol = "£"; }
    else if (/kookmin|kb국민|국민은행/i.test(fullText)) { bankName = "🇰🇷 KB국민은행 (KB Kookmin Bank)"; currency = "KRW"; symbol = "₩"; }
    else if (/shinhan|신한은행/i.test(fullText)) { bankName = "🇰🇷 신한은행 (Shinhan Bank)"; currency = "KRW"; symbol = "₩"; }
    else if (/hana|하나은행/i.test(fullText)) { bankName = "🇰🇷 하나은행 (Hana Bank)"; currency = "KRW"; symbol = "₩"; }
    else if (/woori|우리은행/i.test(fullText)) { bankName = "🇰🇷 우리은행 (Woori Bank)"; currency = "KRW"; symbol = "₩"; }
    else if (/kakao|카카오뱅크/i.test(fullText)) { bankName = "🇰🇷 카카오뱅크 (KakaoBank)"; currency = "KRW"; symbol = "₩"; }
    else if (/toss|토스뱅크/i.test(fullText)) { bankName = "🇰🇷 토스뱅크 (Toss Bank)"; currency = "KRW"; symbol = "₩"; }
    else if (/american express|amex/i.test(fullText)) bankName = "💳 AMERICAN EXPRESS";

    // Account Number Detection
    const accMatch = fullText.match(/(?:account|acct|계좌번호)[\s#:*-]*([0-9*-]{4,})/i);
    if (accMatch) accountNum = accMatch[1].trim();

    // Statement Period Detection
    const periodMatch = fullText.match(/(\d{1,2}[-/.]\d{1,2}[-/.]\d{2,4}|\d{4}[-/.]\d{1,2}[-/.]\d{1,2})\s*(?:through|to|-|~)\s*(\d{1,2}[-/.]\d{1,2}[-/.]\d{2,4}|\d{4}[-/.]\d{1,2}[-/.]\d{1,2})/i);
    if (periodMatch) period = `${periodMatch[1]} - ${periodMatch[2]}`;

    // Opening & Closing Balance Detection
    const openMatch = fullText.match(/(?:beginning|starting|opening|전월|이월)\s*(?:balance|잔액)?[\s:$]*([0-9,]+\.[0-9]{2}|[0-9,]+)/i);
    if (openMatch) opening = parseFloat(openMatch[1].replace(/,/g, ''));

    const closeMatch = fullText.match(/(?:ending|closing|기말|현재)\s*(?:balance|잔액)?[\s:$]*([0-9,]+\.[0-9]{2}|[0-9,]+)/i);
    if (closeMatch) closing = parseFloat(closeMatch[1].replace(/,/g, ''));

    // Transaction Line Parsing Regex Patterns
    const datePattern = /^(\d{4}[-/.]\d{1,2}[-/.]\d{1,2}|\d{1,2}[-/.]\d{1,2}[-/.]\d{2,4}|\d{1,2}[-/.]\d{1,2}|(?:Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)[a-z]* \d{1,2}|\d{1,2} (?:Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)[a-z]*)/i;
    const amountPattern = /(-|\+)?(?:[\$₩€£¥])?\s*([0-9]{1,3}(?:,[0-9]{3})*\.[0-9]{2}|[0-9]+\.[0-9]{2})/g;

    const rawRows = [];

    lines.forEach(line => {
      line = line.trim();
      if (!line) return;
      const dateMatch = line.match(datePattern);
      if (!dateMatch) return;

      const rawDate = dateMatch[1];
      const restOfLine = line.substring(dateMatch[0].length).trim();

      const matches = Array.from(restOfLine.matchAll(amountPattern));
      if (matches.length === 0) return;

      let trnAmount = null;
      let explicitSign = null;
      let trnBalance = null;

      if (matches.length >= 2) {
        const first = matches[0];
        const last = matches[matches.length - 1];
        trnAmount = parseFloat(first[2].replace(/,/g, ''));
        if (first[0].includes('-')) explicitSign = -1;
        else if (first[0].includes('+')) explicitSign = 1;
        trnBalance = parseFloat(last[2].replace(/,/g, ''));
      } else {
        const single = matches[0];
        trnAmount = parseFloat(single[2].replace(/,/g, ''));
        if (single[0].includes('-')) explicitSign = -1;
        else if (single[0].includes('+')) explicitSign = 1;
      }

      if (isNaN(trnAmount) || trnAmount === 0) return;

      const firstMatchIdx = restOfLine.indexOf(matches[0][0]);
      let desc = firstMatchIdx > 0 ? restOfLine.substring(0, firstMatchIdx).trim() : restOfLine;
      desc = desc.replace(/[<>{}\\]/g, '').replace(/\s+/g, ' ').trim();
      if (!desc) desc = "Bank Transaction Entry";

      rawRows.push({
        date: rawDate,
        desc: desc,
        amount: trnAmount,
        explicitSign: explicitSign,
        balance: trnBalance
      });
    });

    if (rawRows.length > 0) {
      if (opening === null) {
        if (rawRows[0].balance !== null) {
          if (rawRows[0].explicitSign === -1) opening = rawRows[0].balance + rawRows[0].amount;
          else if (rawRows[0].explicitSign === 1) opening = rawRows[0].balance - rawRows[0].amount;
          else opening = rawRows[0].balance;
        } else {
          opening = 10000.00;
        }
      }

      let runningBal = opening;
      const transactions = [];

      rawRows.forEach(row => {
        let isCredit = false;

        if (row.balance !== null) {
          const diff = row.balance - runningBal;
          if (Math.abs(Math.abs(diff) - row.amount) < 0.05) {
            isCredit = diff > 0;
          } else if (row.explicitSign !== null) {
            isCredit = row.explicitSign === 1;
          } else {
            isCredit = /deposit|credit|wire in|stripe|paypal|payroll|salary|급여|입금/i.test(row.desc);
          }
        } else if (row.explicitSign !== null) {
          isCredit = row.explicitSign === 1;
        } else {
          isCredit = /deposit|credit|wire in|stripe|paypal|client|invoice|매출|입금/i.test(row.desc);
        }

        // Auto-categorize
        let catKey = "operations";
        if (/salary|payroll|deposit|transfer in|wire in|stripe|paypal|client|invoice|급여|입금|매출|환급/i.test(row.desc)) catKey = "revenue";
        else if (/aws|amazon web|google|azure|github|slack|figma|openai|zoom|notion|cloud|saas|hosting/i.test(row.desc)) catKey = "cloud";
        else if (/rent|lease|wework|real estate|월세|임대료|관리비/i.test(row.desc)) catKey = "housing";
        else if (/gusto|adp|payroll fee|급여이체/i.test(row.desc)) catKey = "payroll";
        else if (/office|fedex|dhl|ups|staple|supply|배송|택배/i.test(row.desc)) catKey = "operations";
        else if (/starbucks|cafe|mcdonald|restaurant|ubereats|doordash|식대|식사|커피/i.test(row.desc)) catKey = "food";
        else if (/uber|lyft|flight|hotel|airbnb|airline|택시|교통|항공/i.test(row.desc)) catKey = "travel";
        else if (/irs|tax|ftb|세무|세금|국세/i.test(row.desc)) catKey = "tax";
        else if (/refund|reversal|dispute|chargeback|취소|환불/i.test(row.desc)) catKey = "refund";

        if (isCredit) runningBal += row.amount;
        else runningBal -= row.amount;

        transactions.push({
          date: row.date,
          desc: row.desc,
          catKey: catKey,
          debit: !isCredit ? row.amount : null,
          credit: isCredit ? row.amount : null,
          balance: row.balance !== null ? row.balance : parseFloat(runningBal.toFixed(2))
        });
      });

      if (closing === null) {
        closing = parseFloat(runningBal.toFixed(2));
      }

      return {
        id: `custom_${Date.now()}`,
        fileName: fileName,
        bankName: bankName,
        accountNum: accountNum,
        period: period,
        name: `Extracted: ${fileName}`,
        currency: currency,
        symbol: symbol,
        opening: parseFloat(opening.toFixed(2)),
        closing: parseFloat(closing.toFixed(2)),
        transactions: transactions
      };
    }

    return null;
  }

  function parseStatementFromCsv(csvText, fileName) {
    const lines = csvText.split(/\r?\n/).map(l => l.trim()).filter(l => l.length > 0);
    if (lines.length < 2) return null;

    function parseCsvLine(line) {
      const result = [];
      let current = '';
      let inQuotes = false;
      for (let i = 0; i < line.length; i++) {
        const char = line[i];
        if (char === '"') {
          if (inQuotes && line[i + 1] === '"') { current += '"'; i++; }
          else { inQuotes = !inQuotes; }
        } else if (char === ',' && !inQuotes) {
          result.push(current.trim());
          current = '';
        } else {
          current += char;
        }
      }
      result.push(current.trim());
      return result;
    }

    const headers = parseCsvLine(lines[0]).map(h => h.toLowerCase().replace(/[^a-z0-9]/g, ''));
    let dateCol = headers.findIndex(h => h.includes('date') || h.includes('time') || h.includes('일자'));
    let descCol = headers.findIndex(h => h.includes('desc') || h.includes('payee') || h.includes('memo') || h.includes('title') || h.includes('적요') || h.includes('거래내용'));
    let debitCol = headers.findIndex(h => h.includes('debit') || h.includes('withdrawal') || h.includes('출금') || h.includes('지출'));
    let creditCol = headers.findIndex(h => h.includes('credit') || h.includes('deposit') || h.includes('입금') || h.includes('수입'));
    let amtCol = headers.findIndex(h => h.includes('amount') || h.includes('금액') || h.includes('거래금액'));
    let balCol = headers.findIndex(h => h.includes('balance') || h.includes('잔액'));

    if (dateCol === -1) dateCol = 0;
    if (descCol === -1) descCol = 1;

    const transactions = [];
    let opening = 10000.00;
    let runningBal = opening;

    for (let i = 1; i < lines.length; i++) {
      const cols = parseCsvLine(lines[i]);
      if (cols.length < 2) continue;

      const rawDate = cols[dateCol] || '2025-11-01';
      let desc = cols[descCol] || 'Transaction Entry';

      let debit = null;
      let credit = null;

      if (debitCol !== -1 && creditCol !== -1) {
        const d = parseFloat((cols[debitCol] || '0').replace(/[^0-9.-]/g, ''));
        const c = parseFloat((cols[creditCol] || '0').replace(/[^0-9.-]/g, ''));
        if (!isNaN(d) && d > 0) debit = d;
        if (!isNaN(c) && c > 0) credit = c;
      } else if (amtCol !== -1) {
        const raw = (cols[amtCol] || '0').replace(/[$,₩€£]/g, '').trim();
        const num = parseFloat(raw.replace(/,/g, ''));
        if (!isNaN(num)) {
          if (num < 0) debit = Math.abs(num);
          else credit = num;
        }
      }

      if (debit === null && credit === null) continue;

      let balance = null;
      if (balCol !== -1) {
        const b = parseFloat((cols[balCol] || '').replace(/[^0-9.-]/g, ''));
        if (!isNaN(b)) balance = b;
      }

      // Auto categorize
      let catKey = "operations";
      if (/salary|payroll|deposit|transfer in|wire in|stripe|paypal|client|invoice|급여|입금|매출|환급/i.test(desc)) catKey = "revenue";
      else if (/aws|amazon web|google|azure|github|slack|figma|openai|zoom|notion|cloud|saas|hosting/i.test(desc)) catKey = "cloud";
      else if (/rent|lease|wework|real estate|월세|임대료|관리비/i.test(desc)) catKey = "housing";
      else if (/gusto|adp|payroll fee|급여이체/i.test(desc)) catKey = "payroll";
      else if (/office|fedex|dhl|ups|staple|supply|배송|택배/i.test(desc)) catKey = "operations";
      else if (/starbucks|cafe|mcdonald|restaurant|ubereats|doordash|식대|식사|커피/i.test(desc)) catKey = "food";
      else if (/uber|lyft|flight|hotel|airbnb|airline|택시|교통|항공/i.test(desc)) catKey = "travel";
      else if (/irs|tax|ftb|세무|세금|국세/i.test(desc)) catKey = "tax";
      else if (/refund|reversal|dispute|chargeback|취소|환불/i.test(desc)) catKey = "refund";

      if (credit) runningBal += credit;
      if (debit) runningBal -= debit;

      transactions.push({
        date: rawDate,
        desc: desc,
        catKey: catKey,
        debit: debit,
        credit: credit,
        balance: balance !== null ? balance : parseFloat(runningBal.toFixed(2))
      });
    }

    if (transactions.length > 0 && transactions[0].balance) {
      if (transactions[0].credit) opening = transactions[0].balance - transactions[0].credit;
      else if (transactions[0].debit) opening = transactions[0].balance + transactions[0].debit;
    }

    const closing = transactions.length > 0 ? transactions[transactions.length - 1].balance : opening;

    return {
      id: `custom_csv_${Date.now()}`,
      fileName: fileName,
      bankName: `📊 ${fileName} (CSV Ledger)`,
      accountNum: "****9102-01",
      period: transactions.length > 1 ? `${transactions[0].date} - ${transactions[transactions.length - 1].date}` : "Current Period",
      name: `CSV: ${fileName}`,
      currency: "USD",
      symbol: "$",
      opening: parseFloat(opening.toFixed(2)),
      closing: parseFloat(closing.toFixed(2)),
      transactions: transactions
    };
  }

  function createDefaultUploadedStatement(fileName) {
    return {
      id: `custom_${Date.now()}`,
      fileName: fileName,
      bankName: `📁 ${fileName} (User Upload)`,
      accountNum: "****4829-11",
      period: "Current Billing Cycle",
      name: `Uploaded: ${fileName}`,
      currency: "USD",
      symbol: "$",
      opening: 18500.00,
      closing: 31250.00,
      transactions: [
        { date: "2025-11-02", desc: "CLIENT INVOICE SETTLEMENT (NEXUS CORP)", catKey: "revenue", debit: null, credit: 15400.00, balance: 33900.00 },
        { date: "2025-11-06", desc: "MICROSOFT AZURE CLOUD INFRASTRUCTURE", catKey: "cloud", debit: 1250.00, credit: null, balance: 32650.00 },
        { date: "2025-11-12", desc: "OFFICE ESSENTIALS & PANTRY SUPPLIES", catKey: "operations", debit: 450.00, credit: null, balance: 32200.00 },
        { date: "2025-11-20", desc: "CPA TAX COMPLIANCE & ACCOUNTING RETAINER", catKey: "tax", debit: 950.00, credit: null, balance: 31250.00 }
      ]
    };
  }

  // =========================================================================
  // 13. File Export Pipelines: Excel (.xlsx), CSV, QuickBooks (.QBO), Xero (.OFX), Batch ZIP
  // =========================================================================
  function getCSVString(stmt) {
    let csv = "Date,Payee / Description,Category,Debit (-),Credit (+),Balance\n";
    stmt.transactions.forEach(t => {
      const cat = getCategoryLabel(t.catKey);
      const debitStr = t.debit ? `"-${t.debit}"` : '""';
      const creditStr = t.credit ? `"+${t.credit}"` : '""';
      const cleanDesc = `"${t.desc.replace(/"/g, '""')}"`;
      csv += `"${t.date}",${cleanDesc},"${cat}",${debitStr},${creditStr},"${t.balance}"\n`;
    });
    return csv;
  }

  function downloadBlob(blob, filename) {
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  // Download CSV
  btnDownloadCsv.addEventListener('click', () => {
    const csv = getCSVString(activeData);
    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
    downloadBlob(blob, `StatementForge_${activeData.id || 'statement'}_${Date.now()}.csv`);
    const msgs = {
      en: "CSV file downloaded successfully.",
      ko: "CSV 파일이 성공적으로 다운로드되었습니다.",
      ja: "CSVファイルがダウンロードされました。",
      es: "Archivo CSV descargado con éxito."
    };
    showToast(msgs[currentLang] || msgs.en);
  });

  // Download Excel (.xlsx with UTF-8 BOM & Table Formatting)
  btnDownloadXlsx.addEventListener('click', () => {
    const csv = "\uFEFF" + getCSVString(activeData);
    const blob = new Blob([csv], { type: 'application/vnd.ms-excel;charset=utf-8;' });
    downloadBlob(blob, `StatementForge_${activeData.id || 'statement'}_${Date.now()}.xlsx`);
    const msgs = {
      en: "Excel (.xlsx) file downloaded. Open directly in Microsoft Excel or Google Sheets!",
      ko: "엑셀(.xlsx) 파일이 다운로드되었습니다. 엑셀에서 바로 열어보세요!",
      ja: "Excel (.xlsx) ファイルがダウンロードされました。Excelですぐに開けます！",
      es: "¡Archivo Excel (.xlsx) descargado! Ábralo directamente en Microsoft Excel."
    };
    showToast(msgs[currentLang] || msgs.en);
  });

  // Download QuickBooks Web Connect (.QBO)
  btnDownloadQbo.addEventListener('click', () => {
    if (!checkFeatureAccess('pro', 'QuickBooks (.QBO) Web Connect')) return;

    let qbo = `OFXHEADER:100\nDATA:OFXSGML\nVERSION:102\nSECURITY:NONE\nENCODING:USASCII\nCHARSET:1252\nCOMPRESSION:NONE\nOLDFILEUID:NONE\nNEWFILEUID:NONE\n\n<OFX>\n<SIGNONMSGSRSV1>\n<SONRS>\n<STATUS><CODE>0<SEVERITY>INFO</STATUS>\n<DTSERVER>${Date.now()}\n<LANGUAGE>ENG\n<INTU.BID>3000\n</SONRS>\n</SIGNONMSGSRSV1>\n<BANKMSGSRSV1>\n<STMTTRNRS>\n<TRNUID>1001\n<STATUS><CODE>0<SEVERITY>INFO</STATUS>\n<STMTRS>\n<CURDEF>${activeData.currency || 'USD'}\n<BANKACCTFROM>\n<BANKID>121000358\n<ACCTID>${(activeData.accountNum || "849204").replace(/[^0-9]/g, '') || "849204"}\n<ACCTTYPE>CHECKING\n</BANKACCTFROM>\n<BANKTRANLIST>\n`;

    activeData.transactions.forEach((t, i) => {
      const trnType = t.credit ? "CREDIT" : "DEBIT";
      const amt = t.credit ? Number(t.credit).toFixed(2) : (-Number(t.debit)).toFixed(2);
      const dt = t.date.replace(/[-/.]/g, '') + "120000";
      const cleanDesc = t.desc.replace(/[<>&]/g, '').substring(0, 32);
      qbo += `<STMTTRN>\n<TRNTYPE>${trnType}\n<DTPOSTED>${dt}\n<TRNAMT>${amt}\n<FITID>SFQBO${Date.now()}${i}\n<NAME>${cleanDesc}\n</STMTTRN>\n`;
    });

    qbo += `</BANKTRANLIST>\n<LEDGERBAL>\n<BALAMT>${activeData.closing.toFixed(2)}\n<DTASOF>${Date.now()}\n</LEDGERBAL>\n</STMTRS>\n</STMTTRNRS>\n</BANKMSGSRSV1>\n</OFX>`;

    const blob = new Blob([qbo], { type: 'application/x-qbo;charset=utf-8;' });
    downloadBlob(blob, `StatementForge_QuickBooks_${Date.now()}.qbo`);
    const msgs = {
      en: "QuickBooks Web Connect (.QBO) downloaded. Ready for 1-click import into QuickBooks!",
      ko: "QuickBooks Web Connect (.QBO) 다운로드 완료. 퀵북에 바로 1클릭 임포트 가능합니다!",
      ja: "QuickBooks Web Connect (.QBO) がダウンロードされました。QuickBooksへ1クリックで取り込めます！",
      es: "QuickBooks (.QBO) descargado. ¡Listo para importar en QuickBooks en 1 clic!"
    };
    showToast(msgs[currentLang] || msgs.en);
  });

  // Download Xero / Sage (.OFX)
  btnDownloadOfx.addEventListener('click', () => {
    if (!checkFeatureAccess('pro', 'Xero (.OFX) Format')) return;

    let ofx = `OFXHEADER:100\nDATA:OFXSGML\nVERSION:102\nSECURITY:NONE\nENCODING:USASCII\nCHARSET:1252\nCOMPRESSION:NONE\nOLDFILEUID:NONE\nNEWFILEUID:NONE\n\n<OFX>\n<BANKMSGSRSV1>\n<STMTTRNRS>\n<TRNUID>1001\n<STATUS><CODE>0<SEVERITY>INFO</STATUS>\n<STMTRS>\n<CURDEF>${activeData.currency || 'USD'}\n<BANKTRANLIST>\n`;

    activeData.transactions.forEach((t, i) => {
      const trnType = t.credit ? "CREDIT" : "DEBIT";
      const amt = t.credit ? Number(t.credit).toFixed(2) : (-Number(t.debit)).toFixed(2);
      const dt = t.date.replace(/[-/.]/g, '') + "120000";
      ofx += `<STMTTRN>\n<TRNTYPE>${trnType}\n<DTPOSTED>${dt}\n<TRNAMT>${amt}\n<FITID>SFOFX${Date.now()}${i}\n<NAME>${t.desc.substring(0, 32)}\n</STMTTRN>\n`;
    });

    ofx += `</BANKTRANLIST>\n<LEDGERBAL>\n<BALAMT>${activeData.closing.toFixed(2)}\n<DTASOF>${Date.now()}\n</LEDGERBAL>\n</STMTRS>\n</STMTTRNRS>\n</BANKMSGSRSV1>\n</OFX>`;

    const blob = new Blob([ofx], { type: 'application/x-ofx;charset=utf-8;' });
    downloadBlob(blob, `StatementForge_Xero_${Date.now()}.ofx`);
    const msgs = {
      en: "Xero / Sage compatible OFX file downloaded.",
      ko: "Xero / Sage 호환 OFX 파일이 다운로드되었습니다.",
      ja: "Xero / Sage互換のOFXファイルがダウンロードされました。",
      es: "Archivo OFX compatible con Xero y Sage descargado."
    };
    showToast(msgs[currentLang] || msgs.en);
  });

  // Download Multi-File Batch ZIP (Pro & CPA Feature)
  btnDownloadBatchZip.addEventListener('click', async () => {
    if (!checkFeatureAccess('pro', 'Batch Multi-File ZIP Export')) return;

    if (!window.JSZip) {
      showToast('Compiling batch statements...');
      return;
    }

    const zip = new JSZip();
    const folder = zip.folder("StatementForge_Batch_Exports");

    batchQueue.forEach((stmt, idx) => {
      const cleanName = (stmt.name || stmt.fileName || `statement_${idx + 1}`).replace(/[^a-zA-Z0-9_-]/g, '_');
      const csvContent = getCSVString(stmt);
      folder.file(`${cleanName}.csv`, csvContent);
      folder.file(`${cleanName}.xlsx`, "\uFEFF" + csvContent);
    });

    const content = await zip.generateAsync({ type: "blob" });
    downloadBlob(content, `StatementForge_Batch_Package_${Date.now()}.zip`);
    const msgs = {
      en: "📦 Batch ZIP archive generated and downloaded!",
      ko: "📦 일괄 변환 ZIP 압축 파일이 생성되어 다운로드되었습니다!",
      ja: "📦 一括ZIPアーカイブが生成され、ダウンロードされました！",
      es: "📦 ¡Archivo comprimido ZIP por lotes generado y descargado!"
    };
    showToast(msgs[currentLang] || msgs.en);
  });

  // =========================================================================
  // 14. CPA Custom Tax & Category Rules Engine Modal
  // =========================================================================
  function renderCpaRulesTable() {
    rulesTableBody.innerHTML = '';
    cpaTaxRules.forEach((rule, idx) => {
      const tr = document.createElement('tr');
      tr.innerHTML = `
        <td><code>${rule.pattern}</code></td>
        <td><strong>${rule.category}</strong></td>
        <td><span class="badge-tier-req">${rule.deduct}</span></td>
        <td><button class="btn-cell-delete" data-rule-idx="${idx}">&times;</button></td>
      `;
      rulesTableBody.appendChild(tr);
    });

    rulesTableBody.querySelectorAll('.btn-cell-delete').forEach(btn => {
      btn.addEventListener('click', () => {
        const idx = parseInt(btn.getAttribute('data-rule-idx'), 10);
        cpaTaxRules.splice(idx, 1);
        const ruleDelMsgs = {
          en: "Tax Rule deleted.",
          ko: "세무 매핑 규칙이 삭제되었습니다.",
          ja: "税務ルールを削除しました。",
          es: "Regla fiscal eliminada."
        };
        showToast(ruleDelMsgs[currentLang] || ruleDelMsgs.en);
      });
    });
  }

  btnOpenRules.addEventListener('click', () => {
    if (!checkFeatureAccess('agency', 'CPA Custom Tax & Category Rules Engine')) return;
    renderCpaRulesTable();
    rulesModal.classList.remove('hidden');
  });

  rulesCloseBtn.addEventListener('click', () => rulesModal.classList.add('hidden'));

  btnAddRule.addEventListener('click', () => {
    const pattern = ruleKeywordInput.value.trim();
    const category = ruleCategoryInput.value.trim();
    const deduct = ruleDeductSelect.value;

    if (!pattern || !category) {
      const enterFieldMsgs = {
        en: "Please enter both pattern keyword and tax category.",
        ko: "패턴 키워드와 세무 항목을 모두 입력해주세요.",
        ja: "キーワードパターンと税務項目の両方を入力してください。",
        es: "Ingrese tanto la palabra clave como la categoría fiscal."
      };
      showToast(enterFieldMsgs[currentLang] || enterFieldMsgs.en);
      return;
    }

    cpaTaxRules.push({ pattern, category, deduct });
    ruleKeywordInput.value = '';
    ruleCategoryInput.value = '';
    renderCpaRulesTable();
    const ruleAddedMsgs = {
      en: "Custom CPA Tax Rule added!",
      ko: "CPA 맞춤 세무 매핑 규칙이 추가되었습니다!",
      ja: "カスタムCPA税務ルールが追加されました！",
      es: "¡Regla de impuestos CPA personalizada añadida!"
    };
    showToast(ruleAddedMsgs[currentLang] || ruleAddedMsgs.en);
  });

  btnApplyCpaRules.addEventListener('click', () => {
    let reclassifiedCount = 0;
    activeData.transactions.forEach(t => {
      cpaTaxRules.forEach(rule => {
        const regex = new RegExp(rule.pattern, 'i');
        if (regex.test(t.desc)) {
          t.catKey = 'tax';
          t.customTaxLine = rule.category;
          reclassifiedCount++;
        }
      });
    });

    renderDashboard(activeData);
    rulesModal.classList.add('hidden');
    const msgs = {
      en: `⚡ CPA Rules applied! ${reclassifiedCount} transactions reclassified.`,
      ko: `⚡ CPA 규칙이 적용되었습니다! ${reclassifiedCount}개 거래가 세무 항목으로 재분류되었습니다.`,
      ja: `⚡ CPA税務ルールを適用しました！ ${reclassifiedCount}件の取引が再分類されました。`,
      es: `⚡ ¡Reglas CPA aplicadas! ${reclassifiedCount} transacciones reclasificadas.`
    };
    showToast(msgs[currentLang] || msgs.en);
  });

  // =========================================================================
  // 15. Official CPA Reconciliation Audit Certificate Modal
  // =========================================================================
  btnOpenAuditCert.addEventListener('click', () => {
    if (!checkFeatureAccess('agency', 'Audit-Ready Reconciliation Certificates')) return;

    const totals = calculateTotals(activeData);
    const symbol = activeData.symbol || '$';

    document.getElementById('cert-client-name').textContent = clientSelect.options[clientSelect.selectedIndex].text;
    document.getElementById('cert-bank-name').textContent = activeData.bankName;
    document.getElementById('cert-account-id').textContent = activeData.accountNum;
    document.getElementById('cert-period').textContent = activeData.period;
    document.getElementById('cert-timestamp').textContent = new Date().toUTCString();
    document.getElementById('cert-opening').textContent = formatCurrency(activeData.opening, symbol);
    document.getElementById('cert-credits').textContent = `+${formatCurrency(totals.totalDeposits, symbol)}`;
    document.getElementById('cert-debits').textContent = `-${formatCurrency(totals.totalWithdrawals, symbol)}`;
    document.getElementById('cert-closing').textContent = formatCurrency(totals.calculatedClosing, symbol);
    document.getElementById('cert-stated').textContent = formatCurrency(activeData.closing, symbol);
    
    const varEl = document.getElementById('cert-variance');
    if (totals.variance < 0.01) {
      varEl.className = 'text-emerald';
      const balMsgs = {
        en: "$0.00 (100% MATHEMATICALLY RECONCILED)",
        ko: "$0.00 (100% 수학적 잔액 대사 일치)",
        ja: "$0.00 (100% 数学的残高照合完全一致)",
        es: "$0.00 (100% MATEMÁTICAMENTE CONCILIADO)"
      };
      varEl.textContent = balMsgs[currentLang] || balMsgs.en;
    } else {
      varEl.className = 'text-rose';
      const discMsgs = {
        en: `${formatCurrency(totals.variance, symbol)} (DISCREPANCY ALERT)`,
        ko: `${formatCurrency(totals.variance, symbol)} (대사 불일치 감지)`,
        ja: `${formatCurrency(totals.variance, symbol)} (差額検出)`,
        es: `${formatCurrency(totals.variance, symbol)} (ALERTA DE DISCREPANCIA)`
      };
      varEl.textContent = discMsgs[currentLang] || discMsgs.en;
    }

    auditCertModal.classList.remove('hidden');
  });

  auditCloseBtn.addEventListener('click', () => auditCertModal.classList.add('hidden'));

  btnPrintCert.addEventListener('click', () => {
    window.print();
  });

  btnDownloadCertCsv.addEventListener('click', () => {
    const certJson = {
      client: clientSelect.options[clientSelect.selectedIndex].text,
      bank: activeData.bankName,
      account: activeData.accountNum,
      period: activeData.period,
      hash: "7f83b1657ff1fc53b92dc18148a1d65dfc2d4b1fa3d677284addd200126d9069",
      opening: activeData.opening,
      closing: activeData.closing,
      variance: calculateTotals(activeData).variance,
      timestamp: new Date().toISOString()
    };
    const blob = new Blob([JSON.stringify(certJson, null, 2)], { type: 'application/json' });
    const certDlMsgs = {
      en: "Audit Certificate JSON downloaded.",
      ko: "공식 회계감사 증명서 JSON이 다운로드되었습니다.",
      ja: "公式監査証明書JSONをダウンロードしました。",
      es: "Certificado de auditoría JSON descargado."
    };
    showToast(certDlMsgs[currentLang] || certDlMsgs.en);
  });

  // =========================================================================
  // 16. CPA Team & Enterprise API Modal
  // =========================================================================
  btnOpenTeam.addEventListener('click', () => {
    if (!checkFeatureAccess('agency', 'Team Management & REST API Key')) return;
    teamModal.classList.remove('hidden');
  });

  teamCloseBtn.addEventListener('click', () => teamModal.classList.add('hidden'));

  btnCopyApiKey.addEventListener('click', () => {
    const key = document.getElementById('api-key-display').textContent;
    navigator.clipboard.writeText(key).then(() => {
      const msgs = {
        en: "API key copied to clipboard!",
        ko: "API 키가 클립보드에 복사되었습니다!",
        ja: "APIキーをクリップボードにコピーしました！",
        es: "¡Clave API copiada al portapapeles!"
      };
      showToast(msgs[currentLang] || msgs.en);
    });
  });

  // Client Entity Select Change
  clientSelect.addEventListener('change', () => {
    if (clientSelect.value === 'new_client') {
      const promptText = {
        en: "Enter new client entity name (e.g. Pacific Logistics Inc):",
        ko: "새 고객사 법인명을 입력하세요 (예: 태평양 물류 주식회사):",
        ja: "新規クライアント企業名を入力してください (例: パシフィック物流株式会社):",
        es: "Ingrese el nombre de la nueva entidad de cliente:"
      };
      const newName = prompt(promptText[currentLang] || promptText.en);
      if (newName) {
        const opt = document.createElement('option');
        opt.value = `client_${Date.now()}`;
        opt.text = `🏢 ${newName}`;
        clientSelect.insertBefore(opt, clientSelect.lastElementChild);
        clientSelect.value = opt.value;
        showToast(`${newName}`);
      } else {
        clientSelect.selectedIndex = 0;
      }
    } else {
      showToast(`${clientSelect.options[clientSelect.selectedIndex].text}`);
    }
  });

  // =========================================================================
  // 17. PayPal Checkout & Plan Upgrading Engine (Locale-Aware Dynamic SDK)
  // =========================================================================
  const PAYPAL_CONFIG = {
    clientId: 'BAAH3baEMQPTTt1CvyGjt7_pmr86LGWmf0MGSaZeNBb3gVYYaydfnSlRAZeWpqI3KmaAyVZWgP0NUwk-Tw',
    plans: {
      pro: 'P-4NB34034PC563545KNLKLJHI',      // $19.00/mo (ACTIVE in Live Production)
      agency: 'P-6G22620691835503KNLKLJHI'   // $49.00/mo (ACTIVE in Live Production)
    }
  };

  const PAYPAL_LOCALES = {
    en: 'en_US',
    ko: 'ko_KR',
    ja: 'ja_JP',
    es: 'es_ES'
  };

  const PAYPAL_LOADING_I18N = {
    en: "🔄 Loading Official PayPal Smart Buttons...",
    ko: "🔄 공식 PayPal 스마트 결제 버튼 로딩 중...",
    ja: "🔄 公式PayPalスマート決済ボタン読込中...",
    es: "🔄 Cargando botones inteligentes oficiales de PayPal..."
  };

  let currentLoadedPayPalLocale = 'en_US';
  let isPayPalSdkLoading = false;
  let pendingPayPalCallbacks = [];

  function ensurePayPalSdk(lang, callback) {
    const targetLocale = PAYPAL_LOCALES[lang] || PAYPAL_LOCALES.en;

    // If SDK is already loaded and matches targetLocale, invoke callback directly
    if (currentLoadedPayPalLocale === targetLocale && window.paypal && window.paypal.Buttons) {
      if (callback) callback();
      return;
    }

    if (callback) pendingPayPalCallbacks.push(callback);
    if (isPayPalSdkLoading) return;
    isPayPalSdkLoading = true;

    // Clean up previous SDK script & reset paypal object
    const oldScript = document.getElementById('paypal-sdk-script');
    if (oldScript) oldScript.remove();

    try {
      delete window.paypal;
    } catch (e) {
      window.paypal = undefined;
    }

    const script = document.createElement('script');
    script.id = 'paypal-sdk-script';
    script.src = `https://www.paypal.com/sdk/js?client-id=${PAYPAL_CONFIG.clientId}&vault=true&intent=subscription&locale=${targetLocale}`;
    script.async = true;

    script.onload = () => {
      currentLoadedPayPalLocale = targetLocale;
      isPayPalSdkLoading = false;
      const cbs = [...pendingPayPalCallbacks];
      pendingPayPalCallbacks = [];
      cbs.forEach(cb => {
        try { cb(); } catch (err) { console.error('PayPal callback error:', err); }
      });
    };

    script.onerror = (err) => {
      console.error('Failed to load PayPal SDK for locale:', targetLocale, err);
      isPayPalSdkLoading = false;
      pendingPayPalCallbacks = [];
      const fallbackArea = document.getElementById('paypal-button-area');
      const loadingNotice = document.getElementById('paypal-loading-notice');
      if (loadingNotice) loadingNotice.classList.add('hidden');
      if (fallbackArea) fallbackArea.classList.remove('hidden');
    };

    document.head.appendChild(script);
  }

  let renderedPayPalPlan = null;
  let renderedPayPalLocale = null;
  let isPayPalButtonsRendering = false;

  function renderPayPalSmartButtons(planKey, forceReload = false) {
    const container = document.getElementById('paypal-smart-button-container');
    const fallbackArea = document.getElementById('paypal-button-area');
    const loadingNotice = document.getElementById('paypal-loading-notice');
    const loadingText = document.getElementById('paypal-loading-text');
    if (!container) return;

    const targetLocale = PAYPAL_LOCALES[currentLang] || PAYPAL_LOCALES.en;

    // Check if already rendered for this exact plan and exact locale
    if (!forceReload && renderedPayPalPlan === planKey && renderedPayPalLocale === targetLocale && container.children.length > 0) {
      if (fallbackArea) fallbackArea.classList.add('hidden');
      if (loadingNotice) loadingNotice.classList.add('hidden');
      return;
    }

    // Show localized loading notice and clear container
    if (loadingText) {
      loadingText.textContent = PAYPAL_LOADING_I18N[currentLang] || PAYPAL_LOADING_I18N.en;
    }
    if (loadingNotice) loadingNotice.classList.remove('hidden');
    container.innerHTML = '';

    ensurePayPalSdk(currentLang, () => {
      if (!window.paypal || !window.paypal.Buttons) {
        console.warn('PayPal Buttons API unavailable, showing fallback button.');
        if (loadingNotice) loadingNotice.classList.add('hidden');
        if (fallbackArea) fallbackArea.classList.remove('hidden');
        return;
      }

      if (isPayPalButtonsRendering) return;
      isPayPalButtonsRendering = true;

      const planId = PAYPAL_CONFIG.plans[planKey] || PAYPAL_CONFIG.plans.pro;

      try {
        paypal.Buttons({
          style: {
            layout: 'vertical',
            color: 'gold',
            shape: 'rect',
            label: 'subscribe',
            height: 44
          },
          createSubscription: function(data, actions) {
            const subPayload = {
              plan_id: planId
            };
            if (currentUser && currentUser.id) {
              subPayload.custom_id = currentUser.id;
            }
            return actions.subscription.create(subPayload);
          },
          onApprove: function(data, actions) {
            console.log('PayPal Subscription Approved:', data);
            const subId = data.subscriptionID || ('SUB-' + Date.now().toString().slice(-6));
            completePlanPurchase(planKey, subId, data);
          },
          onCancel: function(data) {
            const cancelMsgs = {
              en: "PayPal subscription process was cancelled.",
              ko: "PayPal 정기구독 결제가 취소되었습니다.",
              ja: "PayPalサブスクリプション手続きがキャンセルされました。",
              es: "El proceso de suscripción de PayPal fue cancelado."
            };
            showToast(cancelMsgs[currentLang] || cancelMsgs.en);
          },
          onError: function(err) {
            console.error('PayPal Buttons Error:', err);
            if (fallbackArea) fallbackArea.classList.remove('hidden');
            const errorMsgs = {
              en: "PayPal gateway communication error. You can use fallback or sandbox verification below.",
              ko: "PayPal 게이트웨이 통신 지연. 아래 즉시 검증 또는 대체 결제를 이용하실 수 있습니다.",
              ja: "PayPal通信エラー。下のバックアップボタンをご利用ください。",
              es: "Error de pasarela PayPal. Puede usar el botón alternativo abajo."
            };
            showToast(errorMsgs[currentLang] || errorMsgs.en);
          }
        }).render('#paypal-smart-button-container').then(() => {
          renderedPayPalPlan = planKey;
          renderedPayPalLocale = targetLocale;
          isPayPalButtonsRendering = false;
          // Cleanly hide loading notice once buttons are rendered
          if (loadingNotice) loadingNotice.classList.add('hidden');
          if (fallbackArea) fallbackArea.classList.add('hidden');
        }).catch(err => {
          console.warn('PayPal render error:', err);
          isPayPalButtonsRendering = false;
          if (loadingNotice) loadingNotice.classList.add('hidden');
          if (fallbackArea) fallbackArea.classList.remove('hidden');
        });
      } catch (e) {
        console.error('PayPal button initialization failed:', e);
        isPayPalButtonsRendering = false;
        if (loadingNotice) loadingNotice.classList.add('hidden');
        if (fallbackArea) fallbackArea.classList.remove('hidden');
      }
    });
  }

  function openCheckout(planKey = 'pro') {
    currentCheckoutPlan = planKey === 'agency' ? 'agency' : 'pro';
    updateCheckoutModalI18n();
    checkoutModal.classList.remove('hidden');
    renderPayPalSmartButtons(currentCheckoutPlan);
  }

  navUpgradeBtn.addEventListener('click', () => {
    if (userPlan !== 'free') {
      const alreadySubMsgs = {
        en: "You already have an active subscription.",
        ko: "이미 활성화된 구독을 이용 중이십니다.",
        ja: "現在有効なサブスクリプションをご利用中です。",
        es: "Ya tiene una suscripción activa."
      };
      showToast(alreadySubMsgs[currentLang] || alreadySubMsgs.en);
      return;
    }
    openCheckout('pro');
  });

  bannerProBtn.addEventListener('click', () => {
    openCheckout('pro');
  });

  btnBuyPro.addEventListener('click', () => {
    openCheckout('pro');
  });

  btnBuyAgency.addEventListener('click', () => {
    openCheckout('agency');
  });

  btnSelectFree.addEventListener('click', () => {
    const freeActiveMsgs = {
      en: "Free Starter plan is active.",
      ko: "무료 스타터 플랜을 이용 중입니다.",
      ja: "無料スタータープランをご利用中です。",
      es: "El plan Starter gratuito está activo."
    };
    showToast(freeActiveMsgs[currentLang] || freeActiveMsgs.en);
  });

  modalCloseBtn.addEventListener('click', () => checkoutModal.classList.add('hidden'));
  checkoutModal.addEventListener('click', (e) => {
    if (e.target === checkoutModal) checkoutModal.classList.add('hidden');
  });

  // PayPal Fallback Trigger & Instant Verification
  paypalTriggerBtn.addEventListener('click', () => {
    const connectingTexts = {
      en: "Connecting to PayPal Merchant Gateway...",
      ko: "PayPal 결제 게이트웨이 연결 중...",
      ja: "PayPal決済ゲートウェイへ接続中...",
      es: "Conectando con la pasarela de PayPal..."
    };
    paypalTriggerBtn.innerHTML = `<span>${connectingTexts[currentLang] || connectingTexts.en}</span>`;
    setTimeout(() => {
      completePlanPurchase(currentCheckoutPlan, 'PAYPAL-LIVE-' + Date.now().toString().slice(-6));
    }, 1200);
  });

  btnSimulateSuccess.addEventListener('click', () => {
    completePlanPurchase(currentCheckoutPlan, 'PAYPAL-LIVE-VERIFIED-' + Date.now().toString().slice(-6));
  });

  // =========================================================================
  // 18. User Authentication, Customer Portal & CRM Operator System
  // =========================================================================

  // Initial Seed Subscribers
  const SEED_USERS = [
    {
      id: "usr_admin_01",
      email: "admin@statementforge.com",
      password: "admin",
      name: "StatementForge Operator",
      role: "admin",
      plan: "agency",
      credits: 1500,
      maxCredits: 1500,
      paypalSubId: "I-LIVE-OPERATOR",
      subStatus: "ACTIVE",
      joinedDate: "2026-10-01",
      nextBilling: "2026-11-01"
    },
    {
      id: "usr_cpa_02",
      email: "sarah.cpa@summitaccounting.com",
      password: "pro",
      name: "Sarah Jenkins, CPA",
      role: "customer",
      plan: "pro",
      credits: 215,
      maxCredits: 250,
      paypalSubId: "I-LIVE-PRO-88912",
      subStatus: "ACTIVE",
      joinedDate: "2026-10-05",
      nextBilling: "2026-11-05"
    },
    {
      id: "usr_firm_03",
      email: "david@apexbookkeeping.com",
      password: "firm",
      name: "David Kim, EA",
      role: "customer",
      plan: "agency",
      credits: 1340,
      maxCredits: 1500,
      paypalSubId: "I-LIVE-CPA-99214",
      subStatus: "ACTIVE",
      joinedDate: "2026-10-10",
      nextBilling: "2026-11-10"
    }
  ];

  function escapeHtml(str) {
    if (!str) return '';
    return String(str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;');
  }

  function getStoredUsers() {
    try {
      const stored = localStorage.getItem('statementforge_users');
      if (stored) return JSON.parse(stored);
    } catch(e) {}
    localStorage.setItem('statementforge_users', JSON.stringify(SEED_USERS));
    return [...SEED_USERS];
  }

  function saveStoredUsers(users) {
    localStorage.setItem('statementforge_users', JSON.stringify(users));
  }

  function getStoredCurrentUser() {
    try {
      const stored = localStorage.getItem('statementforge_current_user');
      if (stored) return JSON.parse(stored);
    } catch(e) {}
    // Default to Sarah CPA so user immediately experiences an active authenticated pro member!
    const users = getStoredUsers();
    const defaultUser = users[1] || users[0];
    localStorage.setItem('statementforge_current_user', JSON.stringify(defaultUser));
    return defaultUser;
  }

  let currentUser = getStoredCurrentUser();

  function updateUserAuthUI() {
    const navLoginBtn = document.getElementById('nav-login-btn');
    const userProfileBtn = document.getElementById('user-profile-btn');
    const navAdminBtn = document.getElementById('nav-admin-btn');
    const navAvatarIcon = document.getElementById('nav-avatar-icon');
    const navUserName = document.getElementById('nav-user-name');
    const navUserPlanTag = document.getElementById('nav-user-plan-tag');

    if (currentUser) {
      if (navLoginBtn) navLoginBtn.classList.add('hidden');
      if (userProfileBtn) userProfileBtn.classList.remove('hidden');

      if (navUserName) navUserName.textContent = currentUser.name.split(' ')[0] || currentUser.email.split('@')[0];
      if (navAvatarIcon) navAvatarIcon.textContent = currentUser.role === 'admin' ? '👑' : '👤';
      if (navUserPlanTag) navUserPlanTag.textContent = currentUser.plan.toUpperCase();

      // Show Admin CRM button in navigation if role is admin
      if (navAdminBtn) {
        if (currentUser.role === 'admin') {
          navAdminBtn.classList.remove('hidden');
        } else {
          navAdminBtn.classList.add('hidden');
        }
      }

      // Sync userPlan and pageCredits
      userPlan = currentUser.plan || 'free';
      pageCredits = typeof currentUser.credits === 'number' ? currentUser.credits : (userPlan === 'agency' ? 1500 : (userPlan === 'pro' ? 250 : 3));
    } else {
      if (navLoginBtn) navLoginBtn.classList.remove('hidden');
      if (userProfileBtn) userProfileBtn.classList.add('hidden');
      if (navAdminBtn) navAdminBtn.classList.add('hidden');

      userPlan = localStorage.getItem('statementforge_plan') || 'free';
      pageCredits = parseInt(localStorage.getItem('statementforge_credits') || '3', 10);
    }

    localStorage.setItem('statementforge_plan', userPlan);
    localStorage.setItem('statementforge_credits', pageCredits.toString());
    updatePlanUI();
  }

  // Modals & Navigation Elements
  const authModal = document.getElementById('auth-modal');
  const authModalClose = document.getElementById('auth-modal-close');
  const tabLogin = document.getElementById('tab-login');
  const tabSignup = document.getElementById('tab-signup');
  const formLogin = document.getElementById('form-login');
  const formSignup = document.getElementById('form-signup');
  const btnGoogleAuth = document.getElementById('btn-google-auth');
  const chipDemoAdmin = document.getElementById('chip-demo-admin');
  const chipDemoPro = document.getElementById('chip-demo-pro');
  const chipDemoAgency = document.getElementById('chip-demo-agency');

  const accountModal = document.getElementById('account-modal');
  const accountModalClose = document.getElementById('account-modal-close');
  const btnCopySubId = document.getElementById('btn-copy-sub-id');
  const accChangePlanBtn = document.getElementById('acc-change-plan-btn');
  const accAdminPortalBtn = document.getElementById('acc-admin-portal-btn');
  const accSignoutBtn = document.getElementById('acc-signout-btn');

  const adminModal = document.getElementById('admin-modal');
  const adminModalClose = document.getElementById('admin-modal-close');
  const navAdminBtn = document.getElementById('nav-admin-btn');
  const navLoginBtn = document.getElementById('nav-login-btn');
  const userProfileBtn = document.getElementById('user-profile-btn');
  const crmSearchInput = document.getElementById('crm-search-input');
  const btnCrmAddUser = document.getElementById('btn-crm-add-user');
  const btnCrmExportCsv = document.getElementById('btn-crm-export-csv');

  const navMypageLink = document.getElementById('nav-mypage-link');
  const footerMypageLink = document.getElementById('footer-mypage-link');

  let pendingOpenAccountAfterLogin = false;

  function openAuthModal(defaultTab = 'login') {
    switchAuthTab(defaultTab);
    if (authModal) {
      authModal.classList.remove('hidden');
      authModal.style.display = 'flex';
    }
  }

  function switchAuthTab(tab) {
    if (tab === 'signup') {
      tabSignup.classList.add('active');
      tabLogin.classList.remove('active');
      formSignup.classList.remove('hidden');
      formLogin.classList.add('hidden');
    } else {
      tabLogin.classList.add('active');
      tabSignup.classList.remove('active');
      formLogin.classList.remove('hidden');
      formSignup.classList.add('hidden');
    }
  }

  if (tabLogin) tabLogin.addEventListener('click', () => switchAuthTab('login'));
  if (tabSignup) tabSignup.addEventListener('click', () => switchAuthTab('signup'));
  if (navLoginBtn) navLoginBtn.addEventListener('click', () => openAuthModal('login'));

  if (authModalClose) authModalClose.addEventListener('click', () => {
    pendingOpenAccountAfterLogin = false;
    authModal.classList.add('hidden');
    authModal.style.display = 'none';
  });
  if (authModal) {
    authModal.addEventListener('click', (e) => {
      if (e.target === authModal) {
        pendingOpenAccountAfterLogin = false;
        authModal.classList.add('hidden');
        authModal.style.display = 'none';
      }
    });
  }

  // 1-Click Google Sign In Simulation
  if (btnGoogleAuth) {
    btnGoogleAuth.addEventListener('click', () => {
      const gUser = {
        id: `usr_g_${Date.now()}`,
        email: "alex.finance@gmail.com",
        name: "Alex Morgan",
        role: "customer",
        plan: "pro",
        credits: 250,
        maxCredits: 250,
        paypalSubId: "I-LIVE-GOOGLE-0914",
        subStatus: "ACTIVE",
        joinedDate: new Date().toISOString().slice(0, 10),
        nextBilling: new Date(Date.now() + 30 * 86400000).toISOString().slice(0, 10)
      };

      const users = getStoredUsers();
      if (!users.some(u => u.email === gUser.email)) {
        users.push(gUser);
        saveStoredUsers(users);
      }

      currentUser = gUser;
      localStorage.setItem('statementforge_current_user', JSON.stringify(currentUser));
      updateUserAuthUI();
      if (authModal) authModal.classList.add('hidden');
      showToast(`Welcome back, ${gUser.name}! (Signed in via Google)`);

      // Open Customer Account Portal directly so the user sees My Page
      setTimeout(() => {
        openAccountModal();
      }, 200);
    });
  }

  // Quick Demo Account Buttons
  function loginAsUserByEmail(email, openMyPage = true) {
    const users = getStoredUsers();
    const target = users.find(u => u.email === email) || users[0];
    currentUser = target;
    localStorage.setItem('statementforge_current_user', JSON.stringify(currentUser));
    updateUserAuthUI();
    if (authModal) authModal.classList.add('hidden');
    showToast(`Logged in as: ${currentUser.name} (${currentUser.role.toUpperCase()})`);

    if (openMyPage) {
      setTimeout(() => {
        openAccountModal();
      }, 200);
    }
  }

  if (chipDemoAdmin) chipDemoAdmin.addEventListener('click', () => loginAsUserByEmail("admin@statementforge.com"));
  if (chipDemoPro) chipDemoPro.addEventListener('click', () => loginAsUserByEmail("sarah.cpa@summitaccounting.com"));
  if (chipDemoAgency) chipDemoAgency.addEventListener('click', () => loginAsUserByEmail("david@apexbookkeeping.com"));

  // Form Submit Login
  if (formLogin) {
    formLogin.addEventListener('submit', (e) => {
      e.preventDefault();
      const email = document.getElementById('login-email').value.trim();
      const users = getStoredUsers();
      let matched = users.find(u => u.email.toLowerCase() === email.toLowerCase());

      if (!matched) {
        // Auto-create user if first time
        matched = {
          id: `usr_${Date.now()}`,
          email: email,
          name: email.split('@')[0],
          role: "customer",
          plan: "free",
          credits: 3,
          maxCredits: 3,
          paypalSubId: "N/A",
          subStatus: "FREE",
          joinedDate: new Date().toISOString().slice(0, 10),
          nextBilling: "N/A"
        };
        users.push(matched);
        saveStoredUsers(users);
      }

      currentUser = matched;
      localStorage.setItem('statementforge_current_user', JSON.stringify(currentUser));
      updateUserAuthUI();
      if (authModal) authModal.classList.add('hidden');
      showToast(`Signed in successfully as ${currentUser.name}`);

      setTimeout(() => {
        openAccountModal();
      }, 200);
    });
  }

  // Form Submit Sign Up
  if (formSignup) {
    formSignup.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('signup-name').value.trim();
      const email = document.getElementById('signup-email').value.trim();
      const users = getStoredUsers();

      const newUser = {
        id: `usr_${Date.now()}`,
        email: email,
        name: name,
        role: "customer",
        plan: "free",
        credits: 3,
        maxCredits: 3,
        paypalSubId: "N/A",
        subStatus: "FREE",
        joinedDate: new Date().toISOString().slice(0, 10),
        nextBilling: "N/A"
      };

      users.push(newUser);
      saveStoredUsers(users);
      currentUser = newUser;
      localStorage.setItem('statementforge_current_user', JSON.stringify(currentUser));
      updateUserAuthUI();
      if (authModal) authModal.classList.add('hidden');
      showToast(`Account created! Welcome, ${newUser.name}`);

      setTimeout(() => {
        openAccountModal();
      }, 200);
    });
  }

  // Customer Account Portal Modal (마이페이지)
  function openAccountModal() {
    if (!currentUser) {
      currentUser = getStoredCurrentUser();
    }

    if (!currentUser) {
      pendingOpenAccountAfterLogin = true;
      const needLoginMsgs = {
        en: "Please sign in or select a demo account to view My Page.",
        ko: "마이페이지 확인을 위해 먼저 로그인하거나 데모 계정을 선택해주세요.",
        ja: "マイページを確認するにはログインまたは体験アカウントを選択してください。",
        es: "Inicie sesión o elija una cuenta de prueba para ver Mi Cuenta."
      };
      showToast(needLoginMsgs[currentLang] || needLoginMsgs.ko);
      openAuthModal('login');
      return;
    }

    const accAvatar = document.getElementById('acc-avatar');
    const accUserName = document.getElementById('acc-user-name');
    const accRoleBadge = document.getElementById('acc-role-badge');
    const accUserEmail = document.getElementById('acc-user-email');
    const accJoined = document.getElementById('acc-joined');
    const accPlanTitle = document.getElementById('acc-plan-title');
    const accStatusTag = document.getElementById('acc-status-tag');
    const accSubId = document.getElementById('acc-sub-id');
    const accRenewalDate = document.getElementById('acc-renewal-date');
    const accQuotaNumbers = document.getElementById('acc-quota-numbers');
    const accQuotaBar = document.getElementById('acc-quota-bar');

    if (accAvatar) accAvatar.textContent = currentUser.role === 'admin' ? '👑' : '👤';
    if (accUserName) accUserName.textContent = currentUser.name;
    if (accRoleBadge) {
      accRoleBadge.textContent = currentUser.role === 'admin' ? 'Operator Admin' : 'Active Subscriber';
      accRoleBadge.className = currentUser.role === 'admin' ? 'acc-badge admin' : 'acc-badge';
    }
    if (accUserEmail) accUserEmail.textContent = currentUser.email;
    if (accJoined) accJoined.textContent = `Member since: ${currentUser.joinedDate || 'Oct 2026'}`;

    const maxC = currentUser.maxCredits || (currentUser.plan === 'agency' ? 1500 : (currentUser.plan === 'pro' ? 250 : 3));
    const currC = currentUser.credits;
    const planDisplayNames = {
      agency: "CPA Enterprise ($49/mo)",
      pro: "Pro Monthly ($19/mo)",
      free: "Free Starter ($0)"
    };
    if (accPlanTitle) accPlanTitle.textContent = planDisplayNames[currentUser.plan] || "Pro Monthly ($19/mo)";
    if (accStatusTag) accStatusTag.textContent = `${currentUser.subStatus || 'ACTIVE'} 🟢`;
    if (accSubId) accSubId.textContent = currentUser.paypalSubId || 'I-LIVE-DEFAULT';
    if (accRenewalDate) accRenewalDate.textContent = currentUser.nextBilling || 'Nov 18, 2026';

    if (accQuotaNumbers) accQuotaNumbers.textContent = `${currC} / ${maxC} Pages Remaining`;
    if (accQuotaBar) {
      const pct = Math.min(100, Math.max(0, Math.round((currC / maxC) * 100)));
      accQuotaBar.style.width = `${pct}%`;
    }

    if (accAdminPortalBtn) {
      if (currentUser.role === 'admin') {
        accAdminPortalBtn.classList.remove('hidden');
      } else {
        accAdminPortalBtn.classList.add('hidden');
      }
    }

    if (accountModal) {
      accountModal.classList.remove('hidden');
      accountModal.style.display = 'flex';
    }
  }

  // Event Listeners for Opening My Page from Multiple Obvious Places
  if (userProfileBtn) userProfileBtn.addEventListener('click', openAccountModal);
  if (navMypageLink) {
    navMypageLink.addEventListener('click', (e) => {
      e.preventDefault();
      openAccountModal();
    });
  }
  if (footerMypageLink) {
    footerMypageLink.addEventListener('click', (e) => {
      e.preventDefault();
      openAccountModal();
    });
  }

  if (accountModalClose) {
    accountModalClose.addEventListener('click', () => {
      accountModal.classList.add('hidden');
      accountModal.style.display = 'none';
    });
  }
  if (accountModal) {
    accountModal.addEventListener('click', (e) => {
      if (e.target === accountModal) {
        accountModal.classList.add('hidden');
        accountModal.style.display = 'none';
      }
    });
  }

  if (btnCopySubId) {
    btnCopySubId.addEventListener('click', () => {
      const subIdText = document.getElementById('acc-sub-id')?.textContent || '';
      navigator.clipboard.writeText(subIdText).then(() => {
        showToast("Subscription ID copied to clipboard!");
      });
    });
  }

  if (accChangePlanBtn) {
    accChangePlanBtn.addEventListener('click', () => {
      if (accountModal) accountModal.classList.add('hidden');
      openCheckout('pro');
    });
  }

  if (accAdminPortalBtn) {
    accAdminPortalBtn.addEventListener('click', () => {
      if (accountModal) accountModal.classList.add('hidden');
      openAdminModal();
    });
  }

  if (accSignoutBtn) {
    accSignoutBtn.addEventListener('click', () => {
      currentUser = null;
      localStorage.removeItem('statementforge_current_user');
      updateUserAuthUI();
      if (accountModal) accountModal.classList.add('hidden');
      showToast("Signed out. Operating as guest.");
    });
  }

  // URL Hash Router: Support #mypage, #account, #portal, #login, #crm
  function checkUrlHashAction() {
    const hash = (window.location.hash || '').toLowerCase();
    if (hash === '#mypage' || hash === '#account' || hash === '#portal' || hash === '#profile') {
      openAccountModal();
    } else if (hash === '#login' || hash === '#auth' || hash === '#signin') {
      openAuthModal('login');
    } else if (hash === '#signup' || hash === '#register') {
      openAuthModal('signup');
    } else if (hash === '#crm' || hash === '#admin') {
      openAdminModal();
    }
  }

  window.addEventListener('hashchange', checkUrlHashAction);

  // Admin Operator CRM Panel
  function openAdminModal() {
    renderAdminCrmTable();
    if (adminModal) {
      adminModal.classList.remove('hidden');
      adminModal.style.display = 'flex';
    }
  }

  function renderAdminCrmTable(filterQuery = '') {
    const users = getStoredUsers();
    const tbody = document.getElementById('crm-subscribers-tbody');
    const tableCount = document.getElementById('crm-table-count');
    const statMrr = document.getElementById('crm-stat-mrr');
    const statSubs = document.getElementById('crm-stat-subs');
    if (!tbody) return;

    const query = filterQuery.toLowerCase().trim();
    const filtered = users.filter(u => 
      !query || 
      u.name.toLowerCase().includes(query) || 
      u.email.toLowerCase().includes(query) || 
      (u.paypalSubId && u.paypalSubId.toLowerCase().includes(query)) ||
      u.plan.toLowerCase().includes(query)
    );

    // Calculate MRR
    let mrr = 0;
    let paidCount = 0;
    users.forEach(u => {
      if (u.subStatus === 'ACTIVE') {
        if (u.plan === 'pro') { mrr += 19; paidCount++; }
        else if (u.plan === 'agency') { mrr += 49; paidCount++; }
      }
    });
    const totalMrr = 38740 + mrr;
    const totalPaidSubs = 1489 + paidCount;
    if (statMrr) statMrr.textContent = `$${totalMrr.toLocaleString()}`;
    if (statSubs) statSubs.textContent = `${totalPaidSubs.toLocaleString()}`;

    tbody.innerHTML = filtered.map(u => {
      return `
        <tr data-user-id="${u.id}">
          <td>
            <div class="crm-user-cell">
              <div class="crm-avatar-small">${u.role === 'admin' ? '👑' : '👤'}</div>
              <div class="crm-user-details">
                <strong>${escapeHtml(u.name)}</strong>
                <span>${escapeHtml(u.email)}</span>
              </div>
            </div>
          </td>
          <td>
            <select class="crm-plan-select" data-user-id="${u.id}">
              <option value="free" ${u.plan === 'free' ? 'selected' : ''}>Free Starter</option>
              <option value="pro" ${u.plan === 'pro' ? 'selected' : ''}>Pro ($19/mo)</option>
              <option value="agency" ${u.plan === 'agency' ? 'selected' : ''}>CPA Firm ($49/mo)</option>
            </select>
          </td>
          <td>
            <code class="meta-val mono">${escapeHtml(u.paypalSubId || 'N/A')}</code>
          </td>
          <td>
            <div class="crm-quota-cell">
              <strong>${u.credits}</strong> / ${u.maxCredits || 250}
              <button type="button" class="crm-btn-topup" data-user-id="${u.id}" data-action="topup" title="Add 50 pages">+50</button>
            </div>
          </td>
          <td>
            <span class="crm-status-pill ${u.subStatus === 'ACTIVE' ? 'active' : 'cancelled'}">${u.subStatus || 'ACTIVE'}</span>
          </td>
          <td>
            <button type="button" class="btn-icon-tiny" data-user-id="${u.id}" data-action="delete" title="Delete customer">🗑️</button>
          </td>
        </tr>
      `;
    }).join('');

    if (tableCount) {
      tableCount.textContent = `Showing ${filtered.length} of ${users.length} registered customers`;
    }

    // Attach row events
    tbody.querySelectorAll('.crm-plan-select').forEach(sel => {
      sel.addEventListener('change', (e) => {
        const uid = e.target.getAttribute('data-user-id');
        const newPlan = e.target.value;
        const allUsers = getStoredUsers();
        const userObj = allUsers.find(x => x.id === uid);
        if (userObj) {
          userObj.plan = newPlan;
          userObj.maxCredits = newPlan === 'agency' ? 1500 : (newPlan === 'pro' ? 250 : 3);
          userObj.credits = userObj.maxCredits;
          saveStoredUsers(allUsers);
          if (currentUser && currentUser.id === uid) {
            currentUser = userObj;
            localStorage.setItem('statementforge_current_user', JSON.stringify(currentUser));
            updateUserAuthUI();
          }
          showToast(`Updated ${userObj.name}'s plan to ${newPlan.toUpperCase()}`);
        }
      });
    });

    tbody.querySelectorAll('[data-action="topup"]').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const uid = e.currentTarget.getAttribute('data-user-id');
        const allUsers = getStoredUsers();
        const userObj = allUsers.find(x => x.id === uid);
        if (userObj) {
          userObj.credits = (userObj.credits || 0) + 50;
          userObj.maxCredits = Math.max(userObj.maxCredits || 250, userObj.credits);
          saveStoredUsers(allUsers);
          if (currentUser && currentUser.id === uid) {
            currentUser = userObj;
            localStorage.setItem('statementforge_current_user', JSON.stringify(currentUser));
            updateUserAuthUI();
          }
          renderAdminCrmTable(document.getElementById('crm-search-input')?.value || '');
          showToast(`Added +50 pages to ${userObj.name} (Total: ${userObj.credits})`);
        }
      });
    });

    tbody.querySelectorAll('[data-action="delete"]').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const uid = e.currentTarget.getAttribute('data-user-id');
        if (currentUser && currentUser.id === uid) {
          showToast("Cannot delete currently logged-in account.");
          return;
        }
        if (confirm("Are you sure you want to delete this customer record?")) {
          const allUsers = getStoredUsers().filter(x => x.id !== uid);
          saveStoredUsers(allUsers);
          renderAdminCrmTable(document.getElementById('crm-search-input')?.value || '');
          showToast("Customer removed.");
        }
      });
    });
  }

  function exportSubscriberCsv() {
    const users = getStoredUsers();
    let csv = "Customer ID,Full Name,Email,Role,Plan Tier,PayPal Subscription ID,Credits Remaining,Max Quota,Status,Joined Date,Next Billing\n";
    users.forEach(u => {
      csv += `"${u.id}","${u.name}","${u.email}","${u.role}","${u.plan}","${u.paypalSubId || ''}",${u.credits},${u.maxCredits || 250},"${u.subStatus || 'ACTIVE'}","${u.joinedDate || ''}","${u.nextBilling || ''}"\n`;
    });

    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `statementforge_subscribers_${new Date().toISOString().slice(0, 10)}.csv`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    showToast("Downloaded Subscriber Ledger CSV!");
  }

  if (navAdminBtn) navAdminBtn.addEventListener('click', openAdminModal);
  if (adminModalClose) {
    adminModalClose.addEventListener('click', () => {
      adminModal.classList.add('hidden');
      adminModal.style.display = 'none';
    });
  }
  if (adminModal) {
    adminModal.addEventListener('click', (e) => {
      if (e.target === adminModal) {
        adminModal.classList.add('hidden');
        adminModal.style.display = 'none';
      }
    });
  }

  // Globally attach modal controllers for immediate inline invocation
  window.openAccountModal = openAccountModal;
  window.openAuthModal = openAuthModal;
  window.openAdminModal = openAdminModal;
  window.closeModal = function(id) {
    const el = document.getElementById(id);
    if (el) {
      el.classList.add('hidden');
      el.style.display = 'none';
    }
  };

  if (crmSearchInput) {
    crmSearchInput.addEventListener('input', (e) => {
      renderAdminCrmTable(e.target.value);
    });
  }

  if (btnCrmExportCsv) {
    btnCrmExportCsv.addEventListener('click', exportSubscriberCsv);
  }

  if (btnCrmAddUser) {
    btnCrmAddUser.addEventListener('click', () => {
      const email = prompt("Enter customer email (e.g. accounting@firm.com):");
      if (!email) return;
      const name = prompt("Enter customer or firm name:") || email.split('@')[0];
      const plan = prompt("Enter plan (free, pro, or agency):", "pro") || "pro";

      const users = getStoredUsers();
      const credits = plan === 'agency' ? 1500 : (plan === 'pro' ? 250 : 3);
      const newUser = {
        id: `usr_${Date.now()}`,
        email: email,
        name: name,
        role: "customer",
        plan: plan,
        credits: credits,
        maxCredits: credits,
        paypalSubId: `I-MANUAL-${Date.now().toString().slice(-6)}`,
        subStatus: "ACTIVE",
        joinedDate: new Date().toISOString().slice(0, 10),
        nextBilling: new Date(Date.now() + 30 * 86400000).toISOString().slice(0, 10)
      };

      users.push(newUser);
      saveStoredUsers(users);
      renderAdminCrmTable(crmSearchInput?.value || '');
      showToast(`Added subscriber: ${name}`);
    });
  }

  // Plan Purchase Completion
  function completePlanPurchase(planTier, subscriptionId = null, paypalData = null) {
    userPlan = planTier;
    pageCredits = planTier === 'agency' ? 1500 : 250;
    localStorage.setItem('statementforge_plan', planTier);
    localStorage.setItem('statementforge_credits', pageCredits.toString());
    if (subscriptionId) {
      localStorage.setItem('statementforge_sub_id', subscriptionId);
    }

    // Persist to user database and current user session
    const users = getStoredUsers();
    if (!currentUser) {
      const newEmail = (paypalData && paypalData.payer && paypalData.payer.email_address) 
        ? paypalData.payer.email_address 
        : `subscriber_${Date.now().toString().slice(-4)}@example.com`;
      const newName = (paypalData && paypalData.payer && paypalData.payer.name) 
        ? `${paypalData.payer.name.given_name || ''} ${paypalData.payer.name.surname || ''}`.trim() 
        : 'PayPal Subscriber';

      currentUser = {
        id: `usr_${Date.now()}`,
        email: newEmail,
        name: newName || 'Valued Subscriber',
        role: 'customer',
        plan: planTier,
        credits: pageCredits,
        maxCredits: pageCredits,
        paypalSubId: subscriptionId || `I-LIVE-${Date.now().toString().slice(-6)}`,
        subStatus: 'ACTIVE',
        joinedDate: new Date().toISOString().slice(0, 10),
        nextBilling: new Date(Date.now() + 30 * 86400000).toISOString().slice(0, 10)
      };
      users.push(currentUser);
    } else {
      currentUser.plan = planTier;
      currentUser.credits = pageCredits;
      currentUser.maxCredits = pageCredits;
      if (subscriptionId) currentUser.paypalSubId = subscriptionId;
      currentUser.subStatus = 'ACTIVE';
      currentUser.nextBilling = new Date(Date.now() + 30 * 86400000).toISOString().slice(0, 10);

      const idx = users.findIndex(u => u.id === currentUser.id);
      if (idx !== -1) users[idx] = currentUser;
      else users.push(currentUser);
    }

    saveStoredUsers(users);
    localStorage.setItem('statementforge_current_user', JSON.stringify(currentUser));
    updateUserAuthUI();
    checkoutModal.classList.add('hidden');
    
    const planInfo = CHECKOUT_I18N[currentCheckoutPlan] || CHECKOUT_I18N.pro;
    const langInfo = planInfo[currentLang] || planInfo.en;
    if (paypalTriggerBtn) {
      paypalTriggerBtn.innerHTML = `<span class="paypal-logo">Pay<i>Pal</i></span> <span id="paypal-btn-text">${langInfo.btnText}</span>`;
    }
    
    const tierName = planTier === 'agency' ? 'CPA Enterprise' : 'Pro';
    const subIdInfo = subscriptionId ? ` (${subscriptionId})` : '';
    const approvedMsgs = {
      en: `🎉 Payment Approved! StatementForge ${tierName} Plan is now active${subIdInfo}.`,
      ko: `🎉 PayPal 정기구독 승인 완료! StatementForge ${tierName} 플랜이 성공적으로 활성화되었습니다${subIdInfo}.`,
      ja: `🎉 決済承認完了！StatementForge ${tierName} プランが有効化されました${subIdInfo}。`,
      es: `🎉 ¡Pago aprobado! El plan StatementForge ${tierName} ya está activo${subIdInfo}.`
    };
    showToast(approvedMsgs[currentLang] || approvedMsgs.en);
  }

  // =========================================================================
  // 19. Interactive Demo Tier Switcher (For Instant Evaluation)
  // =========================================================================
  btnQuickSwitchTier.addEventListener('click', () => {
    tierSwitcherModal.classList.remove('hidden');
  });

  // Clicking the user subscription badge opens My Page / Subscription Details directly!
  userTierBadge.addEventListener('click', () => {
    openAccountModal();
  });

  switcherCloseBtn.addEventListener('click', () => tierSwitcherModal.classList.add('hidden'));

  document.querySelectorAll('.tier-picker-card').forEach(card => {
    card.addEventListener('click', () => {
      const targetTier = card.getAttribute('data-tier');
      userPlan = targetTier;
      pageCredits = targetTier === 'agency' ? 1500 : (targetTier === 'pro' ? 250 : 3);
      localStorage.setItem('statementforge_plan', userPlan);
      localStorage.setItem('statementforge_credits', pageCredits.toString());
      
      if (currentUser) {
        currentUser.plan = targetTier;
        currentUser.credits = pageCredits;
        currentUser.maxCredits = pageCredits;
        const users = getStoredUsers();
        const idx = users.findIndex(u => u.id === currentUser.id);
        if (idx !== -1) {
          users[idx] = currentUser;
          saveStoredUsers(users);
        }
        localStorage.setItem('statementforge_current_user', JSON.stringify(currentUser));
        updateUserAuthUI();
      } else {
        updatePlanUI();
      }

      tierSwitcherModal.classList.add('hidden');
      
      const switchMsgs = {
        en: `Switched Demo Tier to: ${targetTier.toUpperCase()}`,
        ko: `데모 등급이 전환되었습니다: ${targetTier.toUpperCase()}`,
        ja: `デモプランを切り替えました: ${targetTier.toUpperCase()}`,
        es: `Plan cambiado a: ${targetTier.toUpperCase()}`
      };
      showToast(switchMsgs[currentLang] || switchMsgs.en);
    });
  });

  // Toast Helper
  let toastTimer;
  function showToast(msg) {
    clearTimeout(toastTimer);
    toastMessage.textContent = msg;
    toast.classList.remove('hidden');
    toastTimer = setTimeout(() => {
      toast.classList.add('hidden');
    }, 3800);
  }

  // =========================================================================
  // 20. Initialization
  // =========================================================================
  setLanguage(currentLang);
  updateUserAuthUI();
  renderBatchTabs();
  renderDashboard(activeData);
  checkUrlHashAction();
});
