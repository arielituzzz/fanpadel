import { View, Text, Image, Pressable } from "react-native";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import * as ImagePicker from "expo-image-picker";
import { setCameraImage } from "../../../../features/user/userSlice";

import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import styles from "./user.style";

const User = () => {
  const dispatch = useDispatch();

  const { category, side, gender, imageCamera } = useSelector(
    (state) => state.user
  );

  const verifyCameraPermissions = async () => {
    const { granted } = await ImagePicker.requestCameraPermissionsAsync();
    if (!granted) {
      return false;
    }
    return true;
  };
  const takePicture = async () => {
    const isCameraOk = await verifyCameraPermissions();

    if (isCameraOk) {
      let result = await ImagePicker.launchCameraAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [9, 16],
        base64: true,
        quality: 0.4,
      });
      if (!result.canceled) {
        dispatch(
          setCameraImage(`data:image/jpeg;base64,${result.assets[0].base64}`)
        );
      }
    }
  };

  return (
    <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
      <View style={styles.boxImage}>
        {imageCamera ? (
          <View style={{ overflow: "hidden", borderRadius: 100 }}>
            <Image
              source={{
                uri: imageCamera,
              }}
              style={styles.boxImage.image}
              resizeMode="cover"
            />
          </View>
        ) : (
          <View style={{ overflow: "hidden", borderRadius: 100 }}>
            <Image
              source={{
                uri:
                  gender === "Male"
                    ? "https://img.freepik.com/premium-vector/default-male-user-profile-icon-vector-illustration_276184-168.jpg"
                    : gender === "Female"
                    ? "https://img.freepik.com/premium-vector/default-female-user-profile-icon-vector-illustration_276184-169.jpg"
                    : "https://e7.pngegg.com/pngimages/753/432/png-clipart-user-profile-2018-in-sight-user-conference-expo-business-default-business-angle-service.png",
              }}
              style={styles.image}
              resizeMode="cover"
            />
          </View>
        )}

        <Pressable style={styles.boxImage.button} onPress={takePicture}>
          <MaterialCommunityIcons name="camera" size={20} color="white" />
          <Text style={styles.boxImage.button.text}>Tomar Foto</Text>
        </Pressable>
      </View>
      <View style={styles.boxDates}>
        <View style={styles.boxDates.items}>
          <Text style={styles.boxDates.items.title}>Categoria</Text>
          <Text style={styles.boxDates.items.date}>{category}</Text>
        </View>
        <View style={styles.boxDates.items}>
          <Text style={styles.boxDates.items.title}>Posicion</Text>
          <Text style={styles.boxDates.items.date}>{side}</Text>
        </View>
      </View>
    </View>
  );
};

export default User;
