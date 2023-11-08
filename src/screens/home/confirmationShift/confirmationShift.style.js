import { StyleSheet } from "react-native";
import { colors } from "../../../constants/colors";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    box: {
      alignItems: "center",
      borderColor: colors.yellow,
      borderWidth: 2,
      padding: 15,
      borderRadius: 30,
      title: {
        alignItems: "center",
        text: {
          fontSize: 30,
          fontWeight: "bold",
          color: colors.yellow,
        },
      },
      content: {
        alignItems: "center",
        text: {
          fontSize: 15,
          fontWeight: "bold",
          color: colors.dark,
        },
        data: {
          alignItems: "center",
          text: {
            fontSize: 20,
            fontWeight: "bold",
            color: colors.dark,
          },
        },
        buttons: {
          rowGap: 20,
          button: {
            borderWidth: 2,
            borderRadius: 10,
            borderColor: "red",
            padding: 8,
            justifyContent: "center",
            alignItems: "center",
            margin: 10,
            text: {
              fontSize: 15,
              fontWeight: "bold",
              color: colors.blueDark,
            },
          },
        },
      },
    },
  },
});

export default styles;
