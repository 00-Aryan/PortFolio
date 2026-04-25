'use client'

import { motion } from 'framer-motion'

const skillGroups = [
  {
    title: 'ML & Data',
    skills: ['Python', 'Pandas', 'Scikit-learn', 'LightGBM', 'XGBoost', 'Feature Engineering']
  },
  {
    title: 'NLP',
    skills: ['spaCy', 'HuggingFace', 'DistilBERT', 'BERT', 'NER']
  },
  {
    title: 'Data Engineering',
    skills: ['ETL Pipelines', 'GitHub Actions', 'Apify', 'REST APIs']
  },
  {
    title: 'Web & Tools',
    skills: ['Flask', 'Next.js', 'FastAPI', 'Git', 'Excel']
  }
]

export default function Skills() {
  return (
    <section id="skills" className="py-16 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Skills</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {skillGroups.map((group, index) => (
              <motion.div
                key={group.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1, ease: 'easeOut' }}
              >
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{group.title}</h3>
                <p className="text-gray-600 leading-relaxed">
                  {group.skills.join(', ')}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
