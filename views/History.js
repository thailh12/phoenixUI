import React from 'react';
import { View, Text, StyleSheet, Platform, StatusBar } from 'react-native';
import { Icon, Card } from 'react-native-elements';
import HistoryItem from './HistoryItem';
import PTRView from 'react-native-pull-to-refresh';

class History extends React.PureComponent {
  refresh() {
    // call api to refresh
  }
  render() {
    return (
      <PTRView onRefresh={() => this.refresh()}>
        <View style={styles.container}>
          <HistoryItem />
        </View>
      </PTRView>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    paddingTop: Platform.OS === 'ios' ? 0 : StatusBar.currentHeight
  }
});
export default History;
