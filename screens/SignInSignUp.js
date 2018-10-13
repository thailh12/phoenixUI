import React, { Component } from 'react';
import { Svg, Path } from 'react-native-svg';
import _ from 'lodash';
import { Center } from '@builderx/utils';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
  TextInput,
  AsyncStorage
} from 'react-native';

export default class SignInSignUp extends React.PureComponent {
  state = { username: false, password: false };

  async onSignin(data) {
    console.log(data);
    const navigation = this.props.navigation;
    // TODO call API to get token and set to AsyncStore
    await fetch('http://10.83.1.201:3001/signin', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
      .then(res => {
        res.json().then(result => {
          console.log(result);
          if (res.ok) {
            AsyncStorage.setItem('token', result.token);
            AsyncStorage.setItem('user', JSON.stringify(result));
            AsyncStorage.setItem('login', 'true');
            navigation.navigate('App');
          }
        });
      })
      .catch(e => console.log('error', e));
  }
  render() {
    return (
      <View style={styles.root}>
        <View style={styles.bgScreen} />
        <View style={styles.rect2}>
          <View style={styles.rect3} />
          <TextInput
            style={{ height: 40, padding: 10 }}
            placeholder="Email"
            onChangeText={username => {
              this.setState({ username });
            }}
            underlineColorAndroid="transparent"
          />
          <View style={styles.iconMail}>
            {/* <Svg
              viewBox="0 0 19.00 15.00"
              preserveAspectRatio="none"
              style={styles.iconMail1}
            >
              <Path
                strokeWidth={0}
                fill="rgba(48,48,48,0.6)"
                isClosed={true}
                d="M17.54 13.53 C17.47 13.60 17.30 13.64 17.30 13.64 L1.70 13.64 C1.70 13.64 1.53 13.60 1.46 13.53 C1.39 13.47 1.36 13.30 1.36 13.30 L1.36 5.11 C1.36 5.11 1.83 5.60 2.09 5.82 C3.98 7.28 5.49 8.48 6.61 9.42 C6.97 9.72 7.26 9.96 7.49 10.13 C7.71 10.30 8.02 10.47 8.40 10.65 C8.79 10.82 9.49 10.91 9.49 10.91 L9.51 10.91 C9.51 10.91 10.21 10.82 10.60 10.65 C10.98 10.47 11.29 10.30 11.51 10.13 C11.74 9.96 12.03 9.72 12.39 9.42 C13.51 8.48 15.02 7.28 16.91 5.82 C17.17 5.60 17.64 5.11 17.64 5.11 L17.64 13.30 C17.64 13.30 17.61 13.47 17.54 13.53 Z M17.15 3.50 C16.82 4.01 16.47 4.43 16.08 4.73 C14.72 5.81 13.30 6.94 11.83 8.11 C11.79 8.14 11.67 8.25 11.46 8.42 C11.26 8.59 11.09 8.73 10.97 8.82 C10.85 8.91 10.70 9.03 10.50 9.16 C10.31 9.29 10.13 9.39 9.97 9.45 C9.80 9.51 9.51 9.55 9.51 9.55 L9.49 9.55 C9.49 9.55 9.20 9.51 9.03 9.45 C8.87 9.39 8.69 9.29 8.50 9.16 C8.30 9.03 8.15 8.91 8.03 8.82 C7.91 8.73 7.74 8.59 7.54 8.42 C7.33 8.25 7.21 8.14 7.17 8.11 C5.70 6.94 4.28 5.81 2.92 4.73 C1.88 3.91 1.36 2.90 1.36 1.70 C1.36 1.61 1.39 1.53 1.46 1.47 C1.53 1.40 1.70 1.36 1.70 1.36 L17.30 1.36 C17.30 1.36 17.41 1.37 17.45 1.39 C17.50 1.41 17.53 1.43 17.55 1.47 C17.57 1.51 17.59 1.54 17.61 1.57 C17.62 1.59 17.63 1.64 17.64 1.70 C17.64 1.76 17.64 1.84 17.64 1.84 L17.64 2.10 C17.64 2.10 17.48 2.99 17.15 3.50 Z M18.50 0.50 C18.17 0.17 17.30 0.00 17.30 0.00 L1.70 0.00 C1.70 0.00 0.83 0.17 0.50 0.50 C0.17 0.83 0.00 1.70 0.00 1.70 L0.00 13.30 C0.00 13.30 0.17 14.17 0.50 14.50 C0.83 14.83 1.70 15.00 1.70 15.00 L17.30 15.00 C17.30 15.00 18.17 14.83 18.50 14.50 C18.83 14.17 19.00 13.30 19.00 13.30 L19.00 1.70 C19.00 1.70 18.83 0.83 18.50 0.50 Z"
              />
            </Svg> */}
          </View>
        </View>
        <View style={styles.buttonPass}>
          <View style={styles.buttonBg1} />
          <TextInput
            style={{ height: 40, padding: 10 }}
            placeholder="Password"
            onChangeText={password => this.setState({ password })}
            underlineColorAndroid="transparent"
            secureTextEntry={true}
          />
          {/* <Svg
            viewBox="0 0 16.00 21.00"
            preserveAspectRatio="none"
            style={styles.shape4}
          >
            <Path
              strokeWidth={0}
              fill="rgba(48,48,48,0.6)"
              isClosed={true}
              d="M16.00 9.00 L16.00 19.00 L14.00 21.00 L2.00 21.00 L0.00 19.00 L0.00 9.00 L2.00 7.00 L3.00 7.00 L3.00 5.00 C3.00 5.00 5.20 0.00 8.00 0.00 C10.80 0.00 13.00 5.00 13.00 5.00 L13.00 7.00 L14.00 7.00 L16.00 9.00 Z M4.90 5.00 L5.00 5.00 L5.00 7.00 L11.10 7.00 L11.10 5.00 C11.10 5.00 9.70 1.90 8.00 1.90 C6.30 1.90 4.90 5.00 4.90 5.00 Z M14.00 9.00 L2.00 9.00 L2.00 19.00 L14.00 19.00 L14.00 9.00 Z M6.00 14.00 C6.00 12.90 6.90 12.00 8.00 12.00 C9.10 12.00 10.00 12.90 10.00 14.00 C10.00 15.10 9.10 16.00 8.00 16.00 C6.90 16.00 6.00 15.10 6.00 14.00 Z"
              fillOpacity={0.5}
              strokeOpacity={0.5}
            />
          </Svg> */}
        </View>
        <TouchableOpacity
          onPress={() => {
            console.log('run');
            this.onSignin(this.state);
          }}
          style={styles.button7}
        >
          <ImageBackground
            style={styles.buttonBg2}
            source={require('../assets/Gradient_a2DRPA8.png')} /*gradient: {"elipseLength":0,"from":{"x":"0.00","y":"1.00"},"gradientType":"LinearGradient","id":"C98B201F-4EBE-4003-9CE2-12C55F4985F9","shouldSmoothenOpacity":false,"stops":[{"offset":0,"stopColor":"rgba(255,87,34,1)","style":{}},{"offset":1,"stopColor":"rgba(255,221,34,1)","style":{}}],"style":{},"to":{"x":"1.00","y":"0.00"}}*/
          />
          <Center>
            <Text style={styles.signIn}>SIGN IN</Text>
          </Center>
        </TouchableOpacity>
        <Text style={styles.forgotYourPassword}>Forgot your Password?</Text>
        <TouchableOpacity
          style={styles.button5}
          onPress={() => {
            this.props.navigation.navigate('Signup');
          }}
        >
          <View style={styles.rectangle} />
          <Text style={styles.doNotHaveAnAccou}>
            Do not have an account? Create Account.
          </Text>
        </TouchableOpacity>
        {/* <TouchableOpacity
          style={styles.button6}
          onPress={() => {
            this.props.navigation.navigate('Walkthrough');
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
        </TouchableOpacity> */}
      </View>
    );
  }
}
const styles = StyleSheet.create({
  root: {
    backgroundColor: 'rgba(255,255,255,1)',
    flex: 1
  },
  bgScreen: {
    position: 'absolute',
    top: '0%',
    left: '0%',
    height: '100%',
    width: '100%',
    backgroundColor: 'rgba(255,255,255,1)'
  },

  rect2: {
    position: 'absolute',
    top: '37.50%',
    left: '4.44%',
    height: '7.50%',
    width: '91.11%'
  },
  rect3: {
    position: 'absolute',
    top: '0.00%',
    left: '0.00%',
    height: '100.00%',
    width: '100.00%',
    borderRadius: 2,
    backgroundColor: 'rgba(153,153,153,0.1)'
  },

  iconMail: {
    position: 'absolute',
    top: '35.42%',
    left: '89.94%',
    height: '31.25%',
    width: '5.79%'
  },
  iconMail1: {
    position: 'absolute',
    height: '100.00%',
    width: '100.00%',
    top: '0.00%',
    left: '0.00%',
    backgroundColor: 'transparent',
    borderColor: 'transparent'
  },
  buttonPass: {
    position: 'absolute',
    top: '47.50%',
    left: '4.44%',
    height: '7.50%',
    width: '91.11%'
  },
  buttonBg1: {
    position: 'absolute',
    top: '0.00%',
    left: '0.00%',
    height: '100.00%',
    width: '100.00%',
    borderRadius: 2,
    backgroundColor: 'rgba(153,153,153,0.1)'
  },

  shape4: {
    position: 'absolute',
    height: '43.75%',
    width: '4.88%',
    top: '27.08%',
    left: '90.55%',
    backgroundColor: 'transparent',
    borderColor: 'transparent'
  },
  button7: {
    position: 'absolute',
    top: '62.19%',
    left: '4.44%',
    height: '7.50%',
    width: '91.11%'
  },
  buttonBg2: {
    position: 'absolute',
    top: '0.00%',
    left: '0.00%',
    height: '100.00%',
    width: '100.00%',
    borderRadius: 2,
    backgroundColor: 'transparent'
  },
  signIn: {
    position: 'absolute',

    backgroundColor: 'transparent',
    textAlign: 'center',
    color: 'rgba(255,255,255,1)',
    fontSize: 14,
    letterSpacing: 0.5
  },
  statusBarBg: {
    position: 'absolute',
    top: '0.00%',
    left: '0.00%',
    height: '3.75%',
    width: '100.00%',
    opacity: 0.2,
    backgroundColor: 'rgba(0,0,0,1)',
    display: 'none'
  },
  forgotYourPassword: {
    position: 'absolute',
    top: '57.50%',
    left: '33.06%',
    backgroundColor: 'transparent',
    lineHeight: 16,
    color: 'rgba(48,48,48,0.87)',
    fontSize: 12
  },
  button5: {
    position: 'absolute',
    top: '72.34%',
    left: '0.28%',
    height: '7.34%',
    width: '100%'
  },
  rectangle: {
    position: 'absolute',
    top: '0.00%',
    left: '0.00%',
    height: '100.00%',
    width: '100.00%'
  },
  doNotHaveAnAccou: {
    position: 'absolute',
    top: '33.33%',
    left: '19.44%',
    backgroundColor: 'transparent',
    lineHeight: 16,
    color: 'rgba(0,0,0,0.5392606431)',
    fontSize: 12
  },
  button6: {
    top: '7.50%',
    left: '3.33%',
    width: '4.44%',
    height: '2.50%',
    position: 'absolute'
  },
  svg: {
    top: '0.00%',
    left: '0.00%',
    width: 16,
    height: 16,
    position: 'absolute',
    backgroundColor: 'transparent',
    borderColor: 'transparent'
  }
});
