export const capitalizeFirstLetter = (name: string) => {
  const firstLetter = name.charAt(0).toUpperCase();
  const remainingLetters = name.substring(1);
  return firstLetter.concat(remainingLetters);
};
