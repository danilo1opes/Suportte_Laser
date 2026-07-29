import { Instagram, MapPin, Phone } from 'lucide-react';
import { WA_ORCAMENTO } from '@/lib/site';

export function SiteFooter() {
  return (
    <footer className="surface-ink">
      <div className="mx-auto max-w-[1500px] px-6 py-20 md:px-12">
        <div className="grid gap-14 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <div className="flex items-baseline gap-2">
              <span className="font-display text-2xl font-extrabold uppercase tracking-tight">
                Suporte
              </span>
              <span className="font-mono text-[10px] uppercase tracking-[0.4em] text-accent">
                Laser
              </span>
            </div>
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-ink-muted">
              Gravação e personalização a laser em metal, madeira, couro, vidro
              e aço. Peças únicas, acabamento impecável.
            </p>
          </div>

          <div>
            <p className="eyebrow-accent">Contato</p>
            <ul className="mt-5 space-y-3 text-sm text-ink-muted">
              <li className="flex items-center gap-2">
                <Phone className="size-4 text-accent" /> (62) 99297-3765
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="size-4 text-accent" /> Aparecida de Goiania ·
                GO
              </li>
              <li>
                <a
                  href="https://instagram.com/suportte_laser"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 transition-colors hover:text-accent"
                >
                  <Instagram className="size-4 text-accent" /> @suportte_laser
                </a>
              </li>
            </ul>
          </div>

          <div>
            <p className="eyebrow-accent">Navegação</p>
            <ul className="mt-5 space-y-3 text-sm text-ink-muted">
              {[
                ['#sobre', 'Sobre'],
                ['#processo', 'Como funciona'],
                ['#categorias', 'Categorias'],
                ['#destaques', 'Destaques'],
                ['#galeria', 'Galeria'],
                ['#catalogo', 'Catálogo'],
              ].map(([href, label]) => (
                <li key={href}>
                  <a
                    href={href}
                    className="transition-colors hover:text-accent"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="eyebrow-accent">Orçamento</p>
            <p className="mt-5 text-sm text-ink-muted">
              Atendimento direto, sem intermediários.
            </p>
            <a
              href={WA_ORCAMENTO}
              target="_blank"
              rel="noreferrer"
              className="btn-base btn-gold mt-6"
            >
              Falar no WhatsApp
            </a>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-3 border-t border-ink-foreground/10 pt-8 font-mono text-[10px] uppercase tracking-[0.2em] text-ink-muted sm:flex-row sm:items-center sm:justify-between">
          <span>© {new Date().getFullYear()} Suporte Laser</span>
          <span>Precisão · Acabamento · Exclusividade</span>
        </div>
      </div>
    </footer>
  );
}
