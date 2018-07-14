import React from "react";
import { View, StyleSheet, ViewStyle, WebView } from "react-native";

interface IProps {
  uri: string;
}

export default function BusinessCard(props: IProps) {
  return (
    <View style={stylesheet.BusinessCardStyle}>
      <WebView
        source={{ uri: props.uri }}
        style={stylesheet.BusinessCardFrameStyle}
      />
    </View>
  );
}

const BusinessCardStyle: ViewStyle = {
  display: "flex",
  height: 200,
  width: "100%",
  borderRadius: 10,
  overflow: "hidden"
};

const BusinessCardFrameStyle: ViewStyle = {
  display: "flex",
  width: "100%",
  height: "100%"
};

const stylesheet = StyleSheet.create({
  BusinessCardStyle,
  BusinessCardFrameStyle
});
