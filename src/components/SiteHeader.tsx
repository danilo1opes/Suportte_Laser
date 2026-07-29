import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { WA_ORCAMENTO } from "@/lib/site";

const links = [
  { href: "#sobre", label: "Sobre" },
  { href: "#processo", label: "Como funciona" },
  { href: "#categorias", label: "Categorias" },
  { href: "#galeria", label: "Galeria" },
  { href: "#catalogo", label: "Catálogo" },
];

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-ink/90 backdrop-blur-xl border-b border-ink-foreground/10"
          : "border-b border-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-[1500px] items-center justify-between px-6 py-5 md:px-12">
        <a href="#top" className="flex items-baseline gap-2 text-ink-foreground">
          <span className="font-display text-lg font-extrabold uppercase tracking-tight">
            Suporte
          </span>
          <span className="font-mono text-[10px] uppercase tracking-[0.4em] text-accent">
            Laser
          </span>
        </a>

        <nav className="hidden items-center gap-9 lg:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="font-mono text-[11px] uppercase tracking-[0.2em] text-ink-foreground/65 transition-colors hover:text-accent"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={WA_ORCAMENTO}
            target="_blank"
            rel="noreferrer"
            className="btn-base btn-gold hidden px-5 py-3 sm:inline-flex"
          >
            Orçamento
          </a>
          <button
            aria-label="Abrir menu"
            onClick={() => setOpen((v) => !v)}
            className="text-ink-foreground lg:hidden"
          >
            {open ? <X className="size-6" /> : <Menu className="size-6" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-ink-foreground/10 bg-ink/95 px-6 pb-8 pt-4 backdrop-blur-xl lg:hidden">
          <nav className="flex flex-col gap-5">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="font-display text-2xl font-bold uppercase tracking-tight text-ink-foreground"
              >
                {l.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
