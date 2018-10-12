import React, { PureComponent } from 'react';
import { View, Text, StyleSheet, Platform, StatusBar } from 'react-native';
import QRCode from 'react-native-qrcode';

class VoucherQR extends PureComponent {
  constructor(props) {
    super(props);
  }
  render() {
    const data = this.props.navigation.getParam('params');
    return (
      <View style={styles.container}>
        <QRCode value={data.code} size={200} bgColor="black" fgColor="white" />
        <Text style={styles.qrcode}>{data.code}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    paddingTop: Platform.OS === 'ios' ? 0 : StatusBar.currentHeight
  },
  qrcode: {
    padding: 30
  }
});
export default VoucherQR;
