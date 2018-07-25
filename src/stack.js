import {
  createStackNavigator,
} from 'react-navigation';
import React from 'react';
import Vehicles from './screens/containers/vehicles'

const Stack = createStackNavigator(
  {
    Vehicles,
  },
  {
    headerMode: 'none',
  }
)

export default Stack;