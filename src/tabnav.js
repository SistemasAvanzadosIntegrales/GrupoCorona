import {
  createStackNavigator,
  createBottomTabNavigator
} from 'react-navigation'
import React from 'react'
import Icon from 'react-native-vector-icons/dist/FontAwesome'
import Vehicles from './screens/containers/vehicles';
import Accesorys from './screens/containers/accesorys';
import Documents from './screens/containers/documents';
import Services from './screens/containers/services';
import Expensives from './screens/containers/expensives';
import DocumentsDetail from './screens/containers/documents-detail';
import ServicesDetail from './screens/containers/services-detail';
import ExpensivesDetail from './screens/containers/expensives-detail';

import Stack from './stack';

const Managenment = createStackNavigator(
  {
    Stack,
  },
  {
    headerMode: 'none',
    cardStyle: {
      backgroundColor: '#F0F0F0'
    },
  },
)

const AccesorysMain = createStackNavigator(
  {
    Accesorys,
    Vehicles
  },
  {
    headerMode: 'none',
  },
)

const DocumentsMain = createStackNavigator(
  {
    Documents,
    DocumentsDetail,
    Vehicles
  },
  {
    headerMode: 'none',
  },
)

const ServicesMain = createStackNavigator(
  {
    Services,
    ServicesDetail,
    Vehicles
  },
  {
    headerMode: 'none',
  },
)

const ExpensivesMain = createStackNavigator(
  {
    Expensives,
    ExpensivesDetail,
    Vehicles
  },
  {
    headerMode: 'none',
  },
)

const TabNavigator = createBottomTabNavigator(
  {
    Managenment: {
      screen: Managenment,
      navigationOptions: {
        title: 'Editar',
        tabBarIcon: <Icon name="truck" size={30} color="#F9FDFD" />,
      },
    },
    Accesorys: {
      screen: AccesorysMain,
      navigationOptions: {
        title: 'Accesorios',
        tabBarIcon: <Icon name="cogs" size={30} color="#F9FDFD" />,
      },
    },
    Documents: {
      screen: DocumentsMain,
      navigationOptions: {
        title: 'Documentos',
        tabBarIcon: <Icon name="file" size={30} color="#F9FDFD" />,
      },
    },
    Services: {
      screen: ServicesMain,
      navigationOptions: {
        title: 'Servicios',
        tabBarIcon: <Icon name="wrench" size={30} color="#F9FDFD" />,
      },
    },
    Expensives: {
      screen: ExpensivesMain,
      navigationOptions: {
        title: 'Gastos',
        tabBarIcon: <Icon name="dollar" size={30} color="#F9FDFD" />,
      },
    },
  },
  {
    headerMode: 'none',
    tabBarOptions: {
      activeTintColor: '#262626',
      activeBackgroundColor: '#4fd2d5',
      inactiveTintColor: '#838383',
      inactiveBackgroundColor: '#303030',
      showLabel: false,
    },
  },
)

export default TabNavigator;
