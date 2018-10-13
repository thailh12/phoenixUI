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
        title: 'Discount 30%',
        require: '200 point',
        image: '',
        code: 'AKdjslkhflsak'
      },

      {
        id: '3',
        title: 'Discount 20%',
        require: '300 point',
        image: '',
        code: 'AK1235djslkhflsak'
      }
    ]
  };
  async refresh() {
    let id = await AsyncStorage.getItem('user');
    id = JSON.parse(id);
    await fetch(`http://10.83.1.201:3001/customer/${id.userId}/voucher`, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      }
    }).then(res => {
      res.json().then(result => {
        console.log(result);
        this.setState({ myvoucher: result });
      });
    });
  }
  render() {
    return (
      <PTRView onRefresh={() => this.refresh()}>
        <ScrollView style={styles.container}>
          {this.state.myvoucher.map(item => {
            return (
              <TouchableOpacity
                key={item.id}
                onPress={() =>
                  this.props.navigation.navigate('Scan Voucher', {
                    params: item.code
                  })
                }
              >
                <HistoryItem />
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
