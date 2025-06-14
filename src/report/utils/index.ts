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

export function formatInputIdentifier(input: string) {
  let value = input.replace(/\D/g, '');

  if (value.length <= 11) {
    if (value.length > 3) {
      value = `${value.slice(0, 3)}.${value.slice(3)}`;
    }
    if (value.length > 7) {
      value = `${value.slice(0, 7)}.${value.slice(7)}`;
    }
    if (value.length > 11) {
      value = `${value.slice(0, 11)}-${value.slice(11)}`;
    }
    value = value.slice(0, 14);
  } else {
    if (value.length > 2) {
      value = `${value.slice(0, 2)}.${value.slice(2)}`;
    }
    if (value.length > 6) {
      value = `${value.slice(0, 6)}.${value.slice(6)}`;
    }
    if (value.length > 10) {
      value = `${value.slice(0, 10)}/${value.slice(10)}`;
    }
    if (value.length > 15) {
      value = `${value.slice(0, 15)}-${value.slice(15)}`;
    }
    value = value.slice(0, 18);
  }

  return value;
}

export function formatInputPhoneNumber(input: string) {
  let value = input.replace(/\D/g, '');
  let formatted = '';

  if (value.length > 0) {
    formatted = `(${value.slice(0, 2)}`;
  }

  if (value.length > 2) {
    formatted += `) ${value.slice(2, 7)}`;
  }

  if (value.length > 7) {
    formatted = formatted.slice(0, 10) + '-' + value.slice(7, 11);
  }

  return formatted.slice(0, 15);
}

export function createDateByString(date: string) {
  const [day, month, year] = date.split('/');

  return new Date(Number(year), Number(month) - 1, Number(day));
}
