export const colors = {
  white: "#fff",
  black: "#222222",
  grey: "#9f9f9f",

  blue: "#82e8ff",
  darkblue: "#8583fe",
  green: "#81ffad",
  yellow: "#ffe382",
  red: "#ffe382",
};

export const rgba = (hexCode, opacity = 1) => {
  let hex = hexCode.replace("#", "");

  if (hex.length === 3) {
    hex = `${hex[0]}${hex[0]}${hex[1]}${hex[1]}${hex[2]}${hex[2]}`;
  }

  const r = parseInt(hex.substring(0, 2), 16);
  const g = parseInt(hex.substring(2, 4), 16);
  const b = parseInt(hex.substring(4, 6), 16);

  return `rgba(${r},${g},${b},${opacity})`;
};
