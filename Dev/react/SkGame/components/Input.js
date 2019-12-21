import React, { useState } from 'react';
import { View, TextInput, StyleSheet, Button } from 'react-native';

import Colors from '../constants/Colors';

const Input = props => {

    const [enteredPlayer, setEnteredPlayer] = useState("");

    const playerInputHandler = enteredValue => {
        setEnteredPlayer(enteredValue);
    };
    const addPlayerHandler = () => {
        if (enteredPlayer !== "") {
            props.onAddPlayer(enteredPlayer);
        }
        setEnteredPlayer("");
    };

    return (
        <View style={styles.inputContainer}>
            <TextInput
                style={styles.input}
                placeholder="Add players..."
                onChangeText={playerInputHandler}
                value={enteredPlayer}
                maxLength={24}
            />
            <View style={styles.inputButton}>
                <Button title="Add" color={Colors.dark_orange} onPress={addPlayerHandler} />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    inputContainer: {
        flexDirection: "row",
        width: "80%",
        marginBottom: 15,
        marginTop: 12,
    },
    input: {
        flex: 3,
        left: 15,
        fontFamily: 'sans-serif-medium'
    },
    inputButton: {
        flex: 1,
        elevation: 10,
        borderWidth: 1,
        borderColor: Colors.orange
    },
});


export default Input;