import Head from 'next/head'
import Header from '@/components/Header'
import HeroSection from '@/components/HeroSection'
import BenefitsSection from '@/components/BenefitsSection'
import PlansSection from '@/components/PlansSection'
import FAQSection from '@/components/FAQSection'
import AsesoresSection from '@/components/AsesoresSection'
import ContactSection from '@/components/ContactSection'

export default function Home() {
  return (
    <>
      <Head>
        <title>Rapikom Embajador - Aumenta tus ventas hasta 60% con financiamiento RCash</title>
        <meta name="description" content="Únete a más de 900 aliados comerciales que ya están transformando sus negocios con Rapikom. Ofrece financiamiento a tus clientes y crece sin límites." />
        <meta name="keywords" content="Rapikom, RCash, financiamiento, cuotas, comercio, ventas, aliado comercial, Venezuela" />
        <meta name="author" content="Rapikom" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://rapikom-embajador.vercel.app/" />
        <meta property="og:title" content="Rapikom Embajador - Aumenta tus ventas hasta 60% con financiamiento RCash" />
        <meta property="og:description" content="Únete a más de 900 aliados comerciales que ya están transformando sus negocios con Rapikom. Ofrece financiamiento a tus clientes y crece sin límites." />
        <meta property="og:image" content="https://rapikom-embajador.vercel.app/og-image.jpg" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://rapikom-embajador.vercel.app/" />
        <meta property="twitter:title" content="Rapikom Embajador - Aumenta tus ventas hasta 60% con financiamiento RCash" />
        <meta property="twitter:description" content="Únete a más de 900 aliados comerciales que ya están transformando sus negocios con Rapikom. Ofrece financiamiento a tus clientes y crece sin límites." />
        <meta property="twitter:image" content="https://rapikom-embajador.vercel.app/og-image.jpg" />

        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />

        {/* Preconnect to external domains */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </Head>

            <main className="min-h-screen">
        {/* Header */}
        <Header />

        {/* Hero Section */}
        <HeroSection />

        {/* Benefits Section */}
        <BenefitsSection />

        {/* Plans Section */}
        <PlansSection />

        {/* Asesores Section */}
        <AsesoresSection />

        {/* FAQ Section */}
        <FAQSection />

        {/* Contact Section */}
        <ContactSection />
      </main>
    </>
  )
} 