export const styles = ({ sizes, fonts, colors }) => ({
  container: {
    minHeight: sizes.scale(70),
    marginVertical: sizes.scale(10),
    padding: sizes.scale(10),
    justifyContent: "space-between",

    borderRadius: sizes.scale(15),
    borderWidth: 2,
    borderColor: colors.black,
    borderStyle: "solid",

    backgroundColor: colors.white,
  },
  bookTitle: {
    marginBottom: sizes.scale(10),

    fontFamily: fonts.bold,
    fontSize: sizes.scale(18),
    color: colors.black,
    textTransform: "uppercase",
  },
  author: {
    fontFamily: fonts.regular,
    fontSize: sizes.scale(14),
    fontStyle: "italic",
    color: colors.black,
  },
  btn: {
    height: sizes.scale(40),
    paddingHorizontal: sizes.scale(10),
  },
  btnText: {
    fontFamily: fonts.regular,
    fontSize: sizes.scale(14),
    color: colors.white,
  },
});
