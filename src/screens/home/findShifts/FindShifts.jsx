import { useEffect, useState } from "react";
import styles from "./findShifts.style";
import { useSelector, useDispatch } from "react-redux";
import { setShiftSelection } from "../../../features/shifts/shiftsSlice";
import { View, Text, ImageBackground } from "react-native";
import { SelectList } from "react-native-dropdown-select-list";
import SelectShift from "./components/selectShift/SelectShift";
// import clubs from "../../../data/clubs";
import ImgBackground from "../../../assets/imgs/fea518d1220dd2afeb745aa318d84904.jpg";
import { colors } from "../../../constants/colors";
const FindShifts = ({ navigation }) => {
  const { clubs } = useSelector((state) => state.general);
  const { shiftSelection } = useSelector((state) => state.shifts);

  const dispatch = useDispatch();

  const [day, setDay] = useState(null);
  const [keyHour, setKeyHour] = useState(null);
  const [club, setClub] = useState(null);
  const [optionHours, setOptionHours] = useState([]);
  // const [hourShift, setHourShift] = useState([]);

  let todayDay = new Date().getDate() - 1;
  const todayMonth = new Date().getMonth() + 1;
  const todayYear = new Date().getFullYear();
  let todayHour = new Date().getHours();

  const optionClubs = clubs.map((club) => {
    return club.name;
  });

  const optionDays = [];

  const findHoursAvailable = (name, day) => {
    const hoursAvailable = [];
    const shiftsHoursAvailable = [];
    clubs.find((club) => {
      if (club.name === name) {
        club.shiftsAvailable.find((shifts) => {
          if (shifts.day === day) {
            shifts.hours.map((hour, i) => {
              if (hour.value) {
                const hourAvailable = {
                  key: i,
                  value: `${hour.minRange}hs - ${hour.maxRange}hs`,
                };
                hoursAvailable.push(hourAvailable);
                // shiftsHoursAvailable.push(hourAvailable);
              }
            });
          }
        });
      }
    });
    setOptionHours(hoursAvailable);
    // setHourShift(shiftsHoursAvailable);
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
    const hour = optionHours.find((hour) => {
      return hour.key == keyHour;
    });

    dispatch(setShiftSelection({ club: club, day: day, hour: hour }));
  }, [club, day, keyHour]);

  useEffect(() => {
    setKeyHour(null);
    if (club && day) {
      findHoursAvailable(club, day);
    }
  }, [club, day]);

  useEffect(() => {
    console.log(shiftSelection);
    // console.log(hourShift);
  }, [shiftSelection]);

  return (
    <ImageBackground
      style={styles.container}
      source={ImgBackground}
      resizeMode="cover"
    >
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
              inputStyles={{ fontSize: 20, color: "white" }}
              search={false}
              boxStyles={styles.container.find.options.input}
              dropdownStyles={{
                alignItems: "center",
                borderColor: "white",
              }}
              dropdownTextStyles={{
                fontSize: 15,
                color: colors.blueDark,
                fontWeight: "bold",
                textAlign: "center",
              }}
              // dropdownShown={false}
            />
          </View>
          <View>
            <SelectList
              data={optionDays}
              setSelected={setDay}
              placeholder="Selecciona el dia"
              search={false}
              inputStyles={{ fontSize: 20, color: "white" }}
              boxStyles={styles.container.find.options.input}
              dropdownStyles={{
                alignItems: "center",
                borderColor: "white",
              }}
              dropdownTextStyles={{
                fontSize: 15,
                color: colors.blueDark,
                fontWeight: "bold",
                textAlign: "center",
              }}
            />
          </View>
          {shiftSelection?.club && shiftSelection?.day && (
            <View>
              <SelectList
                data={optionHours}
                setSelected={setKeyHour}
                save="key"
                placeholder="Selecciona el horario"
                search={false}
                notFoundText="No hay turnos disponibles"
                inputStyles={{ fontSize: 20, color: "white" }}
                boxStyles={styles.container.find.options.input}
                dropdownStyles={{ alignItems: "center", borderColor: "white" }}
                dropdownTextStyles={{
                  fontSize: 15,
                  color: colors.blueDark,
                  fontWeight: "bold",
                }}
              />
            </View>
          )}
        </View>

        <View>
          <SelectShift
            shiftSelection={shiftSelection}
            navigation={navigation}
          />
        </View>
      </View>
    </ImageBackground>
  );
};

export default FindShifts;
