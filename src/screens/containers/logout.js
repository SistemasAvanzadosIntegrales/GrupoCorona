import React, { Component, Fragment } from 'react';
import {
  StatusBar,
} from 'react-native';
import LoadingLayout from '../../sections/components/loading'
import { connect } from 'react-redux';

class Logout extends Component {
  
  componentDidMount() {
    this.props.navigation.navigate('Login');
    // this.props.dispatch({
    //   type: 'REMOVE_USER',
    // })

    // this.props.navigation.navigate('Loading');
    // if(this.props.user) {
    //   this.props.navigation.navigate('App');
    // } else {
    //   this.props.navigation.navigate('Login');
    // }
  }
  
  render() {
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

function mapStateToProps(state) {
  return {
    user: state.user
  }
}

export default connect(mapStateToProps)(Logout)