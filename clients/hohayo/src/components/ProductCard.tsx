import Image from "next/image";
import type { Product } from "@/lib/products";
import { driveImageUrl } from "@/lib/products";

const colorMap: Record<string, string> = {
  Preto: "#1a1a1a",
  Preta: "#1a1a1a",
  Chocolate: "#5C3317",
  "Bordô": "#6B0A2E",
  "Verde Musgo": "#4A5D23",
  Mostarda: "#D4A017",
  Telha: "#C05746",
  "Rosa Seco": "#C9A0A0",
  Rosa: "#F4A7B9",
  "Róseo": "#E8A0B5",
  Marinho: "#1B2A4A",
  "Azul Marinho": "#1B2A4A",
  Bege: "#D4C4A8",
  Caramelo: "#B87333",
  Branco: "#F5F5F5",
  Vermelho: "#C41E3A",
  "Azul Bic": "#0066CC",
  "Verde Água": "#7BC8A4",
  Grafite: "#555555",
};

export default function ProductCard({ product }: { product: Product }) {
  const mainPhoto = product.photos[0];

  return (
    <div className="group cursor-pointer">
      {/* Product Image */}
      <div className="relative aspect-[3/4] rounded-xl overflow-hidden bg-neutral-100 border border-border mb-4">
        <Image
          src={driveImageUrl(mainPhoto)}
          alt={product.name}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-700"
          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
        />

        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-1.5 z-10">
          {product.newArrival && (
            <span className="bg-cta text-white text-[10px] tracking-wider uppercase px-2.5 py-1 rounded-full font-medium">
              Novo
            </span>
          )}
          {product.featured && (
            <span className="bg-foreground text-white text-[10px] tracking-wider uppercase px-2.5 py-1 rounded-full font-medium">
              Destaque
            </span>
          )}
        </div>

        {/* Hover overlay */}
        <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/5 transition-all duration-500 z-[1]" />

        {/* Quick view button */}
        <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300 z-10">
          <a
            href="https://wa.me/5500000000000"
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full btn-cta bg-cta text-white text-center py-2.5 rounded-lg text-xs tracking-wider uppercase font-medium hover:bg-cta-hover transition-colors duration-300"
          >
            Consultar via WhatsApp
          </a>
        </div>
      </div>

      {/* Product Info */}
      <div>
        <p className="text-[10px] tracking-[0.2em] uppercase text-text-light mb-1">
          Ref. {product.ref} &middot; {product.description}
        </p>
        <h3 className="text-sm font-medium text-foreground group-hover:text-cta transition-colors duration-300">
          {product.name}
        </h3>

        {/* Color Swatches */}
        <div className="flex flex-wrap gap-1.5 mt-2.5">
          {product.colors.map((color) => {
            const hex = colorMap[color];
            if (!hex) {
              return (
                <span
                  key={color}
                  className="text-[10px] text-text-light bg-neutral-100 px-2 py-0.5 rounded-full"
                >
                  {color}
                </span>
              );
            }
            return (
              <span
                key={color}
                title={color}
                className="w-4 h-4 rounded-full border border-neutral-300 shadow-sm"
                style={{ backgroundColor: hex }}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
