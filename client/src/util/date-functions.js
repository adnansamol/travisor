export const addDays = (date, days) => {
  if (typeof date === "string") date = new Date(date);
  const ms = date.getTime() + 86400000 * days;
  return new Date(ms);
};
