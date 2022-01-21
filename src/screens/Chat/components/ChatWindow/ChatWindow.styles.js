export const componentStyles = ({ sizes, fonts, colors }) => ({
  container: {
    width: "100%",
    flex: 1,
    marginBottom: sizes.scale(20),

    borderRadius: sizes.scale(20),
    borderWidth: 2,
    borderColor: colors.black,
    borderStyle: "solid",

    backgroundColor: colors.white,
  },
});
