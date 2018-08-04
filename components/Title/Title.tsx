import React from "react";
import { Text } from "react-native";
import { Styles } from "./Title.style";

interface IProps {
  content: string;
}

export default function Title(props: IProps) {
  return <Text style={Styles.Title}>{props.content}</Text>;
}
