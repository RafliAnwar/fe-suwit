import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import kamuMenang from '../assets/kamuMenang.png'
import kamuKalah from '../assets/kamuKalah.png'
import home_btn from '../assets/home_btn.png'
import redo_btn from '../assets/redo_btn.png'
import thumbsUp from '../assets/thumbsUp.png'
import thumbsDown from '../assets/thumbsDown.png'



const WinScreen = () => {
    return (
        <View style={styles.screen}>
            <View style={styles.winContainer}>
                <Image
                    source={kamuMenang}
                    style={styles.winImage}>
                </Image>
            </View>
            <View style={styles.thumbsContainer}>
                <Image
                    source={thumbsUp}
                    style={styles.thumbsImage}>
                </Image>
            </View>
            <View style={styles.button}>
                <TouchableOpacity>
                    
                </TouchableOpacity>
                <TouchableOpacity>

                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: '#0EC6DE',
    },
    button: {
        flexDirection: 'row',
    },
    winContainer: {
        marginTop: 131,
        justifyContent: 'center',
        alignItems: 'center'
    },
    winImage: {
        width: 270,
        height: 200,
    },
    thumbsContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 50,
    },
    thumbsImage: {
        width: 300,
        height: 300,
    },

})

export default WinScreen;