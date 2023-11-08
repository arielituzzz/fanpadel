import { StyleSheet } from "react-native";
import { colors } from "../../constants/colors";

export default styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  loginContainer: {
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
    buttons: {
      flexDirection: "row-reverse",
      justifyContent: "space-between",
      marginTop: 20,
    },
  },
  inputEmail: {
    backgroundColor: colors.blueDark,
    height: 30,
    marginVertical: 5,
    justifyContent: "center",
    alignItems: "center",
    color: colors.light,
    fontWeight: "bold",
    borderRadius: 5,
    paddingHorizontal: 5,
  },
  loginButton: {
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
  signupButton: {
    backgroundColor: colors.brownGrow,
    borderRadius: 10,
    marginBottom: 15,
    justifyContent: "center",
    alignItems: "center",
  },
});
