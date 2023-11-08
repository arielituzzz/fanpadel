import { View, Text, FlatList } from "react-native";
import React, { useEffect, useState } from "react";
import styles from "./results.style";
import dataShifts from "../../../../data/dataShifts";

const Results = ({ date }) => {
  const [shifts, setShifts] = useState([]);
  useEffect(() => {
    if (date) {
      const foundShifts = dataShifts.find((item) => item.day === date).shifts;
      setShifts(foundShifts);
    }
  }, [date]);

  const renderComponent = (item) => {
    return (
      <View style={styles.container}>
        <View style={styles.container.boxDates.list}>
          <Text style={styles.container.boxDates.list.text}>{item.place}</Text>
          <FlatList
            data={item.hours}
            renderItem={({ item }) => (
              <Text style={styles.container.boxDates.list.text}>* {item}</Text>
            )}
          />
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.container.title}>
        <Text style={styles.container.title.text}>{date}</Text>
      </View>
      <View style={styles.container.boxDates}>
        {shifts.length <= 0 ? (
          <Text style={{ color: "white" }}>No hay turnos</Text>
        ) : (
          <FlatList
            data={shifts}
            keyExtractor={(item) => item.place}
            renderItem={({ item }) => renderComponent(item)}
          />
        )}
      </View>
    </View>
  );
};

export default Results;
