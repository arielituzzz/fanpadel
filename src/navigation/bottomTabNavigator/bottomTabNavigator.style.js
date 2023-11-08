import { StyleSheet } from "react-native";
import { colors } from "../../constants/colors";

const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: colors.greenGrow,
    iconContainer: {
      backgroundColor: colors.light,
      borderRadius: 20,
      padding: 8,
      justifyContent: "center",
      alignItems: "center",
    },
  },
});

export default styles;
