const CoinsFormated = (current: number): string => {
  const coinsFormated = current.toLocaleString('pt-br', {
    style: 'currency',
    currency: 'BRL',
  });

  return coinsFormated;
};
export default CoinsFormated;
