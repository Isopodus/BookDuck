export const componentStyles = ({ sizes, fonts, colors }) => ({
  container: {
    minHeight: sizes.scale(70),
    padding: sizes.scale(10),

    borderRadius: sizes.scale(20),
    borderWidth: 2,
    borderColor: colors.black,
    borderStyle: "solid",

    backgroundColor: colors.white,
  },
});
