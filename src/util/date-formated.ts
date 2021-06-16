const DateFormated = (date: string): string => {
  const dateFormated = new Date(date);
  const day =
    dateFormated.getDate() + 1 > 9
      ? dateFormated.getDate() + 1
      : `0${dateFormated.getDate() + 1}`;

  const month =
    dateFormated.getMonth() + 1 > 9 //aqui também precisa do mais 1
      ? dateFormated.getMonth() + 1 //+1 é porque mes começa contar no zero
      : `0${dateFormated.getMonth() + 1}`;
  const year = dateFormated.getFullYear();
  return `${day}/${month}/${year}`;
};
export default DateFormated;
