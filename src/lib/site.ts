export const WHATSAPP_NUMBER = '5562992973765';

export function whatsappLink(message: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export const WA_ORCAMENTO = whatsappLink(
  'Olá! Gostaria de solicitar um orçamento de personalização a laser.',
);

export const WA_CATALOGO = whatsappLink(
  'Olá! Gostaria de receber o catálogo completo da Suporte Laser em PDF.',
);
