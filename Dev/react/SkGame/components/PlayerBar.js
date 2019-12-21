import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Colors from '../constants/Colors';

const PlayerBar = props => {
    return (
        <View style={styles.playerContainer}>
            <Text style={styles.playerText}>{props.currentPlayer.value} {props.currentPlayer.points}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    playerContainer: {
        alignItems: 'center',
        marginTop: 5,
        borderWidth: 1,
        borderRadius: 10,
        borderColor: Colors.light_grey,
        width: '50%',
        paddingVertical: 4,

    },
    playerText: {
        fontSize: 18,
        fontFamily: 'sans-serif-medium'

    },
});


export default PlayerBar;
