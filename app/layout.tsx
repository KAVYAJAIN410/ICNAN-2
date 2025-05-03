import type { Metadata } from 'next'
import './globals.css'
import Nav from "@/components/Nav"
import Footer from "@/components/footer"

export const metadata: Metadata = {
  title: 'v0 App',
  description: 'Created with v0',
  generator: 'v0.dev',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
   
    <html lang="en">
      
      
      <body>
      <Nav></Nav>
        {children}
        <Footer></Footer>
        </body>
      
    </html>
  )
}
