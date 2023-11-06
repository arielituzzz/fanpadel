import { StyleSheet } from "react-native";
import { colors } from "../../../../constants/colors";

const styles = StyleSheet.create({
  container: {
    boxDates: {
      alignItems: "center",
      justifyContent: "center",
      borderWidth: 2,
      borderRadius: 20,
      padding: 10,
      list: {
        backgroundColor: colors.greyLight,
        padding: 10,
        borderRadius: 10,
        alignItems: "center",
        justifyContent: "center",
        margin: 10,
        text: {
          fontSize: 20,
        },
      },
    },
  },
});

export default styles;
