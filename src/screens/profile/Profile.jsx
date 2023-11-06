import { View, Text, Image, Pressable, ScrollView } from "react-native";
import React, { useState } from "react";
import styles from "./profile.style";
import User from "./components/user/User";
import PersonalDates from "./components/personalDates/PersonalDates";
import Map from "./components/map/Map";

const Profile = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.container.title}>
        <Text style={styles.container.title.text}>Hola USUARIO!</Text>
      </View>
      <User />
      <PersonalDates />
      <Map />
    </ScrollView>
  );
};

export default Profile;
