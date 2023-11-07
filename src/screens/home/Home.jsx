import React, { useEffect } from "react";
import { View, Text, Pressable, ImageBackground, Image } from "react-native";
import { useGetClubsQuery } from "../../services/clubsApi";
import { useDispatch } from "react-redux";
import { setClubs } from "../../features/general/generalSlice";
import styles from "./home.style";
import ImgBackground from "../../assets/imgs/8214cf822d95f809889c105a69973367.jpg";
import ImgLogo from "../../assets/imgs/logo-app.png";

const Home = ({ navigation }) => {
  const dispatch = useDispatch();
  const { data, isLoading } = useGetClubsQuery();

  useEffect(() => {
    if (!isLoading) {
      dispatch(setClubs(data));
    }
  }, [data]);

  return (
    <ImageBackground
      source={ImgBackground}
      resizeMode="cover"
      style={styles.container}
    >
      <ImageBackground style={styles.container.logoContainer}>
        <Image
          source={ImgLogo}
          style={styles.container.logoContainer.logo}
        ></Image>
      </ImageBackground>
      <View style={styles.container.title}>
        <Text style={styles.container.title.text}>EMPECEMOS</Text>
      </View>
      <View style={styles.container.options}>
        <Pressable
          style={styles.container.options.buttons}
          onPress={() => {
            navigation.navigate("FindShifts");
          }}
        >
          <Text style={styles.container.options.buttons.text}>
            QUIERO JUGAR!
          </Text>
        </Pressable>
      </View>
    </ImageBackground>
  );
};

export default Home;
