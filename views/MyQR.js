import React, { PureComponent } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import QRCode from 'react-native-qrcode';
import { withNavigation } from 'react-navigation';

class MyQR extends PureComponent {
  constructor(props) {
    super(props);
  }
  render() {
    const data = this.props.navigation.getParam('params');
    console.log(data);
    return (
      <View style={styles.container}>
        <QRCode
          value={data.PublicAddress}
          size={200}
          bgColor="black"
          fgColor="white"
        />
        <Text>{data.PublicAddress}</Text>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#fff',
    justifyContent: 'center'
  }
});
export default withNavigation(MyQR);
