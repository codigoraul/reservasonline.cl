import { servicios } from '../data/servicios';
import { site } from '../data/site';
export function GET() {
  const paths = ['/', '/planes', '/preguntas-frecuentes', '/terminos', '/privacidad', ...servicios.map((r) => `/servicios/${r.slug}`)];
  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${paths.map((p) => `  <url><loc>${site.url}${p}</loc></url>`).join('\n')}\n</urlset>\n`;
  return new Response(xml, { headers: { 'Content-Type': 'application/xml' } });
}
