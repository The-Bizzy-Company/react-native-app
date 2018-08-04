import React from "react";
import { View } from "react-native";
import { styles } from "./Title.style";

interface IProps {
  uri?: string;
}

export default function Title(props: IProps) {
  return <View style={styles.Title} />;
}
