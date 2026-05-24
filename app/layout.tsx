import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Work Productivity Confessor — Anonymous Benchmarking',
  description: 'Anonymously track and compare your real work productivity with industry peers. Honest benchmarking for remote workers and managers.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="9746ea16-4183-44ce-a8c6-572e12bd2f2d"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] min-h-screen">
        {children}
      </body>
    </html>
  )
}
