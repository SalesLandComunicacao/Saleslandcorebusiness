export default function Footer() {
  return (
    <footer id="contato" className="bg-foreground text-white">
      {/* CTA Banner */}
      <div className="border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h2 className="text-2xl sm:text-3xl font-light tracking-wide mb-4">
            Faça seu pedido agora
          </h2>
          <p className="text-white/60 mb-8 max-w-lg mx-auto">
            Entre em contato pelo WhatsApp para fazer seu pedido, consultar
            preços e conhecer nossas condições especiais para atacado.
          </p>
          <a
            href="https://wa.me/5500000000000"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 btn-cta bg-cta text-white px-8 py-4 rounded-full text-sm tracking-wider uppercase font-medium hover:bg-cta-hover transition-colors duration-300"
          >
            <svg
              className="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            Chamar no WhatsApp
          </a>
        </div>
      </div>

      {/* Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="mb-4">
              <span className="text-xl font-light tracking-[0.3em]">
                HOHAYÔ
              </span>
              <br />
              <span className="text-[10px] italic tracking-[0.15em] text-white/50">
                Collection
              </span>
            </div>
            <p className="text-sm text-white/50 leading-relaxed">
              Moda feminina com qualidade e estilo para todas as mulheres.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs tracking-[0.2em] uppercase font-medium mb-4">
              Navegação
            </h4>
            <ul className="space-y-2.5">
              {[
                { href: "#inicio", label: "Início" },
                { href: "#categorias", label: "Categorias" },
                { href: "#lancamentos", label: "Lançamentos" },
                { href: "#catalogo", label: "Catálogo" },
                { href: "#sobre", label: "Sobre" },
              ].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-white/50 hover:text-white transition-colors duration-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="text-xs tracking-[0.2em] uppercase font-medium mb-4">
              Categorias
            </h4>
            <ul className="space-y-2.5">
              {[
                "Vestidos & Macacões",
                "Blusas & Tops",
                "Calças & Shorts",
                "Conjuntos",
                "Linha Senhora",
              ].map((cat) => (
                <li key={cat}>
                  <span className="text-sm text-white/50">{cat}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xs tracking-[0.2em] uppercase font-medium mb-4">
              Contato
            </h4>
            <ul className="space-y-2.5">
              <li>
                <a
                  href="https://wa.me/5500000000000"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-white/50 hover:text-white transition-colors duration-300"
                >
                  WhatsApp
                </a>
              </li>
              <li>
                <a
                  href="https://instagram.com/hohayocollection"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-white/50 hover:text-white transition-colors duration-300"
                >
                  Instagram
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/10 mt-10 pt-8 text-center">
          <p className="text-xs text-white/30">
            &copy; {new Date().getFullYear()} HOHAYÔ Collection. Todos os direitos
            reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
