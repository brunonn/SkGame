import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import StartGameScreen from './screens/StartGameScreen';
import GameScreen from './screens/GameScreen';
import GameOverScreen from './screens/GameOverScreen';
import { MenuProvider } from 'react-native-popup-menu';
import BlinkingBackgroundScreen from './screens/BlinkingBackgroundScreen';
import GameScreen2 from './screens/GameScreen2';

export default function App() {

  const [playersPlaying, setPlayersPlaying] = useState([]);

  const startGameHandler = (players) => {
    setPlayersPlaying(players);
  };

  let content;
  if (playersPlaying.length === 0) {
    content = <StartGameScreen onStartGame={startGameHandler} />;
  } else {
    content = <GameScreen2 players={playersPlaying} />;
  }



  return (
    <MenuProvider>
      <View style={styles.root}>
        {content}
      </View>
    </MenuProvider>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
