import { View, StyleSheet, Image, TouchableOpacity } from "react-native";
import profileImage from "../assets/navbar/profile-icon.png";
import menuButtons from "../assets/navbar/menu-button.png";

export default function NavigationBar() {
  return (
    <View style={styles.navbar}>
      <Image
        source={profileImage}
        alt="User Profile Logo"
        style={styles.profileImage}
      />
      <Image source={menuButtons} style={styles.menuButton} />
    </View>
  );
}

const styles = StyleSheet.create({
  navbar: {
    height: 50,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 5,
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  menuButton: {
    height: 35,
    width: 8,
    marginRight: 20,
  },
});
