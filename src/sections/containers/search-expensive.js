import React, { Component } from 'react';
import {
  TextInput,
  StyleSheet,
  View,
} from 'react-native';

import API from '../../../utils/api';
import { expensiveSearchFetch, expensivesFetch } from '../../../actions'
import { connect } from 'react-redux';
import { NavigationActions } from 'react-navigation';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import Loader from '../../screens/components/loader'

class Search extends Component {
  
  constructor(props) {
    super(props)
    
    this.state = {
      text: '',
    }
  }
  
  handleSubmit = async () => {
    if ( this.state.text != '' ) {
      this.props.expensiveSearchFetch(this.props.auth, this.state.text, this.props.vehicles.selectedVehicle.id)
    }
    else {
      this.props.expensivesFetch(this.props.auth)
    }
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
            placeholder="Tipo de gasto"
            autoCorrent={false}
            autoCapitalize="none"
            underlineColorAndroid="transparent"
            onSubmitEditing={this.handleSubmit}
            onChangeText={ (text) => this.setState( {text} ) }
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

const mapStateToProps = (state) => {
  return {
    auth: state.auth.toJS(),
    vehicles: state.vehicles.toJS(),
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    expensiveSearchFetch: (auth, text, id) => { dispatch(expensiveSearchFetch(auth, text, id)) },
    expensivesFetch: (auth) => { dispatch(expensivesFetch(auth)) },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Search);