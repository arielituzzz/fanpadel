import { View, Text } from "react-native";
import React from "react";
import styles from "./personalDates.style";

const PersonalDates = () => {
  return (
    <View style={styles.boxDates}>
      <View style={styles.boxDates.title}>
        <Text style={styles.boxDates.title.text}>Datos Personales</Text>
      </View>
      <View style={styles.boxDates.container}>
        <View style={styles.boxDates.container.col}>
          <View style={styles.boxDates.container.col.items}>
            <Text style={styles.boxDates.container.col.items.title}>
              Nombre y Apellido
            </Text>
            <Text style={styles.boxDates.container.col.items.date}>
              Ariel Suarez
            </Text>
          </View>
          <View style={styles.boxDates.container.col.items}>
            <Text style={styles.boxDates.container.col.items.title}>
              Correo Electronico
            </Text>
            <Text style={styles.boxDates.container.col.items.date}>
              suarezariel86@gmail.com
            </Text>
          </View>
          <View style={styles.boxDates.container.col.items}>
            <Text style={styles.boxDates.container.col.items.title}>
              Lugar de Residencia
            </Text>
            <Text style={styles.boxDates.container.col.items.date}>
              Merlo, San Luis
            </Text>
          </View>
        </View>
        <View style={styles.boxDates.container.col}>
          <View style={styles.boxDates.container.col.items}>
            <Text style={styles.boxDates.container.col.items.title}>Edad</Text>
            <Text style={styles.boxDates.container.col.items.date}>
              37 Anos
            </Text>
          </View>
          <View style={styles.boxDates.container.col.items}>
            <Text style={styles.boxDates.container.col.items.title}>
              Genero
            </Text>
            <Text style={styles.boxDates.container.col.items.date}>
              Masculino
            </Text>
          </View>
          <View style={styles.boxDates.container.col.items}>
            <Text style={styles.boxDates.container.col.items.title}>
              Telefono
            </Text>
            <Text style={styles.boxDates.container.col.items.date}>
              116-416-9277
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default PersonalDates;
