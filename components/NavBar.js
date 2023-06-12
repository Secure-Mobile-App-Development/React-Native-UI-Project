import React from "react";
import { View, StyleSheet, Image, TouchableOpacity } from "react-native";
import profileImage from "../assets/navbar/profile-icon.png";
import menuButtons from "../assets/navbar/menu-button.png";

const NavigationBar = () => {
  return (
    <View style={styles.navbar}>
      <Image
        source={profileImage}
        alt="User Profile Logo"
        style={styles.profileImage}
      />
      <TouchableOpacity style={styles.menuContainer}>
        <Image
          source={menuButtons}
          alt="Menu Button For Small Screens"
          style={styles.menuButton}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  navbar: {
    height: 50,
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingTop: 5,
    paddingBottom: 5,
  },
  menuContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  menuButton: {
    width: 32,
    width: 32,
  },
});

export default NavigationBar;
