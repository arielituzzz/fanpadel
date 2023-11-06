import { View, Text, Image, Pressable } from "react-native";
import React, { useState } from "react";
import styles from "./user.style";

const User = () => {
  const [gender, setGender] = useState("Male");

  const takePicture = () => {
    console.log("Tomando Foto!");
  };

  return (
    <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
      <View style={styles.boxImage}>
        <Image
          source={{
            uri:
              gender === "Male"
                ? "https://img.freepik.com/premium-vector/default-male-user-profile-icon-vector-illustration_276184-168.jpg"
                : gender === "Female"
                ? "https://img.freepik.com/premium-vector/default-female-user-profile-icon-vector-illustration_276184-169.jpg"
                : "https://e7.pngegg.com/pngimages/753/432/png-clipart-user-profile-2018-in-sight-user-conference-expo-business-default-business-angle-service.png",
          }}
          style={styles.boxImage.image}
          resizeMode="cover"
        />
        <Pressable style={styles.boxImage.button} onPress={takePicture}>
          <Text style={styles.boxImage.button.text}>Tomar Foto</Text>
        </Pressable>
      </View>
      <View style={styles.boxDates}>
        <View style={styles.boxDates.items}>
          <Text style={styles.boxDates.items.title}>Categoria</Text>
          <Text style={styles.boxDates.items.date}>7ma</Text>
        </View>
        <View style={styles.boxDates.items}>
          <Text style={styles.boxDates.items.title}>Posicion</Text>
          <Text style={styles.boxDates.items.date}>Reves</Text>
        </View>
      </View>
    </View>
  );
};

export default User;
