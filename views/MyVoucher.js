import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Platform,
  StatusBar,
  ScrollView
} from 'react-native';
import { Icon } from 'react-native-elements';
import UseVoucher from './UseVoucher';
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
        id: '1',
        title: 'Discount 30%',
        require: '200 point',
        image: '',
        code: 'AKdj424slkhflsak'
      },
      {
        id: '1',
        title: 'Discount 30%',
        require: '200 point',
        image: '',
        code: 'AK23523djslkhflsak'
      },
      {
        id: '2',
        title: 'Discount 10%',
        require: '400 point',
        image: '',
        code: 'AKdjslkhrt345flsak'
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

  render() {
    return (
      <ScrollView style={styles.container}>
        {this.state.myvoucher.map(item => {
          return (
            <UseVoucher
              key={item.id}
              id={item.id}
              title={item.title}
              require={item.require}
              //  image={item.image}
              image={u.a}
              code={item.code}
            />
          );
        })}
      </ScrollView>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    padding: 20,
    flex: 1,
    paddingTop: Platform.OS === 'ios' ? 0 : StatusBar.currentHeight
  }
});
export default MyVoucher;
