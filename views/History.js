import React from 'react';
import { View, Text, StyleSheet, Platform, StatusBar } from 'react-native';
import { Icon, Card } from 'react-native-elements';
import HistoryItem from './HistoryItem';
class History extends React.PureComponent {
  render() {
    return (
      <View style={styles.container}>
        <HistoryItem />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
    paddingTop: Platform.OS === 'ios' ? 0 : StatusBar.currentHeight,
    alignItems: 'center'
  }
});
export default History;
