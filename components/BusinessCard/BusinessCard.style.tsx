import { StyleSheet, ViewStyle } from "react-native";

const BusinessCard: ViewStyle = {
  display: "flex",
  height: 200,
  width: "100%",
  borderRadius: 10,
  overflow: "hidden"
};

const BusinessCardFrame: ViewStyle = {
  display: "flex",
  width: "100%",
  height: "100%"
};

export const Styles = StyleSheet.create({
  BusinessCard,
  BusinessCardFrame
});
