import { Project } from '../types'

export const movieRecommender: Project = {
  id: '5',
  title: 'Movie Recommender System — Hybrid Collaborative Filtering',
  slug: 'movie-recommender',
  tagline: 'Hybrid recommendation system combining SVD collaborative filtering with content-based filtering.',
  description: 'Built a personalized movie recommendation system that solves the cold-start problem by combining user-item interactions with movie metadata similarity.',
  techStack: ['Python', 'pandas', 'scikit-learn', 'Surprise', 'SVD', 'TF-IDF', 'Hybrid Filtering'],
  githubUrl: 'https://github.com/00-Aryan',
  writeupSummary: 'This movie recommender system leverages a hybrid approach to provide high-quality personalized suggestions. It uses Singular Value Decomposition (SVD) for matrix factorization on user-item interactions and TF-IDF vectorization for content-based analysis of genres, directors, and plot keywords. This dual-strategy effectively handles the cold-start problem for new items while maintaining high accuracy for established users.',
  metrics: [
    'Achieved RMSE of 0.87 on test set using SVD collaborative filtering',
    'Improved cold-start recommendations by 40% using the hybrid approach',
    'Successfully handled sparse data with 100K+ user-item interactions from MovieLens dataset',
    'Implemented content-based filtering using movie metadata including genres, directors, and plot keywords',
  ],
}
