import React from "react";
import {
  Animated,
  View,
  Easing,
  Text,
  StyleSheet,
  TouchableOpacity
} from "react-native";

class FlipCard extends React.Component {
  constructor(props) {
    super(props);
    this.animatedValue = new Animated.Value(0);
    this.state = { text: this.props.front };
  }

  handleClick() {
    this.animate();
    this.props.whenClicked();
  }

  animate() {
    this.animatedValue.setValue(0.5);

    this.state.text === this.props.front
      ? this.setState({ text: this.props.back })
      : this.setState({ text: this.props.front });

    Animated.timing(this.animatedValue, {
      toValue: 1,
      duration: 600,
      easing: Easing.linear
    }).start();
  }

  render() {
    const rotateX = this.animatedValue.interpolate({
      inputRange: [0, 0.5, 1],
      outputRange: ["0deg", "180deg", "0deg"]
    });

    return (
      <TouchableOpacity onPress={() => this.handleClick()}>
        <Animated.View
          style={{
            ...styles.card,
            transform: [{ rotateX }],
            ...this.props.style
          }}
        >
          <Text style={styles.text}>{this.state.text}</Text>
        </Animated.View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  card: {
    height: 200,
    width: 150,
    backgroundColor: "#FF7822",

    borderWidth: 2,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center"
  },
  text: {
    color: "white"
  }
});

export default FlipCard;
