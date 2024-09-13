import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";

const InstructionScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Image
          source={require("../assets/emoji2.png")} // Ganti dengan path gambar emoji atas kiri
          style={styles.emojiTopLeft}
        />
        <Text style={styles.headerText}>Instruction</Text>
        <Image
          source={require("../assets/Fill.png")} // Ganti dengan path gambar emoji atas kanan
          style={styles.emojiTopRight}
        />
      </View>

      {/* Content */}
      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.instructionText}>
          • Pemain dapat memilih dari 3 pilihan, batu gunting dan kertas{"\n"}•
          Pemain melawan computer{"\n"}• Sistem yang digunakan berupa poin, +1
          jika menang, 0 jika kalah dan draw dalam permainan{"\n"}• Jumlah Poin
          untuk memenangkan permainan adalah 3 poin (Mintol){"\n"}• Jika
          permainan selesai, pemain dapat melakukan permainan Kembali atau
          memilih Kembali ke menu awal
        </Text>
      </ScrollView>

      <TouchableOpacity
        style={styles.startButton}
        onPress={() => navigation.navigate("PlayScreen")}
      >
        <Image
          source={require("../assets/emoji1.png")} // Ganti dengan path gambar emoji bawah kanan
          style={styles.emojiBottomRight}
        />
        <Text style={styles.startButtonText}>Start Game</Text>
      </TouchableOpacity>

      <Image source={require("../assets/Fill.png")} style={styles.emojiRight} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white", // Warna background halaman
  },
  header: { // Warna background button
    padding: 15,
    borderRadius: 10,
    marginTop: 100,
    marginLeft: 40,
    width: 300,
    height: 60,
    alignItems: "center",
  },
  headerText: {
    top: 60,
    left: 30,
    position: 'absolute',
    marginLeft: 60,
    fontSize: 36,
    fontWeight: 'bold',
    color: '#7FC8F8', // Warna teks pada header
    textShadowColor: 'black', // Warna stroke
    textShadowOffset: { width: -2, height: 2 }, // Offset bayangan
    textShadowRadius: 2, // Radius bayangan
  },
  emojiTopLeft: {
    width: 70,
    height: 80,
    position: "absolute",
    left: 10,
    top: 25,
  },
  emojiTopRight: {
    width: 400,
    height: 400,
    marginTop: -370,
    position: "absolute",
    alignSelf: "center",
    zIndex: -200,
  },
  emojiRight: {
    width: 500,
    height: 500,
    marginTop: 650,
    position: "absolute",
    alignSelf: "center",
    right: 0,
    zIndex: -99,
  },
  content: {
    padding: 20,
    alignItems: "center",
  },
  instructionText: {
    fontSize: 16,
    color: "#333",
    lineHeight: 24,
    marginTop: 90,
    fontWeight: "bold",
  },
  startButton: {
    backgroundColor: "#FDD835", // Warna background button
    padding: 15,
    borderRadius: 10,
    marginBottom: 200,
    marginLeft: 40,
    width: 300,
    height: 50,
    alignItems: "center",
  },
  startButtonText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#ffffff", // Warna teks pada tombol
  },
  emojiBottomRight: {
    width: 70,
    height: 80,
    position: "absolute",
    right: 10,
    bottom: -40,
  },
});

export default InstructionScreen;
