import { Project } from '../types'

export const pastryPalace: Project = {
  id: '1',
  title: 'Pastry Palace — Business Analytics Consulting',
  slug: 'pastry-palace',
  tagline: 'Turned 50 days of raw sales data into a full business strategy for a local bakery',
  description: 'Turned 50 days of raw sales data into a full business strategy for a local bakery',
  techStack: ['Python', 'pandas', 'Matplotlib', 'Excel', 'ABC Analysis', 'Statistical Modeling'],
  githubUrl: 'https://github.com/00-Aryan/Business-Data-Management',
  writeupSummary: 'This project applies a data-driven approach to optimize inventory and sales forecasting for a business called Pastry Palace, aiming to improve efficiency and organization. The main challenge involves managing perishable goods and unpredictable demand through better data analysis.',
  metrics: [
    '47% of products drove 80% of profits (Pareto 80/20)',
    'Identified ₹400+ per-unit waste on high-cost items',
    'Isolated volatile vs stable SKUs using CV Analysis',
    'Proposed pre-order model to eliminate cake wastage',
  ],
}