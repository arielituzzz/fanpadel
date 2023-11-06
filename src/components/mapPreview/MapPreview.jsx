import { Image, View } from "react-native";

import React from "react";
import { googleApi } from "../../firebase";
import styles from "./mapPreview.style";
import { colors } from "../../constants/colors";

const MapPreview = ({ location }) => {
  const mapPreviewUrl = `https://maps.googleapis.com/maps/api/staticmap?center=${location.latitude},${location.longitude}&zoom=13&size=600x300&maptype=roadmap&markers=color:green%7Clabel:Me%7C${location.latitude},${location.longitude}&key=${googleApi.mapStatic}`;
  return (
    <View style={styles.mapPreview}>
      <Image style={styles.mapImage} source={{ uri: mapPreviewUrl }} />
    </View>
  );
};

export default MapPreview;
