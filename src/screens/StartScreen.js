import React from 'react';
import { View, Image, StyleSheet, Text } from 'react-native';
import gameDoodle from '../assets/gameDoodle.png';
import { TouchableOpacity } from 'react-native-web';
import { useNavigation } from '@react-navigation/native';

const StartScreen = () => {

    const navigation = useNavigation();

    const goPlay = () => {
        navigation.navigate('PlayScreen', {reset: true});
    };

    return (
        <View style={styles.screen}>
            <Image
                style={styles.image}
                source={gameDoodle}
            />
            <TouchableOpacity style={[styles.button, {
                backgroundColor: '#0EC6DE',
            }]}
            onPress={goPlay}
            >
                <Text style={styles.buttonText}>
                    Play
                </Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.button, {
                backgroundColor: '#FFDB0A',
            }]}>
                <Text style={styles.buttonText} >
                    Instruksi
                </Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.button, {
                backgroundColor: '#E25532',
            }]}>
                <Text style={styles.buttonText}>
                    Exit
                </Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    image: {
        width: 340,
        height: 340,
        resizeMode: 'contain',
    },
    button: {
        width: '80%',
        height: 50,
        borderRadius: 20,
        padding: 10,
        alignItems: 'center',
        marginTop: 20,
        shadowColor: '#171717',
        shadowOffset: { width: -2, height: 4 },
        shadowOpacity: 0.2,
        shadowRadius: 3,
    },
    buttonText: {
        color: '#fff',
        fontWeight: 600,
        fontSize: 18,
    },
});

export default StartScreen;
