import { View, Text, ImageBackground } from "react-native";
import React from "react";
import styles from "./news.style";
import ImgBackground from "../../assets/imgs/1676542150_comparador.thigh.jpg";

const News = () => {
  return (
    <ImageBackground
      style={styles.container}
      source={ImgBackground}
      resizeMode="cover"
    >
      <View style={styles.container.title}>
        <Text style={styles.container.title.text}>NOVEDADES</Text>
      </View>
    </ImageBackground>
  );
};

export default News;
