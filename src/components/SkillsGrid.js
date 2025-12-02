'use client'
import { skills } from '@/data/skills'

export default function SkillsGrid() {
  return (
    <section id="skills" className="py-32 relative bg-gradient-to-b from-slate-900/50 to-transparent">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-6xl md:text-7xl font-black mb-6">
            Tech{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
              Arsenal
            </span>
          </h2>
          <p className="text-xl text-gray-400">Tools and technologies I master</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => {
            const Icon = skill.icon
            return (
              <div
                key={index}
                className="group relative p-8 bg-slate-900/40 backdrop-blur-xl border border-white/10 rounded-3xl hover:border-blue-500/50 transition-all duration-500 hover:-translate-y-2 hoverable"
              >
                <div className={`w-16 h-16 mb-6 rounded-2xl bg-gradient-to-br from-${skill.color}-500 to-${skill.color}-700 flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}>
                  <Icon className="w-8 h-8" />
                </div>

                <h3 className="text-2xl font-bold mb-4">{skill.name}</h3>

                <ul className="space-y-2">
                  {skill.items.map((item, i) => (
                    <li key={i} className="text-gray-400 flex items-center gap-2">
                      <div className={`w-1.5 h-1.5 rounded-full bg-${skill.color}-400`} />
                      {item}
                    </li>
                  ))}
                </ul>

                <div className={`absolute inset-0 bg-gradient-to-br from-${skill.color}-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-3xl pointer-events-none`} />
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
