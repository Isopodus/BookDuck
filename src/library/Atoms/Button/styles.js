export const styles = ({ fonts, sizes, colors }) => ({
  primaryBtn: {
    alignItems: "center",
    justifyContent: "center",
    height: sizes.scale(50),

    borderRadius: 20,

    backgroundColor: colors.orange,
  },
  primaryBtnText: {
    fontFamily: fonts.bold,
    fontSize: sizes.scale(16),
    color: colors.white,
  },
});
