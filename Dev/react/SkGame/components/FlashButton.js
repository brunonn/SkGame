import React from "react";
import {
  StyleSheet,
  View,
  Animated,
  TouchableOpacity,
  Text
} from "react-native";

class FlashButton extends React.Component {
  constructor(props) {
    super(props);
    this.opacity = new Animated.Value(0);
   
  }

  toggleBackgroundColor = () => {
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

  render() {
    return (
      <View>
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
      </View>
    );
  }
}

const styles = StyleSheet.create({});

export default FlashButton;
