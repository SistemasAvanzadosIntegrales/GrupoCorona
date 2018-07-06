import React, { Component } from 'react';
import {
  TextInput,
  StyleSheet,
  View,
} from 'react-native';

import API from '../../../utils/api';
import { connect } from 'react-redux';
import { NavigationActions } from 'react-navigation';
import Icon from 'react-native-vector-icons/dist/FontAwesome';

class Search extends Component {
 
  state = {
    text: ''
  }

  handleSubmit = async () => {
    const movies = await API.searchMovie(this.state.text);
    
    if ( movies ) {
      this.props.dispatch({
        type: 'SET_SELECTED_MOVIE',
        payload: {
          movie: movies[0]
        }
      })

      this.props.dispatch(
        NavigationActions.navigate({
          routeName: 'Home'
        })
      )
    }
    else {
      console.log('no entro');
    }
    
  }

  handleChangeText = (text) => {
    this.setState({
      text
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.container_deep}>
          <Icon 
            style={styles.icon} 
            name="search" 
            size={25} 
            color="#BCBCBC" 
          />
          <TextInput
            placeholder="Número de vehículo o placas"
            autoCorrent={false}
            autoCapitalize="none"
            underlineColorAndroid="transparent"
            onSubmitEditing={this.handleSubmit}
            onChangeText={this.handleChangeText}
            style={styles.input}
            placeholderTextColor="#BCBCBC"
          />
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#262626',
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 10,
    paddingHorizontal: 15,
    flexDirection: 'row',
  },
  container_deep: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F0F0F0',
    flexDirection: 'row',
  },
  icon: {
    paddingHorizontal: 10,
  },
  input: {
    flex: 1,
    paddingVertical: 5,
    paddingHorizontal: 10,
    fontSize: 14,
    backgroundColor: '#F0F0F0',
  }
})

export default connect(null)(Search);