import React, { Component } from "react";
import {
  StyleSheet,
  ViewStyle,
  TouchableOpacity,
  Animated
} from "react-native";

interface IProps {
  children: React.ReactNode;
}

interface IState {
  isExpanded: boolean;
  height: any;
}

export default class BusinessCardWrapper extends Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      isExpanded: false,
      height: new Animated.Value(80)
    };
  }

  extend = () => {
    this.setState({
      isExpanded: !this.state.isExpanded
    });

    if (this.state.isExpanded) {
      Animated.timing(this.state.height, {
        toValue: 240,
        duration: 400
      }).start();
    } else {
      Animated.timing(this.state.height, {
        toValue: 80,
        duration: 400
      }).start();
    }
  };

  render() {
    return (
      <TouchableOpacity style={{ width: "100%" }} onPress={this.extend}>
        <Animated.View
          style={[
            stylesheet.BusinessCardWrapperStyle,
            { height: this.state.height }
          ]}
        >
          {this.props.children}
        </Animated.View>
      </TouchableOpacity>
    );
  }
}

const BusinessCardWrapperStyle: ViewStyle = {
  display: "flex",
  width: "100%",
  overflow: "hidden",
  borderRadius: 20,
  padding: 20,
  shadowOpacity: 1,
  shadowRadius: 5,
  shadowColor: "rgba(0,0,0, 0.6)",
  shadowOffset: { height: 0, width: 0 },
  marginBottom: 20,
  backgroundColor: "white"
};

const stylesheet = StyleSheet.create({ BusinessCardWrapperStyle });
