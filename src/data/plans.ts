// Precios en CLP por mes (plan mensual). Los otros periodos se calculan
// con el descuento de cada uno. Edita los valores y recompila.
export const periods = [
  { id: 'mensual', label: 'Mensual', months: 1, discount: 0 },
  { id: 'trimestral', label: 'Trimestral', months: 3, discount: 0.05 },
  { id: 'semestral', label: 'Semestral', months: 6, discount: 0.1 },
  { id: 'anual', label: 'Anual', months: 12, discount: 0.2 },
] as const;

export const plans = [
  {
    id: 'esencial',
    name: 'Esencial',
    professionals: 'Hasta 3 profesionales',
    audience: 'Independientes y consultas pequeñas',
    monthly: 12000,
    highlight: false,
  },
  {
    id: 'equipo',
    name: 'Equipo',
    professionals: 'Hasta 10 profesionales',
    audience: 'Centros y clínicas con equipo propio',
    monthly: 24000,
    highlight: true,
  },
  {
    id: 'empresa',
    name: 'Empresa',
    professionals: 'Hasta 25 profesionales',
    audience: 'Empresas con varios servicios o locales',
    monthly: 42000,
    highlight: false,
  },
] as const;

export const clp = (n: number) =>
  '$' + Math.round(n).toLocaleString('es-CL');

export function priceFor(monthly: number, months: number, discount: number) {
  const total = Math.round((monthly * months * (1 - discount)) / 100) * 100;
  const perMonth = Math.round(total / months);
  const saving = monthly * months - total;
  return { total, perMonth, saving };
}
