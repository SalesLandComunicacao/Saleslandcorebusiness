export default function About() {
  return (
    <section id="sobre" className="py-24 bg-neutral-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left - Visual */}
          <div className="relative">
            <div className="aspect-[4/5] rounded-2xl bg-neutral-100 border border-border overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="text-6xl sm:text-7xl font-extralight tracking-[0.3em] text-foreground/15 mb-2">
                    H
                  </div>
                  <div className="w-24 h-[1px] bg-foreground/15 mx-auto" />
                </div>
              </div>
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 rounded-2xl bg-cta/5 -z-10" />
            <div className="absolute -top-6 -left-6 w-24 h-24 rounded-full bg-neutral-200/50 -z-10" />
          </div>

          {/* Right - Content */}
          <div>
            <span className="text-xs tracking-[0.3em] uppercase text-cta font-medium">
              Nossa Marca
            </span>
            <h2 className="text-3xl sm:text-4xl font-light tracking-wide text-foreground mt-3 mb-6">
              Sobre a HOHAYÔ
            </h2>
            <div className="w-12 h-[1px] bg-foreground mb-8" />

            <div className="space-y-5 text-text-light leading-relaxed">
              <p>
                A <strong className="text-foreground font-medium">HOHAYÔ Collection</strong> nasceu
                com a missão de oferecer moda feminina de qualidade, com tecidos premium e
                acabamento impecável. Cada peça é pensada para a mulher moderna que busca
                conforto sem abrir mão do estilo.
              </p>
              <p>
                Nossa coleção reúne peças versáteis que transitam do casual ao sofisticado,
                com uma paleta de cores cuidadosamente selecionada e tecidos como
                <em> Vis Up, Canelada, Neotech, Viscolegging e Poliamida</em> &mdash;
                materiais que garantem caimento perfeito e durabilidade.
              </p>
              <p>
                Da linha jovem à linha senhora, temos opções para todas as mulheres
                que valorizam qualidade e bom gosto. Trabalhamos com atacado e
                varejo, levando a moda HOHAYÔ para todo o Brasil.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mt-10 pt-8 border-t border-border">
              <div>
                <p className="text-2xl font-light text-cta">27+</p>
                <p className="text-xs text-text-light mt-1 tracking-wide">
                  Modelos Exclusivos
                </p>
              </div>
              <div>
                <p className="text-2xl font-light text-cta">7+</p>
                <p className="text-xs text-text-light mt-1 tracking-wide">
                  Cores por Peça
                </p>
              </div>
              <div>
                <p className="text-2xl font-light text-cta">5</p>
                <p className="text-xs text-text-light mt-1 tracking-wide">
                  Categorias
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
