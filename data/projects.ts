import { Project } from './types'
import { physicianNotetaker } from './projects/physician-notetaker'
import { productFeedbackNLP } from './projects/product-feedback-nlp'
import { jobDigestPipeline } from './projects/job-digest-pipeline'
import { engage2Value } from './projects/engage2value'
import { movieRecommender } from './projects/movie-recommender'
import { bankClassification } from './projects/bank-classification'

export const projects: Project[] = [
  physicianNotetaker,
  productFeedbackNLP,
  jobDigestPipeline,
  engage2Value,
  movieRecommender,
  bankClassification,
]

export type { Project }
