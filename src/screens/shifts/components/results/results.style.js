import { StyleSheet } from "react-native";
import { colors } from "../../../../constants/colors";

const styles = StyleSheet.create({
  container: {
    title: {
      alignItems: "center",
      text: {
        fontSize: 25,
        fontWeight: "bold",
        color: "white",
        fontStyle: "italic",
      },
    },
    boxDates: {
      alignItems: "center",
      justifyContent: "center",
      borderWidth: 2,
      borderRadius: 20,
      borderColor: colors.yellow,
      padding: 10,
      list: {
        backgroundColor: colors.greenGrow,
        padding: 10,
        borderRadius: 10,
        alignItems: "center",
        justifyContent: "center",
        margin: 10,
        text: {
          fontSize: 20,
          color: colors.light,
        },
      },
    },
  },
});

export default styles;
