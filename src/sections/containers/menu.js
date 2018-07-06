import React, { Component } from 'react';
import {
  View,
  TouchableOpacity,
} from 'react-native';

import { connect } from 'react-redux';
import { DrawerActions } from 'react-navigation';
import Icon from 'react-native-vector-icons/dist/FontAwesome';

class Menu extends Component {
  
  handleClick = () => {
    this.props.dispatch(
      DrawerActions.toggleDrawer()
    )
  }

  render() {
    return (
      <TouchableOpacity onPress={this.handleClick} >
        <View>
          <Icon 
            name="bars" 
            size={40} 
            color="#4FD2D5"
            style={ {marginRight: 5} }
          />
        </View>
      </TouchableOpacity>
    )
  }
}

export default connect(null)(Menu);
