import { StyleSheet, ViewStyle, TextStyle } from "react-native";
import { Colors } from "../../theme/Colors";

const Button: ViewStyle = {
  display: "flex",
  borderWidth: 2,
  borderColor: Colors.Blue.Dark
};

const ButtonText: TextStyle = {
  color: Colors.Blue.Dark
};

export const Styles = StyleSheet.create({
  Button,
  ButtonText
});
