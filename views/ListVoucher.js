import React, { PureComponent } from 'react';
import {
  View,
  Text,
  Button,
  ScrollView,
  AsyncStorage,
  Alert
} from 'react-native';
import { Card } from 'react-native-elements';
import { withNavigation } from 'react-navigation';
import { api } from '../config';
import PTRView from 'react-native-pull-to-refresh';

class ListVoucher extends React.Component {
  state = {};
  componentWillMount() {
    this.refresh();
  }
  async onGetVoucher(data) {
    await fetch(`${api}/customer/${10}/shop/${data}/voucher`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      }
    }).then(
      Alert.alert(
        'Success',
        'You got the voucher',
        [{ text: 'OK', onPress: () => console.log('OK Pressed') }],
        { cancelable: true }
      )
    );
  }
  async refresh() {
    let data;
    await fetch(`${api}/customer/${10}/potentialVoucher`, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      }
    }).then(res => {
      res
        .json()
        .then(list => {
          this.setState({ list: list });
        })
        .catch(e => console.log(e));
    });

    this.forceUpdate();
  }
  render() {
    return (
      <PTRView onRefresh={() => this.refresh()}>
        <ScrollView>
          {this.state.list
            ? this.state.list.map((item, index) => {
                return (
                  <Card
                    key={index}
                    title={item.name}
                    image={require('../assets/cardImage11.jpg')}
                  >
                    <Text style={{ marginBottom: 10 }}>{item.discount}</Text>
                    <Button
                      backgroundColor="#03A9F4"
                      buttonStyle={{
                        borderRadius: 0,
                        marginLeft: 0,
                        marginRight: 0,
                        marginBottom: 0
                      }}
                      title="GET NOW"
                      onPress={() => {
                        this.onGetVoucher(item.shopId);
                      }}
                    />
                  </Card>
                );
              })
            : null}
        </ScrollView>
      </PTRView>
    );
  }
}
export default withNavigation(ListVoucher);
