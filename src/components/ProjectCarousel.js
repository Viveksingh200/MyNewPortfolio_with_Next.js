'use client'
import { useState } from 'react'
import { ArrowRight } from 'lucide-react'
import { projects } from '@/data/projects'

export default function ProjectCarousel() {
  const [activeProject, setActiveProject] = useState(0)

  return (
    <section id="work" className="py-32 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-6xl md:text-7xl font-black mb-6">
            Featured{' '}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-400 to-purple-500">
              Work
            </span>
          </h2>
          <p className="text-xl text-gray-400">Projects that push boundaries</p>
        </div>

        <div className="relative min-h-[600px]">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`transition-all duration-700 ${
                index === activeProject
                  ? 'opacity-100 scale-100 relative z-10'
                  : 'opacity-0 scale-95 absolute inset-0 pointer-events-none'
              }`}
            >
              <div className="grid md:grid-cols-2 gap-12 items-center">
                {/* Project Visual */}
                <div className="relative aspect-square rounded-3xl overflow-hidden group hoverable">
                  <div
                    className={`absolute inset-0 bg-linear-to-br ${project.gradient} opacity-80 group-hover:opacity-100 transition-opacity duration-500`}
                  />
                  <div className="absolute inset-0 backdrop-blur-3xl" />

                  {/* Animated Grid Overlay */}
                  <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff10_1px,transparent_1px),linear-gradient(to_bottom,#ffffff10_1px,transparent_1px)] bg-size-[4rem_4rem] opacity-20 group-hover:opacity-40 transition-opacity" />

                  {/* Metrics Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center space-y-4">
                      {Object.entries(project.metrics).map(([key, value], i) => (
                        <div
                          key={i}
                          className="bg-black/30 backdrop-blur-md px-6 py-3 rounded-full border border-white/20"
                        >
                          <div className="text-3xl font-bold">{value}</div>
                          <div className="text-sm uppercase tracking-wider text-gray-300">
                            {key}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Project Info */}
                <div className="space-y-6">
                  <div className="inline-block px-4 py-2 bg-white/5 border border-white/10 rounded-full text-sm">
                    {project.type}
                  </div>

                  <h3 className="text-5xl font-black">{project.title}</h3>

                  <p className="text-xl text-gray-400 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-3">
                    {project.tech.map((tech, i) => (
                      <span
                        key={i}
                        className="px-4 py-2 bg-linear-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/30 rounded-lg text-sm font-semibold"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Case Study Link */}
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors text-lg font-semibold hoverable"
                  >
                    View Project
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                  </a>
                </div>
              </div>
            </div>
          ))}

          {/* Navigation Dots */}
          <div className="flex justify-center gap-3 mt-12">
            {projects.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveProject(index)}
                className={`h-2 rounded-full transition-all duration-300 hoverable ${
                  index === activeProject
                    ? 'w-12 bg-blue-500'
                    : 'w-2 bg-white/20 hover:bg-white/40'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
