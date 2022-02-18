export const styles = ({ sizes, fonts, colors }) => ({
  screen: {
    justifyContent: "space-between",
    paddingBottom: sizes.scale(40),
  },
  wrapper: {
    height: sizes.fullHeight * 0.78,
    paddingHorizontal: sizes.scale(25),
    paddingTop: 0,
    paddingBottom: sizes.scale(70),
    justifyContent: "space-around",

    borderBottomRightRadius: sizes.fullHeight * 0.5,

    backgroundColor: colors.white,

    shadowColor: colors.rgba(colors.black, 0.3),
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 15,
  },
  title: {
    fontFamily: fonts.bold,
    fontSize: sizes.scale(22),
    color: colors.orange,
  },
  subtitle: {
    marginBottom: sizes.scale(51),

    fontFamily: fonts.semibold,
    fontSize: sizes.scale(12),
    color: colors.black,
  },
  form: {
    flex: 0.7,
    marginTop: sizes.scale(10),
  },
  btnSubmit: {
    width: "60%",
    marginBottom: sizes.scale(10),
  },
  btnSwitch: {
    width: "60%",

    fontFamily: fonts.semibold,
    fontSize: sizes.scale(16),
    color: colors.blue,
    textAlign: "center",
  },
  label: {
    fontFamily: fonts.bold,
    fontSize: sizes.scale(22),
    color: colors.white,
    textAlign: "center",
  },
});
