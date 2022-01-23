export const styles = ({ sizes, fonts, colors }) => ({
  container: {
    width: "100%",
    minHeight: sizes.scale(65),
    padding: sizes.scale(10),
    justifyContent: "space-between",
    alignItems: "flex-start",

    borderRadius: sizes.scale(15),
    borderWidth: 2,
    borderColor: colors.black,
    borderStyle: "solid",

    backgroundColor: colors.white,
  },
  containerVoice: {
    alignItems: "center",

    backgroundColor: colors.black,
  },
  btn: {
    height: sizes.scale(45),
    width: sizes.scale(45),
  },
  sendTextBtn: {
    marginRight: sizes.scale(10),
  },
  voiceAnimation: {
    flex: 1,
    height: "100%",
    display: "flex",
  },
  timerText: {
    marginLeft: sizes.scale(10),

    fontFamily: fonts.semibold,
    fontSize: sizes.scale(13),
    color: colors.white,
  },
});
