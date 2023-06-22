import '../styles/globals.css'
import { Inter } from 'next/font/google'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Trading Alerts MX',
  description: 'Trading Alerts es una plataforma de alertas de trading en México que te mantiene actualizado sobre oportunidades de inversión y tendencias del mercado. Obtén información en tiempo real y toma decisiones informadas para maximizar tus ganancias.',
  keywords: 'trading, alertas de trading, México, mercado financiero, inversiones, oportunidades de inversión, tendencias del mercado, acciones, bolsa de valores, forex, criptomonedas, análisis técnico, análisis fundamental, estrategias de trading, indicadores técnicos, inversión online, mercados financieros',
  author: 'Trading Alerts MX',
  robots: 'index, follow',
  ogTitle: 'Trading Alerts MX',
  ogDescription: 'Trading Alerts es una plataforma de alertas de trading en México que te mantiene actualizado sobre oportunidades de inversión y tendencias del mercado. Obtén información en tiempo real y toma decisiones informadas para maximizar tus ganancias.',
  ogType: 'website',
}

export default function RootLayout({ children }) {

  return (
    <html lang="es">
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer/>
      </body>
    </html>
  )
}
