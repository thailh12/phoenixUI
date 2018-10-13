import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { api } from '../config';
import { Button } from 'react-native-elements';
import PTRView from 'react-native-pull-to-refresh';

class MyPoint extends React.PureComponent {
  state = {
    result: false
  };
  constructor() {
    super();
    this.refresh();
  }
  async refresh() {
    await fetch(`${api}/customer/${10}/wallet`).then(res => {
      res.json().then(result => {
        console.log('point', result);
        this.setState({ result });
      });
    });
  }
  render() {
    return (
      <PTRView onRefresh={() => this.refresh()}>
        {this.state.result ? (
          <View style={styles.constainer}>
            {this.state.result.map((item, index) => {
              return (
                <View style={styles.card} key={index}>
                  <Text>{item.name}</Text>
                  <Text>{item.currentAmount}</Text>
                </View>
              );
            })}
          </View>
        ) : null}
      </PTRView>
    );
  }
}
const styles = StyleSheet.create({
  constainer: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 10
  },
  card: {
    flexDirection: 'column',
    alignItems: 'center'
  }
});

export default MyPoint;
