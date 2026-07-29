import { createFileRoute } from '@tanstack/react-router';
import { SiteHeader } from '@/components/SiteHeader';
import { SiteFooter } from '@/components/SiteFooter';
import { Hero } from '@/components/sections/Hero';
import {
  About,
  Categories,
  Catalog,
  Craft,
  FinalCta,
  Perks,
  Steps,
  WhatsappFab,
} from '@/components/sections/Sections';

export const Route = createFileRoute('/')({
  head: () => ({
    meta: [
      { title: 'Suporte Laser | Gravação e Personalização a Laser' },
      {
        name: 'description',
        content:
          'Gravação a laser de alta precisão em copos, facas, tábuas, bonés, couro e brindes corporativos. Solicite seu orçamento pelo WhatsApp.',
      },
      {
        property: 'og:title',
        content: 'Suporte Laser | Gravação e Personalização a Laser',
      },
      {
        property: 'og:description',
        content:
          'Peças únicas com gravação a laser em metal, madeira, couro e vidro. Orçamento direto pelo WhatsApp.',
      },
      { property: 'og:type', content: 'website' },
      { name: 'twitter:card', content: 'summary_large_image' },
    ],
    scripts: [
      {
        type: 'application/ld+json',
        children: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'LocalBusiness',
          name: 'Suporte Laser',
          description:
            'Gravação e personalização a laser em copos, facas, tábuas, bonés, couro e brindes corporativos.',
          areaServed: 'São Paulo, SP',
          telephone: '+5511999999999',
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="bg-background">
      <SiteHeader />
      <main>
        <Hero />
        <About />
        <Steps />
        <Categories />
        <Perks />
        <Craft />
        <Catalog />
        <FinalCta />
      </main>
      <SiteFooter />
      <WhatsappFab />
    </div>
  );
}
