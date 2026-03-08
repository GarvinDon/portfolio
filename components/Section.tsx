'use client'
import { motion } from 'framer-motion'

export default function Section({
  id,
  title,
  children
}: {
  id: string
  title: string
  children: React.ReactNode
}) {
  return (
    <section id={id} className="section">
      <div className="container">
        <motion.h2
          className="section-title mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          {title}
        </motion.h2>
        {children}
      </div>
    </section>
  )
}
