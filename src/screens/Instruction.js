import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

const InstructionScreen = () => {
  const navigation = useNavigation(); // Menggunakan useNavigation untuk mengakses navigasi

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Image
          source={require("../assets/emoji2.png")}
          style={styles.emojiTopLeft}
        />
        <Text style={styles.headerText}>Instruction</Text>
        <Image
          source={require("../assets/Fill.png")}
          style={styles.emojiTopRight}
        />
      </View>

      {/* Content */}
      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.instructionText}>
          • Pemain dapat memilih dari 3 pilihan, batu gunting dan kertas{"\n\n"}
          • Pemain melawan computer{"\n\n"}
          • Sistem yang digunakan berupa poin, +1 jika menang, 0 jika kalah dan
          draw dalam permainan{"\n\n"}
          • Jumlah Poin untuk memenangkan permainan adalah 5 poin{"\n\n"}
          • Jika permainan selesai, pemain dapat melakukan permainan kembali
          atau memilih ke menu awal
        </Text>
      </ScrollView>

      <TouchableOpacity
        style={styles.startButton}
        onPress={() => navigation.navigate("PlayScreen")}
      >
        <Image
          source={require("../assets/emoji1.png")}
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
    backgroundColor: "white",
  },
  header: {
    padding: 15,
    borderRadius: 10,
    marginTop: 50,
    marginHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerText: {
    fontSize: 40,
    fontWeight: "bold",
    color: "#0EC6DE",
    marginLeft: 65,
    marginTop: 100,
    textAlign: 'center',
    textShadowColor: 'black', // Warna stroke
    textShadowOffset: { width: -2, height: 1 }, // Offset stroke
    textShadowRadius: 2, // Radius stroke
  },
  emojiTopLeft: {
    width: 80,
    height: 90,
    position: "absolute",
    left: 10,
    top: 80,
  },
  emojiTopRight: {
    width: 600,
    height: 500,
    // marginTop: -100,
    position: "absolute",
    alignSelf: 'center',
    right: -50,
    zIndex: -1,
    top:-380,
  },
  emojiRight: {
    width: 500,
    height: 500,
    position: "absolute",
    alignSelf: 'center',
    right: 0,
    bottom: -320,
    zIndex:-99,
  },
  content: {
    padding: 20,
    alignItems: "center",
  },
  instructionText: {
    fontSize: 18,
    fontWeight:'bold',
    color: "black",
    lineHeight: 24,
    textAlign: 'justify',
    marginTop: 60,

  },
  startButton: {
    backgroundColor: "#FDD835",
    padding: 5,
    borderRadius: 10,
    marginBottom: 150,
    marginHorizontal: 20,
    alignItems: "center",
    flexDirection: 'row',
    height: 50,
  },
  startButtonText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "black",
    marginLeft: 25,
  },
  emojiBottomRight: { //tengkorak
    width: 80,
    height: 95,
    bottom:-40,
    right: -222,
  },
});

export default InstructionScreen;