import { StyleSheet, ViewStyle } from "react-native";

const BusinessCardWrapper: ViewStyle = {
  display: "flex",
  width: "100%",
  overflow: "hidden",
  borderRadius: 20,
  padding: 20,
  shadowOpacity: 1,
  shadowRadius: 5,
  shadowColor: "rgba(0,0,0, 0.6)",
  shadowOffset: { height: 0, width: 0 },
  marginBottom: 20,
  backgroundColor: "white"
};

const BusinessCardWrapperSvg: ViewStyle = {
  display: "flex",
  width: "100%",
  height: "auto"
};

export const Styles = StyleSheet.create({
  BusinessCardWrapper,
  BusinessCardWrapperSvg
});
