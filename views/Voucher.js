import React from 'react';
import {
  View,
  Alert,
  Text,
  StyleSheet,
  Dimensions,
  Image,
  TouchableOpacity
} from 'react-native';
import { Card, Button, Header } from 'react-native-elements';
import { withNavigation } from 'react-navigation';
const u = {
  a: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg'
};
class Voucher extends React.PureComponent {
  constructor(props) {
    super(props);
  }
  handleGetVoucher(id) {
    Alert.alert('Success');
  }
  hanldeVoucherClick() {
    // call api to get voucher
    // Alert.alert(
    //   'Confirm',
    //   `${a.require}`,
    //   [
    //     {
    //       text: 'Cancel'
    //     },
    //     { text: 'OK', onPress: () => this.handleGetVoucher(a.id) }
    //   ],
    //   { cancelable: false }
    // );
    this.props.navigation.navigate('ListVoucher');
  }

  render() {
    return (
      <TouchableOpacity
        style={styles.card}
        onPress={() => this.hanldeVoucherClick(this.props)}
      >
        <View
          style={{
            position: 'absolute'
          }}
        >
          <Image
            style={{
              width: Dimensions.get('window').width,
              height: Dimensions.get('window').height / 2,
              resizeMode: 'cover'
            }}
            source={{ uri: this.props.image }}
          />
        </View>

        <View style={styles.constainer}>
          <Text style={{ color: '#fff', fontSize: 20, paddingTop: 50 }}>
            {this.props.title}
          </Text>
        </View>
      </TouchableOpacity>
    );
  }
}
const styles = StyleSheet.create({
  constainer: {
    marginLeft: 50,
    alignItems: 'center',
    justifyContent: 'center'
  },
  card: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center'
  }
});

export default withNavigation(Voucher);
