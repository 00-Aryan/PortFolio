
import { Project } from '../types'

export const engage2Value: Project = {
  id: '4',
  title: 'Engage2Value — E-Commerce Purchase Value Prediction',
  slug: 'engage2value',
  tagline: 'Stacking ensemble model predicting session-level purchase value with 20+ engineered behavioral features.',
  description: 'Built a high-performance ensemble ML model that predicts customer purchase value to optimize marketing spend, using gradient boosting and stacking meta-learners.',
  techStack: ['Python', 'LightGBM', 'XGBoost', 'CatBoost', 'Stacking Ensemble', 'pandas', 'scikit-learn', 'Optuna'],
  githubUrl: 'https://github.com/00-Aryan/Engage2Value-From-Clicks-to-Conversions',
  writeupSummary: 'Engage2Value addresses the challenge of predicting customer purchase value from complex behavioral data. By engineering 20+ features from ~116K records—including temporal patterns and session-level actions—the project leverages a stacking ensemble of LightGBM, XGBoost, and CatBoost. This approach, combined with a logistic regression meta-learner, significantly outperformed single-model baselines.',
  metrics: [
    'Stacking ensemble achieved 15% lower RMSE than best single model',
    'Engineered 20+ features: time on site, cart actions, referral source, and temporal interactions',
    'Identified key value drivers using SHAP: time on site, cart value, and device type',
    'Handled ~116K records with extensive EDA and feature transformation (log, one-hot, cyclical)',
  ],
}
