import './globals.css'

export const metadata = {
  title: 'Vivek Singh - Creative Developer',
  description: 'Portfolio of a creative full-stack developer specializing in AI, 3D, and modern web technologies',
  keywords: ['developer', 'portfolio', 'react', 'next.js', 'AI', '3D'],
  authors: [{ name: 'Your Name' }],
  openGraph: {
    title: 'John Doe - Creative Developer',
    description: 'Portfolio of a creative developer',
    type: 'website',
  }
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body className="antialiased" suppressHydrationWarning>
        {children}
      </body>
    </html>
  )
}