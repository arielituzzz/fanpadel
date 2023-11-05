import React, { useState } from "react";
import { View, Text, Pressable } from "react-native";
import { SelectList } from "react-native-dropdown-select-list";
import styles from "./home.style";

const Home = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.container.title}>
        <Text style={styles.container.title.text}>EMPECEMOS</Text>
      </View>
      <View style={styles.container.options}>
        <Pressable
          style={styles.container.options.buttons}
          onPress={() => {
            navigation.navigate("FindShifts");
          }}
        >
          <Text style={styles.container.options.buttons.text}>
            QUIERO JUGAR!
          </Text>
        </Pressable>
      </View>
    </View>
  );
};

export default Home;
