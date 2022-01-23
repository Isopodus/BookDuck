export const styles = ({ sizes, fonts, colors }) => ({
  screen: color => ({
    height: "100%",
    alignItems: "stretch",
    paddingTop: sizes.scale(15),

    backgroundColor: color,
  }),
  scrollView: {
    paddingHorizontal: sizes.scale(25),
    paddingBottom: sizes.scale(15),
  },
  header: {
    justifyContent: "space-between",
    paddingHorizontal: sizes.scale(15),
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
  emptyText: {
    marginTop: "70%",

    fontFamily: fonts.bold,
    fontSize: sizes.scale(20),
    color: colors.black,
    textAlign: "center",
  },
});
