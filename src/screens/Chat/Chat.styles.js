export const styles = ({ sizes, fonts, colors }) => ({
  screen: color => ({
    width: "100%",
    height: "100%",
    justifyContent: "space-between",
    alignItems: "stretch",
    padding: sizes.scale(15),

    backgroundColor: color,
  }),
});
