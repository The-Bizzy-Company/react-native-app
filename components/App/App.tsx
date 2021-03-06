import React, { Component } from "react";
import { ScrollView, View, ViewStyle } from "react-native";
import BusinessCard from "../BusinessCard";
import BusinessCardWrapper from "../BusinessCardWrapper";
import { createUniqueIDFactory } from "@shopify/javascript-utilities/other";
import { Styles } from "./App.style";
import Button from "../Button";
import Title from "../Title";

const data = [
  // { name: "kvendrik", uri: "https://codepen.io/kvendrik/live/MXgGRX" },
  // { name: "dsenneff", uri: "https://codepen.io/dsenneff/live/JBvaQd" },
  // { name: "ge1doot", uri: "https://codepen.io/ge1doot/live/LkdOwj" },
  // { name: "chrisgannon", uri: "https://codepen.io/chrisgannon/live/BPdYXY" },
  { name: "jscottsmith", uri: "https://codepen.io/jscottsmith/live/QBQXEd" },
  { name: "danwilson", uri: "https://codepen.io/danwilson/live/WKJodW" },
  { name: "jscottsmith", uri: "https://codepen.io/jscottsmith/live/MBOobz" }
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
      <ScrollView contentContainerStyle={Styles.App}>
        <View
          style={
            {
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              width: "100%",
              marginBottom: 20
            } as ViewStyle
          }
        >
          <Title content="Work" />
          <Button content="show less" />
        </View>
        {this.state.cards}
      </ScrollView>
    );
  }
}
