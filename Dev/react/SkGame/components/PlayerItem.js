import React from 'react';
import { TouchableOpacity, Text, StyleSheet, View } from 'react-native';
import { Icon } from 'react-native-elements';
import Colors from '../constants/Colors';

const PlayerItem = props => {
    return (

        <TouchableOpacity onPress={props.onDelete.bind(this, props.id)}>
            <View style={styles.listItem}>
                <Text style={styles.listText}>{props.title}</Text>
            </View>
        </TouchableOpacity>

    );
}

const styles = StyleSheet.create({
    listItem: {
        padding: 10,
        margin: 15,
        textAlign: "center",
        flexDirection: 'row',
        justifyContent: 'center',

        width: '90%',
        borderRadius: 15,
        borderWidth: 1,
        borderColor: Colors.beige,
    },
    listText: {
        fontWeight: "500",
        fontFamily: "Roboto",
        fontSize: 17,
        textAlign: "center",
        color: '#777'
    },

});

export default PlayerItem;