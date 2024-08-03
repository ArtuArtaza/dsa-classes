import { expect, test } from "bun:test";
import { linearSearch } from "./arrays.algorithms";

test("Linear search", () => {
  expect(linearSearch(10, [1, 2, 10])).toBe(2);

  expect(linearSearch(50, new Array(1000))).toBe(100001);
});
