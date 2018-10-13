import React from 'react';
import { View, Text, Button, AsyncStorage } from 'react-native';
import { withNavigation } from 'react-navigation';

class Login extends React.PureComponent {
  async componentWillMount() {
    await AsyncStorage.getItem('login').then(res => {
      res === 'true' ? this.props.navigation.navigate('App') : null;
    });
  }
  render() {
    return (
      <View>
        <Text>login</Text>
        <Button
          title="click"
          onPress={() => this.props.navigation.navigate('SignIn')}
        />
        <Button
          title="click"
          onPress={() => this.props.navigation.navigate('SignUp')}
        />
      </View>
    );
  }
}

export default withNavigation(Login);
