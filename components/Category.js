import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
  FlatList,
} from "react-native";
import { useFonts } from "expo-font";

import MontserratRegular from "../assets/fonts/Montserrat-Regular.ttf";
import MontserratBold from "../assets/fonts/Montserrat-Bold.ttf";

const pizzaLogo = require("../assets/categories/pizza-logo.png");
const tropicalDrink = require("../assets/categories/tropical-drink-logo.png");
const seafoodLogo = require("../assets/categories/seafood-logo.png");
const blackArrow = require("../assets/categories/black-arrow.png");
const whiteArrow = require("../assets/categories/red-arrow.png");

function myfxn(x) {
  if (x === 1) return pizzaLogo;
  if (x === 2) return tropicalDrink;
  if (x === 3) return seafoodLogo;
}

let CATEGORIES = [
  {
    key: 1,
    image: 1,
    name: "Pizza",
  },
  {
    key: 2,
    image: 2,
    name: "Seafood",
  },
  {
    key: 3,
    image: 3,
    name: "Colddrink",
  },
];

export default function  Categories () {
  const [selectedId, setSelectedId] = useState(1);

  let [fontsLoaded] = useFonts({
    "Montserrant-Regular": MontserratRegular,
    "Montserrant-Bold": MontserratBold,
  });

  if (!fontsLoaded) {
    return null;
  }

  function selectedButton(key) {
    if (key === selectedId) return blackArrow;
    return whiteArrow;
  }

  const renderCard = ({ item }) => {
    const backgroundColor = item.key === selectedId ? "#FFC225" : "#FFFFFF";
    const backgroundArrowColor =
      item.key === selectedId ? "#FFFFFF" : "#FD0F1D";
    return (
      <TouchableOpacity
        activeOpacity={1}
        onPress={() => setSelectedId(item.key)}
      >
        <View style={{ ...styles.card, backgroundColor: backgroundColor }}>
          <Image style={styles.cardImage} source={myfxn(item.image)}></Image>
          <Text style={styles.cardText}>{item.name}</Text>
          <TouchableOpacity
            style={{
              borderRadius: 50,
              backgroundColor: backgroundArrowColor,
            }}
          >
            <Image source={selectedButton(item.key)} />
          </TouchableOpacity>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.categoryContainer}>
      <Text style={styles.categoryTitle}>Categories </Text>
      <FlatList
        horizontal={true}
        data={CATEGORIES}
        renderItem={renderCard}
        keyExtractor={(item) => item.key}
        extraData={selectedId}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          overflow: "visible",
          padding: 5,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  categoryContainer: {
    height: 200,
    width: "100%",
    paddingTop: 10,
    display: "flex",
    flexDirection: "column",
    rowGap: 15,
  },
  categoryTitle: {
    fontSize: 16,
    fontFamily: "Montserrant-Bold",
  },
  card: {
    padding: 10,
    backgroundColor: "#fff",
    height: "95%",
    minWidth: 93,
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    marginRight: 15,
    borderRadius: 10,
    elevation: 10,
    shadowColor: "#000",
    overflow: "visible",
  },
  cardImage: {
    height: 51,
    width: 51,
  },
  cardText: {
    fontSize: 16,
    fontFamily: "Montserrant-Bold",
  },
});