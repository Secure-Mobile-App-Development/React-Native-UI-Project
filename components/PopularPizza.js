import React, { Component } from "react";
import {
  View,
  StyleSheet,
  Text,
  Button,
  Image,
  TouchableOpacity,
} from "react-native";
import awePizza from "./awepizza.png";
import bestPizza from "../assets/popularPizza/best-pizza-logo.png";

import MontserratRegular from "../assets/fonts/Montserrat-Regular.ttf";
import MontserratBold from "../assets/fonts/Montserrat-Bold.ttf";
import MontserratSemiBold from "../assets/fonts/Montserrat-SemiBold.ttf";
import { useFonts } from "expo-font";
import BlackAddLogo from "../assets/popularPizza/best-pizza-add-logo-black.png"
import Star from "../assets/popularPizza/rating-logo.png"

const PopularPizzas = () => {
  let [fontsLoaded] = useFonts({
    "Montserrant-Regular": MontserratRegular,
    "Montserrant-Bold": MontserratBold,
    "Montserrant-Semi-Bold": MontserratSemiBold,
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={styles.popularContainer}>
      <Text style={styles.popularContainerTitle}>Popular </Text>

      <View style={styles.popularCards}>
        <TouchableOpacity style={styles.addButtonTocart}>
          <Image source={BlackAddLogo} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.pizzaRating}>
          <Image source={Star} />
          <Text style={styles.pizzaRatingNumber}>5.0</Text>
        </TouchableOpacity>
        <View style={styles.popularPizzaInfo}>
          <View style={styles.bestPizzaLogoContainer}>
            <Image style={styles.bestPizzaLogo} source={bestPizza} />
            <Text style={styles.bestPizzaLogoText}>Top of the Week</Text>
          </View>
          <Text style={styles.pizzaName}>Primavera Pizza</Text>
          <Text style={styles.pizzaWeight}>Weight 550 gm</Text>
        </View>
        <Image style={styles.popularPizzaImage} source={awePizza}></Image>
      </View>

      <View style={styles.popularCards}>
        <TouchableOpacity style={styles.addButtonTocart}>
          <Image source={BlackAddLogo} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.pizzaRating}>
          <Image source={Star} />
          <Text style={styles.pizzaRatingNumber}>5.0</Text>
        </TouchableOpacity>
        <View style={styles.popularPizzaInfo}>
          <View style={styles.bestPizzaLogoContainer}>
            <Image style={styles.bestPizzaLogo} source={bestPizza} />
            <Text style={styles.bestPizzaLogoText}>Top of the Week</Text>
          </View>
          <Text style={styles.pizzaName}>Primavera Pizza</Text>
          <Text style={styles.pizzaWeight}>Weight 550 gm</Text>
        </View>
        <Image style={styles.popularPizzaImage} source={awePizza}></Image>
      </View>

      


    </View>
  );
};

const styles = StyleSheet.create({
  popularContainer: {
    width: "100%",
    display: "flex",
    alignContent: "flex-start",
    flexDirection: "column",
    rowGap: 15,
  },
  popularContainerTitle: {
    fontSize: 16,
    fontFamily: "Montserrant-Bold",
  },
  popContainerSubTitle: {
    fontSize: 16,
    fontWeight: "bold",
  },
  popularPizzaInfo: {
    height: "100%",
    paddingTop: 20,
    fontSize: 16,
    fontWeight: "bold",
    marginTop: "-20%",
  },
  bestPizzaLogoContainer: {
    width: 150,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  bestPizzaLogo: {
    height: 19,
    width: 19,
  },
  bestPizzaLogoText : {
    fontSize: 14,
    fontFamily: "Montserrant-Bold",
  },
  pizzaRatingNumber : {
    fontSize: 12,
    fontFamily: "Montserrant-Semi-Bold",

  },
  bestPizzaText: {
    fontFamily: "Montserrant-Bold",
    fontSize: 14,
  },
  addButtonTocart : {
    position: "absolute",
    height: 50,
    width: 95,
    backgroundColor: "#FFC225",
    bottom: 0,
    left: 0,
    borderTopRightRadius: 15,
    borderBottomLeftRadius: 15,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  pizzaRating : {
    position: "absolute",
    bottom: 15,
    left: 110,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    columnGap: 7,

  },
  btn: {
    backgroundColor: "#fd0f1d",
    borderRadius: 50,
  },
  pizzaName: {
    fontSize: 16,
    fontFamily: "Montserrant-Semi-Bold",
    paddingTop: 10,
  },
  pizzaWeight: {
    fontSize: 12,
    fontFamily: "Montserrant-Semi-Bold",
    paddingTop: 10,
    color: "#C4C4C4",
  },
  catergContainers: {
    display: "flex",
    flexDirection: "row",
    gap: 20,
    height: 150,
  },
  popularCards: {
    height: 170,
    backgroundColor: "#fff",
    flexDirection: "row",
    display: "flex",
    alignItems: "center",
    alignContent: "flex-start",
    flexWrap: "wrap",
    flexGrow: 1,
    borderRadius: 15,
    paddingTop: 15,
    justifyContent: "space-around",
    elevation: 10,
    shadowColor: "#000",
    position: "relative",
  },
  popularPizzaImage: {
    height: 120,
    width: 120,
  },
});

export default PopularPizzas;
