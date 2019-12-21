import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Colors from '../constants/Colors';



const Card = props => {
    return (
        <TouchableOpacity onPress={props.onFlip}>
            <View style={styles.card}>
                <View style={styles.innerCard} >
                    <Text style={styles.cardText}>{props.chosenTrick}</Text>
                </View>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    card: {
        width: 150,
        height: 200,
        margin: 6,
        backgroundColor: Colors.orange,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
    },
    innerCard: {
        width: '85%',
        height: '85%',
        borderWidth: 1,
        borderRadius: 10,
        borderColor: Colors.dark_orange,
        alignItems: 'center',
        justifyContent: 'center'
    },
    cardText: {
        textAlign: 'center',
        color: '#555',
        fontFamily: 'sans-serif-medium',
    },
});


export default Card;
