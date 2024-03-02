import React, { useState, useRef } from "react";
import {
  View,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
  TextInput,
} from "react-native";
import Search from "../assets/heroSection/search-icon.png";

export default function HeroSection ()  {
  const [searchText, setSearchText] = useState("");
  const refInput = useRef(null);
  function handleChange(text) {
    setSearchText(text);
  }
  return (
    <View style={styles.heroContainer}>
      <Text style={styles.subTitle}>Food</Text>
      <Text style={styles.mainTitle}>Delivery</Text>
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
          onChangeText={handleChange}
        />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  heroContainer: {
    paddingVertical: 5,
  },
  subTitle: {
    fontSize: 16,
    fontFamily: "Montserrat-Regular",
  },
  mainTitle: {
    fontSize: 32,
    fontWeight: "bold",
    fontFamily: "Montserrat-Bold",
  },
  searchboxContainer: {
    paddingVertical: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    marginRight: 20, // Add margin between the icon and the input
  },
  searchImage: {
    height: 24,
    width: 24,
    marginRight: 10, // Adjust spacing between the icon and the input
  },
  searchInput: {
    height: 28,
    flex: 1,
    fontSize: 16,
    fontFamily: "Montserrat-Regular",
    borderBottomColor: "#DBD7D7",
    borderBottomWidth: 2,
  },
});
