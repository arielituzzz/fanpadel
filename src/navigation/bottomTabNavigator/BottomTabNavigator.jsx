import NewsNavigator from "../NewsNavigator";
import HomeNavigator from "../HomeNavigator";
import { Profile, Shifts } from "../../screens";
import { FontAwesome } from "@expo/vector-icons/";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import styles from "./bottomTabNavigator.style";
import { colors } from "../../constants/colors";
import { Text, View } from "react-native";

const BottomTab = createBottomTabNavigator();

function BottomTabNavigator() {
  return (
    <BottomTab.Navigator
      initialRouteName="Shop"
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: styles.tabBar,
      }}
    >
      <BottomTab.Screen
        name="Shop"
        component={HomeNavigator}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={focused ? styles.tabBar.iconContainer : null}>
              <FontAwesome name="home" size={24} color={colors.dark} />
            </View>
          ),
        }}
      />
      <BottomTab.Screen
        name="NewsNav"
        component={NewsNavigator}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={focused ? styles.tabBar.iconContainer : null}>
              <FontAwesome name="newspaper-o" size={24} color={colors.dark} />
            </View>
          ),
        }}
      />
      <BottomTab.Screen
        name="ShiftsNav"
        component={Shifts}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={focused ? styles.tabBar.iconContainer : null}>
              <FontAwesome name="calendar" size={24} color={colors.dark} />
            </View>
          ),
        }}
      />
      <BottomTab.Screen
        name="ProfileNav"
        component={Profile}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={focused ? styles.tabBar.iconContainer : null}>
              <FontAwesome name="user" size={24} color={colors.dark} />
            </View>
          ),
        }}
      />
    </BottomTab.Navigator>
  );
}

export default BottomTabNavigator;
