export const styles = ({ sizes, fonts, colors }) => ({
  component: color => ({
    justifyContent: "space-between",
    padding: sizes.scale(10),
    marginBottom: sizes.scale(20),
    height: sizes.scale(65),

    backgroundColor: color,

    borderRadius: sizes.scale(15),
    borderWidth: 2,
    borderColor: colors.black,
    borderStyle: "solid",
  }),
  headerTitle: {
    flex: 1,
    marginLeft: sizes.scale(35),

    fontFamily: fonts.bold,
    fontSize: sizes.scale(18),
    color: colors.black,
    textAlign: "center",
  },
  btn: {
    height: sizes.scale(45),
    width: sizes.scale(45),
  },
});
