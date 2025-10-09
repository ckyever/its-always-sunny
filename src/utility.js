export const titleCase = (string) => {
  return string
    .split(" ")
    .map((word) => {
      console.log(word);
      return word[0].toUpperCase() + word.slice(1);
    })
    .join(" ");
};
