import { View, Text } from "react-native";
import React from "react";
import styles from "./confirmationShift.style";
import { useSelector } from "react-redux";
import { Pressable } from "react-native";

const ConfirmationShift = ({ navigation }) => {
  const { shiftSelected } = useSelector((state) => state.shifts);
  return (
    <View style={styles.container}>
      <View>
        <Text>FELICITACIONES!!!</Text>
      </View>
      <View>
        <Text>Has confirmado el siguiente turno:</Text>
        <View>
          <Text>Club: {shiftSelected.club}</Text>
          <Text>Fecha: {shiftSelected.day}</Text>
          <Text>Hora: {shiftSelected.hour}</Text>
        </View>
      </View>
      <View>
        <Pressable
          onPress={() => navigation.navigate("Home")}
          style={{ borderWidth: 1, borderColor: "black", padding: 10 }}
        >
          <Text>Regresar al Inicio</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default ConfirmationShift;
