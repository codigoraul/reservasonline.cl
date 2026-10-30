// Datos editables del sitio. Cambia aquí y vuelve a compilar.
export const site = {
  name: 'Reservas Online',
  url: 'https://reservasonline.cl',
  // Número de WhatsApp en formato internacional, sin "+" ni espacios.
  // REEMPLAZAR por el número real antes de publicar.
  whatsapp: '56900000000',
  demoUrl: 'https://disenopaginas.cl/reserva',
  agency: { name: 'DiseñoPaginas.cl', url: 'https://disenopaginas.cl' },
};

export const whatsappLink = (text: string) =>
  `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(text)}`;
