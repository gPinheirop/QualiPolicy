export function formatDisplayDate(date: Date): string {
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

export function formatInputDate(input: string) {
  let value = input.replace(/\D/g, '');

  if (value.length > 2) {
    value = `${value.slice(0, 2)}/${value.slice(2)}`;
  }

  if (value.length > 5) {
    value = `${value.slice(0, 5)}/${value.slice(5, 9)}`;
  }

  if (value.length > 10) {
    value = value.slice(0, 10);
  }

  return value;
}

export function createDateByString(date: string) {
  const [day, month, year] = date.split('/');

  return new Date(Number(year), Number(month) - 1, Number(day));
}
