import {
  createStackNavigator,
} from 'react-navigation';
import React from 'react';
import Home from './screens/containers/home'

const StackMain = createStackNavigator(
  {
    Home,
  },
  {
    headerMode: 'none',
  }
)

export default StackMain;