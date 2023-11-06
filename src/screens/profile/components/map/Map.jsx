import { View, Text, Pressable } from "react-native";
import React from "react";
import * as Location from "expo-location";
import { MapPreview } from "../../../../components";
import { useDispatch, useSelector } from "react-redux";
import { setLocation } from "../../../../features/user/userSlice";

const Map = () => {
  const dispatch = useDispatch();

  const { location } = useSelector((state) => state.user);
  const locationRequest = async () => {
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== "granted") {
      console.log("permission denied");
      return;
    }
    let location = await Location.getCurrentPositionAsync({});
    const userLocation = {
      latitude: location.coords.latitude,
      longitude: location.coords.longitude,
    };
    dispatch(setLocation(userLocation));
  };

  return (
    <View>
      {!location.latitude || !location.longitude ? (
        <View style={{ marginTop: 20, alignItems: "center" }}>
          <Pressable onPress={locationRequest}>
            <Text style={{ fontSize: 15, color: "white", fontWeight: "bold" }}>
              Click here to get your LOCATION
            </Text>
          </Pressable>
        </View>
      ) : (
        <View style={{ marginTop: 20 }}>
          <Text style={{ textAlign: "center", fontSize: 20 }}>
            Tu Ubicacion Actual
          </Text>
          <MapPreview location={location} />
        </View>
      )}
      <View style={{ marginVertical: 20, alignItems: "center" }}>
        <Text>Ultima actualizacion: HOY</Text>
      </View>
    </View>
  );
};

export default Map;
