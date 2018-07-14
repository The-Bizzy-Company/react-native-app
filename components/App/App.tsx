import React, { Component } from "react";
import { StyleSheet, ScrollView, ViewStyle } from "react-native";
import BusinessCard from "../BusinessCard";
import BusinessCardWrapper from "../BusinessCardWrapper";
import { createUniqueIDFactory } from "@shopify/javascript-utilities/other";

const data = [
  { name: "kvendrik", uri: "https://codepen.io/kvendrik/live/MXgGRX" },
  { name: "kvendrik", uri: "https://codepen.io/kvendrik/live/MXgGRX" },
  { name: "kvendrik", uri: "https://codepen.io/kvendrik/live/MXgGRX" },
  { name: "kvendrik", uri: "https://codepen.io/kvendrik/live/MXgGRX" },
  { name: "kvendrik", uri: "https://codepen.io/kvendrik/live/MXgGRX" },
  { name: "kvendrik", uri: "https://codepen.io/kvendrik/live/MXgGRX" }
];

interface IProps {}
interface IState {
  cards?: React.ReactNode[];
}

const getUniqueCardID = createUniqueIDFactory("cards");

export default class App extends Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      cards: []
    };
  }

  componentDidMount() {
    let cards: any[] = [];
    data.forEach((card: any) => {
      cards.push(
        <BusinessCardWrapper key={getUniqueCardID()}>
          <BusinessCard uri={card.uri} />
        </BusinessCardWrapper>
      );
    });

    this.setState({ cards });
  }

  render() {
    return (
      <ScrollView contentContainerStyle={stylesheet.AppStyle}>
        {this.state.cards}
      </ScrollView>
    );
  }
}

const AppStyle: ViewStyle = {
  flex: 1,
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: "#F5FCFF",
  padding: 20
};

const stylesheet = StyleSheet.create({ AppStyle });
