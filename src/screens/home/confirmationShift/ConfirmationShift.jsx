import { View, Text, ImageBackground } from "react-native";
import React from "react";
import styles from "./confirmationShift.style";
import { useSelector } from "react-redux";
import { Pressable } from "react-native";
import ImgBackground from "../../../assets/imgs/fea518d1220dd2afeb745aa318d84904.jpg";

const ConfirmationShift = ({ navigation }) => {
  const { shiftSelected } = useSelector((state) => state.shifts);
  return (
    <ImageBackground
      style={styles.container}
      source={ImgBackground}
      resizeMode="cover"
    >
      <View style={styles.container.box}>
        <View style={styles.container.box.title}>
          <Text style={styles.container.box.title.text}>FELICITACIONES!!!</Text>
        </View>
        <View style={styles.container.box.content}>
          <Text style={styles.container.box.content.text}>
            Confirmaste el siguiente turno:
          </Text>
          <View style={styles.container.box.content.data}>
            <Text style={styles.container.box.content.data.text}>
              Club: {shiftSelected.club}
            </Text>
            <Text style={styles.container.box.content.data.text}>
              Fecha: {shiftSelected.day}
            </Text>
            <Text style={styles.container.box.content.data.text}>
              Horario: {shiftSelected.hour}
            </Text>
          </View>
        </View>
        <View style={styles.container.box.content.buttons}>
          <Pressable
            onPress={() => navigation.navigate("Home")}
            style={styles.container.box.content.buttons.button}
          >
            <Text style={styles.container.box.content.buttons.button.text}>
              Regresar al Inicio
            </Text>
          </Pressable>
        </View>
      </View>
    </ImageBackground>
  );
};

export default ConfirmationShift;
