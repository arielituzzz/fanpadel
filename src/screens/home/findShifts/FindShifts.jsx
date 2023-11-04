import { useState } from "react";
import styles from "./findShifts.style";
import { useSelector } from "react-redux";
import { View, Text } from "react-native";
import { SelectList } from "react-native-dropdown-select-list";
import SelectShift from "./components/selectShift/SelectShift";
const FindShifts = ({ navigation }) => {
  const { selectionFind } = useSelector((state) => state.general);

  const [day, setDay] = useState(null);
  const [hour, setHour] = useState(null);
  const [club, setClub] = useState(null);
  let todayDay = new Date().getDate() - 1;
  const todayMonth = new Date().getMonth();
  const todayYear = new Date().getFullYear();
  let todayHour = new Date().getHours();

  const clubs = [
    "El talar Padel",
    "Norbi",
    "Los Aromos",
    "El tablon",
    "El Rayo Padel",
    "Punto Padel",
  ];

  const optionsDate = [];
  const optionsHour = [];

  for (let i = 0; i < 7; i++) {
    todayDay = todayDay + 1;
    const date = `${todayDay}/${todayMonth}/${todayYear}`;
    optionsDate.push(
      i === 0 ? { key: date, value: `${date} HOY` } : { key: date, value: date }
    );
  }
  for (let i = 0; i < 7; i++) {
    todayHour = todayHour + 2;
    if (todayHour > 22) {
      break;
    }

    const rangeMaxHour = todayHour + 2;

    const rangeHour = {
      min: todayHour,
      max: rangeMaxHour,
    };

    optionsHour.push({
      key: rangeHour,
      value: `${todayHour} a ${rangeMaxHour}`,
    });
  }

  return (
    <View style={styles.container}>
      <View style={styles.container.title}>
        <Text style={styles.container.title.text}>CENTRAL DE TURNOS</Text>
      </View>
      <View style={styles.container.find}>
        <View>
          <View>
            <SelectList
              data={clubs}
              setSelected={setClub}
              placeholder="Selecciona el club"
              // dropdownShown={false}
            />
          </View>
          <View>
            <SelectList
              data={optionsDate}
              setSelected={setDay}
              placeholder="Selecciona el dia"
              // dropdownShown={false}
            />
          </View>
          <View>
            <SelectList
              data={optionsHour}
              setSelected={setHour}
              placeholder="Rango de horario"
              // dropdownShown={false}
            />
          </View>
        </View>
        <View>
          <SelectShift />
        </View>
      </View>
    </View>
  );
};

export default FindShifts;
