import { View, Text, FlatList } from "react-native";
import React from "react";
import styles from "./calendar.style";
import dataShifts from "../../../../data/dataShifts";
import { colors } from "../../../../constants/colors";
import { Pressable } from "react-native";

const Calendar = ({ triggerDates }) => {
  const renderComponent = (item) => {
    const formatDate = item.day.split("/");
    const day = formatDate[0];
    const month = formatDate[1];

    const formatedDate = `${day}/${month}`;

    return (
      <Pressable
        style={
          item.shifts.length <= 0
            ? {
                ...styles.container.boxDates.list,
                backgroundColor: colors.greyLight,
              }
            : styles.container.boxDates.list
        }
        onPress={() => {
          triggerDates(item.day);
        }}
      >
        <Text style={styles.container.boxDates.list.text}>{formatedDate}</Text>
      </Pressable>
      // <FlatList
      //   data={item.shifts}
      //   renderItem={({ item }) => (
      //     <View>
      //       <Text>{item.place}</Text>
      //       <Text>{item.hours}</Text>
      //     </View>
      //   )}
      // />
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.container.boxDates}>
        <FlatList
          data={dataShifts}
          keyExtractor={(item) => item.day}
          renderItem={({ item }) => renderComponent(item)}
        />
      </View>
    </View>
  );
};

export default Calendar;
