import React, { useRef, useState } from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity, RefreshControl } from 'react-native';
import Header from '../components/Header';
import PlayerBar from '../components/PlayerBar';
import Card from '../components/Card';
import FlipCard from 'react-native-flip-card'


import Colors from '../constants/Colors';
import Tricks from '../constants/Tricks';

const GameScreen = props => {
    
    const getRandomFrom = (type) => {
        return Tricks[type][Math.floor(Math.random()*Tricks[type].length)];
    }
    const [trick, setTrick] = useState("");
    const [stance, setStance] = useState("");
    const [rotation, setRotation] = useState("");
    const [special, setSpecial] = useState("");
    const [trickClicked, setTrickClicked] = useState(false);
    const [stanceClicked, setStanceClicked] = useState(false);
    const [rotationClicked, setRotationClicked] = useState(false);
    const [specialClicked, setSpecialClicked] = useState(false);
    
    const resetForNextPlayer = () => {
        setTrick("");
        setStance("");
        setRotation("");
        setSpecial("");
        setTrickClicked(false);
        setStanceClicked(false);
        setRotationClicked(false);
        setSpecialClicked(false);
    }

    const [idx, setIdx] = useState(0);
    const [players, setPlayers] = useState(props.players);
    const [tempPoints, setTempPoints] = useState(0);
    const nextPlayer = () => {
        setTempPoints(0);
        if (idx < players.length - 1) {
            setIdx(idx + 1);
        } else {
            setIdx(0);
        }
    };
    const addPoints = () => {
        console.log(players[idx]['points']);
        players[idx]['points'] += tempPoints;
        resetForNextPlayer();
        nextPlayer();
    };
    const noAddPoints = () => {
        resetForNextPlayer();
        nextPlayer();
    };

    const changeCard = (type) => {
        switch (type) {
            case "Tricks":
                if (!trickClicked) {
                    setTrick(getRandomFrom(type));
                    setTrickClicked(true);
                    setTempPoints(tempPoints + 1);
                    console.log(tempPoints);
                }              
                break;
            case "Stances":
                if (!stanceClicked) {
                    setStance(getRandomFrom(type));
                    setStanceClicked(true);
                    setTempPoints(tempPoints + 1);
                    console.log(tempPoints);
                }   
                break;
            case "Rotations":
                if (!rotationClicked) {
                    setRotation(getRandomFrom(type));
                    setRotationClicked(true);
                    setTempPoints(tempPoints + 1);
                    console.log(tempPoints);
                }
                break;
            case "Specials":
                if (!specialClicked) {
                    setSpecial(getRandomFrom(type));
                    setSpecialClicked(true);
                    setTempPoints(tempPoints + 1);
                    console.log(tempPoints);
                }
                break;
        }
        
    }

    return (
        <View style={styles.root}>
            <Header title="Sk8Game" />

            <PlayerBar currentPlayer={players[idx]} />

            <View style={styles.grid} >
                <View style={styles.rowGrid} >
                    <Card chosenTrick={trick} onFlip={changeCard.bind(this, "Tricks")} />
                    <Card chosenTrick={stance} onFlip={changeCard.bind(this, "Stances")} />
                </View>
                <View style={styles.rowGrid} >
                    <Card chosenTrick={rotation} onFlip={changeCard.bind(this, "Rotations")}/>
                    <Card  chosenTrick={special} onFlip={changeCard.bind(this, "Specials")}/>
                </View>
            </View>
            <View style={styles.buttonContainer} >
                <View style={styles.button}>
                    <Button title="NOT REALLY" color={Colors.dark_orange} onPress={noAddPoints} />
                </View>
                <View style={styles.button}>
                    <Button title="DONE" color={Colors.dark_green} onPress={addPoints} />
                </View>
            </View>
        </View>
    );

};


const styles = StyleSheet.create({
    root: {
        flex: 1,
        alignItems: 'center'
    },

    grid: {
        flexDirection: 'column',
        padding: 10,
        alignItems: 'center',

    },
    rowGrid: {
        flexDirection: 'row',
    },
    buttonContainer: {
        flexDirection: 'row',
        marginTop: 2,
        width: '76%',
    },
    button: {
        flex: 1,
        marginHorizontal: 15,
        elevation: 1,
    }
});

export default GameScreen;