export function deduplicateTags(tagArrays: string[][]): string[] {
  return [...new Set(tagArrays.flat())].sort();
}
