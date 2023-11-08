import { StyleSheet } from "react-native";
import { colors } from "../../constants/colors";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.blueDark,
    paddingVertical: 20,
    title: {
      alignItems: "center",
      marginTop: 50,
      marginBottom: 20,
      text: {
        fontSize: 30,
        fontWeight: "bold",
        color: colors.light,
      },
    },
  },
});

export default styles;
