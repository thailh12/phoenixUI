import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Dimensions,
  Platform,
  StatusBar,
  ScrollView,
  AsyncStorage
} from 'react-native';
import PTRView from 'react-native-pull-to-refresh';

import { Button } from 'react-native-elements';
import { Icon, Card } from 'react-native-elements';
import Voucher from './Voucher';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import { withNavigation } from 'react-navigation';
const u = {
  a: '/home/lomis/Desktop/junction/phoenix/assets/cardImage11.jpg'
};
const { width: viewportWidth, height: viewportHeight } = Dimensions.get(
  'window'
);

function wp(percentage) {
  const value = (percentage * viewportWidth) / 100;
  return Math.round(value);
}

const slideHeight = viewportHeight * 0.2;
const slideWidth = wp(85);
const itemHorizontalMargin = wp(0.1);

const sliderWidth = viewportWidth;
const itemWidth = slideWidth + itemHorizontalMargin * 5;
class Home extends React.PureComponent {
  state = {
    voucher: [
      {
        id: '1',
        title: 'Discount 30%',
        require: '200 point',
        image: ''
      },
      {
        id: '2',
        title: 'Discount 10%',
        require: '400 point',
        image: ''
      },
      {
        id: '3',
        title: 'Discount 20%',
        require: '300 point',
        image: ''
      }
    ]
  };
  refresh() {
    // call api to refresh
  }
  renderItem({ item }) {
    return (
      <Voucher
        key={item.id}
        id={item.id}
        title={item.title}
        require={item.require}
        //  image={item.image}
        image={u.a}
      />
    );
  }

  render() {
    return (
      <PTRView onRefresh={() => this.refresh()}>
        <ScrollView style={styles.container}>
          <View style={styles.button}>
            <Icon
              key={1}
              raised
              name="qrcode"
              type="font-awesome"
              color="#000"
              onPress={() => this.props.navigation.navigate('Scan')}
            />
            <Text style={{ color: 'white', fontSize: 25 }}>The Phoenix</Text>
            <Icon
              key={2}
              raised
              name="user-circle"
              type="font-awesome"
              color="#000"
              onPress={() => this.props.navigation.navigate('Profile')}
            />
          </View>
          <View style={styles.Carousel}>
            <Carousel
              layout={'default'}
              data={this.state.voucher}
              renderItem={this.renderItem}
              sliderHeight={500}
              sliderWidth={sliderWidth}
              itemWidth={sliderWidth}
            />
          </View>
          <View style={{ alignItems: 'center' }}>
            <Text>Earn Point</Text>
          </View>
          <View style={styles.Card}>
            <Card
              containerStyle={{
                height: 200,
                width: Dimensions.get('window') / 2
              }}
              image={require('../assets/cardImage11.jpg')}
            >
              <Text>The coffee shop</Text>
            </Card>
            <Card
              containerStyle={{
                height: 200
              }}
              image={require('../assets/cardImage11.jpg')}
            >
              <Text>The coffee shop</Text>
            </Card>
          </View>
          <View style={styles.Card}>
            <Card
              containerStyle={{
                height: 200
              }}
              image={require('../assets/cardImage11.jpg')}
            >
              <Text>The coffee shop</Text>
            </Card>
            <Card
              containerStyle={{
                height: 200
              }}
              image={require('../assets/cardImage11.jpg')}
            >
              <Text>The coffee shop</Text>
            </Card>
          </View>
        </ScrollView>
      </PTRView>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: Platform.OS === 'ios' ? 0 : StatusBar.currentHeight
    // alignItems: 'center',
  },
  button: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#f48f42'
  },
  Carousel: {
    backgroundColor: '#fff',
    height: Dimensions.get('window').height / 3
  },
  Card: {
    // flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around'
  }
});
export default Home;
