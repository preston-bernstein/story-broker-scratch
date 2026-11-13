export type Line = { price: number; qty: number };

export function cartTotal(lines: Line[]): number {
  return lines.reduce((sum, l) => sum + l.price * l.qty, 0);
}
