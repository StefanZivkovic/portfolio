import { describe, it, expect } from "vitest";
import { readingTime } from "../readingTime";

describe("readingTime", () => {
  it("returns 1 for an undefined body", () => {
    expect(readingTime(undefined)).toBe(1);
  });

  it("returns 1 for a very short post", () => {
    expect(readingTime("Hello world")).toBe(1);
  });

  it("returns 1 for exactly 200 words", () => {
    const body = Array(200).fill("word").join(" ");
    expect(readingTime(body)).toBe(1);
  });

  it("returns 1 for 250 words (rounds down)", () => {
    const body = Array(250).fill("word").join(" ");
    expect(readingTime(body)).toBe(1);
  });

  it("returns 2 for 300 words", () => {
    const body = Array(300).fill("word").join(" ");
    expect(readingTime(body)).toBe(2);
  });

  it("returns 5 for 1000 words", () => {
    const body = Array(1000).fill("word").join(" ");
    expect(readingTime(body)).toBe(5);
  });

  it("ignores extra whitespace between words", () => {
    const body = "word  word\tword\nword";
    expect(readingTime(body)).toBe(1);
  });
});
