export const styles = ({ fonts, sizes, colors }) => ({
  container: {
    marginBottom: sizes.scale(12),
  },
  inputWrapper: {
    paddingHorizontal: sizes.scale(10),
    alignItems: "center",

    borderStyle: "solid",
    borderWidth: sizes.scale(2),
    borderColor: colors.blue,
    borderRadius: 20,
  },
  input: {
    flex: 1,
    height: sizes.scale(50),
    paddingVertical: sizes.scale(5),

    fontFamily: fonts.regular,
    fontSize: sizes.scale(14),
    color: colors.black,
  },
  helper: {
    marginTop: sizes.scale(5),
    marginLeft: sizes.scale(15),

    fontFamily: fonts.regular,
    fontSize: sizes.scale(11),
    color: colors.blue,
  },
});
