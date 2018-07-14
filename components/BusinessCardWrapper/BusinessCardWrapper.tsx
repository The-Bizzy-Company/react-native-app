import React, { Component } from "react";
import { View, StyleSheet, ViewStyle, TouchableOpacity } from "react-native";

interface IProps {
  children: React.ReactNode;
}

interface IState {
  isExpanded: boolean;
}

export default class BusinessCardWrapper extends Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      isExpanded: false
    };
  }

  extend = () => {
    this.setState({
      isExpanded: !this.state.isExpanded
    });
  };

  render() {
    return (
      <TouchableOpacity
        onPress={this.extend}
        style={[
          { height: this.state.isExpanded ? "auto" : 80 },
          stylesheet.BusinessCardWrapperStyle
        ]}
      >
        {this.props.children}
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
