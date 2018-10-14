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
import { api } from '../config';
import PTRView from 'react-native-pull-to-refresh';

export default class History extends Component {
  state = {
    result: false
  };
  componentWillMount() {
    this.refresh();
  }
  async refresh() {
    await fetch(`${api}/user/${10}/transaction`, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      }
    }).then(res => {
      res.json().then(result => {
        this.setState({ result });
      });
    });
  }
  render() {
    return this.state.result ? (
      <PTRView onRefresh={() => this.refresh()}>
        <View style={styles.container}>
          {this.state.result.map((item, index) => {
            return (
              <Card key={index}>
                <View style={{ flexDirection: 'row' }}>
                  <Image
                    style={{ height: 100, width: 100 }}
                    source={require('/home/lomis/Desktop/junction/phoenix/assets/History_Reward1.jpg')}
                  />
                  <Text style={{ paddingLeft: 20 }}>
                    {item.transactionType}
                  </Text>
                </View>
                <View>
                  <Text style={styles.text}>{item.updatedAt}</Text>
                </View>
              </Card>
            );
          })}
        </View>
      </PTRView>
    ) : null;
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
