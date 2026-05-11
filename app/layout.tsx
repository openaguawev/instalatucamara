import type { Metadata } from "next";
import { Sora, DM_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

const sora = Sora({ 
  subsets: ["latin"],
  variable: '--font-sora',
  display: 'swap',
});

const dmSans = DM_Sans({ 
  subsets: ["latin"],
  variable: '--font-dm-sans',
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: '--font-mono',
  display: 'swap',
});

export const metadata: Metadata = {
  title: "InstalaTuCámara | Guías honestas para proteger tu hogar",
  description: "El único sitio en Argentina que enseña a instalar cámaras de seguridad vos mismo con productos reales de Mercado Libre. Sin abonos mensuales, sin técnicos.",
  keywords: ["cámaras de seguridad", "instalar cámaras", "cámaras mercadolibre", "cámaras wifi", "dvr", "argentina"],
  authors: [{ name: "InstalaTuCámara" }],
  creator: "InstalaTuCámara",
  publisher: "InstalaTuCámara",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "InstalaTuCámara | Guías de seguridad",
    description: "Instalá cámaras de seguridad vos mismo sin pagar abonos mensuales.",
    url: "https://instalatucamara.com.ar",
    siteName: "InstalaTuCámara",
    locale: "es_AR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "InstalaTuCámara",
    description: "Instalá cámaras de seguridad vos mismo sin pagar abonos mensuales.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es-AR" className={`${sora.variable} ${dmSans.variable} ${jetbrainsMono.variable}`}>
      <body className="font-sans antialiased min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
