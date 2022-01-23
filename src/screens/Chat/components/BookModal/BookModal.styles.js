export const styles = ({ sizes, fonts, colors }) => ({
  modal: {
    justifyContent: "space-between",
    padding: sizes.scale(15),
  },
  header: {
    width: "100%",
    justifyContent: "space-between",
  },
  headerTitle: {
    flex: 1,
    marginRight: sizes.scale(35),

    fontFamily: fonts.bold,
    fontSize: sizes.scale(18),
    color: colors.black,
    textAlign: "center",
  },
  bookTitle: {
    marginBottom: sizes.scale(15),

    fontFamily: fonts.bold,
    fontSize: sizes.scale(22),
    color: colors.black,
    textTransform: "uppercase",
    textAlign: "center",
  },
  author: {
    marginBottom: sizes.scale(15),

    fontFamily: fonts.regularItalic,
    fontSize: sizes.scale(18),
    color: colors.black,
    textAlign: "center",
  },
  description: {
    fontFamily: fonts.regular,
    fontSize: sizes.scale(14),
    color: colors.black,
    textAlign: "center",
  },
  btn: {
    width: "100%",
    height: sizes.scale(55),
  },
  btnText: {
    fontFamily: fonts.semibold,
    fontSize: sizes.scale(18),
    color: colors.white,
  },
});
