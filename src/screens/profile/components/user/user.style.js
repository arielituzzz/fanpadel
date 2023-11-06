import { StyleSheet } from "react-native";
import { colors } from "../../../../constants/colors";

const styles = StyleSheet.create({
  boxImage: {
    overflow: "hidden",
    borderRadius: 100,
    alignItems: "center",
    image: {
      width: 180,
      height: 180,
    },
    button: {
      borderWidth: 2,
      borderRadius: 10,
      borderColor: colors.greyLight,
      padding: 8,
      justifyContent: "center",
      alignItems: "center",
      margin: 10,
      text: {
        fontSize: 15,
        fontWeight: "bold",
        color: colors.light,
      },
    },
  },
  boxDates: {
    alignItems: "center",
    justifyContent: "center",
    items: {
      alignItems: "center",
      title: {
        fontSize: 20,
        color: colors.greyLight,
      },
      date: {
        fontSize: 30,
        color: colors.light,
        fontWeight: "bold",
      },
    },
  },
});

export default styles;
