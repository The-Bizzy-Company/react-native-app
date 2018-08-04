import React from "react";
import { View } from "react-native";
import { Styles } from "./Button.style";

interface IProps {
  uri: string;
}

export default function Button(props: IProps) {
  return <View style={Styles.Button} />;
}
