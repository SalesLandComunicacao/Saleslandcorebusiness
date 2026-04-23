import { categories } from "@/lib/products";

const categoryStyles: Record<string, { bg: string; pattern: string }> = {
  vestidos: {
    bg: "bg-neutral-50 hover:bg-neutral-100",
    pattern: "M12 21l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.18L12 21z",
  },
  blusas: {
    bg: "bg-neutral-50 hover:bg-neutral-100",
    pattern: "M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5",
  },
  calcas: {
    bg: "bg-neutral-50 hover:bg-neutral-100",
    pattern: "M13 10V3L4 14h7v7l9-11h-7z",
  },
  conjuntos: {
    bg: "bg-neutral-50 hover:bg-neutral-100",
    pattern: "M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z",
  },
  senhora: {
    bg: "bg-neutral-50 hover:bg-neutral-100",
    pattern: "M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z",
  },
};

export default function Categories() {
  return (
    <section id="categorias" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-14">
          <span className="text-xs tracking-[0.3em] uppercase text-cta font-medium">
            Explore
          </span>
          <h2 className="text-3xl sm:text-4xl font-light tracking-wide text-foreground mt-3">
            Nossas Categorias
          </h2>
          <div className="w-12 h-[1px] bg-foreground mx-auto mt-4" />
        </div>

        {/* Category Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {categories.map((cat) => {
            const style = categoryStyles[cat.id];
            return (
              <a
                key={cat.id}
                href={`#cat-${cat.id}`}
                className={`group relative overflow-hidden rounded-2xl aspect-[3/4] flex flex-col items-center justify-center p-6 transition-all duration-500 hover:scale-[1.02] hover:shadow-xl border border-border ${style.bg}`}
              >
                {/* Icon */}
                <div className="relative z-10 mb-4">
                  <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center shadow-sm group-hover:shadow-md group-hover:bg-cta/10 transition-all duration-300 border border-border">
                    <svg
                      className="w-7 h-7 text-foreground group-hover:text-cta transition-colors duration-300"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d={style.pattern}
                      />
                    </svg>
                  </div>
                </div>

                {/* Text */}
                <div className="relative z-10 text-center">
                  <h3 className="text-sm font-semibold text-foreground tracking-wide">
                    {cat.name}
                  </h3>
                  <p className="text-xs text-text-light mt-1">
                    {cat.description}
                  </p>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
