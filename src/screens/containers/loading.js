import React, { Component, Fragment } from 'react';
import {
  StatusBar,
} from 'react-native';
import LoadingLayout from '../../sections/components/loading'
import { connect } from 'react-redux';

class Loading extends Component {
  
  constructor(props){
    super(props)
  }
  
  render() {
    this.props.navigation.navigate('Login');
    
    return (
      <Fragment>
        <StatusBar
          backgroundColor="white"
          barStyle="dark-content"
        />
        <LoadingLayout />
      </Fragment>
    )
  }
}

export default connect(null)(Loading)