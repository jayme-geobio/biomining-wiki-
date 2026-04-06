import './globals.css'
import Navigation from './Navigation'
import Footer from './Footer'
import PageTransition from './components/PageTransition'
import { Analytics } from "@vercel/analytics/next"

export const metadata = {
  title: 'The Biomining Handbook - A Practical Guide for Biologists and Mining Professionals',
  description: 'An interactive guide to where biotechnology fits in critical mineral recovery',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">
        <Navigation />
        <PageTransition>{children}</PageTransition>
        <Footer />
        <Analytics />
      </body>
    </html>
  )
}
