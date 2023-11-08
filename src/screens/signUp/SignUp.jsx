import React, { useState } from "react";
import { Pressable, Text, TextInput, View, Image } from "react-native";
import styles from "./signUp.styles";
import { setUser } from "../../features/user/userSlice";
import { setDataUser } from "../../features/user/userSlice";
import { useDispatch, useSelector } from "react-redux";
import { useSignUpMutation } from "../../services/authApi";
import { usePostDataUserMutation } from "../../services/authApi";
import { SelectList } from "react-native-dropdown-select-list";
import ImgLogo from "../../assets/imgs/logo-app.png";

const Signup = ({ navigation }) => {
  const [name, setName] = useState(null);
  const [lastName, setLastName] = useState(null);
  const [category, setCategory] = useState(null);
  const [side, setSide] = useState(null);
  const [gender, setGender] = useState(null);
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [confirmPass, setConfirmPass] = useState(null);
  const [triggerSignup] = useSignUpMutation();
  const [triggerSaveDataUser] = usePostDataUserMutation();

  const dispatch = useDispatch();

  const onSubmit = () => {
    const update = new Date().toLocaleDateString("en-US");
    const newUser = {
      name: name,
      lastName: lastName,
      category: category,
      side: side,
      gender: gender,
      email: email,
      update: update,
    };
    if (password === confirmPass) {
      triggerSignup({ email, password })
        .unwrap()
        .then((result) => {
          console.log(result);
          dispatch(setUser(result));
          if (
            name &&
            lastName &&
            category &&
            side &&
            category &&
            side &&
            gender &&
            email
          ) {
            dispatch(setDataUser(newUser));
            const update = new Date().toLocaleDateString("en-US");
            const localId = result.localId;
            triggerSaveDataUser({
              name,
              lastName,
              category,
              side,
              gender,
              email,
              localId,
              update,
            })
              .unwrap()
              .then((result) => {
                console.log(
                  name,
                  lastName,
                  category,
                  side,
                  gender,
                  email,
                  localId,
                  update
                );
              })
              .catch((err) => console.log(err));
          }
        })
        .catch((err) => console.log(err));
    } else {
      alert("Password no coincide");
      return;
    }
  };

  const optionsGender = [
    { key: "Masculino", value: "Masculino" },
    { key: "Femenino", value: "Fememino" },
  ];
  const optionsCategory = [
    { key: "1ra", value: "1ra" },
    { key: "2da", value: "2da" },
    { key: "3ra", value: "3ra" },
    { key: "4ta", value: "4ta" },
    { key: "5ta", value: "5ta" },
    { key: "6ta", value: "6ta" },
    { key: "7ta", value: "7ta" },
    { key: "8va", value: "8va" },
  ];
  const optionsSide = [
    { key: "Drive", value: "Drive" },
    { key: "Reves", value: "Reves" },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.container.signupContainer}>
        <View style={styles.container.signupContainer.logo}>
          <Image
            style={styles.container.signupContainer.logo.img}
            source={ImgLogo}
          />
        </View>
        <View style={styles.container.signupContainer.title}>
          <Text style={styles.container.signupContainer.title.text}>
            REGISTRATE!
          </Text>
        </View>
        <View style={styles.container.signupContainer.inputs}>
          <View style={styles.container.signupContainer.inputs.box}>
            <Text style={styles.container.signupContainer.inputs.box.title}>
              Nombre
            </Text>
            <TextInput
              style={styles.container.signupContainer.inputs.box.text}
              value={name}
              onChangeText={setName}
              placeholder="Ingresa tu Nombre"
            />
          </View>
          <View style={styles.container.signupContainer.inputs.box}>
            <Text style={styles.container.signupContainer.inputs.box.title}>
              Apellido
            </Text>
            <TextInput
              style={styles.container.signupContainer.inputs.box.text}
              value={lastName}
              onChangeText={setLastName}
              placeholder="Ingresa tu Apellido"
            />
          </View>
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <SelectList
              data={optionsCategory}
              setSelected={setCategory}
              placeholder="Categoria"
              search={false}
              // dropdownShown={false}
            />
            <SelectList
              data={optionsSide}
              setSelected={setSide}
              placeholder="Posicion"
              search={false}
              // dropdownShown={false}
            />
          </View>
          <View>
            <SelectList
              data={optionsGender}
              setSelected={setGender}
              placeholder="Ingresa tu Genero"
              search={false}
              // dropdownShown={false}
            />
          </View>
          <View style={styles.container.signupContainer.inputs.box}>
            <Text style={styles.container.signupContainer.inputs.box.title}>
              E-mail
            </Text>
            <TextInput
              style={styles.container.signupContainer.inputs.box.text}
              value={email}
              onChangeText={setEmail}
              placeholder="Ingresa tu correo"
            />
          </View>
          <View style={styles.container.signupContainer.inputs.box}>
            <Text style={styles.container.signupContainer.inputs.box.title}>
              Password
            </Text>
            <TextInput
              style={styles.container.signupContainer.inputs.box.text}
              value={password}
              onChangeText={setPassword}
              placeholder="Ingresa tu contraseña"
              secureTextEntry={true}
            />
          </View>
          <View style={styles.container.signupContainer.inputs.box}>
            <Text style={styles.container.signupContainer.inputs.box.title}>
              Confirm Password
            </Text>
            <TextInput
              style={styles.container.signupContainer.inputs.box.text}
              value={confirmPass}
              onChangeText={setConfirmPass}
              placeholder="Confirma tu contraseña"
              secureTextEntry={true}
            />
          </View>
        </View>

        <View style={styles.container.signupContainer.buttons}>
          <Pressable style={styles.signupButton} onPress={onSubmit}>
            <Text style={styles.signupButton.text}>Signup</Text>
          </Pressable>
          <View>
            <Text>No have an account?</Text>
            <Pressable
              style={styles.loginButton}
              onPress={() => navigation.navigate("Login")}
            >
              <Text style={{ color: "white" }}>Login</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Signup;
