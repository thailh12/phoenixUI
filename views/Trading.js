import React, { Component } from 'react';
import { Card } from 'react-native-elements';
import {
  Alert,
  View,
  Image,
  Text,
  StyleSheet,
  Platform,
  StatusBar,
  TouchableOpacity
} from 'react-native';
import PTRView from 'react-native-pull-to-refresh';

import { api } from '../config';

export default class Trading extends Component {
  state = {
    result: [
      {
        exchangeId: 16,
        publisherId: 10,
        traderId: null,
        availablePointID: 5,
        availablePointAmount: 6,
        wantingPointID: 0,
        wantingPointAmount: 4,
        isApproved: 0,
        createdAt: '2018-10-13T19:30:56.000Z',
        updatedAt: '2018-10-13',
        availablePointName: 'HighLand',
        wantingPointName: 'thupham'
      }
    ]
  };
  async refresh() {
    await fetch(`${api}/exchange`, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      }
    }).then(res => {
      res.json().then(result => {
        console.log(result);
        this.setState({ result });
      });
    });
    this.forceUpdate();
  }
  onExchange(data) {
    Alert.alert(
      'Confirm Exchange',
      '',

      [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel'
        },
        {
          text: 'OK',
          onPress: () => {
            fetch(`${api}/customer/${10}/exchange/${data.exchangeId}`, {
              method: 'PUT',
              headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
              }
            }).then(Alert.alert('Success'));
          }
        }
      ],
      { cancelable: false }
    );
  }
  render() {
    return (
      <PTRView onRefresh={() => this.refresh()}>
        {this.state.result ? (
          <View style={styles.container}>
            {this.state.result.map((item, index) => {
              return (
                <TouchableOpacity
                  key={index}
                  onPress={() => this.onExchange(item)}
                >
                  <Card>
                    <View style={{ flexDirection: 'row' }}>
                      <Image
                        style={{ height: 60, width: 60 }}
                        source={require('/home/lomis/Desktop/junction/phoenix/assets/illustration.png')}
                      />
                      <Text style={{ paddingLeft: 20 }}>Exchange</Text>
                    </View>
                    <View style={{ flexDirection: 'row', bottom: 30 }}>
                      <Text style={{ paddingLeft: 70 }}>
                        {item.availablePointName}:{item.wantingPointAmount}
                      </Text>
                      <Text style={{ paddingLeft: 50 }}>
                        {item.wantingPointName}:{item.wantingPointAmount}
                      </Text>
                    </View>
                  </Card>
                </TouchableOpacity>
              );
            })}
          </View>
        ) : null}
      </PTRView>
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
