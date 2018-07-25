import {
  createStackNavigator,
  createSwitchNavigator,
} from 'react-navigation';
import React from 'react';
import Login from './screens/containers/login'

import Drawer from './drawer'
import DrawerMain from './drawermain'

const SwitchNavigator = createSwitchNavigator(
  {
    App: DrawerMain,
    Login,
    Drawer
  },
  {
    initialRouteName: 'Login',
  }
)

export default SwitchNavigator;