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

const InstructionNext3 = () => {
  const navigation = useNavigation();
  const playy = () => {
    navigation.navigate("Instruction"); // nanti diubah ke halaman instruksi manual
  };
  return (
    <ImageBackground
      source={require("../assets/InstruksiNext3.png")}
      style={styles.background}
      resizeMode="cover" // Mengatur mode gambar agar cover penuh
    >
      <View>
        <TouchableOpacity style={styles.nextButton} onPress={playy}>
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
    // marginTop: 30,
    resizeMode: "cover"
  },
  nextButton: {
    backgroundColor: "#FFD700",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    alignSelf: "flex-start", // Menempatkan tombol di kiri layar
    marginLeft: 25,
    marginTop: 680, // Menambahkan ruang semua elemen untuk mendorong ke atas. untuk tombol next ke bawah
  },
  nextButtonText: {
    fontSize: 24,
    fontWeight: "bold",
    color: "black",
  },
});

export default InstructionNext3;
