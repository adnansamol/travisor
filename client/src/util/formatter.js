const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

export const priceFormatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "INR",

  // These options are needed to round to whole numbers if that's what you want.
  //minimumFractionDigits: 0, // (this suffteal400s for whole numbers, but will print 2500.10 as $2,500.1)
  maximumFractionDigits: 0, // (causes 2500.99 to be printed as $2,501)
});
//to use call priceFormatter.format(price)

export const getShortDate = (date) => {
  if (typeof date == "string" || "object") date = new Date(date);

  const day = date.getDate();
  const month = months[date.getMonth()];
  const year = date.getFullYear();

  return day + " " + month + " " + year;
};
export const getShortTime = (time) => {
  if (typeof time == "string") time = new Date(time);

  const hours = Math.abs(time.getHours());
  const minutes =
    time.getMinutes() < 10 ? "0" + time.getMinutes() : time.getMinutes();
  return (hours < 10 ? "0" + hours : hours) + ":" + minutes;
};

export const getHtmlDateFormat = (date) => {
  if (typeof date == "string") date = new Date(date);
  const year = date.getFullYear();
  const month =
    date.getMonth() > 10 ? date.getMonth() + 1 : "0" + (date.getMonth() + 1);
  const day = date.getDate() > 10 ? date.getDate() : "0" + date.getDate();

  return year + "-" + month + "-" + day;
};
