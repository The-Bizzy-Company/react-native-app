import React, { Component } from "react";
import { TouchableOpacity } from "react-native";
import { Styles } from "./BusinessCardWrapper.style";
// import Svg, { Path } from "react-native-svg";

interface IProps {
  children: React.ReactNode;
}

interface IState {
  isExpanded: boolean;
}

export default class BusinessCardWrapper extends Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      isExpanded: false
    };
  }

  extend = () => {
    this.setState({
      isExpanded: !this.state.isExpanded
    });
  };

  render() {
    return (
      <TouchableOpacity
        onPress={this.extend}
        style={[
          { height: this.state.isExpanded ? "auto" : 80 },
          Styles.BusinessCardWrapper
        ]}
      >
        {this.props.children}
      </TouchableOpacity>
    );
  }
}

{
  /* <Svg
  width="686"
  height="86"
  style={stylesheet.BusinessCardWrapperSvgStyle}
>
  <Path
    d="M8.051 47.81h645.898c10.798 0 19.551 8.753 19.551 19.55v68.602c0 10.798-8.753 19.551-19.551 19.551h-408.4a97.662 97.662 0 0 0-53.503 15.96l-1.06.694a41.19 41.19 0 0 1-46.155-.694 88.54 88.54 0 0 0-50.71-15.96H8.05c-10.798 0-19.551-8.753-19.551-19.55V67.36c0-10.798 8.753-19.551 19.551-19.551z"
    fill="green"
  />
</Svg> */
}
