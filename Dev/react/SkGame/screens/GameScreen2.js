import React from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Animated,
  TouchableOpacity
} from "react-native";

import { Emitter } from "react-native-particles";
import { Icon } from "react-native-elements";

import Header from "../components/Header";
import PlayerBar from "../components/PlayerBar";
import MyFlipCard from "../components/MyFlipCard";

class GameScreen2 extends React.Component {
  constructor(props) {
    super(props);
    this.opacity = new Animated.Value(0);
    this.state = { doneClicked: false };
  }

  toggleBackgroundColor = () => {
    Animated.timing(this.opacity, {
      toValue: 0.6,
      duration: 500
    }).start(() => {
      Animated.timing(this.opacity, {
        toValue: 0,
        duration: 500
      }).start();
    });
  };

  renderParticles = () => {
    if (this.state.doneClicked) {
      return (
        <Emitter
          numberOfParticles={20}
          emissionRate={20}
          interval={20}
          particleLife={600}
          direction={-90}
          spread={360}
          gravity={-0.9}
          fromPosition={{ x: 180, y: 300 }}
        >
          <Icon name="" size={24} />   
        </Emitter>
      );
    }
  };

  render() {
    return (
      <SafeAreaView style={styles.screen}>
        <Header title="Sk8Cards" />
        <PlayerBar currentPlayer={this.props.players[0]} />
        <View style={styles.grid}>
          <View style={styles.rowGrid}>
            <MyFlipCard chosenSet="Tricks" />
            <MyFlipCard chosenSet="Stances" />
          </View>
          <View style={styles.rowGrid}>
            <MyFlipCard chosenSet="Rotations" />
            <MyFlipCard chosenSet="Specials" />
          </View>
        </View>

        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.button}
            onPress={this.toggleBackgroundColor}
          >
            <Text style={styles.buttonText}>Not Really</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button} onPress={() => {
            this.setState({ doneClicked: true });
            setTimeout(() => {
              this.setState({ doneClicked: false });
            }, 5000);
          }}>
            <Text style={styles.buttonText}>Done</Text>
          </TouchableOpacity>
        </View>

        {this.renderParticles()}

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
            opacity: this.opacity
          }}
        />
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
    width: "85%"
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
