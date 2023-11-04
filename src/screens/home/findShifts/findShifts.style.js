import { StyleSheet } from "react-native";
import { colors } from "../../../constants/colors";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: "center",
    // justifyContent: "center",
    // marginVertical: "10%",
    backgroundColor: colors.light,
    title: {
      alignItems: "center",
      marginBottom: 20,
      text: {
        fontSize: 20,
        fontWeight: "bold",
      },
    },
    find: {
      backgroundColor: colors.greyLight,
      rowGap: 20,
    },
  },
});

export default styles;
