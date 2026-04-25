export interface Project {
  id: string;
  title: string;
  slug: string;
  tagline: string;
  description: string;
  techStack: string[];
  githubUrl: string;
  liveUrl?: string;
  writeupSummary: string;
  metrics: string[];
}

export const projects: Project[] = [
  {
    id: '1',
    title: 'Pastry Palace — Business Analytics Consulting',
    slug: 'pastry-palace',
    tagline: 'Turned 50 days of raw sales data into a full business strategy for a local bakery',
    description: 'Turned 50 days of raw sales data into a full business strategy for a local bakery',
    techStack: ['Python', 'Pandas', 'Matplotlib', 'Excel', 'ABC Analysis', 'Statistical Modeling'],
    githubUrl: 'https://github.com/00-Aryan/Business-Data-Management',
    writeupSummary: 'This project applies a data-driven approach to optimize inventory and sales forecasting for a business called Pastry Palace, aiming to improve efficiency and organization. The main challenge involves managing perishable goods and unpredictable demand through better data analysis.',
    metrics: [
      '47% of products drove 80% of profits (Pareto 80/20)',
      'Identified ₹400+ per-unit waste on high-cost items',
      'Isolated volatile vs stable SKUs using CV Analysis',
      'Proposed pre-order model to eliminate cake wastage'
    ]
  },
  {
    id: '2',
    title: 'Physician Notetaker — Clinical NLP Pipeline',
    slug: 'physician-notetaker',
    tagline: 'NLP pipeline that extracts and structures clinical information from doctor notes',
    description: 'NLP pipeline that extracts and structures clinical information from doctor notes',
    techStack: ['Python', 'spaCy', 'scispaCy', 'HuggingFace', 'DistilBERT', 'NER', 'Negation Detection'],
    githubUrl: 'https://github.com/00-Aryan/NLP_Physician-notetaker',
    writeupSummary: 'The Physician Notetaker leverages NLP to convert plain-text dialogues between physicians and patients that have speaker labels into JSON-formatted medical summaries and \'SOAP note\' outputs. It handles challenges such as extracting medical entities, managing negations, normalizing clinical terms, and interpreting patient sentiment and intent. The system avoids generating medical advice, relying exclusively on information present in the dialogue.',
    metrics: [
      'Custom NER for clinical entity extraction',
      'Negation detection pipeline',
      'DistilBERT fine-tuning for classification'
    ]
  },
  {
    id: '3',
    title: 'Engage2Value — E-commerce Purchase Prediction',
    slug: 'engage2value',
    tagline: 'Session-level purchase value prediction across 116K records using stacked ML models',
    description: 'Session-level purchase value prediction across 116K records using stacked ML models',
    techStack: ['Python', 'LightGBM', 'XGBoost', 'Scikit-learn', 'Stacking Ensemble', 'Feature Engineering'],
    githubUrl: 'https://github.com/00-Aryan/Engage2Value-From-Clicks-to-Conversions',
    writeupSummary: 'This project predicted purchase value from multi-session digital behavior using ML on e-commerce sessions. Key challenges involved sparse data and a skewed target, with user history features emerging as dominant predictors, making LightGBM the optimal model.',
    metrics: [
      '116K session records processed',
      'LightGBM + XGBoost stacking ensemble',
      'Session-level behavioral feature engineering'
    ]
  },
  {
    id: '4',
    title: 'Job Digest Pipeline — Automated Job Matching',
    slug: 'job-digest-pipeline',
    tagline: 'Automated pipeline that scrapes, scores, and emails relevant job listings daily',
    description: 'Automated pipeline that scrapes, scores, and emails relevant job listings daily',
    techStack: ['Python', 'Apify', 'Gemini API', 'Gmail SMTP', 'GitHub Actions', 'Prompt Engineering'],
    githubUrl: 'https://github.com/00-Aryan/Job-Digest-Automation-',
    writeupSummary: 'The Job Digest Pipeline is an end-to-end automation that scrapes job postings from Naukri and LinkedIn via Apify, uses the Gemini API to match them with a resume, and sends a curated daily email digest via GitHub Actions. It handles scheduling, error recovery, and maintains high relevance scoring.',
    metrics: [
      'Scrapes Naukri and LinkedIn via Apify',
      'Resume-to-JD scoring using Gemini API',
      'Daily automated email digest via GitHub Actions'
    ]
  }
]
