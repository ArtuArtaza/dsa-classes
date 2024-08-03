import { expect, test, describe } from "bun:test";
import { max } from "./max";

describe("max function tests", () => {
  test("should return the maximum number in a basic array", () => {
    const arr = [1, 2, 3, 4, 5];
    const result = max(arr);
    const maxFnResult = Math.max(...arr);
    expect(result).toBe(maxFnResult);
  });

  test("should return the single element for a one-element array", () => {
    const arr = [10];
    const result = max(arr);
    const maxFnResult = Math.max(...arr);
    expect(result).toBe(maxFnResult);
  });

  test("should return the maximum number in an all-negative array", () => {
    const arr = [-1, -2, -3, -4, -5];
    const result = max(arr);
    const maxFnResult = Math.max(...arr);
    expect(result).toBe(maxFnResult);
  });

  test("should return the maximum number in a mixed positive and negative array", () => {
    const arr = [3, -1, 2, -5, 4];
    const result = max(arr);
    const maxFnResult = Math.max(...arr);
    expect(result).toBe(maxFnResult);
  });

  test("should return the maximum number in an array with duplicates", () => {
    const arr = [1, 2, 2, 4, 4];
    const result = max(arr);
    const maxFnResult = Math.max(...arr);
    expect(result).toBe(maxFnResult);
  });

  test("should return the maximum number in an array with all identical elements", () => {
    const arr = [7, 7, 7, 7, 7];
    const result = max(arr);
    const maxFnResult = Math.max(...arr);
    expect(result).toBe(maxFnResult);
  });

  test("should return the maximum number in an array with large numbers", () => {
    const arr = [1000000, 5000000, 10000000, 7000000];
    const result = max(arr);
    const maxFnResult = Math.max(...arr);
    expect(result).toBe(maxFnResult);
  });

  test("should return zero for an array with all zeroes", () => {
    const arr = [0, 0, 0, 0];
    const result = max(arr);
    expect(result).toBe(0);
  });

  // Uncomment this test if your implementation supports mixed types (e.g., coercion in JavaScript)
  // test("should return the maximum number in an array with mixed types", () => {
  //   const result = max([10, '20', 30]);
  //   expect(result).toBe(30);
  // });
});
