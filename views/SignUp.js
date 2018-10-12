import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Dimensions,
  Button
} from 'react-native';
import {
  FormLabel,
  FormInput,
  FormValidationMessage
} from 'react-native-elements';

class SignIn extends React.Component {
  handleSignUp() {
    const navigation = this.props.navigation;
    navigation.navigate('SignIn');
  }
  state = {
    username: false,
    password: false
  };
  render() {
    return (
      <View style={styles.container}>
        <TextInput style={styles.input} placeholder=" User Name" />
        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry={true}
        />
        <TextInput
          style={styles.input}
          placeholder="Confirm Password"
          secureTextEntry={true}
        />
        <View style={styles.button}>
          <Button onPress={() => this.handleSignUp()} title="Sign Up " />
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
