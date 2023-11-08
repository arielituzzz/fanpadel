import { StyleSheet } from "react-native";
import { colors } from "../../constants/colors";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingVertical: "20%",
    title: {
      alignItems: "center",

      text: {
        fontSize: 30,
        fontWeight: "bold",

        color: colors.light,
        // borderColor: colors.light,
        // borderBottomWidth: 2,
        // borderTopWidth: 2,
      },
    },
    shifts: {
      flex: 1,
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      paddingHorizontal: 20,
    },
  },
});

export default styles;
