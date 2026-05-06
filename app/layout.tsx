import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Invoice Payment Prediction Tracker',
  description: 'Predict which invoices will be paid late using AI-powered analysis of client payment history and behavior.'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="eabcdc1b-53ed-49ee-b680-1a9dc565c37c"></script>
      </head>
      <body>{children}</body>
    </html>
  )
}
