import React from "react";
import {
  View,
  Animated,
  Easing,
  Text,
  Button,
  StyleSheet,
  TouchableOpacity
} from "react-native";

import Header from "../components/Header";

import MyFlipCard from "../components/MyFlipCard";

class GameOverScreen extends React.Component {

  constructor(props) {
    super(props);
    this.myRef = React.createRef();
  }

  resetHandler = () => {
    this.myRef.current.resetCard();
  }

  render() {
    return (
      <View style={styles.container}>
        <Header />
        <MyFlipCard chosenSet="Tricks" ref={this.myRef} />

        <TouchableOpacity onPress={this.resetHandler}>
          <View style={{width: 50, height: 40, marginTop: 20, backgroundColor: 'black'}}>
            <Text style={{color: 'white'}}>Reset</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center"
  }
});

export default GameOverScreen;
