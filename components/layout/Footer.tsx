import React from "react";
import Link from "next/link";
import { Shield } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-primary text-surface/80 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2 text-surface">
              <Shield className="w-6 h-6 text-accent" />
              <span className="font-bold text-xl tracking-tight">InstalaTuCámara</span>
            </Link>
            <p className="text-sm">
              Guías honestas para proteger tu hogar — sin abonos, sin técnicos. 
              Enseñamos a instalar vos mismo con productos reales.
            </p>
          </div>
          
          <div>
            <h4 className="text-surface font-semibold mb-4">Guías Populares</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/blog/camara-de-seguridad-exterior" className="hover:text-accent transition-colors">Mejores cámaras exterior</Link></li>
              <li><Link href="/blog/camara-de-seguridad-wifi-vs-dvr" className="hover:text-accent transition-colors">WiFi vs DVR: ¿Cuál elegir?</Link></li>
              <li><Link href="/guias/como-instalar-camaras-de-seguridad" className="hover:text-accent transition-colors">Cómo instalar desde cero</Link></li>
              <li><Link href="/blog/kit-camaras-de-seguridad" className="hover:text-accent transition-colors">Mejores kits completos</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-surface font-semibold mb-4">Categorías</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/camaras/exterior" className="hover:text-accent transition-colors">Cámaras Exterior</Link></li>
              <li><Link href="/camaras/interior" className="hover:text-accent transition-colors">Cámaras Interior</Link></li>
              <li><Link href="/camaras/wifi" className="hover:text-accent transition-colors">Cámaras WiFi</Link></li>
              <li><Link href="/camaras/solares" className="hover:text-accent transition-colors">Cámaras Solares</Link></li>
              <li><Link href="/camaras/dvr" className="hover:text-accent transition-colors">Sistemas DVR</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-surface font-semibold mb-4">Marcas</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/marcas/gadnic" className="hover:text-accent transition-colors">Gadnic</Link></li>
              <li><Link href="/marcas/hikvision" className="hover:text-accent transition-colors">Hikvision</Link></li>
              <li><Link href="/marcas/ezviz" className="hover:text-accent transition-colors">Ezviz</Link></li>
              <li><Link href="/marcas/dahua" className="hover:text-accent transition-colors">Dahua</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-surface/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs">
          <p>© {new Date().getFullYear()} InstalaTuCámara. Todos los derechos reservados.</p>
          <div className="flex gap-4">
            <Link href="/privacidad" className="hover:text-surface transition-colors">Privacidad</Link>
            <Link href="/terminos" className="hover:text-surface transition-colors">Términos</Link>
          </div>
        </div>

        <div className="mt-8 p-4 bg-surface/5 rounded-lg text-xs leading-relaxed border border-surface/10 text-center text-surface/60">
          <strong>Aviso de Afiliados:</strong> Este sitio participa en el Programa de Afiliados de Mercado Libre. 
          Cuando hacés click en un enlace y comprás, podemos recibir una comisión sin costo adicional para vos. 
          Esto nos ayuda a mantener el sitio gratuito y sin publicidad invasiva. InstalaTuCámara no tiene relación directa 
          con las marcas mencionadas ni con Mercado Libre.
        </div>
      </div>
    </footer>
  );
}
