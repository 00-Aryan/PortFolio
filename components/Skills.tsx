'use client'

import { motion } from 'framer-motion'

const skillCategories = [
  {
    title: 'NLP & Language Models',
    skills: [
      { name: 'spaCy', level: 'Advanced' },
      { name: 'DistilBERT', level: 'Intermediate' },
      { name: 'BPE Tokenizer', level: 'Advanced' },
      { name: 'scispaCy', level: 'Intermediate' },
    ],
  },
  {
    title: 'ML Engineering',
    skills: [
      { name: 'scikit-learn', level: 'Advanced' },
      { name: 'PyTorch', level: 'Intermediate' },
      { name: 'XGBoost', level: 'Advanced' },
      { name: 'Framer Motion', level: 'Intermediate' },
    ],
  },
  {
    title: 'Data & Analytics',
    skills: [
      { name: 'pandas', level: 'Advanced' },
      { name: 'SQL', level: 'Intermediate' },
      { name: 'NumPy', level: 'Advanced' },
      { name: 'Matplotlib', level: 'Advanced' },
    ],
  },
  {
    title: 'Dev & Tools',
    skills: [
      { name: 'Python', level: 'Advanced' },
      { name: 'Git', level: 'Advanced' },
      { name: 'Next.js', level: 'Intermediate' },
      { name: 'Docker', level: 'Beginner' },
    ],
  },
]

const getLevelWidth = (level: string): number => {
  switch (level) {
    case 'Advanced':
      return 90
    case 'Intermediate':
      return 60
    case 'Beginner':
      return 30
    default:
      return 50
  }
}

const getLevelColor = (level: string): string => {
  switch (level) {
    case 'Advanced':
      return 'text-nika-gold'
    case 'Intermediate':
      return 'text-nika-haki-text'
    case 'Beginner':
      return 'text-nika-white/40'
    default:
      return 'text-nika-white/50'
  }
}

export default function Skills() {
  return (
    <section id="skills" className="py-20 px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="mb-12"
        >
          <h2 className="text-3xl font-bold text-nika-white mb-2">Skills</h2>
          <p className="text-nika-white/60 text-lg">Technologies I work with</p>
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

              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-1">
                      <span className="font-body text-[13px] text-nika-white">
                        {skill.name}
                      </span>
                      <span className={`font-body text-[11px] ${getLevelColor(skill.level)}`}>
                        {skill.level}
                      </span>
                    </div>
                    <div className="h-1 bg-nika-white/10 rounded-full">
                      <motion.div
                        className="h-full bg-gradient-to-r from-nika-gold to-nika-gold/50 rounded-full"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${getLevelWidth(skill.level)}%` }}
                        viewport={{ once: true }}
                        transition={{
                          duration: 1.2,
                          delay: skillIndex * 0.1,
                          type: 'spring',
                          stiffness: 80,
                          damping: 20,
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
