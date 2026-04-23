import type { Product } from "@/lib/products";
import ProductCard from "./ProductCard";

interface ProductSectionProps {
  id?: string;
  label: string;
  title: string;
  products: Product[];
  columns?: 3 | 4 | 5;
  bgClass?: string;
}

export default function ProductSection({
  id,
  label,
  title,
  products,
  columns = 4,
  bgClass = "bg-white",
}: ProductSectionProps) {
  const gridCols = {
    3: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3",
    4: "grid-cols-2 sm:grid-cols-3 lg:grid-cols-4",
    5: "grid-cols-2 sm:grid-cols-3 lg:grid-cols-5",
  };

  return (
    <section id={id} className={`py-20 ${bgClass}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-14">
          <span className="text-xs tracking-[0.3em] uppercase text-cta font-medium">
            {label}
          </span>
          <h2 className="text-3xl sm:text-4xl font-light tracking-wide text-foreground mt-3">
            {title}
          </h2>
          <div className="w-12 h-[1px] bg-foreground mx-auto mt-4" />
        </div>

        {/* Product Grid */}
        <div className={`grid ${gridCols[columns]} gap-6 md:gap-8`}>
          {products.map((product) => (
            <ProductCard key={product.ref} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
