import React from "react";
import { View, Text } from "react-native";
import { Styles } from "./Button.style";

interface IProps {
  content: string;
}

export default function Button(props: IProps) {
  return (
    <View style={Styles.Button}>
      <Text style={Styles.ButtonText}>{props.content}</Text>
    </View>
  );
}
