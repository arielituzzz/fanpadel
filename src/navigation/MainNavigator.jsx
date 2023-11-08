import React from "react";
import { useSelector } from "react-redux";

import AuthNavigator from "./AuthNavigator";
import BottomTabNavigator from "./bottomTabNavigator/BottomTabNavigator";

const MainNavigator = () => {
  const { login } = useSelector((state) => state.user);

  return login ? <BottomTabNavigator /> : <AuthNavigator />;
};

export default MainNavigator;
