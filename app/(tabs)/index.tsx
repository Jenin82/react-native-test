import { StatusBar, StyleSheet } from "react-native";

import EditScreenInfo from "@/components/EditScreenInfo";
import { Text, View } from "@/components/Themed";
import Home from "@/components/home";

export default function TabOneScreen() {
  return (
    <View style={styles.container}>
      <Home />
      <StatusBar barStyle="dark-content" backgroundColor="white" />
      <EditScreenInfo path="app/(tabs)/index.tsx" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "flex-start",
  },
});
