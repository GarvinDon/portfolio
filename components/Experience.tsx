'use client'
import Section from './Section'
import { motion } from 'framer-motion'

const items = [
  { time: '2022 - 至今', company: '招商银行', role: '体验设计师' },
  { time: '2021 - 2022', company: '小鹅通', role: '交互设计师' },
  { time: '2018 - 2020', company: '极飞科技', role: '交互设计师' },
  { time: '2016 - 2018', company: '货宝宝', role: '产品设计实习' }
]

export default function Experience() {
  return (
    <Section id="experience" title="Experience">
      <div className="space-y-4">
        {items.map((i, idx) => (
          <motion.div
            key={i.company}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.3, delay: idx * 0.05 }}
            className="grid md:grid-cols-3 gap-4 items-center rounded-xl border border-neutral-100 bg-white p-4"
          >
            <div className="text-neutral-600">{i.time}</div>
            <div className="font-semibold">{i.company}</div>
            <div className="text-neutral-700">{i.role}</div>
          </motion.div>
        ))}
      </div>
    </Section>
  )
}
