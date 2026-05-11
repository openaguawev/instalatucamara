"use client";

import React, { useState } from "react";
import Image from "next/image";
import { MLProduct } from "@/types/product";
import { generateAffiliateUrl } from "@/lib/affiliate";
import { Badge } from "./Badge";
import { RatingStars } from "./RatingStars";
import { Check, X, ExternalLink } from "lucide-react";
import { AffiliateDisclaimer } from "./AffiliateDisclaimer";

interface ProductCardProps {
  product: MLProduct;
  variant?: "card" | "compact" | "featured";
  position?: number;
  articleSlug?: string;
  showDisclaimer?: boolean;
}

export function ProductCard({ 
  product, 
  variant = "card", 
  position = 1, 
  articleSlug = "general",
  showDisclaimer = true
}: ProductCardProps) {
  const [imgSrc, setImgSrc] = useState(product.image);
  const [showAllPros, setShowAllPros] = useState(false);
  
  const affiliateUrl = generateAffiliateUrl(product.mlUrl, articleSlug, position);
  
  const formattedPrice = new Intl.NumberFormat('es-AR', {
    style: 'currency',
    currency: 'ARS',
    maximumFractionDigits: 0
  }).format(product.priceARS);

  const formattedDate = new Date(product.priceUpdated).toLocaleDateString('es-AR', {
    month: 'long',
    year: 'numeric'
  });

  return (
    <div className={`bg-surface rounded-xl border border-border overflow-hidden flex flex-col relative ${variant === 'compact' ? '' : 'shadow-sm'}`}>
      {/* Image Section */}
      <div className="relative aspect-video md:aspect-square w-full bg-white p-4 flex items-center justify-center border-b border-border">
        <Image
          src={imgSrc}
          alt={product.name}
          fill
          className="object-contain p-4 mix-blend-multiply"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          onError={() => setImgSrc('/images/product-placeholder.webp')}
        />
        {product.isBestSeller && (
          <div className="absolute top-3 left-3">
            <Badge variant="ml">MÁS VENDIDO</Badge>
          </div>
        )}
      </div>

      {/* Content Section */}
      <div className="p-5 flex flex-col flex-grow">
        <div className="text-sm text-text-muted mb-1 font-medium">{product.brand}</div>
        <h3 className="font-bold text-lg text-text leading-tight mb-2 line-clamp-2">
          {product.name}
        </h3>
        
        <div className="flex items-center space-x-2 mb-4 text-sm">
          <RatingStars rating={product.rating} />
          <span className="text-text-muted">({product.reviewCount})</span>
          <span className="text-text-muted">•</span>
          <span className="text-text-muted">{product.soldCount}</span>
        </div>

        <div className="mb-4">
          <div className="text-3xl font-bold font-mono text-text">
            {formattedPrice}
          </div>
        </div>

        {variant !== 'compact' && (
          <div className="mb-6 flex-grow space-y-2 text-sm text-text">
            {product.pros.map((pro, idx) => {
              // Hide pros after index 1 on mobile unless showAllPros is true
              const isHiddenMobile = idx > 1 && !showAllPros;
              return (
                <div key={idx} className={`items-start gap-2 ${isHiddenMobile ? 'hidden md:flex' : 'flex'}`}>
                  <Check className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                  <span>{pro}</span>
                </div>
              );
            })}
            
            {!showAllPros && product.pros.length > 2 && (
              <button 
                onClick={() => setShowAllPros(true)}
                className="text-accent font-semibold text-xs mt-1 md:hidden hover:underline focus:outline-none"
              >
                + Ver {product.pros.length - 2} más
              </button>
            )}
            
            {product.cons.slice(0, 1).map((con, idx) => (
              <div key={`con-${idx}`} className="flex items-start gap-2 text-text-muted mt-2">
                <X className="w-4 h-4 text-accent-warm shrink-0 mt-0.5" />
                <span>{con}</span>
              </div>
            ))}
          </div>
        )}
      </div>
      
      {/* Sticky CTA Section */}
      <div className="sticky bottom-0 bg-surface p-5 pt-2 border-t border-border mt-auto z-10">
        <a 
          href={affiliateUrl}
          target="_blank"
          rel="nofollow sponsored"
          className="w-full flex items-center justify-center gap-2 bg-accent hover:bg-accent/90 text-primary font-bold py-3 px-4 rounded-lg transition-colors shadow-sm"
        >
          Ver precio en Mercado Libre <ExternalLink className="w-4 h-4" />
        </a>
        
        <div className="text-center text-xs text-text-muted mt-3">
          Precios verificados: {formattedDate}
        </div>
        
        {showDisclaimer && variant !== 'compact' && (
          <div className="pt-3">
            <AffiliateDisclaimer />
          </div>
        )}
      </div>
    </div>
  );
}
