// Datos editables del sitio. Cambia aquí y vuelve a compilar.
export const site = {
  name: 'Reservas Online',
  url: 'https://reservasonline.cl',
  // Número de WhatsApp en formato internacional, sin "+" ni espacios.
  whatsapp: '56961765268',
  demoUrl: 'https://reservasonline.cl/demo-reservas/',
  agency: { name: 'DiseñoPaginas.cl', url: 'https://disenopaginas.cl' },
};

export const whatsappLink = (text: string) =>
  `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(text)}`;
