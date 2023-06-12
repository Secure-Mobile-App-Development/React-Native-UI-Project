import React from 'react';
import { View, StyleSheet } from 'react-native';
import NavigationBar from './components/NavBar';
import HeroSection from './components/HeroSection';
import PopularPizzas from './components/PopularPizza';
import Categories from './components/Category';

const App = () => {
  return (
    <View style={styles.container}>
      <NavigationBar />
      <HeroSection />
      <Categories />
      <PopularPizzas />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: "100%",
    width: "100%",
    padding: 20,
    paddingTop: 40,
    backgroundColor: "#fafafa",
  }
});

export default App;
