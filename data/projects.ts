export interface Project {
  id: string;
  title: string;
  slug: string;
  caseFile: string;
  category: string;
  priority: 'Primary' | 'Secondary';
  tagline: string;
  description: string;
  problem: string;
  role: string;
  techStack: string[];
  githubUrl: string;
  liveUrl?: string;
  writeupSummary: string;
  approach: string[];
  metrics: string[];
  recruiterSignal: string[];
  visualTheme:
    | 'content-pipeline'
    | 'agent-os'
    | 'daily-tracker'
    | 'business-analytics'
    | 'judicial-scraping'
    | 'recommender-system'
    | 'clinical-nlp'
    | 'ecommerce-ml'
    | 'quiz-platform'
    | 'tender-intelligence';
  visualLabel: string;
}

export const projects: Project[] = [
  {
    id: '1',
    title: 'Engage2Value — E-commerce Purchase Prediction',
    slug: 'engage2value',
    caseFile: '01',
    category: 'Machine Learning',
    priority: 'Primary',
    tagline: 'Predicted purchase value from 116K+ e-commerce sessions using leakage-safe feature engineering and LightGBM.',
    description: 'Session-level purchase value prediction across sparse e-commerce behavior, device, geography, and traffic data.',
    problem: 'Most sessions had zero purchase value, high-cardinality categorical fields, masked values, and leakage risk from user-history features.',
    role: 'Owned EDA, feature engineering, modeling, evaluation, and project write-up.',
    techStack: ['Python', 'Pandas', 'Scikit-learn', 'LightGBM', 'XGBoost', 'Feature Engineering', 'SHAP'],
    githubUrl: 'https://github.com/00-Aryan/Engage2Value-From-Clicks-to-Conversions',
    writeupSummary: 'Built a modular regression pipeline for e-commerce purchase prediction. The strongest work was not just model selection, but understanding sparse clickstream behavior, grouping noisy categorical features, engineering user-history signals, and preventing train-test leakage.',
    approach: [
      'Audited 52 raw features across behavior, geography, device, and traffic domains.',
      'Created grouped categorical features, datetime features, engagement thresholds, and user-history aggregates.',
      'Compared linear models, tree models, LightGBM, XGBoost, stacking, feature selection, PCA, and log-target variants.',
      'Selected the strongest leakage-safe LightGBM pipeline and documented failure cases.'
    ],
    metrics: [
      '116,023 training sessions analyzed',
      '29,006 test sessions prepared',
      '52 raw features reduced into cleaner modeling features',
      'Roughly 93% zero-purchase sessions handled explicitly'
    ],
    recruiterSignal: [
      'Shows serious EDA discipline before modeling',
      'Demonstrates leakage-aware feature engineering',
      'Strongest project for data science internship screening'
    ],
    visualTheme: 'ecommerce-ml',
    visualLabel: 'Clickstream regression'
  },
  {
    id: '2',
    title: 'Physician Notetaker — Clinical NLP Pipeline',
    slug: 'physician-notetaker',
    caseFile: '02',
    category: 'NLP',
    priority: 'Primary',
    tagline: 'Converted physician-patient conversations into structured summaries and SOAP notes using clinical NLP.',
    description: 'Clinical text pipeline that extracts entities, handles negation, and structures patient dialogue into JSON outputs.',
    problem: 'Unstructured medical conversations are difficult to review, summarize, and convert into consistent clinical documentation.',
    role: 'Built the notebook pipeline, extraction logic, structured outputs, and safety constraints.',
    techStack: ['Python', 'spaCy', 'scispaCy', 'Transformers', 'NER', 'Negation Detection', 'JSON'],
    githubUrl: 'https://github.com/00-Aryan/NLP_Physician-notetaker',
    writeupSummary: 'Built an NLP pipeline that parses physician-patient dialogue, extracts clinical entities, detects negation, and produces both a structured medical summary and SOAP note. The project explicitly avoids medical advice and only uses information present in the conversation.',
    approach: [
      'Parsed speaker-labeled conversations into patient and physician turns.',
      'Extracted symptoms, diagnoses, treatments, prognosis, sentiment, and intent.',
      'Added negation handling to avoid false positives in medical entity extraction.',
      'Generated constrained JSON outputs for summary and SOAP-note formats.'
    ],
    metrics: [
      'Medical summary JSON output',
      'SOAP note JSON output',
      'Negation-aware entity extraction',
      'Safety rule: no generated medical advice'
    ],
    recruiterSignal: [
      'Shows practical NLP beyond toy sentiment classification',
      'Demonstrates structured extraction from messy text',
      'Relevant for healthcare NLP and document intelligence roles'
    ],
    visualTheme: 'clinical-nlp',
    visualLabel: 'Clinical text extraction'
  },
  {
    id: '3',
    title: 'TenderIQ — Vehicle Tender Intelligence Assistant',
    slug: 'tender-iq',
    caseFile: '03',
    category: 'Document AI',
    priority: 'Primary',
    tagline: 'AI assistant that explains vehicle-related GeM tender PDFs, extracts requirements, and supports eligibility reasoning.',
    description: 'Document intelligence assistant for complex tender PDFs with extraction, OCR fallback, vector search, and conversational Q&A.',
    problem: 'Small business owners struggle to understand dense 30-80 page tender PDFs, hidden eligibility rules, EMD requirements, and legal jargon.',
    role: 'Designed the product scope, architecture, extraction flow, and assistant behavior for the first version.',
    techStack: ['Python', 'FastAPI', 'Streamlit', 'PyMuPDF', 'Tesseract OCR', 'ChromaDB', 'sentence-transformers', 'Gemini'],
    githubUrl: 'https://github.com/00-Aryan/Tender-IQ',
    writeupSummary: 'TenderIQ helps small operators understand vehicle-related GeM tenders without relying on a consultant. It combines PDF extraction, OCR fallback, chunking, embeddings, structured extraction, and conversational explanation around eligibility and document requirements.',
    approach: [
      'Built a PDF ingestion path for selectable PDFs and scanned PDFs with OCR fallback.',
      'Chunked and embedded tender text into a local vector store.',
      'Designed vehicle-tender-specific extraction fields and Q&A flows.',
      'Logged interactions for future evaluation and feedback loops.'
    ],
    metrics: [
      'Targets 30-80 page tender PDFs',
      'Supports OCR fallback for scanned documents',
      'Local-first vector store using ChromaDB',
      'Explains eligibility, EMD, documents, and clauses'
    ],
    recruiterSignal: [
      'Strong applied AI/product thinking',
      'Shows document intelligence and retrieval workflow',
      'Clear real-world user and monetization angle'
    ],
    visualTheme: 'tender-intelligence',
    visualLabel: 'Tender document AI'
  },
  {
    id: '4',
    title: 'Content Creation Automation — Ingestion & Synthesis Factory',
    slug: 'content-creation-automation',
    caseFile: '04',
    category: 'AI Automation',
    priority: 'Primary',
    tagline: 'Production-style content intelligence pipeline for source-grounded educational content generation.',
    description: 'Multi-stage content factory that ingests topics, scores them, creates briefs, generates storyboards, and supports operator review.',
    problem: 'AI educational content generation easily becomes generic or hallucinated unless sourcing, scoring, review, and publishing checks are built into the workflow.',
    role: 'Built the system architecture, pipeline stages, review controls, tests, and deployment-ready workflow.',
    techStack: ['Python', 'Streamlit', 'Render', 'Pipeline Architecture', 'Testing', 'RSS Ingestion', 'Scoring', 'Automation'],
    githubUrl: 'https://github.com/00-Aryan/Content-Creation-Automation',
    liveUrl: 'https://content-creation-automation.onrender.com/',
    writeupSummary: 'Built a production-style content ingestion and synthesis factory for ML/AI students. The pipeline moves from topic ingestion and scoring to briefs, content intelligence, storyboard design, asset generation, manifest tracking, operator review, and publication planning.',
    approach: [
      'Created a multi-stage pipeline from ingestion to asset manifest generation.',
      'Added scoring dimensions for usefulness, novelty, and credibility.',
      'Designed storyboard-first generation to avoid random asset production.',
      'Added operator controls, dry-run validation, and audit-traceable decisions.'
    ],
    metrics: [
      '249 passing tests reported in README',
      'Production deployment on Render',
      'Human approval required before publication',
      'Source-traceable claims and audit trail'
    ],
    recruiterSignal: [
      'Shows long-term system design and testing discipline',
      'Stronger than a simple AI wrapper project',
      'Useful for ML tooling, automation, and product engineering roles'
    ],
    visualTheme: 'content-pipeline',
    visualLabel: 'Content intelligence pipeline'
  },
  {
    id: '5',
    title: 'ProjectOS — Personal Engineering Operating System',
    slug: 'personal-engineering-os',
    caseFile: '05',
    category: 'Agentic Systems',
    priority: 'Primary',
    tagline: 'Local-first multi-agent project system that plans, executes, and reports software tasks through Telegram approval loops.',
    description: 'Autonomous project management and coding workflow system with local execution, agent coordination, and human approval gates.',
    problem: 'Long-running software projects lose context, task discipline, and review quality when planning, execution, and reporting are disconnected.',
    role: 'Designed the agent workflow, approval model, local-first control system, and project lifecycle structure.',
    techStack: ['Python', 'Agents', 'Telegram Bot', 'Local Automation', 'Task Orchestration', 'CLI', 'Testing'],
    githubUrl: 'https://github.com/00-Aryan/Personal_Engineering_OS',
    writeupSummary: 'ProjectOS is a local-first project operating system that reads project descriptions, prepares task plans, coordinates specialized agents, and sends Telegram briefs and digests so the user can approve or revise work without losing control.',
    approach: [
      'Designed daily planning and reporting loops through Telegram.',
      'Separated user approval from autonomous execution.',
      'Built around project descriptions, task lifecycle, and local file safety.',
      'Kept source files and credentials local rather than cloud-hosted.'
    ],
    metrics: [
      'Morning brief and evening digest workflow',
      'Telegram commands for approval, rejection, pause, resume, and status',
      'Local-first execution model',
      'Agent coordination around project lifecycle'
    ],
    recruiterSignal: [
      'Shows systems thinking beyond notebooks',
      'Relevant to agent workflow and developer tooling',
      'Demonstrates productized automation for real personal use'
    ],
    visualTheme: 'agent-os',
    visualLabel: 'Agent workflow control'
  },
  {
    id: '6',
    title: 'Pastry Palace — Business Analytics Consulting',
    slug: 'pastry-palace',
    caseFile: '06',
    category: 'Business Analytics',
    priority: 'Primary',
    tagline: 'Turned 50 days of bakery sales observations into inventory, wastage, and margin recommendations.',
    description: 'Real-world analytics project for a local bakery using manual data collection, SKU analysis, and business recommendations.',
    problem: 'The bakery had no formal sales tracking, no demand pattern visibility, and no evidence-based way to reduce wastage.',
    role: 'Collected data, analyzed SKU performance, quantified waste, and prepared strategic recommendations.',
    techStack: ['Python', 'Pandas', 'Matplotlib', 'Excel', 'ABC Analysis', 'CV Analysis', 'Business Reporting'],
    githubUrl: 'https://github.com/00-Aryan/Business-Data-Management',
    writeupSummary: 'Applied business analytics to a local bakery by collecting 50 days of sales observations across 36 SKUs. The analysis identified profit concentration, demand volatility, product segmentation, and avoidable wastage.',
    approach: [
      'Collected daily sales, cost, selling price, and wastage observations.',
      'Used ABC analysis to identify profit-driving products.',
      'Applied coefficient of variation analysis to separate stable and volatile SKUs.',
      'Translated findings into operational recommendations for production and pre-orders.'
    ],
    metrics: [
      '50 consecutive days of field data',
      '36 core SKUs analyzed',
      '47% of products drove 81.4% of profit',
      'Rs.414 per-unit specialty cake waste quantified'
    ],
    recruiterSignal: [
      'Strongest business-facing analytics proof',
      'Shows data collection under real-world constraints',
      'Good example for analytics and consulting-style interviews'
    ],
    visualTheme: 'business-analytics',
    visualLabel: 'Bakery profit analytics'
  },
  {
    id: '7',
    title: 'Movie Recommendation System — MovieLens 100K',
    slug: 'movie-recommender-system',
    caseFile: '07',
    category: 'Recommender Systems',
    priority: 'Secondary',
    tagline: 'Built and evaluated collaborative filtering, SVD, popularity fallback, and ranking metrics on MovieLens 100K.',
    description: 'Recommendation system comparing memory-based and model-based approaches with cold-start handling and ranking evaluation.',
    problem: 'Sparse user-item matrices make personalized recommendation difficult, especially for new users and low-interaction items.',
    role: 'Implemented preprocessing, collaborative filtering, SVD modeling, evaluation, and cold-start fallback.',
    techStack: ['Python', 'Pandas', 'Surprise', 'Collaborative Filtering', 'SVD', 'Precision@K', 'Recall@K'],
    githubUrl: 'https://github.com/00-Aryan/Movie_Recommender-System-',
    writeupSummary: 'Built a recommendation system on MovieLens 100K using item-item CF, user-user CF, SVD matrix factorization, Bayesian popularity scoring, and cold-start fallback. Evaluation included RMSE, MAE, Precision@10, and Recall@10.',
    approach: [
      'Merged ratings, users, and movie metadata into one analysis-ready dataset.',
      'Compared user-user and item-item collaborative filtering with similarity options.',
      'Used SVD matrix factorization and grid search.',
      'Added Bayesian popularity fallback for unknown users.'
    ],
    metrics: [
      '100,000 ratings',
      '943 users and 1,682 movies',
      '93.7% sparse matrix',
      'Precision@10 of 0.9270 reported in README'
    ],
    recruiterSignal: [
      'Shows understanding of recommender evaluation',
      'Useful bridge between ML and product personalization',
      'Good interview talking point for sparsity and cold start'
    ],
    visualTheme: 'recommender-system',
    visualLabel: 'Recommendation graph'
  },
  {
    id: '8',
    title: 'ProductivOS — Daily Tracker',
    slug: 'daily-tracker',
    caseFile: '08',
    category: 'Full Stack Productivity',
    priority: 'Secondary',
    tagline: 'Full-stack productivity system for tasks, journals, job applications, and adaptive study workflows.',
    description: 'React and FastAPI application with task management, daily logs, job tracker, Supabase storage, and AI study features.',
    problem: 'Personal productivity, job search tracking, and study review often live in disconnected tools with no unified workflow.',
    role: 'Built the app structure, frontend/backend integration, dashboard workflows, and AI-assisted study direction.',
    techStack: ['React', 'Vite', 'TailwindCSS', 'FastAPI', 'Supabase', 'PostgreSQL', 'Gemini', 'Railway', 'Vercel'],
    githubUrl: 'https://github.com/00-Aryan/Daily-Tracker',
    liveUrl: 'https://daily-tracker-seven-phi.vercel.app',
    writeupSummary: 'Built a full-stack productivity application with task boards, daily reflection logs, job application tracking, and an in-progress adaptive study Q&A system. The architecture uses React, FastAPI, Supabase, and deployment split across Vercel and Railway.',
    approach: [
      'Created task, journal, job tracking, and study modules.',
      'Used React state management and API integration for frontend workflows.',
      'Built FastAPI backend with Supabase and PostgreSQL persistence.',
      'Added AI-powered study direction using Gemini and spaced repetition concepts.'
    ],
    metrics: [
      'Kanban task workflow',
      'Daily journal and search support',
      'Job application pipeline tracking',
      'Frontend on Vercel and backend on Railway'
    ],
    recruiterSignal: [
      'Shows full-stack delivery capability',
      'Useful proof for product-minded data science roles',
      'Connects personal workflow pain to software implementation'
    ],
    visualTheme: 'daily-tracker',
    visualLabel: 'Productivity dashboard'
  },
  {
    id: '9',
    title: 'Rajasthan High Court Scraper — Judicial Records Automation',
    slug: 'rajasthan-high-court-scraper',
    caseFile: '09',
    category: 'Web Scraping',
    priority: 'Secondary',
    tagline: 'Session-based scraper for public judicial records with HTML parsing, embedded JSON handling, and CSV export.',
    description: 'Python scraping pipeline for Rajasthan High Court judgment records using requests, BeautifulSoup, pandas, and manual CAPTCHA handling.',
    problem: 'The target public site uses multi-step requests, dynamic validation, embedded JSON, and CAPTCHA, making simple scraping unreliable.',
    role: 'Built the extraction workflow, session handling, parsing logic, and structured CSV output.',
    techStack: ['Python', 'requests', 'BeautifulSoup', 'Pandas', 'Base64', 'JSON Parsing', 'CSV Export'],
    githubUrl: 'https://github.com/00-Aryan/web_scraping',
    writeupSummary: 'Built a scraping and data automation workflow for public Rajasthan High Court records. The script manages session state, handles encoded payloads, parses embedded JSON, extracts table data, and exports structured records to CSV while keeping CAPTCHA solving manual.',
    approach: [
      'Maintained session state across multi-step requests.',
      'Decoded and encoded required date and payload parameters.',
      'Parsed embedded JSON and nested HTML tables.',
      'Exported structured judgment data and hidden retrieval keys.'
    ],
    metrics: [
      'Session-managed scraping flow',
      'Two-step JSON and HTML parsing',
      'Manual CAPTCHA safety boundary',
      'CSV output for judgment records'
    ],
    recruiterSignal: [
      'Shows practical data acquisition skills',
      'Good proof of debugging real-world web systems',
      'Relevant for data engineering and automation screening'
    ],
    visualTheme: 'judicial-scraping',
    visualLabel: 'Judicial data extraction'
  },
  {
    id: '10',
    title: 'Quiz Engine Platform — Full-Stack Assessment System',
    slug: 'quiz-engine-platform',
    caseFile: '10',
    category: 'Full Stack Platform',
    priority: 'Secondary',
    tagline: 'Quiz management platform with admin workflows, automated assessment, analytics, Celery, and Redis.',
    description: 'Full-stack quiz platform using Vue, Flask, Celery, Redis, and database-backed assessment workflows.',
    problem: 'Traditional quiz systems become slow and rigid when quiz management, scoring, notifications, and analytics run synchronously.',
    role: 'Built the platform architecture, admin/user flows, async task design, and API-driven backend.',
    techStack: ['Vue.js', 'Flask', 'Celery', 'Redis', 'PostgreSQL', 'REST API', 'Analytics'],
    githubUrl: 'https://github.com/00-Aryan/quiz-engine-platform',
    writeupSummary: 'Built a quiz management and assessment platform with admin CRUD workflows, user quiz attempts, automated evaluation, background task processing, and analytics. The architecture separates frontend, API, async jobs, message broker, and database.',
    approach: [
      'Created admin workflows for quiz and question management.',
      'Built user flows for quiz attempt, submission, and results.',
      'Used Celery and Redis for async evaluation and notifications.',
      'Designed RESTful Flask endpoints for frontend integration.'
    ],
    metrics: [
      'Admin quiz management workflow',
      'Automated evaluation pipeline',
      'Celery and Redis async task layer',
      'Performance analytics and result history'
    ],
    recruiterSignal: [
      'Shows backend and async architecture exposure',
      'Useful as supporting full-stack proof',
      'Good conversation starter for API and worker design'
    ],
    visualTheme: 'quiz-platform',
    visualLabel: 'Assessment platform'
  }
];
