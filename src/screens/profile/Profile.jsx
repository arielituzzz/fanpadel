import { View, Text, Image, Pressable, ScrollView } from "react-native";
import React, { useState } from "react";
import styles from "./profile.style";
import User from "./components/user/User";
import PersonalDates from "./components/personalDates/PersonalDates";
import Map from "./components/map/Map";
import { useSelector, useDispatch } from "react-redux";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { clearUser } from "../../features/user/userSlice";

const Profile = () => {
  const { name } = useSelector((state) => state.user);

  const dispatch = useDispatch();

  const logOut = () => {
    dispatch(clearUser());
  };

  return (
    <ScrollView style={styles.container}>
      <View
        style={{
          alignItems: "flex-end",
          width: "90%",
        }}
      >
        <Pressable onPress={logOut}>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Text style={{ color: "white", fontWeight: "bold" }}>Log-Out</Text>
            <MaterialCommunityIcons name="exit-run" size={30} color="white" />
          </View>
        </Pressable>
      </View>
      <View style={styles.container.title}>
        <Text style={styles.container.title.text}>Hola {name}!</Text>
      </View>
      <User />
      <PersonalDates />
      <Map />
    </ScrollView>
  );
};

export default Profile;
