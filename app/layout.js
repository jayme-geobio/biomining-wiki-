import './globals.css'
import Navigation from './Navigation'
import Footer from './Footer'
import PageTransition from './components/PageTransition'
import { Analytics } from "@vercel/analytics/next"
import Script from 'next/script'

export const metadata = {
  metadataBase: new URL('https://biomininghandbook.homeworld.bio'),
  title: 'The Biomining Handbook - A Practical Guide for Biologists and Mining Professionals',
  description: 'An interactive guide to where biotechnology fits in critical mineral recovery',
  openGraph: {
    title: 'The Biomining Handbook',
    description: 'A practical guide for biologists and mining professionals',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'The Biomining Handbook' }],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'The Biomining Handbook',
    description: 'A practical guide for biologists and mining professionals',
    images: ['/og-image.png'],
  },
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
