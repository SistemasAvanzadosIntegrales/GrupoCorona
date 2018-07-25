import React, { Component } from 'react';
import {
  Image,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

import { connect } from 'react-redux';
import { NavigationActions } from 'react-navigation';

class Logo extends Component {
  
  handleClick = () => {
    this.props.dispatch(
      NavigationActions.navigate({
        routeName: 'Home'
      })
    )
  }
  
  render() {
    return (
      <TouchableOpacity onPress={this.handleClick} >
        <Image
          source={require('../../../assets/logo-header.png')}
          style={styles.logo}
        />
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
  logo: {
    width: 60,
    height: 60,
    resizeMode: 'contain',
  }
})

export default connect(null)(Logo);
