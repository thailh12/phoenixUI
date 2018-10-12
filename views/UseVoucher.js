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
class Voucher extends React.PureComponent {
  constructor(props) {
    super(props);
  }

  hanldeUseVoucher(a) {
    this.props.navigation.navigate('Scan Voucher', { params: a });
  }

  render() {
    return (
      <TouchableOpacity
        style={styles.card}
        onPress={() => this.hanldeUseVoucher(this.props)}
      >
        <Card>
          <Image
            style={{
              width: Dimensions.get('window').width,
              height: Dimensions.get('window').height / 8,
              resizeMode: 'cover'
            }}
            source={{ uri: this.props.image }}
          />

          <View style={styles.constainer}>
            <Text>{this.props.title}</Text>
            <Text>20/10/2018</Text>
          </View>
        </Card>
      </TouchableOpacity>
    );
  }
}
const styles = StyleSheet.create({
  constainer: {
    padding: 10,
    marginLeft: 50,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  card: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20
  }
});
export default withNavigation(Voucher);
