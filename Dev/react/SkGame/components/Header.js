import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements';
import {
    Menu,
    MenuOptions,
    MenuOption,
    MenuTrigger,
} from 'react-native-popup-menu';

import Colors from '../constants/Colors';


const Header = props => {
    return (
        <View style={styles.screen}>
            <View style={styles.textContainer}>
                <Text style={styles.title}>{props.title}</Text>
            </View>
            <View style={styles.icon}>
                
            </View>
            <Menu>
                <MenuTrigger >             
                <Icon
                        reverse
                        name='reorder'
                        size={20} />              
                </MenuTrigger>
                <MenuOptions>
                    <MenuOption onSelect={() => alert(`none`)} text='Difficulty' />
                    <MenuOption onSelect={() => alert(`none`)} text='Others' />
                </MenuOptions>
            </Menu>
        </View>
    );
};

const styles = StyleSheet.create({
    screen: {
        width: '100%',
        backgroundColor: Colors.mint,
        padding: 2,
        marginTop: 24,
        flexDirection: 'row',
    },
    textContainer: {
        flex: 1,
        marginTop: 18,

    },
    title: {
        fontSize: 23,
        textAlign: 'center',
        color: 'black',
        right: -30,
        fontFamily: 'sans-serif-medium'
    },
    icon: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-end'
    }


});

export default Header;