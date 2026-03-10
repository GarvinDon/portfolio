'use client'
import Section from './Section'
import { motion } from 'framer-motion'

export default function Contact() {
  return (
    <Section id="contact" title="Contact">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.4 }}
        className="grid md:grid-cols-3 gap-6"
      >
        <div className="rounded-xl border border-neutral-100 bg-white p-6">
          <div className="text-sm text-neutral-600">微信</div>
          <div className="mt-2 text-lg font-semibold text-neutral-500">WeChat ID（占位）</div>
          <a href="#" className="mt-4 inline-block px-4 py-2 rounded bg-primary text-white">
            Add WeChat（占位）
          </a>
        </div>
        <div className="rounded-xl border border-neutral-100 bg-white p-6">
          <div className="text-sm text-neutral-600">邮箱</div>
          <div className="mt-2 text-lg font-semibold text-neutral-500">your@email.com（占位）</div>
          <a href="#" className="mt-4 inline-block px-4 py-2 rounded bg-primary text-white">
            Send Email（占位）
          </a>
        </div>
        <div className="rounded-xl border border-neutral-100 bg-white p-6">
          <div className="text-sm text-neutral-600">简历</div>
          <div className="mt-2 text-lg font-semibold">PDF</div>
          <a href="#" className="mt-4 inline-block px-4 py-2 rounded border border-neutral-200">
            Download Resume（占位）
          </a>
        </div>
      </motion.div>
    </Section>
  )
}
