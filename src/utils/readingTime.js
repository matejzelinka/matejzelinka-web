export function calculateReadingTime(text) {
  if (!text || typeof text !== "string") {
    return 1;
  }

  const wordsPerMinute = 190; // čeština
  const words = text.trim().split(/\s+/).length;

  return Math.max(1, Math.round(words / wordsPerMinute));
}
