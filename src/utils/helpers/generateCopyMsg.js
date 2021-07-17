const copyMsg = [
  "paste me!",
  "great one!",
  "will do!",
  "copied!",
  "it'll rock!",
  "wonderful color!",
  "great choice!",
  "am i a part of the rainbow?",
  "use it wisely!",
  "one color to rule'em all!",
  "may the color be with you!",
  "awesome!",
  "purrfect!",
];
export const generateCopyMsg = () => {
  return copyMsg[Math.floor(Math.random() * copyMsg.length)];
};
