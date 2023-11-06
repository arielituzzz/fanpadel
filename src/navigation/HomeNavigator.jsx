import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Home, FindShifts, ConfirmationShift } from "../screens";
import { View, Pressable } from "react-native";
// import { Header } from "../components";
import AntDesing from "@expo/vector-icons/AntDesign";
import { colors } from "../constants/colors";

const Stack = createNativeStackNavigator();

function HomeNavigator() {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={({ route, navigation }) => ({
        headerShown: true,
        header: () => (
          <View style={{ flexDirection: "row" }}>
            {route.name !== "Home" ? (
              <Pressable
                onPress={() => navigation.goBack()}
                style={{
                  backgroundColor: colors.blueLight,
                  justifyContent: "center",
                }}
              >
                <AntDesing name="back" size={25} color={"black"} />
              </Pressable>
            ) : null}
            {/* <Header title={route.name} /> */}
            {/* <Header title={route.name === "Home" ? "Home" : "Other Title"} /> */}
          </View>
        ),
      })}
    >
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="FindShifts" component={FindShifts} />
      <Stack.Screen name="ConfirmationShift" component={ConfirmationShift} />
    </Stack.Navigator>
  );
}

export default HomeNavigator;
