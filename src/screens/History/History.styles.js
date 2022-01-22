export const styles = ({ sizes, fonts, colors }) => ({
  screen: color => ({
    height: "100%",
    alignItems: "stretch",
    padding: sizes.scale(15),

    backgroundColor: color,
  }),
  header: {
    justifyContent: "space-between",
    paddingBottom: sizes.scale(15),
  },
  headerTitle: {
    flex: 1,
    marginRight: sizes.scale(35),

    fontFamily: fonts.bold,
    fontSize: sizes.scale(18),
    color: colors.black,
    textAlign: "center",
  },
});
