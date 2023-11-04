import { News } from "../screens";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();
const NewsNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="News"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="News" component={News} />
    </Stack.Navigator>
  );
};

export default NewsNavigator;
