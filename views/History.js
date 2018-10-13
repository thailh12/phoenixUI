import React, { Component } from 'react';
import {
  Platform,
  StatusBar,
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions
} from 'react-native';
import { Card } from 'react-native-elements';

export default class History extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Card>
          <View style={{ flexDirection: 'row' }}>
            <Image
              style={{ height: 100, width: 100 }}
              source={require('/home/lomis/Desktop/junction/phoenix/assets/cardImage11.jpg')}
            />
            <Text style={{ paddingLeft: 20 }}>BRAND NAME</Text>
          </View>
          <View>
            <Text style={styles.text}>12:00 14/10/2018</Text>
          </View>
        </Card>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    paddingTop: Platform.OS === 'ios' ? 0 : StatusBar.currentHeight
  },
  text: {
    top: -20,
    textAlign: 'right'
  }
});
