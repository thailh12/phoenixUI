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
    return <QRCode value={data} size={200} bgColor="black" fgColor="white" />;
  }
}

export default withNavigation(MyQR);
