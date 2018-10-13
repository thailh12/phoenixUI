import React, { Component } from "react";
import Icon from "@builderx/icons";
import { Center } from "@builderx/utils";
import {
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
  ImageBackground
} from "react-native";

export default class header11 extends Component {
  // Only for displaying symbol in BuilderX.
  static containerStyle = {
    height: 8,
    width: 375,
    defaultHeight: "fixed",
    defaultWidth: "fixed"
  };
  render() {
    return (
      <View style={[styles.root, this.props.style]}>
        <ImageBackground
          style={styles.rect}
          source={require("../assets/Gradient_OY1tFrL.png")} /*gradient: {"elipseLength":0,"from":{"x":"0.00","y":"1.00"},"gradientType":"LinearGradient","id":"78041F34-3D99-4EBE-AD6A-26D649C1AE5F","shouldSmoothenOpacity":false,"stops":[{"offset":0,"stopColor":"rgba(255,87,34,1)","style":{}},{"offset":1,"stopColor":"rgba(255,221,34,1)","style":{}}],"style":{},"to":{"x":"1.00","y":"0.00"}}*/
        />
        <Center vertical>
          <TouchableOpacity style={styles.leftIconButton}>
            <Icon
              style={styles.leftIcon}
              name="qrcode-scan"
              type="MaterialCommunityIcons"
            />
          </TouchableOpacity>
        </Center>
        <Center vertical>
          <View style={styles.textWrapper}>
            <Text style={styles.title} numberOfLines={1}>
              Phoenix
            </Text>
          </View>
        </Center>
        <Center vertical>
          <TouchableOpacity style={styles.rightIconButton}>
            <Icon
              style={styles.rightIcon}
              name="account"
              type="MaterialCommunityIcons"
            />
          </TouchableOpacity>
        </Center>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  root: {
    elevation: 3,

    padding: 4,
    shadowColor: "#111",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.2
  },
  leftIconButton: {
    padding: 11,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    height: 46,
    width: 46,
    left: "3.95%"
  },
  leftIcon: {
    backgroundColor: "transparent",
    color: "#FFFFFF",
    fontSize: 24
  },
  textWrapper: {
    position: "absolute",
    left: 71.57,
    height: 18,
    width: 66
  },
  title: {
    backgroundColor: "transparent",
    fontSize: 18,
    fontWeight: "600",
    fontFamily: "Roboto",
    lineHeight: 18,
    color: "#FFFFFF"
  },
  rightIconButton: {
    alignItems: "center",
    padding: 11,
    justifyContent: "center",
    position: "absolute",
    left: 318.43,
    height: 46,
    width: 46
  },
  rightIcon: {
    backgroundColor: "transparent",
    color: "#FFFFFF",
    fontSize: 24
  },
  rect: {
    width: 376,
    height: 60,
    backgroundColor: "transparent",
    borderRadius: 2,
    position: "absolute",
    top: -26,
    left: 4
  }
});
