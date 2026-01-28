export function calculateReadingTime(text) {
  const wordsPerMinute = 190; // čeština trochu pomalejší
  const words = text.trim().split(/\s+/).length;
  return Math.max(1, Math.round(words / wordsPerMinute));
}
