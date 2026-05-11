import React from "react";
import Link from "next/link";
import { Shield, CheckCircle, Clock, Video } from "lucide-react";
import { products } from "@/data/products";
import { ProductCard } from "@/components/ui/ProductCard";
import type { WebSite, WithContext } from 'schema-dts';

export default function Home() {
  const jsonLd: WithContext<WebSite> = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'InstalaTuCámara',
    url: 'https://instalatucamara.com.ar',
    description: 'Guías honestas para proteger tu hogar — sin abonos, sin técnicos',
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      {/* Hero Section */}
      <section className="bg-primary text-surface py-20 px-4">
        <div className="container mx-auto max-w-4xl text-center space-y-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-surface/10 rounded-full text-sm font-medium border border-surface/20 mb-4">
            <Shield className="w-4 h-4 text-accent" />
            <span>Precios verificados en ML · Sin publicidad · Actualizado Mayo 2026</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-tight">
            Cámaras de seguridad para el hogar —<br className="hidden md:block"/>
            <span className="text-accent">instalás vos mismo sin abonos</span>
          </h1>
          
          <p className="text-lg md:text-xl text-surface/80 max-w-2xl mx-auto">
            Comparamos las cámaras y sistemas más vendidos en Mercado Libre Argentina. 
            Instalás vos mismo, sin técnico, sin sorpresas.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8">
            <Link 
              href="/blog" 
              className="w-full sm:w-auto px-8 py-4 bg-accent text-primary font-bold rounded-xl hover:bg-accent/90 transition-colors text-lg"
            >
              Ver comparativas →
            </Link>
            <Link 
              href="/guias/como-instalar-camaras-de-seguridad" 
              className="w-full sm:w-auto px-8 py-4 bg-surface/10 text-surface font-bold rounded-xl hover:bg-surface/20 transition-colors border border-surface/20 text-lg"
            >
              Empezar desde cero →
            </Link>
          </div>
        </div>
      </section>

      {/* Categorías Destacadas */}
      <section className="py-16 bg-bg px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-2xl font-bold text-text mb-8 text-center">Explorar por Categoría</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { title: "Cámaras Exteriores", icon: Shield, href: "/camaras/exterior" },
              { title: "Sistemas DVR", icon: Video, href: "/camaras/dvr" },
              { title: "Cámaras WiFi", icon: CheckCircle, href: "/camaras/wifi" },
              { title: "Cámaras Solares", icon: Clock, href: "/camaras/solares" }
            ].map((cat, i) => (
              <Link 
                key={i} 
                href={cat.href}
                className="flex flex-col items-center justify-center p-6 bg-surface rounded-xl border border-border hover:border-accent hover:shadow-md transition-all text-center gap-3"
              >
                <cat.icon className="w-8 h-8 text-primary" />
                <span className="font-semibold text-text">{cat.title}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Productos Destacados */}
      <section className="py-16 bg-surface px-4 border-t border-border">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-text mb-2 text-center">Los más recomendados del mes</h2>
          <p className="text-text-muted text-center mb-10">Basado en análisis de ventas, opiniones y pruebas reales.</p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {products.slice(0, 3).map((product) => (
              <ProductCard 
                key={product.id} 
                product={product} 
                articleSlug="home-page-destacados" 
                position={1}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Por qué confiar */}
      <section className="py-20 bg-bg px-4 border-t border-border">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold text-text mb-12">Por qué confiar en nosotros</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
            {[
              { title: "Productos reales", desc: "Probamos y comparamos productos reales disponibles actualmente en Mercado Libre Argentina." },
              { title: "Independientes", desc: "Sin afiliación con ninguna marca de cámaras — recomendamos lo mejor para cada caso honestamente." },
              { title: "Precios actualizados", desc: "Verificamos y actualizamos los precios mensualmente para que tengas referencias reales." },
              { title: "Guías para principiantes", desc: "Guías de instalación paso a paso pensadas para cualquier persona, sin jerga técnica." }
            ].map((item, i) => (
              <div key={i} className="flex gap-4 p-6 bg-surface rounded-xl border border-border">
                <CheckCircle className="w-6 h-6 text-accent shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-lg text-text mb-2">{item.title}</h3>
                  <p className="text-text-muted">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Rápida */}
      <section className="py-16 bg-surface px-4 border-t border-border">
        <div className="container mx-auto max-w-3xl">
          <h2 className="text-3xl font-bold text-text mb-8 text-center">Preguntas Frecuentes</h2>
          <div className="space-y-4">
            {[
              { q: "¿Es legal instalar cámaras en la calle?", a: "Podés enfocar el frente de tu casa, pero las cámaras no deben invadir la privacidad de los vecinos ni grabar el interior de otras propiedades." },
              { q: "¿Qué pasa si se corta la luz?", a: "Los sistemas DVR se apagan si no tienen una UPS. Las cámaras WiFi con batería o solares siguen funcionando y grabando en su memoria local." },
              { q: "¿Necesito pagar para ver mis cámaras por celular?", a: "No. Todas las cámaras y sistemas que recomendamos traen una app oficial gratuita (como Hik-Connect o la app de Gadnic) que funciona sin abonos." }
            ].map((faq, i) => (
              <div key={i} className="p-6 bg-bg rounded-xl border border-border">
                <h3 className="font-bold text-lg text-text mb-2">{faq.q}</h3>
                <p className="text-text-muted">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 bg-primary text-surface px-4 text-center">
        <div className="container mx-auto max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">¿No sabés por dónde empezar?</h2>
          <p className="text-lg text-surface/80 mb-8">
            Nuestra guía para principiantes te explica todo lo que necesitás saber antes de comprar tu primera cámara.
          </p>
          <Link 
            href="/guias/como-instalar-camaras-de-seguridad" 
            className="inline-flex px-8 py-4 bg-accent text-primary font-bold rounded-xl hover:bg-accent/90 transition-colors text-lg"
          >
            Ver guía para principiantes →
          </Link>
        </div>
      </section>
    </>
  );
}
