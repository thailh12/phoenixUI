import React, { Component } from 'react';
import { Center } from '@builderx/utils';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
  Image,
  AsyncStorage
} from 'react-native';

export default class Walkthrough extends Component {
  async componentWillMount() {
    await AsyncStorage.getItem('login').then(res => {
      res === 'true' ? this.props.navigation.navigate('App') : null;
    });
  }
  render() {
    return (
      <View style={styles.root}>
        <Image style={styles.image} source={require('../assets/stock.jpg')} />
        <Text
          onPress={() => {
            this.props.navigation.navigate('Signup');
          }}
          style={styles.doNotHaveAnAccou}
        >
          Do not have an account? Create Account.
        </Text>
        <Text style={styles.phoenix}>Phoenix</Text>
        <Text style={styles.yourLoyaltyCards}>
          Your loyalty cards. In one place.
        </Text>
        <TouchableOpacity
          style={styles.button2}
          onPress={() => {
            this.props.navigation.navigate('SignInSignUp');
          }}
        >
          <ImageBackground
            style={styles.rect}
            source={require('../assets/Gradient_a2DRPA8.png')} /*gradient: {"elipseLength":0,"from":{"x":"0.00","y":"1.00"},"gradientType":"LinearGradient","id":"C98B201F-4EBE-4003-9CE2-12C55F4985F9","shouldSmoothenOpacity":false,"stops":[{"offset":0,"stopColor":"rgba(255,87,34,1)","style":{}},{"offset":1,"stopColor":"rgba(255,221,34,1)","style":{}}],"style":{},"to":{"x":"1.00","y":"0.00"}}*/
          />
          <Center>
            <Text style={styles.login}>LOGIN</Text>
          </Center>
        </TouchableOpacity>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  root: {
    backgroundColor: 'rgba(255,255,255,1)',
    flex: 1
  },

  doNotHaveAnAccou: {
    position: 'absolute',

    backgroundColor: 'transparent',
    lineHeight: 20,
    color: 'rgba(255,255,255,0.5438462409)',
    fontSize: 14,
    left: 51.98,
    bottom: 37.43
  },
  phoenix: {
    position: 'absolute',
    top: '58.81%',

    backgroundColor: 'transparent',
    lineHeight: 60,
    textAlign: 'center',
    color: 'rgba(255,255,255,0.87)',
    fontSize: 50,
    letterSpacing: 0,
    right: 93
  },
  yourLoyaltyCards: {
    position: 'absolute',
    top: '70.94%',

    height: '3.13%',
    width: 328,
    backgroundColor: 'transparent',
    textAlign: 'center',
    color: 'rgba(255,255,255,0.5413269928)',
    fontSize: 16,
    right: 17.01
  },
  button2: {
    position: 'absolute',
    top: '81.17%',
    width: 329,
    left: 15.99,
    bottom: 74.61
  },

  login: {
    position: 'absolute',
    backgroundColor: 'transparent',
    textAlign: 'center',
    color: 'rgba(255,255,255,1)',
    fontSize: 14,
    letterSpacing: 0.5
  },

  rect: {
    top: 0,
    left: 0,
    width: 327,
    height: 44,
    position: 'absolute',
    backgroundColor: 'transparent',
    borderRadius: 2
  },
  image: {
    top: 0,
    left: 0,

    position: 'absolute',
    width: '100%',
    height: '100%'
  }
});
