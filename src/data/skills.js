import { Code2, Cpu, Layers, Box } from 'lucide-react'

export const skills = [
  {
    name: 'Frontend',
    items: ['React', 'Next.js', 'TailwindCSS', 'HTML', 'CSS', 'JavaScript'],
    icon: Code2,
    color: 'cyan'
  },
  {
    name: 'Backend',
    items: ['Node.js', 'Express', 'MongoDB', 'REST APIs'],
    icon: Cpu,
    color: 'purple'
  },
  {
    name: 'Cloud/DevOps',
    items: ['AWS', 'Nginx', 'CI/CD'],
    icon: Layers,
    color: 'blue'
  },
  {
    name: 'UI/UX',
    items: ['Figma'],
    icon: Box,
    color: 'pink'
  }
]