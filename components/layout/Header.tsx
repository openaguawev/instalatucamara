import React from "react";
import Link from "next/link";
import { Shield, Menu } from "lucide-react";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-bg/80 backdrop-blur-md">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
          <div className="bg-primary text-surface p-1.5 rounded-lg group-hover:bg-accent group-hover:text-primary transition-colors">
            <Shield className="w-5 h-5" />
          </div>
          <span className="font-bold text-xl tracking-tight text-primary">InstalaTu<span className="text-accent-warm">Cámara</span></span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-text-muted">
          <Link href="/guias" className="hover:text-primary transition-colors">Guías de compra</Link>
          <Link href="/camaras" className="hover:text-primary transition-colors">Categorías ▾</Link>
          <Link href="/marcas" className="hover:text-primary transition-colors">Marcas ▾</Link>
          <Link href="/solucionar" className="hover:text-primary transition-colors">Instalación DIY</Link>
          <Link href="/blog" className="hover:text-primary transition-colors">Blog</Link>
        </nav>

        <div className="flex items-center gap-4">
          <Link 
            href="/comparar" 
            className="hidden md:inline-flex items-center justify-center px-4 py-2 text-sm font-bold bg-accent text-primary rounded-lg hover:bg-accent/90 transition-colors"
          >
            Comparar cámaras
          </Link>
          <button className="md:hidden p-2 text-text-muted hover:bg-surface rounded-md">
            <Menu className="w-6 h-6" />
            <span className="sr-only">Toggle menu</span>
          </button>
        </div>
      </div>
    </header>
  );
}
