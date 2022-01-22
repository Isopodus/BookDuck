export const styles = ({ sizes, fonts, colors }) => ({
  container: {
    potision: "relative",
    width: "100%",
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "stretch",
    marginBottom: sizes.scale(20),
    paddingHorizontal: sizes.scale(10),

    borderRadius: sizes.scale(15),
    borderWidth: 2,
    borderColor: colors.black,
    borderStyle: "solid",

    backgroundColor: colors.white,
  },
});
