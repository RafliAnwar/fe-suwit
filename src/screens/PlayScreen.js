import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';

import home_btn from '../assets/home_btn.png';
import rockLeft from '../assets/rockLeft.png';
import paperLeft from '../assets/paperLeft.png';
import scissorsLeft from '../assets/scissorsLeft.png';
import rockRight from '../assets/rockRight.png';
import paperRight from '../assets/paperRight.png';
import scissorsRight from '../assets/scissorsRight.png';
import paper from '../assets/paper.png';
import scissors from '../assets/scissors.png';
import rock from '../assets/rock.png';

const PlayScreen = () => {
    const navigation = useNavigation();
    const route = useRoute(); // Untuk mendapatkan parameter dari navigasi

    // State untuk menyimpan pilihan pemain, komputer
    const [playerChoice, setPlayerChoice] = useState(rockLeft);
    const [compChoice, setCompChoice] = useState(rockRight);
    const [round, setRound] = useState(1);  // State untuk ronde, start dari 1
    const [playerScore, setPlayerScore] = useState(0); // State skor pemain
    const [compScore, setCompScore] = useState(0); // State skor komputer

    const goToHome = () => {
        navigation.navigate('StartScreen');
    };

    // Array untuk pilihan acak komputer
    const choices = [
        { image: rockRight, name: 'rock' },
        { image: paperRight, name: 'paper' },
        { image: scissorsRight, name: 'scissors' }
    ];

    // Function untuk menentukan pemenang
    const getWinner = (player, comp) => {
        if (player === comp) {
            return 'draw';
        }
        if (
            (player === 'rock' && comp === 'scissors') ||
            (player === 'paper' && comp === 'rock') ||
            (player === 'scissors' && comp === 'paper')
        ) {
            return 'player';
        } else {
            return 'comp';
        }
    };

    // Function reset skor dan ronde
    const resetGame = () => {
        setRound(1);
        setPlayerScore(0);
        setCompScore(0);
    };

    // Reset game jika parameter "reset" dikirimkan
    useEffect(() => {
        if (route.params?.reset) {
            resetGame();
        }
    }, [route.params]);

    // Function untuk mengubah gambar dan hitung skor berdasarkan pilihan
    const handleChoice = (choice) => {
        // Mengubah pilihan pemain
        let playerPick;
        switch (choice) {
            case 'rock':
                playerPick = rockLeft;
                setPlayerChoice(rockLeft);
                break;
            case 'paper':
                playerPick = paperLeft;
                setPlayerChoice(paperLeft);
                break;
            case 'scissors':
                playerPick = scissorsLeft;
                setPlayerChoice(scissorsLeft);
                break;
            default:
                playerPick = rockLeft;
                setPlayerChoice(rockLeft);
        }

        // Pilihan acak untuk komputer
        const randomIndex = Math.floor(Math.random() * choices.length);
        const compPick = choices[randomIndex];
        setCompChoice(compPick.image);

        // Tentukan pemenang dan update skor
        const winner = getWinner(choice, compPick.name);
        if (winner === 'player') {
            const newPlayerScore = playerScore + 1;
            setPlayerScore(newPlayerScore);

            // Cek apakah skor sudah mencapai 5 setelah pembaruan state
            if (newPlayerScore === 5) {
                resetGame();  // Reset skor dan ronde
                navigation.navigate('WinScreen');  // Arahkan ke halaman win
            }
        } else if (winner === 'comp') {
            const newCompScore = compScore + 1;
            setCompScore(newCompScore);

            // Cek apakah skor komputer sudah mencapai 5 setelah pembaruan state
            if (newCompScore === 5) {
                resetGame();  // Reset skor dan ronde
                navigation.navigate('LoseScreen');  // Arahkan ke halaman kalah
            }
        }
        // Tambah ronde setelah pemain memilih
        setRound((prevRound) => prevRound + 1);
    };

    return (
        <View style={styles.screen}>
            <TouchableOpacity
                style={styles.btn_home}
                activeOpacity={0.7}
                onPress={goToHome}
            >
                <Image
                    source={home_btn}
                    style={styles.homeImage}
                    resizeMode="contain"
                />
            </TouchableOpacity>
            <View style={styles.rondeContainer}>
                <View style={styles.ronde}>
                    {/* Menampilkan ronde yang akan bertambah setiap kali handleChoice dipanggil */}
                    <Text style={styles.rondeText}>RONDE: {round}</Text>
                </View>
            </View>

            <View style={styles.rpsContainer}>
                <View style={styles.rpsLeft}>
                    <Image
                        source={playerChoice} // randUser
                        style={styles.rpsImage}
                        resizeMode="cover"
                    />
                </View>
                <View style={styles.rpsRight}>
                    <Image
                        source={compChoice} //randComp
                        style={styles.rpsImage}
                        resizeMode="cover"
                    />
                </View>
            </View>

            <View style={styles.scoreContainer}>
                <View style={styles.scoreBox}>
                    <Text style={styles.scoreLeft}>{playerScore}</Text>
                    <Text style={styles.scoreLeft}>Rossy</Text>
                </View>
                <View style={styles.scoreBox}>
                    <Text style={styles.scoreRight}>{compScore}</Text>
                    <Text style={styles.scoreRight}>Comp</Text>
                </View>
            </View>

            <View style={styles.rpsPick}>
                <TouchableOpacity style={styles.rpsPickCont} onPress={() => handleChoice('rock')}>
                    <Image
                        source={rock}
                        style={styles.rpsImg}
                        resizeMode="contain"
                    />
                </TouchableOpacity>
                <TouchableOpacity style={styles.rpsPickCont} onPress={() => handleChoice('scissors')}>
                    <Image
                        source={scissors}
                        style={styles.rpsImg}
                        resizeMode="contain"
                    />
                </TouchableOpacity>
                <TouchableOpacity style={styles.rpsPickCont} onPress={() => handleChoice('paper')}>
                    <Image
                        source={paper}
                        style={styles.rpsImg}
                        resizeMode="contain"
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
    btn_home: {
        marginTop: 50,
        padding: 10,
        borderRadius: 25,
    },
    homeImage: {
        width: 50,
        height: 50,
    },
    ronde: {
        borderRadius: 33,
        borderWidth: 3,
        borderColor: '#FFF',
        width: 195,
        height: 74,
        backgroundColor: '#FFDB0A',
        justifyContent: 'center',
        alignItems: 'center'
    },
    rondeContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 108,
    },
    rondeText: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#0EC6DE',
    },
    rpsContainer: {
        flexDirection: 'row',
        paddingHorizontal: 20,
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 50,
    },
    rpsLeft: {
        width: 150,
        height: 200,
        backgroundColor: '#FEDA0A',
        borderRadius: 35,
        justifyContent: 'center',
        alignItems: 'center',
        overflow: 'hidden',
    },
    rpsRight: {
        width: 150,
        height: 200,
        backgroundColor: '#8AD0EA',
        borderRadius: 35,
        justifyContent: 'center',
        alignItems: 'center',
        overflow: 'hidden',
    },
    rpsImage: {
        height: '115%',
        width: '115%',
    },
    scoreContainer: {
        paddingHorizontal: 50,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    scoreLeft: {
        justifyContent: 'center',
        alignItems: 'center',
        overflow: 'hidden',
        fontSize: 34,
        fontWeight: 'bold',
        color: '#FFDC5D',
        textShadowOffset: { width: 0, height: 4 },
        textShadowColor: 'rgba(0, 0, 0, 0.4)',
        textShadowRadius: 4,
        marginBottom: 12,
    },
    scoreRight: {
        justifyContent: 'center',
        alignItems: 'center',
        overflow: 'hidden',
        fontSize: 34,
        fontWeight: 'bold',
        color: '#ffff',
        textShadowOffset: { width: 0, height: 4 },
        textShadowColor: 'rgba(0, 0, 0, 0.4)',
        textShadowRadius: 4,
        marginBottom: 12,
    },
    scoreBox: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    rpsPick: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: 50,
        marginHorizontal: 50
    },
    rpsPickCont: {
        width: 100,
        height: 100,
        justifyContent: 'center',
        alignItems: 'center'
    },
    rpsImg: {
        width: 100,
        height: 100,
    }
});

export default PlayScreen;
