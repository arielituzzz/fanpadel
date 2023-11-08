import { StyleSheet } from "react-native";
import { colors } from "../../../../constants/colors";

const styles = StyleSheet.create({
  boxDates: {
    marginVertical: 20,
    title: {
      alignItems: "center",
      marginBottom: 10,
      text: {
        borderWidth: 2,
        borderColor: colors.yellow,
        borderRadius: 20,
        paddingHorizontal: 10,
        paddingVertical: 5,
        fontSize: 20,
        fontWeight: "bold",
        color: colors.greyDark,
        textAlign: "center",
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
            color: colors.greyLight,
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
