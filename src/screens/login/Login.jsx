import { Pressable, Text, TextInput, View, Image } from "react-native";
import React, { useState } from "react";
import { setUser } from "../../features/user/userSlice";
import styles from "./login.styles";
import { useDispatch } from "react-redux";
import { useLoginMutation } from "../../services/authApi";
import ImgLogo from "../../assets/imgs/logo-app.png";

const Login = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [triggerLogin, result] = useLoginMutation();
  const dispatch = useDispatch();

  const onSubmit = () => {
    triggerLogin({
      email,
      password,
    })
      .unwrap()
      .then((result) => {
        dispatch(setUser(result));
      })
      .catch((err) => console.log(err));
    if (result.isSuccess) {
      dispatch(setUser(result.data));
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.loginContainer}>
        <View style={styles.loginContainer.logo}>
          <Image source={ImgLogo} style={styles.loginContainer.logo.img} />
        </View>
        <View style={styles.loginContainer.title}>
          <Text style={styles.loginContainer.title.text}>Logeate!</Text>
        </View>
        <View>
          <Text>E-mail</Text>
          <TextInput
            style={styles.inputEmail}
            value={email}
            onChangeText={setEmail}
          />
          <Text>Contraseña</Text>
          <TextInput
            style={styles.inputEmail}
            value={password}
            onChangeText={setPassword}
            secureTextEntry={true}
          />
        </View>
        <View style={styles.loginContainer.buttons}>
          <Pressable style={styles.loginButton} onPress={onSubmit}>
            <Text style={styles.loginButton.text}>Login</Text>
          </Pressable>
          <View>
            <Text>No have an account?</Text>
            <Pressable
              style={styles.signupButton}
              onPress={() => navigation.navigate("Signup")}
            >
              <Text style={{ color: "white" }}>Sign up</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Login;
