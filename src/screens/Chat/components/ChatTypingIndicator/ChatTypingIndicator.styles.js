export const styles = ({ sizes, fonts, colors }) => ({
  container: {
    position: "absolute",
    justifyContent: "flex-start",
    left: sizes.scale(10),
    bottom: sizes.scale(15),
  },
  animation: {
    width: sizes.scale(30),
    height: sizes.scale(30),
  },
  name: {
    marginLeft: sizes.scale(5),

    fontFamily: fonts.semibold,
    fontSize: sizes.scale(13),
    color: colors.black,
  },
  text: {
    marginLeft: sizes.scale(5),

    fontFamily: fonts.regular,
    fontSize: sizes.scale(13),
    color: colors.grey,
  },
});
