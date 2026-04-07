import './globals.css'
import Navigation from './Navigation'
import Footer from './Footer'
import PageTransition from './components/PageTransition'
import { Analytics } from "@vercel/analytics/next"
import Script from 'next/script'

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
        <Script async src="https://plausible.io/js/pa-aToVkU0JCR7Uwot-Ew6PF.js" strategy="afterInteractive" />
        <Script id="plausible-init" strategy="afterInteractive">
          {`window.plausible=window.plausible||function(){(plausible.q=plausible.q||[]).push(arguments)},plausible.init=plausible.init||function(i){plausible.o=i||{}};plausible.init()`}
        </Script>
      </body>
    </html>
  )
}
