import React from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Animated,
  TouchableOpacity,
  Image,
  Dimensions
} from "react-native";

import { Emitter } from "react-native-particles";
import { Icon } from "react-native-elements";

import Header from "../components/Header";
import PlayerBar from "../components/PlayerBar";
import MyFlipCard from "../components/MyFlipCard";

class GameScreen2 extends React.Component {
  constructor(props) {
    super(props);
    this.backgroundOpacity = new Animated.Value(0);
    this.imageOpacity = new Animated.Value(0);

  }

  
  resetAllCards = () => {
    this.refs.trick.resetCard();
    this.refs.stance.resetCard();
    this.refs.rotation.resetCard();
    this.refs.special.resetCard();
  }

  toggleBackgroundColor = () => {
    Animated.timing(this.backgroundOpacity, {
      toValue: 0.4,
      duration: 400
    }).start(() => {
      Animated.timing(this.backgroundOpacity, {
        toValue: 0,
        duration: 400
      }).start(() => {this.props.onNextPlayer(); this.resetAllCards()});
    });
  };

  toggleBackgroundImage = () => {
    Animated.timing(this.imageOpacity, {
      toValue: 0.3,
      duration: 400
    }).start(() => {
      Animated.timing(this.imageOpacity, {
        toValue: 0,
        duration: 400
      }).start(() => {this.props.onTricksDone(); this.props.onNextPlayer(); this.resetAllCards()});
    });
  };

  render() {
    return (
      <SafeAreaView style={styles.screen}>
        <Header title="Sk8Cards" />
        <PlayerBar currentPlayer={this.props.player} />
        <View style={styles.grid}>
          <View style={styles.rowGrid}>
            <MyFlipCard chosenSet="Tricks" whenClicked={this.props.addPoint}  ref="trick"/>
            <MyFlipCard chosenSet="Stances" whenClicked={this.props.addPoint} ref="stance"/>
          </View>
          <View style={styles.rowGrid}>
            <MyFlipCard chosenSet="Rotations" whenClicked={this.props.addPoint} ref="rotation"/>
            <MyFlipCard chosenSet="Specials" whenClicked={this.props.addPoint} ref="special"/>
          </View>
        </View>

        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.button}
            onPress={this.toggleBackgroundColor}
          >
            <Text style={styles.buttonText}>Not Really</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.button}
            onPress={this.toggleBackgroundImage}
          >
            <Text style={styles.buttonText}>Done</Text>
          </TouchableOpacity>
        </View>

        <Animated.View
          pointerEvents="none"
          style={{
            position: "absolute",
            left: 0,
            right: 0,
            bottom: 0,
            top: 0,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#f00",
            opacity: this.backgroundOpacity
          }}
        />
        <Animated.View
          pointerEvents="none"
          style={{
            position: "absolute",
            left: 0,
            right: 0,
            bottom: 0,
            top: 0,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#0f0",
            opacity: this.imageOpacity
          }}
        >
          <Image
            style={{
              width: Dimensions.get("screen").width,
              height: Dimensions.get("screen").height
            }}
            source={require("../assets/img/luan.jpg")}
          />
        </Animated.View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center"
  },
  grid: {
    width: "90%"
  },
  rowGrid: {
    flexDirection: "row"
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "85%",
    marginTop: 5
  },
  button: {
    borderWidth: 1,
    borderColor: "#4099FF",
    width: "40%",
    alignItems: "center"
  },
  buttonText: {
    fontSize: 18,
    color: "#4099FF",
    margin: 16,
    textAlign: "center"
  }
});

export default GameScreen2;
