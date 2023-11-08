import { StyleSheet } from "react-native";
import { colors } from "../../../constants/colors";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingVertical: "20%",
    title: {
      alignItems: "center",
      marginBottom: 20,
      text: {
        fontSize: 30,
        fontWeight: "bold",
        color: colors.yellow,
        borderColor: colors.yellow,
        borderBottomWidth: 2,
        borderTopWidth: 2,
      },
    },
    find: {
      rowGap: 20,
      options: {
        alignItems: "center",
        rowGap: 10,
        input: {
          borderColor: colors.light,
          backgroundColor: colors.dark,
        },
      },
    },
  },
});

export default styles;
