import React from "react";
import { Info } from "lucide-react";

export function AffiliateDisclaimer() {
  return (
    <div className="flex items-start gap-2 p-3 text-xs bg-bg rounded-md text-text-muted border border-border">
      <Info className="w-4 h-4 mt-0.5 flex-shrink-0" />
      <p>
        Este enlace es de afiliado. Si compras a través de él, recibimos una pequeña comisión 
        que nos ayuda a mantener estas guías gratuitas, sin ningún costo extra para vos.
      </p>
    </div>
  );
}
