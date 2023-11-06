import { View, Text, Image } from "react-native";
import React, { useState } from "react";
import styles from "./profile.style";

const Profile = () => {
  const [gender, setGender] = useState("Male");
  return (
    <View style={styles.container}>
      <View style={styles.container.title}>
        <Text style={styles.container.title.text}>Hola USUARIO!</Text>
      </View>
      <View style={styles.container.boxImage}>
        <Image
          source={{
            uri:
              gender === "Male"
                ? "https://img.freepik.com/premium-vector/default-male-user-profile-icon-vector-illustration_276184-168.jpg"
                : gender === "Female"
                ? "https://img.freepik.com/premium-vector/default-female-user-profile-icon-vector-illustration_276184-169.jpg"
                : "https://e7.pngegg.com/pngimages/753/432/png-clipart-user-profile-2018-in-sight-user-conference-expo-business-default-business-angle-service.png",
          }}
          style={styles.container.boxImage.image}
          resizeMode="cover"
        />
      </View>
      <View style={styles.container.boxDates}>
        <Text>7ma Categoria</Text>
        <Text>Reves</Text>
      </View>
    </View>
  );
};

export default Profile;
