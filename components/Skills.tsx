'use client'

import { motion } from 'framer-motion'

const capabilityGroups = [
  {
    title: 'Data Science Core',
    claim: 'Used across analysis, modeling, and project write-ups',
    skills: [
      { name: 'Python', evidence: 'Primary language across ML, NLP, scraping, and automation projects' },
      { name: 'Pandas / NumPy', evidence: 'EDA, feature engineering, cleaning, and business analytics workflows' },
      { name: 'Scikit-learn', evidence: 'Pipelines, preprocessing, model comparison, and evaluation' },
      { name: 'Matplotlib', evidence: 'EDA plots, business analytics charts, and model interpretation visuals' },
    ],
  },
  {
    title: 'Machine Learning',
    claim: 'Practical modeling experience with evaluation and tradeoff reasoning',
    skills: [
      { name: 'LightGBM / XGBoost', evidence: 'Engage2Value regression modeling and model comparison' },
      { name: 'Feature Engineering', evidence: 'Leakage-safe user-history, categorical grouping, datetime, and behavior features' },
      { name: 'Recommender Systems', evidence: 'MovieLens CF, SVD, cold-start fallback, Precision@K and Recall@K' },
      { name: 'Model Evaluation', evidence: 'R2, RMSE, MAE, Precision@K, Recall@K, and business metric interpretation' },
    ],
  },
  {
    title: 'NLP and Document AI',
    claim: 'Focused on extraction, structure, and grounded outputs',
    skills: [
      { name: 'spaCy / scispaCy', evidence: 'Clinical entity extraction and medical text processing' },
      { name: 'Transformers', evidence: 'Classification and text understanding workflows' },
      { name: 'OCR / PDF Parsing', evidence: 'TenderIQ PDF extraction, OCR fallback, and document chunking' },
      { name: 'Embeddings / Vector Search', evidence: 'Tender Q&A and document retrieval architecture' },
    ],
  },
  {
    title: 'Engineering and Automation',
    claim: 'Built systems that run beyond notebooks',
    skills: [
      { name: 'FastAPI / Flask', evidence: 'Backend APIs for product systems and platform projects' },
      { name: 'Streamlit', evidence: 'Operator consoles and AI assistant demos' },
      { name: 'GitHub Actions', evidence: 'Automation, scheduled jobs, and project workflow support' },
      { name: 'Testing Discipline', evidence: 'Content pipeline reports 249 passing tests and production readiness checks' },
    ],
  },
]

const proofCards = [
  { label: 'ML proof', value: '116K+', detail: 'E-commerce sessions modeled in Engage2Value' },
  { label: 'Business proof', value: '50 days', detail: 'Field data collected for bakery analytics' },
  { label: 'System proof', value: '249', detail: 'Passing tests reported for content automation pipeline' },
  { label: 'Product proof', value: '10', detail: 'Portfolio case files connected to exact GitHub repos' },
]

export default function Skills() {
  return (
    <section id="skills" className="py-20 px-4 sm:px-8">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="mb-10 grid gap-6 border-b border-nika-haki-border pb-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-end"
        >
          <div>
            <p className="font-outfit text-[11px] uppercase tracking-[0.24em] text-[#B4442E]">03 / Technical Arsenal</p>
            <h2 className="mt-2 font-display text-3xl font-black text-nika-white md:text-4xl">Skills tied to evidence</h2>
          </div>
          <p className="font-body text-[13px] leading-relaxed text-nika-white/55">
            This section avoids exaggerated skill meters. Recruiters should see where each capability appears in real projects and what claim is safe to defend in an interview.
          </p>
        </motion.div>

        <div className="grid gap-6 xl:grid-cols-[1fr_360px]">
          <div className="grid gap-5 md:grid-cols-2">
            {capabilityGroups.map((group, groupIndex) => (
              <motion.article
                key={group.title}
                className="rounded-[24px] border border-nika-haki-border bg-[#111111] p-6 shadow-[0_16px_50px_rgba(0,0,0,0.28)]"
                initial={{ opacity: 0, y: 26 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: groupIndex * 0.08, ease: 'easeOut' }}
              >
                <div className="mb-5 border-b border-nika-haki-border pb-4">
                  <h3 className="font-display text-xl font-bold text-nika-white">{group.title}</h3>
                  <p className="mt-2 font-body text-[12px] leading-relaxed text-nika-white/45">{group.claim}</p>
                </div>

                <div className="space-y-4">
                  {group.skills.map((skill) => (
                    <div key={skill.name} className="grid grid-cols-[120px_1fr] gap-4 border-b border-white/[0.06] pb-4 last:border-0 last:pb-0">
                      <p className="font-outfit text-[12px] font-semibold text-nika-white">{skill.name}</p>
                      <p className="font-body text-[12px] leading-relaxed text-nika-white/55">{skill.evidence}</p>
                    </div>
                  ))}
                </div>
              </motion.article>
            ))}
          </div>

          <motion.aside
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, ease: 'easeOut' }}
            className="rounded-[24px] border border-nika-haki-border bg-[#E8DDC5] p-6 text-[#15110D] shadow-[0_16px_50px_rgba(0,0,0,0.28)]"
          >
            <p className="font-outfit text-[11px] uppercase tracking-[0.24em] text-[#8F3325]">Recruiter View</p>
            <h3 className="mt-2 font-display text-2xl font-black">What this section should prove</h3>
            <p className="mt-4 font-body text-[13px] leading-relaxed text-[#15110D]/70">
              The goal is not to look expert in every tool. The goal is to show a credible stack, mapped to projects, with enough proof for a recruiter to continue into the case files.
            </p>

            <div className="mt-6 grid gap-3">
              {proofCards.map((card) => (
                <div key={card.label} className="border border-[#15110D]/15 bg-[#15110D]/[0.03] p-4">
                  <div className="flex items-baseline justify-between gap-4">
                    <p className="font-outfit text-[10px] uppercase tracking-[0.2em] text-[#15110D]/45">{card.label}</p>
                    <p className="font-display text-2xl font-black text-[#9E3428]">{card.value}</p>
                  </div>
                  <p className="mt-2 font-body text-[12px] leading-relaxed text-[#15110D]/70">{card.detail}</p>
                </div>
              ))}
            </div>
          </motion.aside>
        </div>
      </div>
    </section>
  )
}
