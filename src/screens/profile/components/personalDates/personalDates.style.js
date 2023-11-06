import { StyleSheet } from "react-native";
import { colors } from "../../../../constants/colors";

const styles = StyleSheet.create({
  boxDates: {
    marginTop: 20,
    title: {
      alignItems: "center",
      marginVertical: 10,
      text: {
        fontSize: 20,
        fontWeight: "bold",
      },
    },
    container: {
      flexDirection: "row",
      justifyContent: "space-around",
      col: {
        rowGap: 10,
        items: {
          alignItems: "flex-start",
          title: {
            fontSize: 15,
            fontWeight: "bold",
          },
          date: {
            fontSize: 16,
            fontWeight: "bold",
            color: colors.light,
          },
        },
      },
    },
  },
});

export default styles;
