import React from "react";
import {
  ImageBackground,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  Text,
  View,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

const { width, height } = Dimensions.get("window");

const InstructionNext1 = () => {
  const navigation = useNavigation();
  const next1 = () => {
    navigation.navigate("InstructionNext2");
  };

  return (
    <ImageBackground
      source={require("../assets/InstruksiNext1.png")}
      style={styles.background}
      resizeMode="cover" // Mengatur mode gambar agar cover penuh
    >
      <View>
        <TouchableOpacity style={styles.nextButton} onPress={next1}>
          <Text style={styles.nextButtonText}>Next</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    // width: width, // Mengisi seluruh lebar layar
    // height: height, // Mengisi seluruh tinggi layar
    // marginTop: 28,
    resizeMode: "cover",
  },
  nextButton: {
    backgroundColor: "#FFD700",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    alignSelf: "flex-start", // Menempatkan tombol di kiri layar
    marginLeft: 7,
    marginTop: 680
, // Menambahkan ruang semua elemen untuk mendorong ke atas. untuk tombol next ke bawah
  },
  nextButtonText: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#fff",
  },
});

export default InstructionNext1;
