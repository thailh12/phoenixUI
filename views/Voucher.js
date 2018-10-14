import React from 'react';
import {
  View,
  Alert,
  Text,
  StyleSheet,
  Dimensions,
  Image,
  TouchableOpacity,
  AsyncStorage
} from 'react-native';
import { Center } from '@builderx/utils';
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
  hanldeVoucherClick(data) {
    this.props.navigation.navigate('ListVoucher');
  }

  render() {
    return (
      <TouchableOpacity
        style={styles.card}
        onPress={() => this.hanldeVoucherClick(this.props.user)}
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
            source={require(`/home/lomis/Desktop/junction/phoenix/assets/carosuel1.jpg`)}
          />
        </View>

        <View style={styles.constainer}>
          <Text
            style={{
              color: '#fff',
              fontSize: 24
            }}
          >
            GET YOUR VOUCHER NOW
          </Text>
        </View>
      </TouchableOpacity>
    );
  }
}
const styles = StyleSheet.create({
  constainer: {
    top: 100,
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
