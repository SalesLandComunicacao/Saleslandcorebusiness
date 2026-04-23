export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-white" />
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Brand Mark */}
        <div className="mb-8">
          <div className="inline-block">
            <div className="w-16 h-[1px] bg-foreground mx-auto mb-6" />
            <span className="text-xs tracking-[0.5em] uppercase text-foreground font-medium">
              Nova Coleção 2026
            </span>
            <div className="w-16 h-[1px] bg-foreground mx-auto mt-6" />
          </div>
        </div>

        {/* Main Title */}
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extralight tracking-[0.2em] text-foreground mb-4">
          HOHAYÔ
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl italic font-light tracking-[0.1em] text-text-light mb-8">
          Collection
        </p>

        {/* Tagline */}
        <p className="max-w-2xl mx-auto text-base sm:text-lg text-text-light leading-relaxed mb-12">
          Moda feminina com tecidos premium e caimento perfeito.
          <br className="hidden sm:block" />
          Peças versáteis que acompanham você em todas as ocasiões.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#catalogo"
            className="btn-cta bg-cta text-white px-10 py-4 rounded-full text-sm tracking-[0.15em] uppercase font-medium hover:bg-cta-hover transition-all duration-300"
          >
            Ver Catálogo
          </a>
          <a
            href="https://wa.me/5500000000000"
            target="_blank"
            rel="noopener noreferrer"
            className="border-2 border-foreground text-foreground px-10 py-4 rounded-full text-sm tracking-[0.15em] uppercase font-medium hover:bg-foreground hover:text-white transition-all duration-300"
          >
            Fazer Pedido
          </a>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <svg
            className="w-5 h-5 text-text-light"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </div>
    </section>
  );
}
