export const styles = ({ fonts, sizes, colors }) => ({
  container: {
    justifyContent: "flex-start",
  },
  label: {
    marginLeft: sizes.scale(5),

    fontFamily: fonts.semibold,
    fontSize: sizes.scale(12),
    color: colors.blue,
  },
});
