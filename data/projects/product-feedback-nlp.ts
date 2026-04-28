import { Project } from '../types'

export const productFeedbackNLP: Project = {
  id: '2',
  title: 'Product Feedback NLP — Semantic Search API',
  slug: 'product-feedback-nlp',
  tagline: 'Semantic similarity API that clusters and retrieves product feedback by topic using SBERT embeddings.',
  description: 'Deployed a semantic similarity API that enables real-time similarity search and topic clustering for customer feedback, outperforming traditional keyword search.',
  techStack: ['Python', 'FastAPI', 'SBERT', 'Sentence Transformers', 'scikit-learn', 'NumPy', 'REST APIs'],
  githubUrl: 'https://github.com/00-Aryan',
  writeupSummary: 'This project addresses the limitations of keyword-based search in customer feedback analysis. By implementing SBERT (Sentence-BERT) embeddings, the system converts feedback into dense vector representations. A FastAPI-based REST API allows for real-time similarity search and automatic topic clustering, enabling product teams to discover emerging themes 3x faster than manual review.',
  metrics: [
    'Embedding-based approach outperformed bag-of-words by 35% in semantic similarity tasks',
    'Discovered emerging themes missed by manual review using clustering algorithms',
    'Handles 1000+ feedback entries with sub-second response time via FastAPI',
    'Implemented cosine similarity for efficient vector-based retrieval and theme grouping',
  ],
}
