export interface Project {
  id: string
  title: string
  slug: string
  tagline: string
  description: string
  techStack: string[]
  githubUrl: string
  liveUrl?: string
  writeupSummary: string
  metrics: string[]
}

export type StorySectionId = 'hero' | 'research' | 'projects' | 'skills' | 'contact'

export interface StorySectionContent {
  id: StorySectionId
  character: string
  role: string
  title: string
  blurb: string
}
