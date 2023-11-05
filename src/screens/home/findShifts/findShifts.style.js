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
        fontSize: 30,
        fontWeight: "bold",
      },
    },
    find: {
      rowGap: 20,
      options: {
        alignItems: "center",
        rowGap: 10,
      },
    },
  },
});

export default styles;
