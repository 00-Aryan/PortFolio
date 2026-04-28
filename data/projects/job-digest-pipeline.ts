import { Project } from '../types'

export const jobDigestPipeline: Project = {
  id: '3',
  title: 'Job Search Automation Pipeline — End-to-End ML Pipeline',
  slug: 'job-digest-pipeline',
  tagline: 'Automated job discovery system using Gemini API for scoring and GitHub Actions for scheduling.',
  description: 'Built a fully automated job discovery system that scrapes listings, scores them against a resume using LLMs, and delivers a daily personalized digest.',
  techStack: ['Python', 'Apify', 'Google Gemini API', 'GitHub Actions', 'Gmail SMTP', 'LLM Scoring'],
  githubUrl: 'https://github.com/00-Aryan/Job-Digest-Automation-',
  writeupSummary: 'The Job Digest Pipeline automates the tedious process of job searching by integrating web scraping with LLM-based relevance scoring. It uses Apify to crawl platforms like Naukri and LinkedIn, then employs the Google Gemini API to calculate match scores based on resume skills and preferences. The entire workflow is orchestrated via GitHub Actions, delivering a curated HTML digest daily at 6 AM IST.',
  metrics: [
    'Reduced manual job search review time by 80% through automated scanning',
    'Integrated Google Gemini API to calculate relevance scores for 100+ daily listings',
    'Orchestrated end-to-end pipeline (Scrape -> Score -> Filter -> Notify) using GitHub Actions',
    'Delivered formatted HTML digests via Gmail SMTP with top 10-20 high-relevance roles',
  ],
}
