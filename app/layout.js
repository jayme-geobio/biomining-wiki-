import './globals.css'
import Navigation from './Navigation'
import Footer from './Footer'

export const metadata = {
  title: 'Biomining Wiki - Bridge Between Biology and Mining',
  description: 'An interactive guide to where biotechnology fits in critical mineral recovery',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  )
}
