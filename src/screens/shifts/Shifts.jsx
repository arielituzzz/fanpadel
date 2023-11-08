import { View, Text, ImageBackground } from "react-native";
import React, { useState } from "react";
import styles from "./shifts.style";
import Calendar from "./components/calendar/Calendar";
import Results from "./components/results/Results";
import ImgBackground from "../../assets/imgs/1676542150_comparador.thigh.jpg";

const Shifts = () => {
  const [date, setDate] = useState("");
  const triggerDates = (date) => {
    setDate(date);
  };
  return (
    <ImageBackground
      style={styles.container}
      source={ImgBackground}
      resizeMode="cover"
    >
      <View style={styles.container.title}>
        <Text style={styles.container.title.text}>MIS TURNOS</Text>
      </View>
      <View style={styles.container.shifts}>
        <Calendar triggerDates={triggerDates} />
        <Results date={date} />
      </View>
    </ImageBackground>
  );
};

export default Shifts;
