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
  bookInfo: {
    flex: 0.65,
  },
  bookTitle: {
    marginBottom: sizes.scale(10),

    fontFamily: fonts.bold,
    fontSize: sizes.scale(14),
    color: colors.black,
    textTransform: "uppercase",
  },
  author: {
    fontFamily: fonts.regularItalic,
    fontSize: sizes.scale(12),
    color: colors.black,
  },
  btn: {
    flex: 0.35,
    height: sizes.scale(40),
    marginLeft: sizes.scale(5),
    paddingHorizontal: sizes.scale(10),
  },
  btnText: {
    fontFamily: fonts.regular,
    fontSize: sizes.scale(13),
    color: colors.white,
  },
});
