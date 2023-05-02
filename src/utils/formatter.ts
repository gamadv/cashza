export function dateFormatter(date: string) {
  const priceFormatter = new Intl.DateTimeFormat('pt-BR').format(new Date(date))

  return priceFormatter
}
export function priceFormatter(value: number) {
  const priceFormatter = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(value)

  return priceFormatter
}
