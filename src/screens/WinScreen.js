import React from 'react';
import { View, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import kamuMenang from '../assets/kamuMenang.png';
import home_btn from '../assets/home_btn.png';
import redo_btn from '../assets/redo_btn.png';
import thumbsUp from '../assets/thumbsUp.png';

const WinScreen = () => {
    const navigation = useNavigation();

    // Function untuk kembali ke PlayScreen dan reset game
    const handleRedo = () => {
        navigation.navigate('PlayScreen', { reset: true }); // Kirim parameter reset
    };

    const goToHome = () => {
        navigation.navigate('StartScreen');
    };

    return (
        <View style={styles.screen}>
            <View style={styles.winContainer}>
                <Image
                    source={kamuMenang}
                    style={styles.winImage}
                />
            </View>
            <View style={styles.thumbsContainer}>
                <Image
                    source={thumbsUp}
                    style={styles.thumbsImage}
                />
            </View>
            <View style={styles.buttonContainer}>
                <TouchableOpacity
                onPress={goToHome}
                >
                    <Image
                        source={home_btn}
                        style={styles.button}
                    />
                </TouchableOpacity>
                <TouchableOpacity onPress={handleRedo}>
                    <Image
                        source={redo_btn}
                        style={styles.button}
                    />
                </TouchableOpacity>
            </View>
        </View>
    );
};


const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: '#0EC6DE',
    },
    winContainer: {
        marginTop: 131,
        justifyContent: 'center',
        alignItems: 'center',
    },
    winImage: {
        width: 270,
        height: 200,
    },
    thumbsContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 70,
    },
    thumbsImage: {
        width: 300,
        height: 300,
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginHorizontal: 50,
    },
    button: {
        width: 80,
        height: 80,
        resizeMode: 'contain',
    },
});

export default WinScreen;
