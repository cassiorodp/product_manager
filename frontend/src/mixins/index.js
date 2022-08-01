const getFormatedDate = (unformatedDate) => {
  if (!unformatedDate) return '';
  const formatedDate = new Date(unformatedDate).toLocaleDateString();
  return formatedDate;
};

export default {
  getFormatedDate,
};
