import React from 'react';
import {
  ScrollView,
  StyleSheet,
  View,
  Text,
  Dimensions,
  Platform,
  StatusBar,
  AsyncStorage,
  TouchableOpacity,
  Image
} from 'react-native';
import { Avatar, List, ListItem } from 'react-native-elements';
import { withNavigation } from 'react-navigation';

class Profile extends React.Component {
  async componentWillMount() {
    let info = await AsyncStorage.getItem('user');
    info = JSON.parse(info);
    this.setState(...this.state, info);
  }
  state = { pushNotifications: true };
  onChangePushNotifications = () => {
    this.setState(state => ({
      pushNotifications: !state.pushNotifications
    }));
  };
  async handleLogOut(navigation) {
    // clear AsyncStorage
    // await AsyncStorage.removeItem('login');
    await AsyncStorage.clear();
    navigation.navigate('Auth');
  }
  render() {
    return (
      <ScrollView>
        <View style={styles.container}>
          <TouchableOpacity
            onPress={() =>
              this.props.navigation.navigate('MyQR', {
                params: this.state
              })
            }
            style={{
              alignItems: 'center'
            }}
          >
            <Image
              style={styles.image}
              source={{
                uri:
                  'https://scontent.fhan4-1.fna.fbcdn.net/v/t1.0-9/32929951_800542730140845_6430125809494654976_n.jpg?_nc_cat=105&oh=37851c37609497c01ec0bec1d54c6238&oe=5C23DEBD'
              }}
            />
          </TouchableOpacity>
          <Text>{this.state.username}</Text>
          <List>
            <ListItem
              title="Notification"
              switchButton
              hideChevron
              switched={this.state.pushNotifications}
              onSwitch={this.onChangePushNotifications}
            />
            <ListItem
              title="My Point"
              onPress={() => this.props.navigation.navigate('Point')}
            />
            <ListItem
              title="Transaction"
              rightTitle="10"
              onPress={() => this.props.navigation.navigate('Trading')}
            />
            <ListItem title="Rewards" rightTitle="1" />
            <ListItem title="Language" rightTitle="English" />
          </List>
          <List>
            <ListItem title="Help" />
            <ListItem title="Term and Policies" />
            <ListItem title="About" />
            <ListItem
              title="Logout"
              onPress={() => this.handleLogOut(this.props.navigation)}
            />
          </List>
        </View>
      </ScrollView>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  userRow: {
    alignItems: 'center',
    flexDirection: 'row',
    paddingBottom: 6,
    paddingLeft: 15,
    paddingRight: 15
  },
  infoText: {
    fontSize: 20,
    fontWeight: '500'
  },
  listContainer: {
    marginBottom: 0,
    marginTop: 0,
    borderTopWidth: 0
  },
  listItemContainer: {
    borderBottomColor: '#ECECEC'
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 100,
    borderWidth: 2,
    borderColor: 'rgba(210,210,210,1)'
  }
});
export default withNavigation(Profile);
