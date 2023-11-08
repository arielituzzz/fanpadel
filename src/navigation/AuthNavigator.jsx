import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Signup, Login } from "../screens";

const Auth = createNativeStackNavigator();

function AuthNavigator() {
  return (
    <Auth.Navigator initialRouteName="Login">
      <Auth.Screen name="Signup" component={Signup} />
      <Auth.Screen name="Login" component={Login} />
    </Auth.Navigator>
  );
}

export default AuthNavigator;
