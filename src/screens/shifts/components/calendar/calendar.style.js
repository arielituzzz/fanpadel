import { StyleSheet } from "react-native";
import { colors } from "../../../../constants/colors";

const styles = StyleSheet.create({
  container: {
    boxDates: {
      borderRadius: 20,
      padding: 10,
      backgroundColor: colors.blueDark,
      list: {
        margin: 10,
        backgroundColor: colors.greenGrow,
        padding: 10,
        borderRadius: 10,
        alignItems: "center",
        text: {
          fontSize: 20,
          fontStyle: "italic",
        },
      },
    },
  },
});

export default styles;
