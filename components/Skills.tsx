'use client'
import Section from './Section'
import { motion } from 'framer-motion'

const data = [
  {
    title: '产品设计',
    items: ['需求拆解', '业务建模', '产品策略', '场景分析']
  },
  {
    title: '交互设计',
    items: ['用户旅程', '信息架构', '流程设计', '状态设计']
  },
  {
    title: 'Design System',
    items: ['组件库设计', '组件扩展', '多端适配', '项目协作']
  },
  {
    title: '工具',
    items: ['Figma', 'Sketch', 'Photoshop', 'AI工具']
  }
]

export default function Skills() {
  return (
    <Section id="skills" title="Skills">
      <div className="grid md:grid-cols-4 gap-6">
        {data.map((block) => (
          <motion.div
            key={block.title}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.4 }}
            className="rounded-xl border border-neutral-100 bg-white p-6 shadow-card"
          >
            <div className="font-semibold mb-3">{block.title}</div>
            <ul className="space-y-2 text-neutral-700">
              {block.items.map((i) => (
                <li key={i} className="text-sm">
                  {i}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </Section>
  )
}
