import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import kamuMenang from '../assets/kamuMenang.png'
import kamuKalah from '../assets/kamuKalah.png'
import home_btn from '../assets/home_btn.png'
import redo_btn from '../assets/redo_btn.png'
import thumbsUp from '../assets/thumbsUp.png'
import thumbsDown from '../assets/thumbsDown.png'



const LoseScreen = () => {
    return (
        <View style={styles.screen}>
            <View>
                <Image

                >

                </Image>
            </View>
            <View></View>
            <View style={styles.button}></View>
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: '#0EC6DE',
        justifyContent: 'center',
        alignItems: 'center'
    },
    button: {
        flexDirection: 'row',
    },
})

export default LoseScreen;