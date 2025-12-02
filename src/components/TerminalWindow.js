'use client'
import { useState, useEffect } from 'react'
import { Terminal } from 'lucide-react'

export default function TerminalWindow() {
  const [text, setText] = useState('')
  const [isDone, setIsDone] = useState(false)

  const fullText = `const developer = {
  name: 'Vivek Singh',
  role: 'Full Stack Developer',
  skills: ['MERN Stack', 'Next.js', 'Tailwind CSS', 'UI/UX'],
  passionate: true,
  available: true
};

console.log(developer);`

  useEffect(() => {
    let index = 0
    const interval = setInterval(() => {
      if (index <= fullText.length) {
        setText(fullText.slice(0, index))
        index++
      } else {
        clearInterval(interval)
        // Wait 3 seconds then hide
        setTimeout(() => setIsDone(true), 3000)
      }
    }, 30)

    return () => clearInterval(interval)
  }, [])

  return (
    <div
      className={`w-full max-w-3xl mx-auto bg-slate-900/60 backdrop-blur-xl rounded-2xl border border-white/10 overflow-hidden shadow-2xl transition-all duration-700 ${
        isDone
          ? 'opacity-0 h-0 scale-y-0 -mt-10'
          : 'opacity-100 h-auto scale-y-100'
      }`}
      style={{ transformOrigin: 'top' }}
    >
      {/* Title Bar */}
      <div className="flex items-center gap-2 px-4 py-3 bg-slate-800/80 border-b border-white/10">
        <div className="flex gap-2">
          <div className="w-3 h-3 rounded-full bg-red-500" />
          <div className="w-3 h-3 rounded-full bg-yellow-500" />
          <div className="w-3 h-3 rounded-full bg-green-500" />
        </div>
        <span className="text-xs text-gray-400 ml-4 font-mono">developer.js</span>
      </div>

      {/* Content */}
      <div className="p-6 font-mono text-sm min-h-[200px]">
        <div className="flex items-start gap-2 mb-4">
          <Terminal className="w-4 h-4 text-green-400 mt-1 flex-shrink-0" />
          <div>
            <span className="text-gray-400">~ </span>
            <span className="text-green-400">node</span>
            <span className="text-white"> developer.js</span>
          </div>
        </div>

        <pre className="text-blue-400 whitespace-pre-wrap">
          {text}
          {!isDone && <span className="animate-pulse text-white">|</span>}
        </pre>
      </div>
    </div>
  )
}
