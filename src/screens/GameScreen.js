import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

const GameScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      {/* Lingkaran Atas */}
      <Image
        source={require('../assets/Ellipse.png')} // Ganti dengan path gambar lingkaran atas Anda
        style={styles.ellipseTop}
      />

      {/* Logo Suit Game */}
      <Image
        source={require('../assets/Logo.png')} // Ganti dengan path gambar logo Anda
        style={styles.logo}
      />

      {/* Tombol-tombol */}
      <View style={styles.content}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('PlayScreen')} // Navigasi ke Game
        >
          <Text style={styles.buttonText}>Play</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.button, styles.instruction]}
          onPress={() => navigation.navigate('InstructionNext1')} // Tampilkan instruksi atau navigasi ke instruksi
        >
          <Text style={styles.buttonText}>Instruction</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.button, styles.exitButton]}
          onPress={() => navigation.navigate('LoginScreen')} // Kembali ke halaman sebelumnya (Login)
        >
          <Text style={styles.buttonText}>Logout</Text>
        </TouchableOpacity>
      </View>

      {/* Lingkaran Bawah */}
      <Image
        source={require('../assets/shape.png')} // Ganti dengan path gambar lingkaran bawah Anda
        style={styles.ellipseBottom}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    flexGrow:1,
    alignSelf:'stretch',
    width:'auto',
    // borderWidth:1,
  },
  ellipseTop: {
    width: 400, 
    height: 170,
    resizeMode: 'stretch',
    position: 'absolute',
    top: 0, 
  },
  ellipseBottom: {
    width: 400,
    height: 250,
    resizeMode: 'stretch',
    position: 'absolute',
    bottom: 0,
  },
  logo: {
    width: 350, 
    height: 300,
    resizeMode: 'contain',
    position: 'absolute',
    top: '20%', 
  },
  content: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 250, 
  },
  button: {
    backgroundColor: '#0EC6DE',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    width: 300, // Lebar tombol
    // height : 100,
    alignItems: 'center',
  },
  instruction: {
    backgroundColor: '#FFDB0A', // Warna tombol Exit
  },
  exitButton: {
    backgroundColor: '#E25532', // Warna tombol Exit
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default GameScreen;