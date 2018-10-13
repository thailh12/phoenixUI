import {
  createNavigator,
  createSwitchNavigator,
  createBottomTabNavigator,
  createStackNavigator
} from 'react-navigation';
import { StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import React from 'react';
import Home from './views/Home';
import Scan from './views/Scan';
import Profile from './views/Profile';
import Trading from './views/Trading';
import SignIn from './views/Signin';
//import SignUp from './views/SignUp';
import History from './views/History';
import MyVoucher from './views/MyVoucher';
import UseVoucher from './views/UseVoucher';
import VoucherQR from './views/VoucherQR';
import MyQR from './views/MyQR';
import ListVoucher from './views/ListVoucher';
import Login from './views/Login';
import SigInSignUp from './screens/SignInSignUp';
import SignUp from './screens/Signup';
import Walkthrough from './screens/Walkthrough';
let styles = StyleSheet.create({
  header: {
    backgroundColor: '#f48f42'
  }
});

const profile = createSwitchNavigator(
  {
    Profile: Profile,
    MyQR: MyQR
  },
  {
    initialRouteName: 'Profile'
  }
);

export const stack = createStackNavigator({
  Home: {
    screen: Home,
    navigationOptions: { header: null }
  },
  Profile: {
    screen: profile,
    navigationOptions: {
      headerTitleStyle: {
        color: 'white'
      },
      headerStyle: styles.header,
      title: 'Profile'
    }
  },
  Scan: {
    screen: Scan
  },
  ListVoucher: ListVoucher
});
export const auth = createStackNavigator({
  Walkthrough: { screen: Walkthrough, navigationOptions: { header: null } },
  SignInSignUp: SigInSignUp,
  Signup: SignUp
});
// export const auth = createBottomTabNavigator({
//   SignIn: SignIn,
//   SignUp: SignUp
// });

const voucher = createStackNavigator({
  'My Voucher': {
    screen: MyVoucher,
    navigationOptions: {
      headerTitleStyle: {
        color: 'white'
      },
      headerStyle: styles.header,
      title: 'My Voucher'
    }
  },
  'Scan Voucher': VoucherQR
});

export const tab = createBottomTabNavigator({
  Home: {
    screen: stack,
    navigationOptions: {
      tabBarIcon: <Icon name="ios-home" size={18} color="#d2d5dd" />
    }
  },
  Trading: {
    screen: Trading,
    navigationOptions: {
      headerStyle: styles.header,

      title: 'Trading',
      tabBarIcon: <Icon name="ios-git-branch" size={20} color="#d2d5dd" />
    }
  },
  History: {
    screen: History,
    navigationOptions: {
      tabBarIcon: <Icon name="ios-bookmark" size={20} color="#d2d5dd" />
    }
  },
  'My Voucher': {
    screen: voucher,
    navigationOptions: {
      tabBarIcon: <Icon name="ios-pricetag" size={20} color="#d2d5dd" />
    }
  }
});

export const root = createSwitchNavigator(
  {
    App: tab,
    Auth: auth
  },
  {
    initialRouteName: 'Auth'
  }
);
