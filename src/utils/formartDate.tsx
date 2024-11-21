export const formatDate = (dataISO: string | undefined) => {
  if (!dataISO) return ''

  const meses = [
    'janeiro',
    'fevereiro',
    'março',
    'abril',
    'maio',
    'junho',
    'julho',
    'agosto',
    'setembro',
    'outubro',
    'novembro',
    'dezembro'
  ]

  const [ano, mes, dia] = dataISO.split('-')

  return `${dia} de ${meses[parseInt(mes, 10) - 1]} de ${ano}`
}
