export const titleCase = (string) => {
  return string
    .split(" ")
    .map((word) => {
      return word[0].toUpperCase() + word.slice(1);
    })
    .join(" ");
};

export const getShort12HourTime = (timeString, showMinutes) => {
  const date = new Date(`2025-01-01T${timeString}`); // base date doesn't matter
  return date.toLocaleString("en-US", {
    hour: "numeric",
    minute: showMinutes ? "2-digit" : undefined,
    hour12: true,
  });
};
