import React, { useState } from "react";
import { View, Text } from "react-native";
import { SelectList } from "react-native-dropdown-select-list";
import styles from "./selectShift.style";

const SelectShift = () => {
  return (
    <View style={styles.container}>
      <View style={{ alignItems: "center" }}>
        <Text style={{ fontSize: 20, fontWeight: "bold" }}>
          SELECCIONE CLUB
        </Text>
      </View>
    </View>
  );
};

export default SelectShift;
