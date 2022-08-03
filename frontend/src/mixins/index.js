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

const formatToISODate = (date) => {
  const [day, month, year] = date.split('/');

  return `$${year}-${month}-${day}`;
};

const formatToISOString = (date) => {
  const [day, month, year] = date.split('/');
  const ISOString = new Date(`$${year}-${month}-${day}`).toISOString();
  return ISOString;
};

const compareDates = (date1, date2) => {
  const d1 = new Date(formatToISODate(date1)).getTime();
  const d2 = new Date(formatToISODate(date2)).getTime();
  return d1 > d2;
};

export default {
  getFormatedDate,
  getFormatedCurrency,
  compareDates,
  formatToISOString,
};
