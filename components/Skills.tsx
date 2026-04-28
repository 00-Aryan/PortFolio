'use client'

import { motion } from 'framer-motion'
import { FrankyCharacter } from './characters'
import { sectionStory } from '@/data/story'

const skillCategories = [
  {
    title: 'NLP & GenAI',
    skills: [
      { name: 'Transformers', level: 'Advanced' },
      { name: 'SBERT / Embeddings', level: 'Advanced' },
      { name: 'spaCy / scispaCy', level: 'Advanced' },
      { name: 'LLM / RAG Pipelines', level: 'Intermediate' },
      { name: 'LangChain / FAISS', level: 'Intermediate' },
      { name: 'DistilBERT', level: 'Advanced' },
    ],
  },
  {
    title: 'ML Engineering',
    skills: [
      { name: 'LightGBM / XGBoost', level: 'Advanced' },
      { name: 'Stacking Ensembles', level: 'Advanced' },
      { name: 'scikit-learn', level: 'Advanced' },
      { name: 'Optuna (Tuning)', level: 'Advanced' },
      { name: 'Feature Engineering', level: 'Advanced' },
      { name: 'Model Evaluation', level: 'Advanced' },
    ],
  },
  {
    title: 'Data & Analytics',
    skills: [
      { name: 'pandas / NumPy', level: 'Advanced' },
      { name: 'SQL', level: 'Intermediate' },
      { name: 'EDA', level: 'Advanced' },
      { name: 'SHAP / Interpretation', level: 'Intermediate' },
      { name: 'Statistical Analysis', level: 'Advanced' },
      { name: 'Collaborative Filtering', level: 'Advanced' },
    ],
  },
  {
    title: 'Dev & Deployment',
    skills: [
      { name: 'Python', level: 'Advanced' },
      { name: 'FastAPI / REST APIs', level: 'Intermediate' },
      { name: 'GitHub Actions', level: 'Intermediate' },
      { name: 'Git', level: 'Advanced' },
      { name: 'Docker (Learning)', level: 'Beginner' },
      { name: 'Apify (Scraping)', level: 'Advanced' },
    ],
  },
]

const getLevelStyles = (level: string) => {
  switch (level) {
    case 'Advanced':
      return {
        bg: 'bg-nika-gold',
        text: 'text-nika-bg',
        border: 'border-nika-gold',
      }
    case 'Intermediate':
      return {
        bg: 'bg-nika-haki',
        text: 'text-nika-haki-text',
        border: 'border-nika-haki-border',
      }
    case 'Beginner':
      return {
        bg: 'bg-nika-white/10',
        text: 'text-nika-white/40',
        border: 'border-nika-white/20',
      }
    default:
      return {
        bg: 'bg-nika-white/10',
        text: 'text-nika-white/50',
        border: 'border-nika-white/20',
      }
  }
}

export default function Skills() {
  const story = sectionStory.skills

  return (
    <section id="skills" className="py-20 px-8 scroll-mt-16">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="mb-12 flex items-center gap-4"
        >
          <div>
            <h2 className="text-3xl font-bold text-nika-white mb-2">Skills</h2>
            <p className="text-nika-white/60 text-lg">{story.character} · {story.role}</p>
            <p className="text-nika-white/50 text-sm mt-2 max-w-2xl">
              {story.title}. {story.blurb}
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, type: 'spring', stiffness: 400, damping: 15 }}
          >
            <FrankyCharacter />
          </motion.div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              className="glass-card p-6"
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: categoryIndex % 2 === 0 ? -40 : 40 }}
              viewport={{ once: true }}
              transition={{
                type: 'spring',
                stiffness: 180,
                damping: 16,
                delay: categoryIndex * 0.15,
              }}
            >
              <h3 className="font-outfit text-[11px] tracking-widest uppercase text-nika-gold mb-4">
                {category.title}
              </h3>

              <div className="grid grid-cols-2 gap-3">
                {category.skills.map((skill, skillIndex) => {
                  const levelStyles = getLevelStyles(skill.level)
                  return (
                    <motion.div
                      key={skill.name}
                      className="flex flex-col gap-2"
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{
                        delay: skillIndex * 0.05,
                        type: 'spring',
                        stiffness: 300,
                        damping: 20,
                      }}
                      whileHover={{ scale: 1.05 }}
                    >
                      <span className="font-body text-[13px] text-nika-white">
                        {skill.name}
                      </span>
                      <span
                        className={`font-outfit text-[10px] px-2 py-0.5 rounded-full border ${levelStyles.bg} ${levelStyles.text} ${levelStyles.border} inline-block w-fit`}
                      >
                        {skill.level}
                      </span>
                    </motion.div>
                  )
                })}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
