import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Platform,
  StatusBar,
  ScrollView,
  TouchableOpacity,
  AsyncStorage
} from 'react-native';
import { Icon } from 'react-native-elements';
import UseVoucher from './UseVoucher';
import PTRView from 'react-native-pull-to-refresh';
import HistoryItem from './HistoryItem';
import { api } from '../config';
const u = {
  a:
    'https://scontent.fhan4-1.fna.fbcdn.net/v/t1.0-9/32929951_800542730140845_6430125809494654976_n.jpg?_nc_cat=105&oh=37851c37609497c01ec0bec1d54c6238&oe=5C23DEBD'
};
class MyVoucher extends React.PureComponent {
  componentWillMount() {
    //TODO call api to list my voucher
  }
  state = {
    myvoucher: [
      {
        id: '1',
        discount: 20,
        title: 'Discount 30%',
        image: '',
        code: 'AKdjslkhflsak',
        shopName: 'Bug tea'
      },

      {
        id: '3',
        discount: 30,
        title: 'Discount 20%',
        image: '',
        code: 'AK1235djslkhflsak',
        shopName: 'Debug tea'
      }
    ]
  };
  async refresh() {
    let id = await AsyncStorage.getItem('user');
    id = JSON.parse(id);
    await fetch(`${api}/customer/${id.info.userId}/voucher`, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      }
    }).then(res => {
      res.json().then(result => {
        this.setState({ myvoucher: result });
      });
    });
  }
  render() {
    return (
      <PTRView onRefresh={() => this.refresh()}>
        <ScrollView style={styles.container}>
          {this.state.myvoucher.map((item, index) => {
            return (
              <TouchableOpacity
                key={index}
                onPress={() =>
                  this.props.navigation.navigate('Scan Voucher', {
                    params: item.code
                  })
                }
              >
                <HistoryItem
                  discount={item.discount}
                  shopname={item.shopName}
                />
              </TouchableOpacity>
            );
          })}
        </ScrollView>
      </PTRView>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
    paddingTop: Platform.OS === 'ios' ? 0 : StatusBar.currentHeight
  }
});
export default MyVoucher;
