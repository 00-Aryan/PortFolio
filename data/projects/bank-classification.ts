import { Project } from '../types'

export const bankClassification: Project = {
  id: '6',
  title: 'Binary Classification with Bank Dataset — Stacked Ensemble',
  slug: 'bank-classification',
  tagline: 'Stacked ensemble model (XGBoost, LightGBM, CatBoost) for term deposit prediction with 0.97 ROC-AUC.',
  description: 'Built a robust classification system for bank term deposit prediction, addressing severe class imbalance and data leakage with advanced ensemble techniques.',
  techStack: ['Python', 'XGBoost', 'LightGBM', 'CatBoost', 'Stacking', 'Optuna', 'Feature Engineering'],
  githubUrl: 'https://github.com/00-Aryan',
  writeupSummary: 'This project tackles the challenge of predicting bank term deposit subscriptions amidst significant class imbalance. I implemented a stacked ensemble using XGBoost, LightGBM, and CatBoost as base models, with a LogisticRegressionCV meta-model. The solution involved extensive feature engineering, including target encoding for high-cardinality features and cyclical transformations for temporal data, optimized via Optuna.',
  metrics: [
    'Achieved ROC-AUC of 0.97010 on leaderboard using stacked ensemble',
    'Addressed 88% class imbalance across 750K training records',
    'Engineered 20+ domain-specific features and identified critical data leakage issues',
    'Optimized models via Optuna hyperparameter tuning with 5-fold cross-validation',
  ],
}
