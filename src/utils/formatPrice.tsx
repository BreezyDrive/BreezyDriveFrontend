export function formatPrice(price: number, suffix = "/ngày"): string {
    const thousands = Math.round(price).toLocaleString("vi-VN"); 
    return `${thousands}K ${suffix}`;
  }