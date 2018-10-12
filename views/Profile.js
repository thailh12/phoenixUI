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
  TouchableOpacity
} from 'react-native';
import { Avatar, List, ListItem } from 'react-native-elements';
import { withNavigation } from 'react-navigation';

class Profile extends React.Component {
  state = {
    pushNotifications: true
  };
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
      <View>
        <View style={styles.container}>
          <TouchableOpacity
            style={styles.userRow}
            onPress={() => this.props.navigation.navigate('MyQR')}
            activeOpacity={0.7}
          >
            <View style={styles.userImage}>
              <Avatar
                large
                rounded
                source={{
                  uri:
                    'https://scontent.fhan4-1.fna.fbcdn.net/v/t1.0-9/32929951_800542730140845_6430125809494654976_n.jpg?_nc_cat=105&oh=37851c37609497c01ec0bec1d54c6238&oe=5C23DEBD'
                }}
              />
            </View>
            <View style={{ paddingLeft: 30 }}>
              <Text>Lam Ha Thai</Text>
              <Text
                style={{
                  color: 'gray',
                  fontSize: 14
                }}
              >
                @thailh
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    padding: 20,
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: Platform.OS === 'ios' ? 0 : StatusBar.currentHeight
  },
  userRow: {
    alignItems: 'center',
    flexDirection: 'row',
    paddingBottom: 6,
    paddingLeft: 15,
    paddingRight: 15,
    paddingTop: 6
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
  }
});
export default withNavigation(Profile);
