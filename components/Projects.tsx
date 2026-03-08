'use client'
import Section from './Section'
import { motion } from 'framer-motion'

const projects = [
  {
    title: '鹅圈子小程序',
    type: 'C 端产品',
    summary: '知识商家社群工具体验设计，从 0 到 1 搭建社群小程序产品',
    roles: ['信息架构设计', '用户路径优化', '社群互动机制'],
    result: ['日活用户提升 90%', '课程转化率提升'],
    tags: ['用户增长设计', '社群产品', '小程序产品']
  },
  {
    title: '极飞售后维修系统',
    type: 'B 端企业系统',
    summary:
      '无人机售后维修流程线上化，涉及客户、维修员、仓储、财务等多个角色',
    roles: ['体验设计负责人', '用户调研', '业务建模', '用户旅程', '系统架构设计'],
    result: ['维修平均时长减少 50%', '单据处理效率提升 13 倍'],
    tags: ['流程线上化', '状态可视化', '设备数据联通', '物料结构化']
  },
  {
    title: '招商银行 SaaS 假勤管理',
    type: '企业 SaaS',
    summary: '复杂流程优化，多端体验统一，异常机制设计',
    roles: ['用户旅程分析', '异常流程设计', '数据驱动优化'],
    result: ['流程清晰化', '异常机制完善', '系统一致性提升'],
    tags: ['SaaS', '一致性', '数据驱动']
  }
]

export default function Projects() {
  return (
    <Section id="projects" title="Projects">
      <div className="grid md:grid-cols-3 gap-6">
        {projects.map((p) => (
          <motion.div
            key={p.title}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.4 }}
            whileHover={{ y: -4, scale: 1.01 }}
            className="group rounded-xl border border-neutral-100 bg-white p-6 shadow-card"
          >
            <div className="flex items-center justify-between">
              <div className="text-lg font-semibold">{p.title}</div>
              <span className="text-xs px-2 py-1 rounded bg-neutral-100">{p.type}</span>
            </div>
            <p className="mt-3 text-sm text-neutral-700">{p.summary}</p>
            <div className="mt-4">
              <div className="text-sm font-medium">职责</div>
              <ul className="mt-2 grid grid-cols-2 gap-2 text-sm text-neutral-700">
                {p.roles.map((r) => (
                  <li key={r} className="leading-relaxed">{r}</li>
                ))}
              </ul>
            </div>
            <div className="mt-4">
              <div className="text-sm font-medium">成果</div>
              <ul className="mt-2 space-y-1 text-sm text-neutral-700">
                {p.result.map((r) => (
                  <li key={r}>{r}</li>
                ))}
              </ul>
            </div>
            <div className="mt-4 flex flex-wrap gap-2">
              {p.tags.map((t) => (
                <span
                  key={t}
                  className="text-xs px-2 py-1 rounded-full bg-neutral-100 group-hover:bg-primary/10 transition-colors"
                >
                  {t}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  )
}
