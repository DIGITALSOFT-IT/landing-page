import type { Metadata } from "next";
import "./global.css";

const siteUrl = "https://www.jurytechsolutions.com";
const siteTitle =
  "Jurytech Solutions | Consultoría Jurídica, Ciberseguridad y LegalTech en Colombia";
const siteDescription =
  "Firma colombiana que integra derecho, tecnología y estrategia: desarrollo de software LegalTech, ciberseguridad ISO 27001, pentesting y asesoría jurídica corporativa y estatal.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: siteTitle,
    template: "%s | Jurytech Solutions",
  },
  description: siteDescription,
  applicationName: "Jurytech Solutions",
  authors: [{ name: "Jurytech Solutions S.A.S.", url: siteUrl }],
  creator: "Jurytech Solutions S.A.S.",
  publisher: "Jurytech Solutions S.A.S.",
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "es_CO",
    url: "/",
    siteName: "Jurytech Solutions",
    title: siteTitle,
    description: siteDescription,
    images: [
      {
        url: "/images/JURYTECH.png",
        alt: "Jurytech Solutions S.A.S. — Derecho, Tecnología y Estrategia",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
    images: ["/images/JURYTECH.png"],
  },
  icons: {
    icon: [
      { url: "/images/JURYTECH.png", type: "image/png" },
    ],
    shortcut: ["/images/JURYTECH.png"],
    apple: [
      { url: "/images/JURYTECH.png", type: "image/png" },
    ],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": `${siteUrl}/#organization`,
  name: "Jurytech Solutions S.A.S.",
  alternateName: "Jurytech",
  url: siteUrl,
  logo: `${siteUrl}/images/JURYTECH.png`,
  image: `${siteUrl}/images/JURYTECH.png`,
  description: siteDescription,
  email: "info@jurytechsolutions.com",
  telephone: "+57 320 408 4584",
  address: {
    "@type": "PostalAddress",
    addressCountry: "CO",
  },
  areaServed: [
    { "@type": "Country", name: "Colombia" },
    { "@type": "Place", name: "América Latina" },
  ],
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+57 320 408 4584",
    email: "info@jurytechsolutions.com",
    contactType: "customer service",
    availableLanguage: ["Spanish"],
  },
  knowsAbout: [
    "Derecho comercial y societario",
    "Contratación estatal",
    "Ciberseguridad",
    "ISO 27001",
    "Pentesting",
    "LegalTech",
    "Desarrollo de software a la medida",
    "Inteligencia artificial",
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Servicios de Jurytech Solutions",
    itemListElement: [
      "Desarrollo de Software a la Medida",
      "Plataformas LegalTech",
      "Integración de Inteligencia Artificial",
      "Auditoría e Implementación ISO 27001",
      "Pruebas de Penetración (Pentesting)",
      "Operación SOC y Threat Hunting",
      "Derecho Comercial y Societario",
      "Derecho Administrativo y Contratación Estatal",
    ].map((name) => ({
      "@type": "Offer",
      itemOffered: { "@type": "Service", name },
    })),
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="scroll-smooth">
      <body className="antialiased bg-[#020B1A] text-[#F8FAFC] selection:bg-[#D5A45A] selection:text-[#020B1A]">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
          }}
        />
        {children}
      </body>
    </html>
  );
}
