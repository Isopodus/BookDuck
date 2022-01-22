export const styles = ({ sizes, fonts, colors }) => ({
  container: {
    potision: "relative",
    width: "100%",
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "stretch",
    marginBottom: sizes.scale(20),

    borderRadius: sizes.scale(15),
    borderWidth: 2,
    borderColor: colors.black,
    borderStyle: "solid",

    backgroundColor: colors.white,
  },
  scrollView: {
    paddingHorizontal: sizes.scale(10),
    paddingBottom: sizes.scale(40),
  },
});
