import { StyleSheet } from "react-native";
import { colors } from "../../constants/colors";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: "10%",
    backgroundColor: colors.blueGrowth,
    title: {
      alignItems: "center",
      marginVertical: 20,
      text: {
        fontSize: 30,
        fontWeight: "bold",
      },
    },
  },
});

export default styles;
