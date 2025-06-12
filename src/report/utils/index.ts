export function formatDate(date: Date): string {
  const formattedDay =
    date.getDay().toLocaleString('pt-BR').length > 1
      ? date.getDay().toLocaleString('pt-BR')
      : '0' + date.getDay().toLocaleString('pt-BR');

  const formattedMonth =
    date.getMonth().toLocaleString('pt-BR').length > 1
      ? date.getMonth().toLocaleString('pt-BR')
      : '0' + date.getMonth().toLocaleString('pt-BR');

  return `${formattedDay}/${formattedMonth}/${date.getFullYear()}`;
}
