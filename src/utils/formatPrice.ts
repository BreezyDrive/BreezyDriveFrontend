export function formatPrice(price: number, suffix = "/ngày"): string {
  // const thousands = Math.round(price).toLocaleString("vi-VN");
  // return `${thousands}K ${suffix}`;
  const inThousands = price / 1000;
  const isInteger = Number.isInteger(inThousands);

  const formatted = inThousands.toLocaleString("vi-VN", {
    maximumFractionDigits: 3,
  });

  return `${formatted}${isInteger ? "K" : ""} ${suffix}`;
}
