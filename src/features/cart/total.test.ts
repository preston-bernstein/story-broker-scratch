import { describe, expect, it } from "vitest";
import { cartTotal } from "./total";

describe("cartTotal", () => {
  it("adds price times quantity", () => {
    expect(cartTotal([{ price: 5, qty: 2 }, { price: 3, qty: 1 }])).toBe(13);
  });
  it("is zero for an empty cart", () => {
    expect(cartTotal([])).toBe(0);
  });
});
