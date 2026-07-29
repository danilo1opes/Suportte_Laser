import { ArrowDown } from 'lucide-react';
import heroTumbler from '@/assets/hero-tumbler.jpg';
import { WA_ORCAMENTO } from '@/lib/site';

export function Hero() {
  return (
    <section
      id="top"
      className="relative min-h-screen overflow-hidden surface-ink"
    >
      <img
        src={heroTumbler}
        alt="Copo térmico preto com gravação a laser personalizada"
        width={1600}
        height={1200}
        className="absolute inset-0 size-full object-cover object-right opacity-90"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/85 to-ink/10" />
      <div className="laser-grid absolute inset-0 opacity-60" />

      {/* laser beam details */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="beam animate-beam absolute left-[14%] top-0 h-24 w-px" />
        <div
          className="beam animate-beam absolute left-[62%] top-0 h-40 w-px"
          style={{ animationDelay: '2.4s' }}
        />
        <div
          className="beam animate-beam absolute left-[86%] top-0 h-16 w-px"
          style={{ animationDelay: '4.1s' }}
        />
      </div>

      <div className="relative mx-auto flex min-h-screen max-w-[1500px] flex-col justify-end px-6 pb-20 pt-36 md:px-12 md:pb-28">
        <p className="eyebrow-accent">Gravação a laser · Personalização</p>
        <h1 className="display-xl mt-7 max-w-4xl text-ink-foreground">
          Cada gravação
          <br />
          transforma um objeto
          <br />
          em <span className="text-accent">algo único</span>.
        </h1>
        <p className="mt-8 max-w-md text-base leading-relaxed text-ink-muted">
          Precisão milimétrica em metal, madeira, couro e vidro. Do brinde
          corporativo ao presente que ninguém mais tem.
        </p>

        <div className="mt-10 flex flex-wrap items-center gap-3">
          <a
            href={WA_ORCAMENTO}
            target="_blank"
            rel="noreferrer"
            className="btn-base btn-gold"
          >
            Solicitar orçamento
          </a>
          <a
            href="#categorias"
            className="btn-base btn-outline-ink text-ink-foreground"
          >
            Ver produtos
          </a>
        </div>

        <div className="mt-16 flex items-center gap-4 font-mono text-[10px] uppercase tracking-[0.3em] text-ink-muted">
          <ArrowDown className="size-4 animate-bounce text-accent" />
          Role para descobrir
        </div>
      </div>
    </section>
  );
}
