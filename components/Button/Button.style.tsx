import { StyleSheet, ViewStyle, TextStyle } from "react-native";
import { Colors } from "../../theme/Colors";

const Button: ViewStyle = {
  display: "flex",
  borderWidth: 2,
  borderColor: Colors.Blue.ExtraDark,
  padding: 12,
  paddingLeft: 24,
  paddingRight: 24,
  borderRadius: 30
};

const ButtonText: TextStyle = {
  fontSize: 16,
  color: Colors.Blue.ExtraDark
};

export const Styles = StyleSheet.create({
  Button,
  ButtonText
});
