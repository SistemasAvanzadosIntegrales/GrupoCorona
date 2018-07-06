import React, { Component } from 'react';
import { connect } from 'react-redux';
import AppNavigator from './app-navigator';
import {
  reduxifyNavigator,
} from 'react-navigation-redux-helpers';
import {
  BackHandler
} from 'react-native';
import { NavigationActions } from 'react-navigation';

/**
 * @description: Conectar el componente navigation a redux.
 **/
const ReduxifyApp = reduxifyNavigator(AppNavigator, 'root');

/**
 * @author : Roberto Ramírez
 * @contact: roberto_ramirez@avansys.com.mx
 * @class  : AppNavigatorWithState
 * @description: 
 **/
class AppNavigatorWithState extends ReduxifyApp {

  //Manipular la opción back de android para ir hacia atras en la navegación y no cerrar la aplicación.
  componentDidMount() {
    BackHandler.addEventListener('hardwareBackPress', this.onBackPress);
  }

  //Desmontar la manipulación de la opción back.
  componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress', this.onBackPress);
  }

  onBackPress = () => {
    
    this.props.dispatch(
      NavigationActions.back({
        key: null
      })
    )

    return true;
  }
}

function mapStateToProps(state) {
  return {
    state: state.navigation
  }
}

export default connect(mapStateToProps)(AppNavigatorWithState)