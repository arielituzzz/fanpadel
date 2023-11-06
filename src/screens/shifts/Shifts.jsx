import { View, Text, FlatList } from "react-native";
import React, { useState } from "react";
import styles from "./shifts.style";
import Calendar from "./components/calendar/Calendar";
import Results from "./components/results/Results";

const Shifts = () => {
  const [date, setDate] = useState("");
  const triggerDates = (date) => {
    setDate(date);
  };
  return (
    <View style={styles.container}>
      <View style={{ alignItems: "center" }}>
        <Text style={{ fontSize: 30, fontWeight: "bold" }}>MIS TURNOS</Text>
      </View>
      <View style={styles.container.shifts}>
        <Calendar triggerDates={triggerDates} />
        <Results date={date} />
      </View>
    </View>
  );
};

export default Shifts;
