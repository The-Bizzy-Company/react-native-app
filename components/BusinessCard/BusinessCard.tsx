import React from "react";
import { View, WebView } from "react-native";
import { Styles } from "./BusinessCard.style";

interface IProps {
  uri: string;
}

export default function BusinessCard(props: IProps) {
  return (
    <View style={Styles.BusinessCard}>
      <WebView
        source={{ uri: props.uri }}
        javaScriptEnabled={true}
        style={Styles.BusinessCardFrame}
      />
    </View>
  );
}
