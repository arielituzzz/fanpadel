import { StyleSheet } from "react-native";
import { colors } from "../../../../../constants/colors";

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    box: {
      borderColor: colors.greyDark,
      borderWidth: 2,
      borderRadius: 10,
      marginVertical: 10,
      padding: 10,
      title: {
        alignItems: "center",
        marginBottom: 20,
        text: {
          fontSize: 20,
          fontWeight: "bold",
        },
      },
      shift: {
        rowGap: 20,
        dates: {
          alignItems: "center",
          text: {
            fontSize: 15,
            fontWeight: "bold",
          },
        },
        boxButton: {
          alignItems: "center",
          button: {
            backgroundColor: colors.brownGrow,
            borderRadius: 10,
            padding: 10,
            text: {
              color: colors.light,
              fontSize: 15,
              fontWeight: "bold",
            },
          },
        },
      },
    },
  },
});

export default styles;
