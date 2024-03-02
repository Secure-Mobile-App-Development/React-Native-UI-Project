import React from "react";
import { View, StyleSheet, Text, TouchableOpacity, Image } from "react-native";
import awePizza from "./awepizza.png";
import bestPizza from "../assets/popularPizza/best-pizza-logo.png";
import BlackAddLogo from "../assets/popularPizza/best-pizza-add-logo-black.png";
import Star from "../assets/popularPizza/rating-logo.png";

const pizzas = [
  {
    name: "Primavera Pizza",
    weight: 500,
    star: "5.0",
    isBest: true,
  },
  {
    name: "Chicken Delight",
    weight: 450,
    star: "4.3",
    isBest: false,
  },
];

export default function PopularPizzas() {
  return (
    <View>
      <Text style={styles.popularContainerTitle}>Popular </Text>
      {pizzas.map((pizza, idx) => (
        <PizzaItem
          {...pizza}
          key={idx}
        />
      ))}
    </View>
  );
}

function PizzaItem({ name, star, weight, isBest }) {
  return (
    <View style={styles.popularCards}>
      <View style={styles.pizzaData}>
        <View style={{ paddingLeft: 20 }}>
          {isBest && (
            <View style={styles.bestPizzaLogoContainer}>
              <Image style={styles.bestPizzaLogo} source={bestPizza} />
              <Text style={styles.bestPizzaLogoText}>Top of the Week</Text>
            </View>
          )}
          <Text style={styles.pizzaName}>{name}</Text>
          <Text style={styles.pizzaWeight}>Weight {weight} gm</Text>
        </View>
        <View style={{ flexDirection: "row" }}>
          <TouchableOpacity style={styles.addButtonTocart}>
            <Image source={BlackAddLogo} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.pizzaRating}>
            <Image source={Star} />
            <Text style={styles.pizzaRatingNumber}>{star}</Text>
          </TouchableOpacity>
        </View>
      </View>
      <Image style={styles.popularPizzaImage} source={awePizza}></Image>
    </View>
  );
}

const styles = StyleSheet.create({
  popularContainerTitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 8,
  },
  popularCards: {
    backgroundColor: "#fff",
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 15,
    justifyContent: "space-between",
    elevation: 5,
    shadowColor: "#000",
    marginBottom: 15,
  },
  popularPizzaImage: {
    height: 120,
    marginRight: 25,
    width: 120,
  },
  addButtonTocart: {
    height: 50,
    width: 95,
    marginRight: 10,
    backgroundColor: "#FFC225",
    borderTopRightRadius: 15,
    borderBottomLeftRadius: 15,
    alignItems: "center",
    justifyContent: "center",
  },
  pizzaData: {
    paddingTop: 10,
    flexDirection: "column",
    gap: 20,
  },
  pizzaRating: {
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    columnGap: 7,
  },
  bestPizzaLogo: {
    height: 19,
    width: 19,
    marginRight: 10,
  },
  bestPizzaLogoContainer: {
    flexDirection: "row",
  },
  bestPizzaLogoText: {
    fontSize: 14,
    fontWeight: "bold",
  },
  pizzaRatingNumber: {
    fontSize: 12,
    fontWeight: "bold",
  },
  pizzaName: {
    fontSize: 16,
    fontWeight: "bold",
    paddingTop: 10,
  },
  pizzaWeight: {
    fontSize: 12,
    paddingTop: 10,
    color: "#C4C4C4",
  },
});
