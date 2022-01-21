export const componentStyles = ({ fonts, sizes, colors }) => ({
  input: {
    flex: 1,
    width: "100%",
    height: "100%",

    fontFamily: fonts.regular,
    fontSize: sizes.scale(14),
    color: colors.black,
    lineHeight: sizes.scale(10),
  },
});
