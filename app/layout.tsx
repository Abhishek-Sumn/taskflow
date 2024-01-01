import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { siteconfig } from '@/siteconfig/siteconfig'
const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    default:siteconfig.name,
    template:`%s | ${siteconfig.name}`
  },
  description: 'Developed By Abhishek Suman',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
      <link rel="icon" href="https://raw.githubusercontent.com/Abhishek-Sumn/pagination/b82bdaf1da7d7d5fb7627b562fd4934b293bf7d7/done.svg" sizes="any" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
