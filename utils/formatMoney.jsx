export const formatMoney = (money) => {
  return new Intl.NumberFormat("en-US", {
    currency: "EUR",
    style: "currency",
  }).format(money.toString());
};
