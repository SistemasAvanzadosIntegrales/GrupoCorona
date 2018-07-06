import {
  createStackNavigator,
  createBottomTabNavigator,
  createSwitchNavigator,
  createDrawerNavigator,
} from 'react-navigation';
import React from 'react';

import Header from './sections/components/header';
import DrawerComponent from './sections/components/drawer';
import Icon from 'react-native-vector-icons/dist/FontAwesome';

import Home from './screens/containers/home';
import About from './screens/containers/about';
import Add from './screens/containers/add';
import Profile from './screens/containers/profile';
import Logout from './screens/containers/logout';
import Lucky from './screens/containers/lucky';
import Loading from './screens/containers/loading';
import Login from './screens/containers/login';
import Vehicles from './screens/containers/vehicles';
import Accesorys from './screens/containers/accesorys';
import Documents from './screens/containers/documents';
import Services from './screens/containers/services';
import Expensives from './screens/containers/expensives';
import DocumentsDetail from './screens/containers/documents-detail';
import ServicesDetail from './screens/containers/services-detail';
import ExpensivesDetail from './screens/containers/expensives-detail';

/**
 * Principal Navigation
 **/
const Principal = createStackNavigator(
  {
    Home,
  },
  {
    headerMode: 'none',
  }
)

const PrincipalDrawer = createDrawerNavigator(
  {
    Home: {
      screen: Principal,
      navigationOptions: {
        title: 'INICIO',
        drawerIcon: <Icon name="home" size={30} color="#4FD2D5" />
      }
    },
    Add: {
      screen: Add,
      navigationOptions: {
        title: 'AGREGAR VEHÍCULO',
        drawerIcon: <Icon name="truck" size={30} color="#4FD2D5" />
      }
    },
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
    },
  }
)

/**
 * Vehicle Navigation
 **/
const Managenment = createStackNavigator(
  {
    Vehicles,
  },
  {
    headerMode: 'none',
    cardStyle: {
      backgroundColor: '#F0F0F0'
    },
  },
)

const DocumentsMain = createStackNavigator(
  {
    Documents,
    DocumentsDetail,
  },
  {
    headerMode: 'none',
  },
)

const ServicesMain = createStackNavigator(
  {
    Services,
    ServicesDetail,
  },
  {
    headerMode: 'none',
  },
)

const ExpensivesMain = createStackNavigator(
  {
    Expensives,
    ExpensivesDetail,
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
      screen: Accesorys,
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

const VehicleDrawer = createDrawerNavigator(
  {
    Home: {
      screen: Loading,
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
      <DrawerComponent currentScreen={props.navigation.state.routeName} {...props} />
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

/**
 * Context Navigation
 **/
const Context = createStackNavigator(
  {
    Main: {
      screen: PrincipalDrawer,
    },
    SubMain: {
      screen: VehicleDrawer
    }
  },
  {
    headerMode: 'none',
  }
)

const SwitchNavigator = createSwitchNavigator(
  {
    App: Context,
    Login,
    Loading,
  },
  {
    initialRouteName: 'Loading',
  }
)

export default SwitchNavigator;