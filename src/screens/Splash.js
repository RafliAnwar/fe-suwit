import React, { useEffect } from "react";
import { View, Image, StyleSheet } from "react-native";
import { useAuth } from "../context/AuthContext";

const Splash = ({ navigation }) => {
  const { authState } = useAuth();

  useEffect(() => {
    // Set timer untuk mengarahkan ke layar login setelah 3 detik
    const timer = setTimeout(() => {
      if (authState?.authenticated) {
        navigation.replace("GameScreen");
      } else {
        navigation.replace("LoginScreen");
      }
    }, 3000);

    return () => clearTimeout(timer); // Bersihkan timer jika komponen di-unmount
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/Logo.png")} // Tambahkan logo di sini
        style={styles.logo}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ffffff",
  },
  logo: {
    width: 250, // Sesuaikan ukuran logo
    height: 250,
    resizeMode: "contain",
  },
});

export default Splash;
