import React, { Component } from "react";
import { Svg, Path } from "react-native-svg";
import {
  View,
  Image,
  Text,
  StyleSheet,
  ImageBackground,
  TouchableOpacity
} from "react-native";

export default class Signup extends Component {
  render() {
    return (
      <View style={styles.root}>
        <View style={styles.imageBg}>
          <View style={styles.bgScreen1}>
            <Image
              source={require("../assets/261347d5fe290bc7e242a4e41c62f4571c635448.png")}
              style={styles.bgScreen}
            />
          </View>
        </View>
        <TouchableOpacity
          style={styles.button5}
          onPress={() => {
            this.props.navigation.push("SignInSignUp");
          }}
        >
          <Svg
            viewBox="0 0 16.00 16.00"
            preserveAspectRatio="none"
            style={styles.shape}
          >
            <Path
              strokeWidth={0}
              fill="rgba(67,72,76,1)"
              isClosed={true}
              d="M16.00 7.00 L3.80 7.00 L9.40 1.40 L8.00 0.00 L0.00 8.00 L8.00 16.00 L9.40 14.60 L3.80 9.00 L16.00 9.00 L16.00 7.00 L16.00 7.00 Z"
            />
          </Svg>
        </TouchableOpacity>
        <View style={styles.buttonEmail}>
          <View style={styles.buttonBg} />
          <Svg
            viewBox="0 0 24.00 18.00"
            preserveAspectRatio="none"
            style={styles.fill186}
          >
            <Path
              strokeWidth={0}
              fill="rgba(48,48,48,0.6)"
              isClosed={true}
              d="M22.50 15.00 L22.43 15.43 L15.75 8.25 L22.50 3.00 L22.50 15.00 Z M2.67 16.46 L9.43 9.25 L12.00 11.19 L14.45 9.24 L21.33 16.46 L2.67 16.46 Z M1.50 15.00 L1.50 3.00 L8.25 8.25 L1.57 15.43 L1.50 15.00 Z M21.75 1.50 L12.00 9.00 L2.25 1.50 L21.75 1.50 Z M21.00 0.00 L3.00 0.00 L0.00 3.00 L0.00 15.00 L3.00 18.00 L21.00 18.00 L24.00 15.00 L24.00 3.00 L21.00 0.00 Z"
              fillOpacity={0.6}
              strokeOpacity={0.6}
            />
          </Svg>
        </View>
        <View style={styles.buttonUseName}>
          <View style={styles.buttonBg1} />
          <View style={styles.userName}>
            <Svg
              viewBox="0 0 17.00 24.00"
              preserveAspectRatio="none"
              style={styles.fill177}
            >
              <Path
                strokeWidth={0}
                fill="rgba(48,48,48,0.6)"
                isClosed={true}
                d="M15.45 19.13 L11.66 22.50 L5.34 22.50 L1.55 19.13 L1.55 16.87 C1.55 16.87 2.79 13.95 4.46 13.60 C5.60 14.48 6.99 15.00 8.50 15.00 C10.01 15.00 11.40 14.48 12.54 13.60 C14.21 13.95 15.45 16.87 15.45 16.87 L15.45 19.13 Z M3.09 7.50 C3.09 4.19 5.51 1.50 8.50 1.50 C11.49 1.50 13.91 4.19 13.91 7.50 C13.91 10.81 11.49 13.50 8.50 13.50 C5.51 13.50 3.09 10.81 3.09 7.50 Z M13.87 12.26 C14.86 10.97 15.45 9.31 15.45 7.50 C15.45 3.36 12.34 0.00 8.50 0.00 C4.66 0.00 1.55 3.36 1.55 7.50 C1.55 9.31 2.14 10.97 3.13 12.26 C1.31 12.87 0.00 16.50 0.00 16.50 L0.00 19.50 L4.64 24.00 L12.36 24.00 L17.00 19.50 L17.00 16.50 C17.00 16.50 15.69 12.87 13.87 12.26 Z"
                fillOpacity={0.6}
                strokeOpacity={0.6}
              />
            </Svg>
          </View>
        </View>
        <View style={styles.buttonPass}>
          <View style={styles.buttonBg2} />
          <Svg
            viewBox="0 0 15.00 24.00"
            preserveAspectRatio="none"
            style={styles.fill174}
          >
            <Path
              strokeWidth={0}
              fill="rgba(48,48,48,0.6)"
              isClosed={true}
              d="M13.50 16.50 C13.50 13.30 10.70 10.50 7.50 10.50 C4.19 10.50 1.50 13.19 1.50 16.50 C1.50 19.81 4.19 22.50 7.50 22.50 C10.81 22.50 13.50 19.81 13.50 16.50 Z M3.00 10.51 C3.00 10.51 5.81 9.00 7.50 9.00 C9.19 9.00 12.00 10.51 12.00 10.51 L12.00 6.00 C12.00 6.00 9.98 1.50 7.50 1.50 C5.02 1.50 3.00 6.00 3.00 6.00 L3.00 10.51 Z M15.00 16.50 C15.00 20.64 11.64 24.00 7.50 24.00 C3.36 24.00 0.00 20.64 0.00 16.50 C0.00 14.82 1.50 12.01 1.50 12.01 L1.50 6.00 C1.50 6.00 4.19 0.00 7.50 0.00 C10.81 0.00 13.50 6.00 13.50 6.00 L13.50 12.01 C13.50 12.01 15.00 14.82 15.00 16.50 Z M8.25 15.75 L8.25 18.75 C8.25 18.75 7.91 19.50 7.50 19.50 C7.09 19.50 6.75 18.75 6.75 18.75 L6.75 15.75 C6.75 15.75 7.09 15.00 7.50 15.00 C7.91 15.00 8.25 15.75 8.25 15.75 Z"
              fillOpacity={0.6}
              strokeOpacity={0.6}
            />
          </Svg>
        </View>
        <View style={styles.buttonPassCopy}>
          <View style={styles.buttonBg3} />
          <Svg
            viewBox="0 0 18.00 13.51"
            preserveAspectRatio="none"
            style={styles.path2}
          >
            <Path
              strokeWidth={1.5}
              fill="transparent"
              stroke="rgba(67,72,76,1)"
              isClosed={false}
              d="M0.75 6.75 L5.25 11.26 L15.75 0.75 "
              fillOpacity={0.5}
              strokeOpacity={0.5}
            />
          </Svg>
        </View>
        <View style={styles.buttonSignUp}>
          <ImageBackground
            style={styles.buttonBg4}
            source={require("../assets/Gradient_OY1tFrL.png")} /*gradient: {"elipseLength":0,"from":{"x":"0.00","y":"1.00"},"gradientType":"LinearGradient","id":"78041F34-3D99-4EBE-AD6A-26D649C1AE5F","shouldSmoothenOpacity":false,"stops":[{"offset":0,"stopColor":"rgba(255,87,34,1)","style":{}},{"offset":1,"stopColor":"rgba(255,221,34,1)","style":{}}],"style":{},"to":{"x":"1.00","y":"0.00"}}*/
          />
          <Text style={styles.signUp}>SIGN UP</Text>
        </View>
        <View style={styles.statusBarBg} />
        <View style={styles.logoMeterialThemeUiUx}>
          <Text style={styles.createYourAccount}>Create your account</Text>
        </View>
        <TouchableOpacity
          style={styles.button6}
          onPress={() => {
            this.props.navigation.push("SignInSignUp");
          }}
        >
          <Svg
            style={styles.svg}
            viewBox="0 0 16.00 16.00"
            preserveAspectRatio="none"
          >
            <Path
              strokeWidth={0}
              fill="rgba(67,72,76,1)"
              isClosed={true}
              d="M16.00 7.00 L3.80 7.00 L9.40 1.40 L8.00 0.00 L0.00 8.00 L8.00 16.00 L9.40 14.60 L3.80 9.00 L16.00 9.00 L16.00 7.00 L16.00 7.00 Z"
            />
          </Svg>
        </TouchableOpacity>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  root: {
    backgroundColor: "rgba(255,255,255,1)",
    flex: 1
  },
  imageBg: {
    position: "absolute",
    top: "0.00%",
    left: "0.00%",
    height: "100.00%",
    width: "100.00%"
  },
  bgScreen1: {
    position: "absolute",
    top: "0.00%",
    left: "0.00%",
    height: "100.00%",
    width: "100.00%",
    overflow: "hidden",
    backgroundColor: "transparent"
  },
  bgScreen: {
    position: "absolute",
    top: 0,
    left: 0,
    overflow: "hidden",
    backgroundColor: "transparent",
    right: 0,
    bottom: 0
  },
  button5: {
    position: "absolute",
    top: "7.50%",
    left: "3.33%",
    height: "2.50%",
    width: "4.44%"
  },
  shape: {
    position: "absolute",
    height: 16,
    width: 16,
    top: "0.00%",
    left: "0.00%",
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  buttonEmail: {
    position: "absolute",
    top: "32.50%",
    left: "4.44%",
    height: "7.50%",
    width: "91.11%"
  },
  buttonBg: {
    position: "absolute",
    top: "0.00%",
    left: "0.00%",
    height: "100.00%",
    width: "100.00%",
    borderRadius: 2,
    backgroundColor: "rgba(153,153,153,0.1)"
  },
  fill186: {
    position: "absolute",
    height: "37.50%",
    width: "7.32%",
    top: "31.25%",
    left: "87.80%",
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  buttonUseName: {
    position: "absolute",
    top: "22.50%",
    left: "4.44%",
    height: "7.50%",
    width: "91.11%"
  },
  buttonBg1: {
    position: "absolute",
    top: "0.00%",
    left: "0.00%",
    height: "100.00%",
    width: "100.00%",
    borderRadius: 2,
    backgroundColor: "rgba(153,153,153,0.1)"
  },
  userName: {
    position: "absolute",
    top: "25.00%",
    left: "89.02%",
    height: "50.00%",
    width: "5.18%"
  },
  fill177: {
    position: "absolute",
    height: "100.00%",
    width: "100.00%",
    top: "0.00%",
    left: "0.00%",
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  buttonPass: {
    position: "absolute",
    top: "42.50%",
    left: "4.44%",
    height: "7.50%",
    width: "91.11%"
  },
  buttonBg2: {
    position: "absolute",
    top: "0.00%",
    left: "0.00%",
    height: "100.00%",
    width: "100.00%",
    borderRadius: 2,
    backgroundColor: "rgba(153,153,153,0.1)"
  },
  fill174: {
    position: "absolute",
    height: "50.00%",
    width: "4.57%",
    top: "25.00%",
    left: "89.33%",
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  buttonPassCopy: {
    position: "absolute",
    top: "52.50%",
    left: "4.44%",
    height: "7.50%",
    width: "91.11%"
  },
  buttonBg3: {
    position: "absolute",
    top: "0.00%",
    left: "0.00%",
    height: "100.00%",
    width: "100.00%",
    borderRadius: 2,
    backgroundColor: "rgba(153,153,153,0.1)"
  },
  path2: {
    position: "absolute",
    height: "25.02%",
    width: "5.03%",
    top: "38.02%",
    left: "89.10%",
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  buttonSignUp: {
    position: "absolute",
    top: "62.50%",
    left: "4.44%",
    height: "7.50%",
    width: "91.11%"
  },
  buttonBg4: {
    position: "absolute",
    top: "0.00%",
    left: "0.01%",
    height: "100.00%",
    width: "99.99%",
    borderRadius: 2,
    backgroundColor: "transparent"
  },
  signUp: {
    position: "absolute",
    top: "33.33%",
    left: "5.49%",
    height: "33.33%",
    width: "88.92%",
    backgroundColor: "transparent",
    textAlign: "center",
    color: "rgba(255,255,255,1)",
    fontSize: 14,
    letterSpacing: 0.5
  },
  statusBarBg: {
    position: "absolute",
    top: "0.00%",
    left: "0.00%",
    height: "3.75%",
    width: "100.00%",
    opacity: 0.2,
    backgroundColor: "rgba(0,0,0,1)",
    display: "none"
  },

  logoMeterialThemeUiUx: {
    position: "absolute",
    top: "13.75%",
    left: "7.22%",
    height: "5.00%",
    width: "85.56%"
  },
  createYourAccount: {
    position: "absolute",
    top: "0.00%",
    left: "0.00%",
    height: "100.00%",
    width: "100.00%",
    backgroundColor: "transparent",
    lineHeight: 32,
    textAlign: "center",
    color: "rgba(67,72,76,1)",
    fontSize: 24
  },
  button6: {
    top: "7.50%",
    left: "3.33%",
    width: "4.44%",
    height: "2.50%",
    position: "absolute"
  },
  svg: {
    top: "0.00%",
    left: "0.00%",
    width: 16,
    height: 16,
    position: "absolute",
    backgroundColor: "transparent",
    borderColor: "transparent"
  }
});
