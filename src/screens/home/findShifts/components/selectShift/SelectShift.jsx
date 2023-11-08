import React from "react";
import { View, Text, Pressable } from "react-native";
import { colors } from "../../../../../constants/colors";
import styles from "./selectShift.style";
import { useDispatch } from "react-redux";
import { setShiftSelected } from "../../../../../features/shifts/shiftsSlice";

const SelectShift = ({ shiftSelection, navigation }) => {
  const dispatch = useDispatch();
  const disable =
    !shiftSelection?.club || !shiftSelection?.day || !shiftSelection?.hour;
  const confirmShift = () => {
    console.log(
      `Confirmaste el siguiente turno: Club: ${shiftSelection.club.name}, Fecha: ${shiftSelection.day}, Horario: ${shiftSelection.hour.value}`
    );
    dispatch(setShiftSelected(shiftSelection));
    navigation.navigate("ConfirmationShift");
  };
  return (
    <View style={styles.container}>
      <View style={styles.container.box}>
        <View style={styles.container.box.title}>
          <Text style={styles.container.box.title.text}>Turno Selecionado</Text>
        </View>
        {shiftSelection?.club || shiftSelection?.day ? (
          <View style={styles.container.box.shift}>
            <View style={styles.container.box.shift.dates}>
              <Text style={styles.container.box.shift.dates.text}>
                {shiftSelection?.club && `Club: ${shiftSelection.club.name}`}
              </Text>
              <Text style={styles.container.box.shift.dates.text}>
                {shiftSelection?.day && `Fecha: ${shiftSelection.day}`}
              </Text>
              <Text style={styles.container.box.shift.dates.text}>
                {shiftSelection?.hour && `Hora: ${shiftSelection.hour.value}`}
              </Text>
            </View>
            <View style={styles.container.box.shift.boxButton}>
              <Pressable
                style={
                  disable
                    ? {
                        ...styles.container.box.shift.boxButton.button,
                        backgroundColor: colors.greyLight,
                      }
                    : styles.container.box.shift.boxButton.button
                }
                onPress={confirmShift}
                disabled={disable}
              >
                <Text style={styles.container.box.shift.boxButton.button.text}>
                  CONFIRMAR
                </Text>
              </Pressable>
            </View>
          </View>
        ) : (
          <Text>NO HAS SELECCIONADO NADA AUN!</Text>
        )}
      </View>
    </View>
  );
};

export default SelectShift;
