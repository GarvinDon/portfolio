'use client'
import Section from './Section'
import { motion } from 'framer-motion'

export default function DesignSystem() {
  return (
    <Section id="design-system" title="Design System">
      <div className="grid md:grid-cols-2 gap-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.4 }}
          className="rounded-xl border border-neutral-100 bg-white p-6 shadow-card"
        >
          <div className="font-semibold">Web端</div>
          <div className="mt-3 grid grid-cols-2 gap-4">
            <div>
              <div className="text-3xl font-semibold">6</div>
              <div className="text-sm text-neutral-600">设计规范</div>
            </div>
            <div>
              <div className="text-3xl font-semibold">19</div>
              <div className="text-sm text-neutral-600">组件</div>
            </div>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.4 }}
          className="rounded-xl border border-neutral-100 bg-white p-6 shadow-card"
        >
          <div className="font-semibold">移动端</div>
          <div className="mt-3 grid grid-cols-2 gap-4">
            <div>
              <div className="text-3xl font-semibold">9</div>
              <div className="text-sm text-neutral-600">设计规范</div>
            </div>
            <div>
              <div className="text-3xl font-semibold">8</div>
              <div className="text-sm text-neutral-600">组件</div>
            </div>
          </div>
        </motion.div>
      </div>
      <div className="mt-6 rounded-xl border border-neutral-100 bg-neutral-50 p-6">
        <div className="text-sm text-neutral-600">成果</div>
        <div className="mt-2 text-sm text-neutral-800">
          设计还原度提升 20% · 设计开发效率提升 50%
        </div>
      </div>
    </Section>
  )
}
