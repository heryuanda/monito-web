export const currencyFormat = (value: number) => {
  if (typeof value === "number") {
    return String(value).replace(/(.)(?=(\d{3})+$)/g, "$1.") + " VND";
  }
};
