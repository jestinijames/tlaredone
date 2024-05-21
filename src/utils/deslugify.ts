export function deslugify(slug: string) {
  // Replace hyphens with spaces
  const words = slug.split('-');

  // Capitalize the first letter of each word
  for (let i = 0; i < words.length; i++) {
    words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
  }

  // Join the words back into a single string
  return words.join(' ');
}
