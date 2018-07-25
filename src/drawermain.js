import {
  createDrawerNavigator,
} from 'react-navigation'
import React from 'react'
import DrawerComponent from './sections/components/drawer'
import Icon from 'react-native-vector-icons/dist/FontAwesome'
import About from './screens/containers/about'
import Add from './screens/containers/add'
import Logout from './screens/containers/logout'
import StackMain from './stackmain'

const DrawerMain = createDrawerNavigator(
  {
    Home: {
      screen: StackMain,
      navigationOptions: {
        title: 'INICIO',
        drawerIcon: <Icon name="home" size={30} color="#4FD2D5" />
      }
    },
    // Add: {
    //   screen: Add,
    //   navigationOptions: {
    //     title: 'AGREGAR VEHÍCULO',
    //     drawerIcon: <Icon name="truck" size={30} color="#4FD2D5" />
    //   }
    // },
    About: {
      screen: About,
      navigationOptions: {
        title: 'ACERCA DE ESTA APP',
        drawerIcon: <Icon name="code" size={30} color="#4FD2D5" />
      }
    },
    Logout: {
      screen: Logout,
      navigationOptions: {
        title: 'SALIR',
        drawerIcon: <Icon name="power-off" size={30} color="#4FD2D5" />
      }
    }
  },
  {
    drawerWidth: 225,
    drawerBackgroundColor: '#303030',
    contentComponent: DrawerComponent,
    contentOptions: {
      activeBackgroundColor: '#262626',
      activeTintColor: '#ECECEC',
      inactiveTintColor: '#ECECEC',
      inactiveBackgroundColor: '#303030',
      itemsContainerStyle: {
        padding: 10,
        marginTop: 0,
      },
      itemStyle: {
        borderBottomWidth: .3,
        borderBottomColor: '#8e8e8e',
      },
      labelStyle: {
        marginHorizontal: 0,
        marginVertical: 20,
        fontSize: 14,
        fontWeight: 'normal',
      },
      iconContainerStyle: {
        marginLeft: 10,
        marginRight: 13,
        width: 32,
      }
    }
  }
)

export default DrawerMain