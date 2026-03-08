'use client'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section id="hero" className="section pt-24 relative overflow-hidden">
      <div className="hero-bg pointer-events-none" />
      <div className="container relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="grid md:grid-cols-2 gap-8 items-center"
        >
          <div className="space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-gradient">Adon</h1>
            <p className="text-lg text-neutral-700">
              Product & Experience Designer
            </p>
            <p className="text-neutral-700">
              7.5 年产品 / 交互设计经验，专注 B 端复杂系统与企业信息化产品体验设计。擅长通过用户研究、业务建模与设计系统推动复杂产品落地与业务增长。
            </p>
            <div className="flex gap-3">
              <a href="#projects" className="px-5 py-2 rounded bg-primary text-white shadow-card">
                View Projects
              </a>
              <a href="#contact" className="px-5 py-2 rounded border border-neutral-200 hover:border-primary">
                Contact Me
              </a>
              <a href="#contact" className="px-5 py-2 rounded border border-neutral-200 hover:border-primary">
                Download Resume
              </a>
            </div>
            <div className="flex gap-6 text-sm text-neutral-600">
              <span>7.5 年设计经验</span>
              <span>3+ 核心产品项目</span>
              <span>B端 / SaaS / 企业信息化</span>
            </div>
          </div>
          <div className="flex justify-center md:justify-end">
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              className="h-48 w-48 md:h-64 md:w-64 rounded-2xl bg-gradient-to-br from-primary to-neutral-900 blur-[0.5px]"
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
