import { useState } from "react";
import { StyleSheet, SafeAreaView, StatusBar } from "react-native";
import {
  NavigationBar,
  HeroSection,
  PopularPizza,
  Categories,
} from "./components/index";
import { useFonts } from "expo-font";

const App = () => {
  let [fontsLoaded] = useFonts({
    "Montserrant-Regular": require("./assets/fonts/Montserrat-Regular.ttf"),
    "Montserrant-Bold": require("./assets/fonts/Montserrat-Bold.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <SafeAreaView style={styles.container}>
      <NavigationBar />
      <HeroSection />
      <Categories />
      <PopularPizza />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fafafa",
    marginTop: StatusBar.currentHeight + 10,
    paddingHorizontal: 15,
  },
});

export default App;
