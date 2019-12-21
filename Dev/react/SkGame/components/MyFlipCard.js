import React from "react";
import {
  Animated,
  Easing,
  Text,
  View,
  StyleSheet,
  TouchableOpacity
} from "react-native";

import Colors from "../constants/Colors";
import Tricks from "../constants/Tricks";

class MyFlipCard extends React.Component {
  constructor(props) {
    super(props);
    this.animatedValue = new Animated.Value(0);
    this.state = {
      text: "",
      cardSet: Tricks[this.props.chosenSet],
      isClicked: false
    };
  }

  // componentDidMount() {
  //   this.props.onRef(this);
  // }
  // componentWillUnmount() {
  //   this.props.onRef(undefined);
  // }
  /*<Child onRef={ref => (this.child = ref)} />
   this.child.resetCard() 
  */
  resetCard() {
    this.setState({ text: "" });
    this.setState({ isClicked: false });
    console.log("Is this happening? ");
  };

  pickText = () => {
    this.state.text = this.state.cardSet[
      Math.floor(Math.random() * this.state.cardSet.length)
    ];
    if (typeof this.state.text === "undefined") {
      this.state.text = "No more cards left";
    } 
    let newArray = this.state.cardSet.filter((value, index, arr) => {
      return value != this.state.text;
    });
    this.setState({ cardSet: newArray });
  };

  animateAndChoiceHandler() {
    if (!this.state.isClicked) {
      //this.setState({isClicked: true});

      this.animatedValue.setValue(0.5);

      Animated.timing(this.animatedValue, {
        toValue: 1,
        duration: 600,
        easing: Easing.linear
      }).start(() => this.pickText());
    }
  }

  render() {
    const rotateX = this.animatedValue.interpolate({
      inputRange: [0, 0.5, 1],
      outputRange: ["0deg", "180deg", "0deg"]
    });

    return (
      <TouchableOpacity onPress={() => this.animateAndChoiceHandler()}>
        <Animated.View
          style={{
            ...styles.card,
            transform: [{ rotateX }]
          }}
        >
          <View style={styles.innerCard}>
            <Text style={styles.text}>{this.state.text}</Text>
          </View>
        </Animated.View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  card: {
    width: 150,
    height: 200,
    margin: 6,
    backgroundColor: Colors.orange,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10
  },
  innerCard: {
    width: "85%",
    height: "85%",
    borderWidth: 1,
    borderRadius: 10,
    borderColor: Colors.dark_orange,
    alignItems: "center",
    justifyContent: "center"
  },
  cardText: {
    textAlign: "center",
    color: "#555",
    fontFamily: "sans-serif-medium"
  }
});

export default MyFlipCard;
