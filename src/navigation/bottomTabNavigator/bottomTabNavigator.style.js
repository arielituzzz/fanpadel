import { StyleSheet } from "react-native";
import { colors } from "../../constants/colors";

const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: colors.greenGrow,
    borderTopRightRadius: 25,
    borderTopLeftRadius: 25,
    iconContainer: {
      backgroundColor: colors.light,
      borderRadius: 20,
      padding: 8,
      justifyContent: "center",
      alignItems: "center",
    },
    shopContainer: {
      borderRadius: 20,
      padding: 8,
      justifyContent: "space-between",
      alignItems: "center",
      flexDirection: "row",
      columnGap: 3,
    },
    shopContainerActive: {
      backgroundColor: colors.secondary,
      borderRadius: 20,
      padding: 8,
      justifyContent: "space-between",
      alignItems: "center",
      flexDirection: "row",
      columnGap: 3,
    },
  },
});

export default styles;
