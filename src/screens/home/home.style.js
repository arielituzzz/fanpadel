import { StyleSheet } from "react-native";
import { colors } from "../../constants/colors";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    rowGap: 20,
    backgroundColor: colors.light,
    title: {
      alignItems: "center",
      text: {
        color: colors.dark,
        fontSize: 20,
        fontWeight: "bold",
      },
    },
    options: {
      borderRadius: 20,
      padding: 8,
      justifyContent: "space-between",
      alignItems: "center",
      flexDirection: "column",
      rowGap: 10,
      buttons: {
        backgroundColor: colors.blueGrowth,
        borderRadius: 20,
        padding: 8,
        justifyContent: "space-between",
        alignItems: "center",
        flexDirection: "row",
        columnGap: 3,
        text: {
          color: colors.light,
          // fontWeight: "bold",
          fontSize: 20,
        },
      },
    },
  },
});

export default styles;
