import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Button,
  FlatList,
} from "react-native";

import Header from '../components/Header';
import Input from '../components/Input';

import Colors from '../constants/Colors';
import PlayerItem from '../components/PlayerItem';


const StartGameScreen = props => {


  const [players, setPlayers] = useState([]);



  const addPlayerHandler = (playerTitle) => {
    setPlayers(currentPlayers => [...currentPlayers, {id: Math.random().toString(), value: playerTitle, points: 0}]);
  };


  const removePlayerById = playerId => {
    setPlayers(currentPlayers => {
      return currentPlayers.filter(player => player.id !== playerId);
    });
  }


  return (
    <View style={styles.root}>
      <Header title="Sk8Cards" />
      <Input onAddPlayer={addPlayerHandler} />

      <FlatList
        keyExtractor={(item, index) => item.id}
        data={players}
        renderItem={itemData => <PlayerItem id={itemData.item.id} onDelete={removePlayerById} title={itemData.item.value} />}
      />

      <View style={styles.bottomButton}>
        <Button title="Start" color={Colors.dark_orange} onPress={props.onStartGame.bind(this, players)} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: "center",
  },


  bottomButton: {
    width: "80%",
    marginBottom: 45,
    marginTop: 30
  }
});

export default StartGameScreen;
