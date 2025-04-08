export function formatPrice(price: number): string {
    const thousands = Math.round(price).toLocaleString("vi-VN"); // "2.000"
    return `${thousands}K`;
  }