import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
// import * as Location from "expo-location";

// import AuthStackNavigator from "./AuthStackNavigator";
import BottomTabNavigator from "./bottomTabNavigator/BottomTabNavigator";
// import { setCameraImage, setDataUser } from "../features/auth/authSlice";
// import { setLocation } from "../features/general/generalSlice";
// import { useGetDataUserQuery } from "../services/shopApi";

const MainNavigator = () => {
  const { login } = useSelector((state) => state.user);
  // const dispatch = useDispatch();
  // const { data, error, isLoading } = useGetDataUserQuery(localId);

  // useEffect(() => {
  //   (async () => {
  //     let { status } = await Location.requestForegroundPermissionsAsync();
  //     if (status !== "granted") {
  //       console.log("permission denied");
  //       return;
  //     }
  //     let location = await Location.getCurrentPositionAsync({});
  //     const userLocation = {
  //       latitude: location.coords.latitude,
  //       longitude: location.coords.longitude,
  //     };
  //     dispatch(setLocation(userLocation));
  //   })();
  // }, []);

  // useEffect(() => {
  //   if (data) {
  //     console.log("trayendo data");
  //     console.log(data.image && "imagen traida correctamente");

  //     const user = {
  //       name: data.name,
  //       lastName: data.lastName,
  //       gender: data.gender,
  //       email: data.email,
  //       image: data.image,
  //       update: data.update,
  //     };
  //     dispatch(setCameraImage(user.image));
  //     dispatch(setDataUser(user));
  //   }
  // }, [data, localId]);

  // return user ? <BottomTabNavigator /> : <AuthStackNavigator />;
  return login && <BottomTabNavigator />;
};

export default MainNavigator;
