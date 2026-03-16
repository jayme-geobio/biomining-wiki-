import './globals.css'
import Navigation from './Navigation'
import Footer from './Footer'
import PageTransition from './components/PageTransition'

export const metadata = {
  title: 'Biomining Wiki - Bridge Between Biology and Mining',
  description: 'An interactive guide to where biotechnology fits in critical mineral recovery',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">
        <Navigation />
        <PageTransition>{children}</PageTransition>
        <Footer />
      </body>
    </html>
  )
}
