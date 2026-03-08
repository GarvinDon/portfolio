'use client'
import Section from './Section'
import { motion } from 'framer-motion'

export default function About() {
  return (
    <Section id="about" title="About">
      <motion.div
        className="grid md:grid-cols-2 gap-8 text-neutral-700"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6 }}
      >
        <p>
          我是一名专注企业级产品体验设计的产品设计师。拥有 7.5 年产品设计经验，主导多个复杂系统的体验重构，从用户研究、需求分析、系统建模到设计落地全流程参与。
        </p>
        <div className="grid grid-cols-2 gap-4">
          <ul className="space-y-2">
            <li>B端复杂流程设计</li>
            <li>SaaS系统产品体验优化</li>
            <li>Design System 建设</li>
            <li>数据驱动设计</li>
          </ul>
          <div className="rounded-xl p-6 bg-neutral-50 border border-neutral-100">
            <div className="text-sm text-neutral-600">核心数据</div>
            <div className="mt-3 grid grid-cols-3 gap-4">
              <div>
                <div className="text-2xl font-semibold">7.5</div>
                <div className="text-xs text-neutral-600">年经验</div>
              </div>
              <div>
                <div className="text-2xl font-semibold">3+</div>
                <div className="text-xs text-neutral-600">核心项目</div>
              </div>
              <div>
                <div className="text-2xl font-semibold">B</div>
                <div className="text-xs text-neutral-600">SaaS/企业信息化</div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </Section>
  )
}
