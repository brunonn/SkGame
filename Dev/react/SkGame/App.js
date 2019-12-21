import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";

import StartGameScreen from "./screens/StartGameScreen";
import GameScreen from "./screens/GameScreen";
import GameOverScreen from "./screens/GameOverScreen";
import { MenuProvider } from "react-native-popup-menu";
import BlinkingBackgroundScreen from "./screens/BlinkingBackgroundScreen";
import GameScreen2 from "./screens/GameScreen2";

export default function App() {
  const [playersPlaying, setPlayersPlaying] = useState([]);
  const [playerIndex, setPlayerIndex] = useState(0);
  const [tempPoints, setTempPoints] = useState(0);


  const startGameHandler = players => {
    setPlayersPlaying(players);
  };

  const nextPlayer = () => {
    if (playerIndex < playersPlaying.length - 1) {
      setPlayerIndex(playerIndex + 1);
    } else {
      setPlayerIndex(0);
    }
    setTempPoints(0);
  };

  const tricksDone = () => {
    playersPlaying[playerIndex].points += tempPoints;
    console.log(playersPlaying);
  }
  const tempPointsAdder = () => {
    setTempPoints(tempPoints + 1);
    console.log(tempPoints);
  }

  let content;
  if (playersPlaying.length === 0) {
    content = <StartGameScreen onStartGame={startGameHandler} />;
  } else {
    content = (
      <GameScreen2 player={playersPlaying[playerIndex]} onNextPlayer={nextPlayer} onTricksDone={tricksDone} addPoint={tempPointsAdder}/>
    );
  }

  return (
    <MenuProvider>
      <View style={styles.root}>{content}</View>
    </MenuProvider>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "#fff"
  }
});
