import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginVertical: "10%",
    alignItems: "center",
    title: {
      alignItems: "center",
      marginBottom: 20,
      text: {
        fontSize: 30,
        fontWeight: "bold",
      },
    },
    boxImage: {
      overflow: "hidden",
      borderRadius: 100,
      alignItems: "center",
      backgroundColor: "green",
      image: {
        width: 200,
        height: 200,
      },
    },
    boxDates: {
      alignItems: "center",
    },
  },
});

export default styles;
