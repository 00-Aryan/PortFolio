'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function About() {
  return (
    <section id="about" className="py-20 px-6 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-8">About Me</h2>

          <div className="space-y-6 mb-8">
            <p className="text-lg text-gray-700 leading-relaxed">
              I'm a data scientist with a passion for building end-to-end data solutions. My journey began with a web analytics application for a local bakery, progressed through Kaggle competitions, evolved with a job scraping and automation pipeline, and now focuses on NLP pipelines for information extraction.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              I specialize in creating end-to-end machine learning pipelines, from data collection and preprocessing to model deployment. Currently, I'm focusing on NLP applications and building robust data infrastructure that scales.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              I'm actively seeking Data Science and ML roles where I can contribute to impactful projects and continue growing as a data professional.
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4, ease: 'easeOut' }}
          >
            <Link
              href="https://www.linkedin.com/in/aryan-kumar-1969b819b/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#0A66C2] text-white rounded-lg font-medium hover:bg-[#004182] transition-colors shadow-sm"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
              Connect on LinkedIn
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
