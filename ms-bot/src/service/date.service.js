module.exports = {
  subDaysToDate: (days) => {
    const date = new Date();
    return date.setDate(date.getDate() - days);
  },
  addDaysToDate: (days) => {
    const date = new Date();
    return date.setDate(date.getDate() + days);
  },
};
