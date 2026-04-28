import { StorySectionContent, StorySectionId } from './types'

export const sectionStory: Record<StorySectionId, StorySectionContent> = {
  hero: {
    id: 'hero',
    character: 'Luffy',
    role: 'AI / ML Engineer',
    title: 'Bridging data research and production AI systems',
    blurb: 'Final-year IIT Madras Data Science student specializing in NLP, GenAI, and building production-ready ML pipelines that solve real-world problems.',
  },
  research: {
    id: 'research',
    character: 'Robin',
    role: 'NLP Specialist',
    title: 'Extracting knowledge from unstructured text',
    blurb: 'Deeply focused on clinical NLP and semantic search, leveraging fine-tuned LLMs and vector embeddings to unlock insights from complex datasets.',
  },
  projects: {
    id: 'projects',
    character: 'Zoro',
    role: 'Systems Architect',
    title: 'Engineering high-impact ML solutions',
    blurb: 'From clinical pipelines to automated job discovery, my projects demonstrate disciplined execution and measurable outcomes in AI/ML.',
  },
  skills: {
    id: 'skills',
    character: 'Franky',
    role: 'Model Builder',
    title: 'Stacking ensembles and robust pipelines',
    blurb: 'Expertise in gradient boosting (XGBoost, LightGBM, CatBoost), transformer models, and automating ML workflows with GitHub Actions.',
  },
  contact: {
    id: 'contact',
    character: 'Sanji',
    role: 'Ready to Join',
    title: 'Looking for the next high-impact challenge',
    blurb: 'Seeking AI Engineer or Data Science roles at GenAI startups, prioritizing opportunities in Gurgaon/Delhi NCR or remote-first environments.',
  },
}
