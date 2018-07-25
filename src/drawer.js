import {
  createDrawerNavigator,
} from 'react-navigation'
import React from 'react'
import DrawerComponent from './sections/components/drawer'
import Icon from 'react-native-vector-icons/dist/FontAwesome'
import Logout from './screens/containers/logout'
import TabNavigator from './tabnav';
import DrawerMain from './drawermain'
import StackMain from './stackmain';
import Login from './screens/containers/login'
import Home from './screens/containers/home'

const Drawer = createDrawerNavigator(
  {
    // Home: {
    //   screen: Home,
    //   navigationOptions: {
    //     title: 'INICIO',
    //     drawerIcon: <Icon name="home" size={30} color="#4FD2D5" />
    //   }
    // },
    Vehicles: {
      screen: TabNavigator,
      navigationOptions: {
        title: 'VEHICULO',
        drawerIcon: <Icon name="truck" size={30} color="#4FD2D5" />
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
    },
    initialRouteName: 'Vehicles',
  }
)

export default Drawer

/*
const VehicleDrawer = createDrawerNavigator(
  {
    Home: {
      screen: Principal,
      navigationOptions: {
        title: 'INICIO',
        drawerIcon: <Icon name="home" size={30} color="#4FD2D5" />
      },
    },
    Managenment: {
      screen: TabNavigator,
      navigationOptions: {
        title: 'Editar vehículo',
        drawerIcon: <Icon name="truck" size={30} color="#4FD2D5" />
      },
    },
    Accesorys: {
      screen: TabNavigator,
      navigationOptions: {
        title: 'Accesorios',
        drawerIcon: <Icon name="cogs" size={30} color="#4FD2D5" />
      },
    },
    Documents: {
      screen: TabNavigator,
      navigationOptions: {
        title: 'Documentos',
        drawerIcon: <Icon name="file" size={30} color="#4FD2D5" />
      },
    },
    Services: {
      screen: TabNavigator,
      navigationOptions: {
        title: 'Servicios',
        drawerIcon: <Icon name="wrench" size={30} color="#4FD2D5" />
      },
    },
    Expensives: {
      screen: TabNavigator,
      navigationOptions: {
        title: 'Gastos',
        drawerIcon: <Icon name="dollar" size={30} color="#4FD2D5" />
      },
    },
  },
  {
    headerMode: 'none',
    drawerWidth: 225,
    drawerBackgroundColor: '#303030',
    contentComponent: (props) => (
      <DrawerComponent currentScreen={ props.navigation.state.routeName } { ...props } />
    ),
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
        borderBottomWidth: .5,
        borderBottomColor: '#8e8e8e',
      },
      labelStyle: {
        marginHorizontal: 0,
        marginVertical: 22,
        fontSize: 14,
        fontWeight: 'normal',
      },
      iconContainerStyle: {
        marginLeft: 10,
        marginRight: 13,
        width: 32,
      }
    },
    initialRouteName: 'Managenment'
  }
)
*/