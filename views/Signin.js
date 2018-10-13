import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Dimensions,
  Button,
  AsyncStorage,
  Alert
} from 'react-native';
import {
  FormLabel,
  FormInput,
  FormValidationMessage
} from 'react-native-elements';

class SignIn extends React.Component {
  constructor(props) {
    super(props);
  }
  async componentWillMount() {
    await AsyncStorage.getItem('login').then(res => {
      res === 'true' ? this.props.navigation.navigate('App') : null;
    });
  }
  async handleLogin(data) {
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
  state = {
    username: false,
    password: false
  };
  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          placeholder=" User Name"
          onChangeText={value => {
            this.setState({ username: value });
          }}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry={true}
          onChangeText={text => {
            this.setState({ password: text });
          }}
        />
        <View style={styles.button}>
          <Button onPress={() => this.handleLogin(this.state)} title="Login " />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  input: {
    textAlign: 'center',
    height: 40,
    width: Dimensions.get('window').width - 70
  },
  button: {
    paddingTop: 20,
    width: Dimensions.get('window').width - 70
  }
});
export default SignIn;
