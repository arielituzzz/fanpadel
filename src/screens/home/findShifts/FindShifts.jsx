import { useEffect, useState } from "react";
import styles from "./findShifts.style";
import { useSelector, useDispatch } from "react-redux";
import { setShiftSelection } from "../../../features/shifts/shiftsSlice";
import { View, Text } from "react-native";
import { SelectList } from "react-native-dropdown-select-list";
import SelectShift from "./components/selectShift/SelectShift";
import dataClubs from "../../../data/dataClubs";
const FindShifts = ({ navigation }) => {
  const { shiftSelection } = useSelector((state) => state.shifts);
  const dispatch = useDispatch();

  const [day, setDay] = useState(null);
  const [hour, setHour] = useState(null);
  const [club, setClub] = useState(null);
  const [optionHours, setOptionHours] = useState([]);

  let todayDay = new Date().getDate() - 1;
  const todayMonth = new Date().getMonth() + 1;
  const todayYear = new Date().getFullYear();
  let todayHour = new Date().getHours();

  const optionClubs = dataClubs.map((club) => {
    return club.name;
  });

  const optionDays = [];

  const findHours = (name, date) => {
    dataClubs.find((club) => {
      if (club.name === name) {
        club.shiftsAvailable.find((shift) => {
          if (shift.day === date) {
            setOptionHours(shift.hours);
          }
        });
      }
    });
  };

  for (let i = 0; i < 7; i++) {
    todayDay = todayDay + 1;
    const date = `${todayDay}/${todayMonth}/${todayYear}`;
    optionDays.push(
      i === 0 ? { key: date, value: `${date} HOY` } : { key: date, value: date }
    );
  }
  // for (let i = 0; i < 7; i++) {
  //   todayHour = todayHour + 2;
  //   if (todayHour > 22) {
  //     break;
  //   }

  //   const rangeMaxHour = todayHour + 2;

  //   const rangeHour = {
  //     min: todayHour,
  //     max: rangeMaxHour,
  //   };

  //   optionHours.push({
  //     key: rangeHour,
  //     value: `${todayHour} a ${rangeMaxHour}`,
  //   });
  // }

  useEffect(() => {
    dispatch(setShiftSelection({ club: club, day: day, hour: hour }));
  }, [club, day, hour]);

  useEffect(() => {
    setHour(null);
    if (club && day) {
      findHours(club, day);
    }
  }, [club, day]);

  return (
    <View style={styles.container}>
      <View style={styles.container.title}>
        <Text style={styles.container.title.text}>CENTRAL DE TURNOS</Text>
      </View>
      <View style={styles.container.find}>
        <View style={styles.container.find.options}>
          <View>
            <SelectList
              data={optionClubs}
              setSelected={setClub}
              placeholder="Selecciona el club"
              inputStyles={{ fontSize: 20 }}
              search={false}
              // dropdownShown={false}
            />
          </View>
          <View>
            <SelectList
              data={optionDays}
              setSelected={setDay}
              placeholder="Selecciona el dia"
              search={false}
              inputStyles={{ fontSize: 20 }}
            />
          </View>
          {shiftSelection?.club && shiftSelection?.day && (
            <View>
              <SelectList
                data={optionHours}
                setSelected={setHour}
                placeholder="Selecciona el horario"
                search={false}
                notFoundText="No hay turnos disponibles"
                inputStyles={{ fontSize: 20 }}
              />
            </View>
          )}
        </View>

        <View>
          <SelectShift shiftSelection={shiftSelection} />
        </View>
      </View>
    </View>
  );
};

export default FindShifts;
