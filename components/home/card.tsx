import React from "react";
import { View, Text, Image } from "react-native"; // Import Image from 'react-native'
import { Animated, Dimensions, FlatList } from "react-native";
import hero from "./assets/hero.png";

type Props = {};

const screenWidth = Dimensions.get("window").width;
const boxWidth = screenWidth - 30; // 20 padding on each side
const halfBoxDistance = boxWidth / 2;

const CardComponent = (props: Props) => {
  const pan = React.useRef(new Animated.ValueXY()).current;

  const renderItem = ({ item, index }: any) => (
    <Animated.View
      style={{
        transform: [
          {
            scale: pan.x.interpolate({
              inputRange: [
                (index - 1) * boxWidth - halfBoxDistance,
                index * boxWidth - halfBoxDistance,
                (index + 1) * boxWidth - halfBoxDistance,
              ],
              outputRange: [0.8, 1, 0.8],
              extrapolate: "clamp",
            }),
          },
        ],

      }}
    >
      <View
        style={{
          width: boxWidth,
          borderRadius: 24,
          height: 150,
        }}
      >
        {/* Display the image using the Image component */}
        <Image
          source={item.uri}
          resizeMode="contain" // This ensures the image fits within the container
          style={{
            width: "100%", // Adjust as needed
            height: "100%", // Adjust as needed
          }}
        />
      </View>
    </Animated.View>
  );

  return (
    <View style={{ backgroundColor: "grey", width: "100%" }}>
      <FlatList
        horizontal={true}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: pan.x } } }],
          { useNativeDriver: false }
        )}
        keyExtractor={(item, index) => `${index}-${item}`}
        renderItem={renderItem}
        contentContainerStyle={{ paddingHorizontal: 10 }}
        data={[{ uri: hero }, { uri: hero }]} // Ensure data is an array of objects with keys that Image expects
        contentInsetAdjustmentBehavior="never"
        snapToAlignment="center"
        decelerationRate="fast"
        automaticallyAdjustContentInsets={false}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        scrollEventThrottle={1}
      />
    </View>
  );
};

export default CardComponent;
