import React from "react";
import {
  StyleSheet,
  View,
  Animated,
  TouchableOpacity,
  Text,
  Image,
  Button
} from "react-native";

import { Emitter } from "react-native-particles";
import { Icon } from "react-native-elements";

class BlinkingBackgroundScreen extends React.Component {
  constructor(props) {
    super(props);
    this.opacity = new Animated.Value(0);

    this.toggleBackgroundColor = this.toggleBackgroundColor.bind(this);

    this.state = { clicked: false };
  }

  toggleBackgroundColor() {
    Animated.timing(this.opacity, {
      toValue: 1,
      duration: 500
    }).start(() => {
      Animated.timing(this.opacity, {
        toValue: 0,
        duration: 500
      }).start();
    });
  }

  renderParticles = () => {
    console.log(this.state.clicked);
    if (this.state.clicked) {
      return (
        <Emitter
          numberOfParticles={20}
          emissionRate={5}
          interval={200}
          particleLife={1500}
          direction={-90}
          spread={360}
          fromPosition={{ x: 200, y: 200 }}
        >
          <Icon name="star_border" size={3} />
        </Emitter>
      );
    }
  };

  render() {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#fff"
        }}
      >
        <TouchableOpacity
          style={{ borderWidth: 1, borderColor: "#4099FF", zIndex: 1 }}
          onPress={this.toggleBackgroundColor}
        >
          <Text style={{ fontSize: 18, color: "#4099FF", margin: 16 }}>
            Toggle
          </Text>
        </TouchableOpacity>
        <Animated.View
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

        <Button
          title="Particles"
          onPress={() => {
            this.setState({ clicked: true });
            setTimeout(() => {
              this.setState({ clicked: false });
            }, 2000);
          }}
        />

        {this.renderParticles()}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});

export default BlinkingBackgroundScreen;
