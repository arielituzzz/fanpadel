import { View, Text, ImageBackground, Image } from "react-native";
import React from "react";
import styles from "./news.style";
import ImgBackground from "../../assets/imgs/1676542150_comparador.thigh.jpg";
import ImgConstruction from "../../assets/imgs/109640615-señal-de-tránsito-en-construcción-diseño-de-ilustración-vectorial-removebg-preview.png";

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
      <Image source={ImgConstruction} style={styles.container.img} />
    </ImageBackground>
  );
};

export default News;
