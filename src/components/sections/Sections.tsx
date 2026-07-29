import {
  Award,
  Boxes,
  Crosshair,
  FileDown,
  Gem,
  MessageCircle,
  PenTool,
  Package,
  Sparkles,
  Timer,
  Upload,
} from 'lucide-react';

import { Reveal } from '@/components/Reveal';
import { WA_CATALOGO, WA_ORCAMENTO, whatsappLink } from '@/lib/site';

import processLaser from '@/assets/process-laser.jpg';
import processLeather from '@/assets/img/faca-couro.png';
import catCopos from '@/assets/cat-copos.jpg';
import catFacas from '@/assets/cat-facas.jpg';
import catBones from '@/assets/cat-bones.jpg';
import catTabuas from '@/assets/cat-tabuas.jpg';
import catChaveiros from '@/assets/cat-chaveiros.jpg';
import catBrindes from '@/assets/cat-brindes.jpg';
import ctaBg from '@/assets/cta-bg.jpg';

/* ----------------------------- SOBRE ----------------------------- */

export function About() {
  return (
    <section
      id="sobre"
      className="scroll-mt-24 mx-auto max-w-[1500px] px-6 py-28 md:px-12 md:py-40"
    >
      <div className="grid gap-16 lg:grid-cols-[1fr_1.05fr] lg:gap-24">
        <Reveal>
          <p className="eyebrow">01 — Sobre</p>
          <h2 className="display-lg mt-6 max-w-md">
            Objetos comuns.
            <br />
            Marcas <span className="text-accent">permanentes</span>.
          </h2>
          <p className="mt-8 max-w-md text-base leading-relaxed text-muted-foreground">
            A Suporte Laser nasceu da obsessão pelo detalhe. Trabalhamos com
            equipamentos de alta precisão para gravar superfícies difíceis com o
            mesmo rigor de uma manufatura relojoeira.
          </p>
          <div className="mt-12 grid grid-cols-3 gap-6 border-t border-border pt-8">
            {[
              ['+5', 'anos de ofício'],
              ['+5k', 'peças gravadas'],
              ['0,1mm', 'de precisão'],
            ].map(([n, l]) => (
              <div key={l}>
                <p className="font-display text-3xl font-extrabold tracking-tight">
                  {n}
                </p>
                <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                  {l}
                </p>
              </div>
            ))}
          </div>
        </Reveal>

        <div className="grid grid-cols-2 gap-4">
          <Reveal delay={80} className="media-zoom col-span-2 aspect-[16/10]">
            <img
              src={processLaser}
              alt="Feixe de laser gravando um padrão em madeira"
              loading="lazy"
              width={1408}
              height={1008}
              className="size-full object-cover"
            />
          </Reveal>
          <Reveal delay={160} className="media-zoom aspect-square">
            <img
              src={processLeather}
              alt="Patch de couro gravado a laser sendo inspecionado"
              loading="lazy"
              width={1008}
              height={1200}
              className="size-full object-cover"
            />
          </Reveal>
          <Reveal
            delay={220}
            className="flex aspect-square flex-col justify-between bg-secondary p-7"
          >
            <Gem className="size-6 text-accent" />
            <p className="font-display text-lg font-bold uppercase leading-tight tracking-tight">
              Acabamento
              <br />
              artesanal em
              <br />
              escala industrial
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* -------------------------- COMO FUNCIONA -------------------------- */

const steps = [
  {
    icon: Boxes,
    t: 'Escolha o produto',
    d: 'Copo, faca, tábua, couro ou qualquer superfície.',
  },
  {
    icon: Upload,
    t: 'Envie sua arte',
    d: 'Logo, nome ou ideia. Nós ajustamos o vetor.',
  },
  {
    icon: Crosshair,
    t: 'Gravamos com precisão',
    d: 'Calibração de potência para cada material.',
  },
  {
    icon: Package,
    t: 'Receba seu produto',
    d: 'Conferido, embalado e pronto para entregar.',
  },
];

export function Steps() {
  return (
    <section id="processo" className="scroll-mt-24 surface-ink">
      <div className="mx-auto max-w-[1500px] px-6 py-28 md:px-12 md:py-40">
        <Reveal>
          <p className="eyebrow-accent">02 — Como funciona</p>
          <h2 className="display-lg mt-6 max-w-2xl text-ink-foreground">
            Quatro etapas, zero improviso.
          </h2>
        </Reveal>

        <ol className="mt-20 grid gap-px border-t border-ink-foreground/10 md:grid-cols-4">
          {steps.map((s, i) => (
            <Reveal
              as="li"
              key={s.t}
              delay={i * 110}
              className="group relative border-b border-ink-foreground/10 py-10 md:border-b-0 md:border-r md:pr-8 md:last:border-r-0 md:[&:not(:first-child)]:pl-8"
            >
              <span className="font-mono text-[10px] tracking-[0.3em] text-accent">
                0{i + 1}
              </span>
              <s.icon className="mt-8 size-7 text-ink-foreground/80 transition-colors duration-500 group-hover:text-accent" />
              <h3 className="mt-6 font-display text-xl font-bold uppercase tracking-tight text-ink-foreground">
                {s.t}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-ink-muted">
                {s.d}
              </p>
              <span className="absolute left-0 top-0 h-px w-0 bg-accent transition-all duration-700 group-hover:w-full" />
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}

/* --------------------------- CATEGORIAS --------------------------- */

const categories = [
  {
    img: catCopos,
    t: 'Copos & Garrafas',
    n: '01',
    span: 'lg:col-span-2 aspect-[16/11]',
  },
  { img: catFacas, t: 'Facas', n: '02', span: 'aspect-[4/5]' },
  { img: catBones, t: 'Bonés & Chapéus', n: '03', span: 'aspect-[4/5]' },
  { img: catTabuas, t: 'Tábuas de churrasco', n: '04', span: 'aspect-[4/5]' },
  {
    img: catChaveiros,
    t: 'Chaveiros & Canetas',
    n: '05',
    span: 'aspect-[4/5]',
  },
  {
    img: catBrindes,
    t: 'Brindes corporativos',
    n: '06',
    span: 'lg:col-span-2 aspect-[16/11]',
  },
];

export function Categories() {
  return (
    <section
      id="categorias"
      className="scroll-mt-24 mx-auto max-w-[1500px] px-6 py-28 md:px-12 md:py-40"
    >
      <Reveal className="flex flex-wrap items-end justify-between gap-6">
        <div>
          <p className="eyebrow">03 — Categorias</p>
          <h2 className="display-lg mt-6 max-w-xl">O que gravamos</h2>
        </div>
        <p className="max-w-xs text-sm leading-relaxed text-muted-foreground">
          Couro, presentes, canecas e qualquer objeto que aceite gravação. Se
          existe superfície, existe possibilidade.
        </p>
      </Reveal>

      <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {categories.map((c, i) => (
          <Reveal
            key={c.t}
            delay={(i % 4) * 90}
            className={`media-zoom group relative bg-secondary ${c.span}`}
          >
            <a
              href={whatsappLink(
                `Olá! Tenho interesse em ${c.t} personalizados.`,
              )}
              target="_blank"
              rel="noreferrer"
              className="block size-full"
            >
              <img
                src={c.img}
                alt={`${c.t} personalizados com gravação a laser`}
                loading="lazy"
                className="size-full object-cover"
              />
              <span className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/10 to-transparent opacity-80 transition-opacity duration-500 group-hover:opacity-95" />
              <span className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-6">
                <span className="font-display text-lg font-bold uppercase leading-tight tracking-tight text-ink-foreground">
                  {c.t}
                </span>
                <span className="font-mono text-[10px] tracking-[0.3em] text-accent">
                  {c.n}
                </span>
              </span>
            </a>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

/* -------------------------- DIFERENCIAIS -------------------------- */

const perks = [
  { icon: Crosshair, t: 'Alta precisão' },
  { icon: Award, t: 'Acabamento impecável' },
  { icon: MessageCircle, t: 'Atendimento personalizado' },
  { icon: Timer, t: 'Produção rápida' },
  { icon: Boxes, t: 'Diversos materiais' },
  { icon: Sparkles, t: 'Personalização exclusiva' },
];

export function Perks() {
  return (
    <section className="mx-auto max-w-[1500px] px-6 py-28 md:px-12 md:py-40">
      <Reveal>
        <p className="eyebrow">05 — Diferenciais</p>
        <h2 className="display-lg mt-6 max-w-xl">Por que a Suporte Laser</h2>
      </Reveal>
      <div className="mt-16 grid gap-px bg-border sm:grid-cols-2 lg:grid-cols-3">
        {perks.map((p, i) => (
          <Reveal
            key={p.t}
            delay={(i % 3) * 90}
            className="group flex items-center gap-5 bg-background p-9 transition-colors duration-500 hover:bg-secondary"
          >
            <p.icon className="size-6 shrink-0 text-accent" />
            <span className="font-display text-base font-bold uppercase tracking-tight">
              {p.t}
            </span>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

/* ------------------------ PROCESSO / MATERIAIS ------------------------ */

export function Craft() {
  return (
    <section className="relative overflow-hidden surface-ink">
      <div className="mx-auto grid max-w-[1500px] gap-16 px-6 py-28 md:grid-cols-2 md:px-12 md:py-40">
        <Reveal className="media-zoom aspect-[4/5] md:aspect-auto">
          <img
            src={processLaser}
            alt="Máquina de gravação a laser em operação sobre madeira"
            loading="lazy"
            className="size-full object-cover"
          />
        </Reveal>
        <Reveal delay={120} className="flex flex-col justify-center">
          <p className="eyebrow-accent">06 — Processo</p>
          <h2 className="display-lg mt-6 text-ink-foreground">
            O feixe que
            <br />
            desenha no
            <br />
            <span className="text-accent">material</span>.
          </h2>
          <p className="mt-8 max-w-md text-base leading-relaxed text-ink-muted">
            Cada material exige um ajuste diferente de potência, velocidade e
            foco. É esse controle que separa uma marca borrada de um traço
            perfeito.
          </p>
          <ul className="mt-12 grid grid-cols-2 gap-px bg-ink-foreground/10 sm:grid-cols-3">
            {['Madeira', 'Metal', 'Couro', 'Vidro', 'Aço', 'Acrílico'].map(
              (m) => (
                <li
                  key={m}
                  className="bg-ink px-5 py-6 font-mono text-[10px] uppercase tracking-[0.25em] text-ink-muted transition-colors hover:text-accent"
                >
                  {m}
                </li>
              ),
            )}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}

/* ----------------------------- CATÁLOGO ----------------------------- */

export function Catalog() {
  return (
    <section id="catalogo" className="scroll-mt-24 bg-secondary">
      <div className="mx-auto flex max-w-[1500px] flex-col items-start justify-between gap-10 px-6 py-24 md:flex-row md:items-center md:px-12">
        <Reveal>
          <p className="eyebrow">08 — Catálogo</p>
          <h2 className="display-md mt-5 max-w-lg">
            Mais de 500 produtos personalizáveis em um PDF.
          </h2>
        </Reveal>
        <Reveal delay={120}>
          <a
            href={WA_CATALOGO}
            target="_blank"
            rel="noreferrer"
            className="btn-base btn-gold"
          >
            <FileDown className="size-4" /> Solicitar catálogo
          </a>
        </Reveal>
      </div>
    </section>
  );
}

/* ------------------------------- CTA ------------------------------- */

export function FinalCta() {
  return (
    <section className="relative overflow-hidden surface-ink">
      <img
        src={ctaBg}
        alt="Máquina de gravação a laser trabalhando em ambiente escuro"
        loading="lazy"
        width={1600}
        height={912}
        className="absolute inset-0 size-full object-cover opacity-70"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/70 to-ink/40" />
      <div className="relative mx-auto flex max-w-[1500px] flex-col items-center px-6 py-36 text-center md:px-12 md:py-52">
        <Reveal>
          <PenTool className="mx-auto size-7 text-accent" />
          <h2 className="display-lg mt-8 max-w-3xl text-ink-foreground">
            Vamos criar algo exclusivo para você?
          </h2>
          <p className="mx-auto mt-7 max-w-md text-base leading-relaxed text-ink-muted">
            Envie sua ideia e receba um orçamento sem compromisso.
          </p>
          <a
            href={WA_ORCAMENTO}
            target="_blank"
            rel="noreferrer"
            className="btn-base btn-gold mt-10 px-10 py-5 text-xs"
          >
            <MessageCircle className="size-4" /> Falar no WhatsApp
          </a>
        </Reveal>
      </div>
    </section>
  );
}

/* --------------------------- FLOATING WA --------------------------- */

export function WhatsappFab() {
  return (
    <a
      href={WA_ORCAMENTO}
      target="_blank"
      rel="noreferrer"
      aria-label="Falar no WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex size-14 items-center justify-center rounded-full bg-accent text-accent-foreground shadow-lg transition-transform duration-300 hover:scale-105"
    >
      <MessageCircle className="size-6" />
    </a>
  );
}
