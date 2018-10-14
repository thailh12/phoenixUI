import React, { Component } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

export default class card11 extends Component {
  // Only for displaying symbol in BuilderX.
  static containerStyle = {
    height: 166,
    width: 359,
    defaultHeight: 'fixed',
    defaultWidth: 'fixed'
  };
  render() {
    return (
      <View style={[styles.root, this.props.style]}>
        <View style={styles.cardBody}>
          <View style={styles.bodyContent}>
            <Text style={styles.titleStyle}>
              Discount {this.props.discount}%
            </Text>
            <Text style={styles.subtitleStyle}>{this.props.shopname}</Text>
          </View>
          <Image
            style={styles.cardItemImagePlace}
            source={require('/home/lomis/Desktop/junction/phoenix/assets/voucher1.jpg')}
          />
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  root: {
    elevation: 3,
    flexWrap: 'nowrap',
    backgroundColor: '#FFF',
    borderWidth: 1,
    borderColor: '#CCC',
    borderRadius: 2,
    shadowColor: '#000',
    shadowOffset: {
      width: -2,
      height: 2
    },
    shadowOpacity: 0.1,
    shadowRadius: 1.5,
    overflow: 'hidden'
  },
  cardBody: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  bodyContent: {
    flex: 1,
    padding: 16,
    paddingTop: 24
  },
  titleStyle: {
    paddingBottom: 12,
    fontSize: 24,
    fontFamily: 'Roboto',
    color: '#000'
  },
  subtitleStyle: {
    opacity: 0.5,
    fontSize: 14,
    fontFamily: 'Roboto',
    lineHeight: 16,
    color: '#000'
  },
  cardItemImagePlace: {
    width: 80,
    height: 80,
    backgroundColor: '#ccc',
    margin: 16
  }
});
