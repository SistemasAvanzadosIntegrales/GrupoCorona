import React, { Component, Fragment } from 'react'
import {
  StatusBar,
} from 'react-native'
import LoadingLayout from '../../sections/components/loading'
import { logout } from '../../../actions'
import { connect } from 'react-redux'

class Logout extends Component {
  
  constructor(props) {
    super(props)
  }
  
  render() {

    this.props.logout()

    if (this.props.auth.get('access_token') == '') {
      this.props.navigation.navigate('Login')
    }
    
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

const mapStateToProps = (state) => {
  return {
    auth: state.auth
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    logout: () => dispatch(logout())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Logout)