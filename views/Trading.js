import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Platform,
  StatusBar,
  TouchableOpacity
} from 'react-native';
import { Card, ListItem } from 'react-native-elements';

class Trading extends React.Component {
  componentWillMount() {
    // TODO call api to list trading request
  }
  state = {
    request: [
      {
        name: 'point A',
        need: 'point B',
        amount: '50',
        require: '60'
      },
      {
        name: 'point A',
        need: 'point B',
        amount: '50',
        require: '60'
      },
      {
        name: 'point A',
        need: 'point B',
        amount: '50',
        require: '60'
      },
      {
        name: 'point A',
        need: 'point B',
        amount: '50',
        require: '60'
      }
    ]
  };
  handleTrading(id) {
    // TODO call api to make a trading with id
    console.log('traded');
  }
  render() {
    return (
      <View style={styles.container}>
        {this.state.request.map((trade, index) => {
          return (
            <TouchableOpacity
              style={styles.card}
              key={index}
              onPress={() => {
                this.handleTrading();
              }}
            >
              <Card>
                <View>
                  <Text>
                    {trade.name}
                    {'\t'}
                    {trade.amount}
                  </Text>
                </View>
                <View>
                  <Text>
                    {trade.need}
                    {'\t'}
                    {trade.require}
                  </Text>
                </View>
              </Card>
            </TouchableOpacity>
          );
        })}
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: Platform.OS === 'ios' ? 0 : StatusBar.currentHeight
  },
  car: {
    flex: 1,

    flexDirection: 'row'
  }
});

export default Trading;
