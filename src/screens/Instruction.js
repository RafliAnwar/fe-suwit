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
        • Sistem yang digunakan berupa poin, +1 jika menang, 0 jika kalah dan draw dalam permainan{"\n\n"}
        • Jumlah Poin untuk memenangkan permainan adalah 5 poin{"\n\n"}
        • Jika permainan selesai, pemain dapat melakukan permainan Kembali atau memilih Kembali ke menu awal
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
    marginLeft : 45,
    marginTop: 10,
    textAlign: 'center',
    textShadowColor: '#000', // Warna stroke,
    textShadowOffset: { width: -1, height: 1 }, // Offset stroke
    textShadowRadius: 2, // Radius stroke
  },
  emojiTopLeft: {
    width: 80,
    height: 90,
    position: "absolute",
    left: 10,
    top: 10,
    alignSelf : 50,
  },
  emojiTopRight: {
    width: 600,
    height: 500,
    marginTop:-480,
    position: "absolute",
    alignSelf:'center',
    right: -50,
    zIndex:-1,
  },
  emojiRight: {
    width: 500,
    height: 500,
    marginTop:580,
    position: "absolute",
    alignSelf:'center',
    right:0,
    bottom:-280,
  },
  content: {
    padding: 20,
    alignItems: "center",
  },
  instructionText: {
    fontSize: 16,
    color: "black", // Warna teks biru
    lineHeight: 24,
    textAlign: 'left', // Untuk penataan yang lebih baik
    marginTop: 20,
  },
  startButton: {
    backgroundColor: "#FDD835",
    padding: 5,
    borderRadius: 10,
    marginBottom: 200,
    marginHorizontal: 20,
    alignItems: "center",
    flexDirection: 'row',
    height:50,
  },
  startButtonText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#ffffff",
    marginLeft: 10,
  },
  emojiBottomRight: { //tengkorak bawah
    width: 90,
    height: 110,
    right:-240,
  },
});

export default InstructionScreen;