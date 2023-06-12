import React, { Component, useState, useRef } from "react";
import {
  View,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
  TextInput,
} from "react-native";
import Search from "../assets/heroSection/search-icon.png";
import { useFonts } from "expo-font";
import MontserratRegular from "../assets/fonts/Montserrat-Regular.ttf";
import MontserratBold from "../assets/fonts/Montserrat-Bold.ttf";

const HeroSection = () => {
  const [searchText, setSearchtext] = useState("");
  const refInput = useRef(null);
  let [fontsLoaded] = useFonts({
    "Montserrant-Regular": MontserratRegular,
    "Montserrant-Bold": MontserratBold,
  });

  if (!fontsLoaded) {
    return null;
  }

  function handleChange(e) {
    setSearchtext(e.target.value);
  }

  return (
    <View style={styles.heroContainer}>
      <Text style={styles.subTitle}>Food </Text>
      <Text style={styles.mainTitle}>Delivery </Text>
      <View style={styles.searchboxContainer}>
        <TouchableOpacity onPress={() => refInput.current.focus()}>
          <Image
            style={styles.searchImage}
            source={Search}
            alt="search button"
          />
        </TouchableOpacity>
        <TextInput
          style={styles.searchInput}
          placeholder="Search..."
          ref={refInput}
          value={searchText}
          onChange={handleChange}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  heroContainer: {
    height: 115,
    width: "100%",
    paddingTop: 5,
    paddingBottom: 5,
    display: "flex",
    alignContent: "flex-start",
    flexDirection: "column",
  },
  subTitle: {
    fontSize: 16,
    fontFamily: "Montserrant-Regular",
  },
  mainTitle: {
    fontSize: 32,
    fontWeight: "bold",
    fontFamily: "Montserrant-Bold",
  },
  searchboxContainer: {
    width: "100%",
    height: 30,
    paddingTop: 20,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 15,
  },
  searchImage: {
    height: 24,
    width: 24,
  },
  searchInput: {
    height: 28,
    width: "83%",
    fontSize: 16,
    fontFamily: "Montserrant-Regular",
    borderBottomColor: "#DBD7D7",
    borderBottomWidth: 1,
  },
});

export default HeroSection;
