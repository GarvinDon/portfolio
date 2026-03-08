'use client'
import Section from './Section'
import { motion } from 'framer-motion'

const items = [
  { title: '小鹅圈子 DAU 提升 90%' },
  { title: '极飞维修系统 处理效率提升 13 倍' },
  { title: '组件库建设 设计效率提升 50%' }
]

export default function Achievements() {
  return (
    <Section id="achievements" title="Achievements">
      <div className="grid md:grid-cols-3 gap-6">
        {items.map((i, idx) => (
          <motion.div
            key={i.title}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.3, delay: idx * 0.05 }}
            className="rounded-xl border border-neutral-100 bg-white p-6 shadow-card"
          >
            <div className="font-semibold">{i.title}</div>
          </motion.div>
        ))}
      </div>
    </Section>
  )
}
