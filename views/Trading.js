import React, { Component } from 'react';
import { Card } from 'react-native-elements';
import {
  View,
  Image,
  Text,
  StyleSheet,
  Platform,
  StatusBar
} from 'react-native';

export default class Trading extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Card>
          <View style={{ flexDirection: 'row' }}>
            <Image
              style={{ height: 60, width: 60 }}
              source={require('/home/lomis/Desktop/junction/phoenix/assets/43879115_1018504261643404_6550385692646572032_n.png')}
            />
            <Text style={{ paddingLeft: 20 }}>Exchange</Text>
          </View>
          <View style={{ flexDirection: 'row', bottom: 30 }}>
            <Text style={{ paddingLeft: 70 }}>Point A: 50</Text>
            <Text style={{ paddingLeft: 50 }}>Point B: 40</Text>
          </View>
        </Card>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    paddingTop: Platform.OS === 'ios' ? 0 : StatusBar.currentHeight
  },
  text: {
    top: -20,
    textAlign: 'right'
  }
});
