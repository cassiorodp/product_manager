const getFormatedDate = (unformatedDate) => {
  if (!unformatedDate) return '';
  const formatedDate = new Date(unformatedDate).toLocaleDateString();
  return formatedDate;
};

const getFormatedCurrency = (unformatedCurrency) => {
  const stringToNumber = parseFloat(unformatedCurrency);
  return stringToNumber.toLocaleString('pt-br', {
    // style: "currency",
    currency: 'BRL',
    minimumFractionDigits: 2,
    maximumFractionDigits: 3,
  });
};

export default {
  getFormatedDate,
  getFormatedCurrency,
};
