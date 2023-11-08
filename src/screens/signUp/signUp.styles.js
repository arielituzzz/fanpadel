import { StyleSheet } from "react-native";
import { colors } from "../../constants/colors";

export default loginStyle = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    alignItems: "center",
    justifyContent: "center",
    signupContainer: {
      width: "100%",
      paddingHorizontal: 40,
      justifyContent: "center",
      logo: {
        alignItems: "center",
        img: {
          width: 150,
          height: 150,
          borderRadius: 100,
        },
      },
      title: {
        alignItems: "center",
        text: {
          fontSize: 25,
          marginVertical: 20,
          textAlign: "center",
          fontWeight: "bold",
        },
      },
      inputs: {
        backgroundColor: colors.grey,
        marginVertical: 5,
        borderRadius: 5,
        paddingHorizontal: 5,
        rowGap: 10,
        box: {
          title: { fontSize: 15 },
          text: {
            borderRadius: 5,
            borderWidth: 1,
            borderColor: colors.blueDark,
            fontSize: 20,
            paddingHorizontal: 10,
          },
        },
      },
      buttons: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 20,
      },
    },
  },
  signupButton: {
    backgroundColor: colors.greenGrow,
    width: "50%",
    borderRadius: 10,
    marginBottom: 15,
    justifyContent: "center",
    text: {
      color: "white",
      textAlign: "center",
      fontSize: 20,
    },
  },
  loginButton: {
    backgroundColor: colors.brownGrow,
    borderRadius: 10,
    marginBottom: 15,
    justifyContent: "center",
    alignItems: "center",
  },
});
