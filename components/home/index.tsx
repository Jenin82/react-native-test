import React from "react";
import { Text, View, Image,  ScrollView } from "react-native";
import { styles } from "./styles";
import hero from "./assets/hero.png";
import CardComponent from "./card";

const Home = () => {
  return (
    <View style={styles.Wrapper}>
      {/* <ScrollView
        style={styles.container}
        contentContainerStyle={styles.contentContainer}
        scrollEnabled={true}
        horizontal={true}
        showsHorizontalScrollIndicator={true}
      >
        <Image source={hero} style={styles.imagecontainer} />
        <Image source={hero} style={styles.imagecontainer} />
        <Image source={hero} style={styles.imagecontainer} />
        <Image source={hero} style={styles.imagecontainer} />
        <Image source={hero} style={styles.imagecontainer} />
        <Image source={hero} style={styles.imagecontainer} />
        <Image source={hero} style={styles.imagecontainer} />
        <Image source={hero} style={styles.imagecontainer} />
      </ScrollView> */}
      <CardComponent />
      <View style={styles.Content}>
        <Text>rkjgbhe</Text>
      </View>
    </View>
  );
};

export default Home;
