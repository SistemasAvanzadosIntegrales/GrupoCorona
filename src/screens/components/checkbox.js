import React, { Component } from 'react'
import {
  Text,
  TextInput,
  View,
  StyleSheet,
  CheckBox,
} from 'react-native'

class CheckBoxCustom extends Component {

  constructor(props) {
    super(props)

    console.log(props)
  }
  
  render() {
    
    let key = 'check'+this.props.id;
    
    return (
      <View style={styles.container_checkbox} >
        <Text style={styles.text} >{ this.props.name }</Text>
        <CheckBox
          value={ this.props.state[key] }
          containerStyle={ {backgroundColor: '#4FD2D5'} }
          onChange={ (key) => this.setState( {key} ) }
        />
      </View>
    )
  }               
}

const styles = StyleSheet.create({
  text: {
    flex: 1,
    fontSize: 14,
    color: '#333333',
    fontWeight: 'bold',
    paddingLeft: 5,
  },
  container_checkbox: {
    flexDirection: 'row',
    borderBottomColor: '#CBCBCB',
    borderBottomWidth: 1,
    marginHorizontal: 5,
    marginBottom: 8,
  }
})

export default CheckBoxCustom
