export const componentStyles = ({ sizes, fonts, colors }) => {
  const { blue, darkblue, yellow, red, green, orange } = colors;
  const backgrounds = [blue, darkblue, green, yellow, red, green, orange];

  return {
    screen: {
      width: "100%",
      height: "100%",
      justifyContent: "space-between",
      padding: sizes.scale(15),

      backgroundColor: backgrounds[Math.floor(Math.random() * backgrounds.length)],
    },
  };
};
