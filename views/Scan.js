import {
  StyleSheet,
  Text,
  View,
  Linking,
  Vibration,
  Dimensions,
  TouchableOpacity,
  Alert,
  Button
} from 'react-native';
import { Permissions } from 'expo-permissions';
import { withNavigation } from 'react-navigation';
import React from 'react';
import { Camera } from 'expo-camera';

class ScanQR extends React.Component {
  state = {
    hasCameraPermission: null,
    type: Camera.Constants.Type.back,
    scanning: true
  };

  async componentWillMount() {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    this.setState({ hasCameraPermission: status === 'granted' });
  }

  handleBarCodeRead(e) {
    Vibration.vibrate();
    fetch(e.data);
    this.setState({ scanning: false });
    // Linking.openURL(e.data).catch(err =>
    //   console.error('An error occured', err)
    // );
    return;
  }
  render() {
    const { scanning } = this.state;
    if (!scanning) {
      return (
        <View style={styles.container}>
          <Text>You got 50 point</Text>
        </View>
      );
    } else {
      return (
        <View style={{ flex: 1 }}>
          <Camera
            style={{ flex: 1 }}
            type={this.state.type}
            onBarCodeScanned={this.handleBarCodeRead.bind(this)}
          />
        </View>
      );
    }
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },
  camera: {
    flex: 0,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent',
    height: Dimensions.get('window').width,
    width: Dimensions.get('window').width
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5
  },
  rectangleContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent'
  },

  rectangle: {
    height: 250,
    width: 250,
    borderWidth: 2,
    borderColor: '#00FF00',
    backgroundColor: 'transparent'
  }
});
export default withNavigation(ScanQR);
