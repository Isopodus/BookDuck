export const styles = ({ fonts, sizes, colors }) => ({
  primaryBtn: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    minHeight: sizes.scale(30),

    borderRadius: sizes.scale(15),

    backgroundColor: colors.black,
  },
  secondaryButton: {
    flex: 1,
    flexBasis: sizes.fullWidth / 4,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginLeft: sizes.scale(9),
    marginTop: sizes.scale(10),
    padding: sizes.scale(10),

    borderRadius: sizes.scale(15),
    borderWidth: 2,
    borderColor: colors.black,
    borderStyle: "solid",

    backgroundColor: colors.white,
  },
  secondaryButtonText: {
    fontFamily: fonts.semibold,
    fontSize: sizes.scale(14),
    color: colors.black,
  },
});
