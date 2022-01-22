export const styles = ({ sizes, fonts, colors }) => ({
  screen: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "100%",
  },
  titleWrap: {
    marginTop: "60%",
  },
  title: {
    fontFamily: fonts.bold,
    fontSize: sizes.scale(38),
    color: colors.white,
  },
  dot: {
    fontFamily: fonts.bold,
    fontSize: sizes.scale(38),
    color: colors.black,
  },
});
