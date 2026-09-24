export const profile={
 name:"Sayed Shadman Sakib",
 title:"Technical Operations Analyst",
 positioning:"Production Support · FinTech · Automation · Data Quality",
 location:"Dhaka, Bangladesh",
 phone:"+880 1521 304296",
 email:"sayed.sakib2025@gmail.com",
 linkedin:"https://www.linkedin.com/in/sayed-shadman-sakib/",
 github:"https://github.com/sayedsakib-33",
 githubBio:"Technical Operations Analyst building fintech tools, AI-assisted QC systems, and automation with TypeScript, Python, SQL, APIs, and data workflows.",
 summary:"Operations Analyst with 4+ years of experience across fintech operations, customer support, technical escalations, data quality, compliance workflows, and process improvement."
};

export const metrics=[
 {value:"60%",label:"Fewer database & manual verification errors"},
 {value:"35%",label:"Faster client time-to-activation"},
 {value:"2,000+",label:"Cases resolved at 95% satisfaction"},
 {value:"11.8%",label:"Negative review reduction"}
];

export const experiences=[
 {company:"NEXT Ventures (FundedNext)",role:"Operations Analyst",period:"Jan 2025 — Present",intro:"Technical operations across KYC/AML, account verification, data quality, onboarding, escalations, and cross-functional resolution.",bullets:[
  "Built a Python-based quality-control validation system that cross-checks operational records against source data and reduced database and manual verification errors by 60%.",
  "Built and maintained client onboarding workflows, reducing time-to-activation by 35%.",
  "Created SOPs and troubleshooting guidance used by 20+ team members while serving as the operational contact for high-priority accounts across Europe, the Middle East, and APAC.",
  "Designed workflow automations with Python, Google Apps Script, n8n, ClickUp, and Google Workspace, contributing to lower manual workload and stronger SLA adherence."
 ]},
 {company:"NEXT Ventures (FundedNext)",role:"Case Resolution Specialist & Sub-wing Lead",period:"Mar 2023 — Jan 2025",intro:"High-volume fintech case resolution, dashboards, escalation design, onboarding, Trustpilot governance, and operational enablement.",bullets:[
  "Resolved 2,000+ high-volume cases with a 95% satisfaction rate while coordinating complex compliance issues.",
  "Built SQL-driven Metabase dashboards for real-time visibility into data accuracy and SLA compliance across Operations, Support, and Risk.",
  "Designed L1–L2 escalation SOPs that reduced repeat data incidents by 40% and created onboarding guides that reduced new-customer ramp-up time by 30%.",
  "Built investigative workflows and Trustpilot review triage systems to speed up resolution cycles; the earlier portfolio reports reducing fraudulent reviews by about 40% and increasing the Trustpilot score from 4.4 to 4.6."
 ]},
 {company:"NEXT Ventures (FundedNext)",role:"Client Experience Executive",period:"Apr 2022 — Mar 2023",intro:"Customer-facing operations across Telegram, LiveChat, Intercom, and Slack.",bullets:[
  "Managed 500+ monthly client interactions, resolving issues accurately and escalating data or compliance problems.",
  "Identified and documented the 10 most recurring client issues and coordinated structured fixes with Product and Support.",
  "Reduced support ticket volume by 20% through recurring-issue analysis and structured fixes."
 ]},
 {company:"LankaBangla Finance PLC",role:"Business Support Officer (Part-Time)",period:"Apr 2019 — Mar 2022",intro:"Client-facing support across financial products, documentation, service workflows, and high-volume periods.",bullets:[
  "Provided documentation and service support while consistently meeting quality and SLA expectations."
 ]},
 {company:"ZBROS (Audiovisual Production House)",role:"Assistant Director",period:"Dec 2019 — Apr 2020",intro:"Production coordination across commercials, short films, and branded audiovisual content.",bullets:[
  "Supported shoot planning, script breakdowns, scene planning, equipment readiness, continuity, and cross-crew coordination."
 ]}
];

export const projects=[
 {name:"OpsCore",type:"Internal Operations Platform",description:"A centralized internal workspace connecting operational data and workflows across an internal database, Google Sheets, Intercom, and ClickUp.",stack:["TypeScript","Internal DB","Google Sheets","Intercom API","ClickUp"],proof:"Searchable cross-system workflows with role-aligned access.",featured:true},
 {name:"QC Platform",type:"AI-Assisted Conversation Quality Control",description:"A production QC platform for approximately 1,000 Intercom conversations per day, automating roughly 80% of quality checks and routing the remainder for manual review.",stack:["TypeScript","Vercel","Intercom API","AI QC","RBAC"],proof:"Recurring ingestion → AI scoring → dashboard → manual review.",featured:true},
 {name:"Client History System",type:"Secure Internal Search Platform",description:"A secure internal search system built with Python, Streamlit, Google Sheets API, Gemini AI, OAuth 2.0, and DuckDB. The portfolio reports 0.5–1.0 second search response times across millions of records.",stack:["Python","Streamlit","DuckDB","Gemini AI","OAuth 2.0","Google Sheets API"],proof:"Instant lookup + audit trail + direct Sheets sync + smart caching."},
 {name:"Agent Email QC Automation",type:"AI-Assisted Quality Control",description:"An intelligent QC platform using Python, Streamlit, OpenAI API, Google Sheets, and a RAG knowledge layer grounded in 36+ company policies. The earlier portfolio reports a 90% reduction in QC processing time.",stack:["Python","Streamlit","OpenAI API","RAG","Google Sheets"],proof:"200+ conversations evaluated in minutes with four-tier error classification."},
 {name:"Copy Trade Verdict Engine",type:"AI-Powered Compliance Decision System",description:"An AI-assisted decision system for copy-trading accusations that combines automated proof analysis with client-explanation evaluation and produces audit-ready, client-friendly verdict reasoning.",stack:["Python","AI/NLP","Evidence Analysis","Compliance Logic"],proof:"Case resolution reduced from 10–20+ minutes to about 2 minutes in the portfolio case study."},
 {name:"KPI & Data Quality Automation",type:"Operational Reporting & Validation",description:"A collection of Python and Google Apps Script automations for daily KPI reporting, Trustpilot-to-Sheets synchronization, automated data validation, and cleansing of large datasets.",stack:["Python","Google Apps Script","Gemini AI","Google Sheets"],proof:"60% less manual reporting time and 45% fewer data-entry errors in the portfolio case studies."}
];

export const impact=[
 {metric:"4×",title:"Hall of Excellence",detail:"Recognised for case resolution quality, data accuracy, and operational improvement."},
 {metric:"4 teams",title:"Real-time compliance monitoring",detail:"Built the first real-time compliance monitoring dashboard used for data-driven decisions."},
 {metric:"11.8%",title:"Trustpilot recovery",detail:"Led a structured monitoring and escalation programme that reduced negative reviews."},
 {metric:"100%",title:"Manual WBMS lookup replaced",detail:"Delivered an AI-powered WBMS search platform for 20+ team members."},
 {metric:"90%",title:"QC processing time reduction",detail:"Earlier AI-assisted QC automation case study documented a 90% reduction in processing time."},
 {metric:"45%",title:"Data-entry error reduction",detail:"Automated validation and cleansing tooling reduced errors in large datasets."}
];

export const skillGroups=[
 {label:"Technical Operations",skills:["L1/L2 Escalation","Issue Triage","Root Cause Analysis","SLA Management","Runbooks","Incident Documentation","Trustpilot Governance","QA Processes"]},
 {label:"Engineering & Data",skills:["TypeScript","Python","SQL","PostgreSQL","REST APIs","API Integrations","Data Validation","Metabase","Looker","Google Apps Script","n8n"]},
 {label:"FinTech",skills:["KYC/AML","Customer Onboarding","Account Verification","Compliance Operations","Risk Workflows","Discrepancy Resolution","Fraud Detection"]},
 {label:"Platforms",skills:["Intercom","ClickUp","Google Workspace","Sumsub","Veriff","Slack","Notion","HubSpot","Vercel","Streamlit"]}
];

export const education={
 degree:"BSc in Telecommunication Engineering",
 university:"East West University",
 year:"2021",
 certifications:["ClickUp Expert","ClickUp Brain Expert","ClickUp Admin Certified (2025)","Google Applied Digital Skills (2021)"]
};
