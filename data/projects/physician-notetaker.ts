import { Project } from '../types'

export const physicianNotetaker: Project = {
  id: '1',
  title: 'Physician Notetaker — Clinical NLP Pipeline',
  slug: 'physician-notetaker',
  tagline: 'Clinical NLP pipeline with fine-tuned DistilBERT for entity extraction and negation detection.',
  description: 'An end-to-end clinical NLP pipeline that processes raw physician notes and extracts structured medical entities with high accuracy, handling complex medical terminology and negation detection.',
  techStack: ['Python', 'spaCy', 'scispaCy', 'HuggingFace DistilBERT', 'Transformers', 'medspaCy', 'NER'],
  githubUrl: 'https://github.com/00-Aryan/NLP_Physician-notetaker',
  writeupSummary: "The Physician Notetaker leverages NLP to convert unstructured clinical notes into machine-readable JSON formats for EHR integration. It utilizes scispaCy for biomedical NER and a fine-tuned DistilBERT model for precise entity classification. A key innovation is the hybrid negation detection system that combines rule-based patterns with ML classification to accurately distinguish positive findings from negated ones, crucial for medical decision-making.",
  metrics: [
    'Achieved 85%+ accuracy on entity extraction on clinical test data',
    'Fine-tuned HuggingFace DistilBERT on clinical text for superior domain-specific terminology handling',
    'Implemented rule-based + ML negation detection for complex medical patterns (e.g., "denies", "no evidence of")',
    'Structured raw notes into JSON with entity type, confidence scores, and negation status',
  ],
}
