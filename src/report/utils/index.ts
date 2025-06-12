export function formatDate(date: Date): string {
  const formattedDay =
    date.getDate().toLocaleString('pt-BR').length > 1
      ? date.getDate().toLocaleString('pt-BR')
      : '0' + date.getDate().toLocaleString('pt-BR');

  const formattedMonth =
    date.getMonth().toLocaleString('pt-BR').length > 1
      ? date.getMonth() + 1
      : '0' + (date.getMonth() + 1).toLocaleString('pt-BR');

  return `${formattedDay}/${formattedMonth}/${date.getFullYear()}`;
}
