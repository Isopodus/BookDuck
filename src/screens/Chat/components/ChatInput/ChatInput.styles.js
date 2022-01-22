export const styles = ({ sizes, fonts, colors }) => ({
  container: {
    minHeight: sizes.scale(70),
    padding: sizes.scale(10),
    alignItems: "flex-start",

    borderRadius: sizes.scale(15),
    borderWidth: 2,
    borderColor: colors.black,
    borderStyle: "solid",

    backgroundColor: colors.white,
  },
  sendBtn: {
    height: sizes.scale(45),
    width: sizes.scale(45),
  },
  sendTextBtn: {
    marginRight: sizes.scale(10),
  },
});
