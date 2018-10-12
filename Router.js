import {
  createNavigator,
  createSwitchNavigator,
  createBottomTabNavigator,
  createStackNavigator
} from 'react-navigation';
import Home from './views/Home';
import Scan from './views/Scan';
import Profile from './views/Profile';
import Trading from './views/Trading';
import SignIn from './views/Signin';
import SignUp from './views/SignUp';
import History from './views/History';
import MyVoucher from './views/MyVoucher';
import UseVoucher from './views/UseVoucher';
import VoucherQR from './views/VoucherQR';
import MyQR from './views/MyQR';
import ListVoucher from './views/ListVoucher';

const profile = createSwitchNavigator(
  {
    Profile: {
      screen: Profile
    },
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
    screen: profile
  },
  Scan: {
    screen: Scan
  }
});
export const auth = createBottomTabNavigator({
  SignIn: SignIn,
  SignUp: SignUp
});

const voucher = createStackNavigator({
  'My Voucher': {
    screen: MyVoucher,
    navigationOptions: { header: null }
  },
  'Scan Voucher': VoucherQR
});

export const tab = createBottomTabNavigator({
  Home: stack,
  Trading: Trading,
  History: History,
  'My Voucher': voucher
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
