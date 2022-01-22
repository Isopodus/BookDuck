export const styles = ({ fonts, sizes, colors }) => {
  const bot = {
    wrapper: {
      marginTop: sizes.scale(20),
      alignItems: "flex-start",
    },
    label: {
      marginLeft: sizes.scale(11),

      fontFamily: fonts.regular,
      fontSize: sizes.scale(11),
      color: colors.grey,
    },
    container: {
      width: "85%",
      position: "relative",
      justifyContent: "flex-start",
      alignItems: "flex-end",
      marginTop: sizes.scale(7),
      marginBottom: sizes.scale(10),
    },
    message: {
      minHeight: sizes.scale(34),
      marginLeft: sizes.scale(10),
      padding: sizes.scale(10),

      backgroundColor: colors.black,

      borderRadius: sizes.scale(15),

      zIndex: 1,
    },
    messageTail: {
      position: "absolute",
      width: 0,
      height: 0,
      bottom: sizes.scale(-0.2),

      backgroundColor: "transparent",

      borderStyle: "solid",
      borderRightWidth: sizes.scale(22),
      borderTopWidth: sizes.scale(15),
      borderRightColor: "transparent",
      borderTopColor: colors.black,
      borderTopRightRadius: sizes.scale(10),

      transform: [{ rotate: "180deg" }],
    },
    text: {
      fontFamily: fonts.regular,
      fontSize: sizes.scale(14),
      color: colors.white,
    },
    btns: {
      flex: 1,
      width: "85%",
      flexWrap: "wrap",
    },
  };
  return {
    bot,
    my: {
      ...bot,
      wrapper: {
        ...bot.wrapper,
        alignItems: "flex-end",
      },
      label: {
        ...bot.label,

        marginLeft: 0,
        marginRight: sizes.scale(11),
      },
      container: {
        ...bot.container,
        justifyContent: "flex-end",
      },
      message: color => ({
        ...bot.message,
        marginLeft: 0,
        marginRight: sizes.scale(7),

        backgroundColor: color,
      }),
      messageTail: color => ({
        ...bot.messageTail,
        bottom: sizes.scale(-3.5),

        borderRightWidth: sizes.scale(15),
        borderTopWidth: sizes.scale(22),
        borderBottomLeftRadius: sizes.scale(10),
        borderTopColor: color,

        transform: [{ rotate: "270deg" }],
      }),
      text: {
        ...bot.text,
        color: colors.black,
      },
    },
  };
};
