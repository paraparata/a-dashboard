export default function wordsNormalizer(words) {
  const EXCEPTION_THREE = ["the", "are", "is", "in", "and"];
  words = words.split(/[-_]/g);

  return words
    .map((word) => {
      if (word.length < 4 && !EXCEPTION_THREE.includes(word)) {
        return word.toUpperCase();
      }
      return word[0].toUpperCase() + word.substring(1);
    })
    .join(" ");
}
