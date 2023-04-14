export const addDays = (date, days) => {
  const ms = new Date(date).getTime() + 86400000 * days;
  return new Date(ms);
};
