import { describe, it, expect } from "vitest";
import { deduplicateTags } from "../tags";

describe("deduplicateTags", () => {
  it("returns an empty array for no posts", () => {
    expect(deduplicateTags([])).toEqual([]);
  });

  it("deduplicates tags across posts", () => {
    const input = [
      ["typescript", "meta"],
      ["meta", "systems"],
    ];
    expect(deduplicateTags(input)).toEqual(["meta", "systems", "typescript"]);
  });

  it("sorts tags alphabetically", () => {
    const input = [["writing", "astro", "meta"]];
    expect(deduplicateTags(input)).toEqual(["astro", "meta", "writing"]);
  });

  it("handles a post with no tags", () => {
    const input = [["typescript"], []];
    expect(deduplicateTags(input)).toEqual(["typescript"]);
  });

  it("handles all posts sharing the same tag", () => {
    const input = [["meta"], ["meta"], ["meta"]];
    expect(deduplicateTags(input)).toEqual(["meta"]);
  });
});
