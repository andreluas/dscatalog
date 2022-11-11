export const formatPrice = (price: number) => {
  const params = {
    maximumFractionDigits: 2,
    minimumFractionDigits: 2,
  };

  return new Intl.NumberFormat('pt-br', params).format(price);
};
