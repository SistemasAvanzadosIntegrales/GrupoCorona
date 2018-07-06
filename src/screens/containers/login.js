import React, { Component } from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  SafeAreaView,
  Image,
  TouchableOpacity,
  StatusBar,
  NetInfo,
} from 'react-native';
import { connect } from 'react-redux';

import Icon from 'react-native-vector-icons/dist/FontAwesome';

class Login extends Component {

  constructor(props) {
    super();
    
    this.state = {
      isUserOnline: false,
    }
  }

  handleLogin = () => {
    const token = 'ABCDEFGHIJK';
    this.props.dispatch({
      type: 'SET_USER',
      payload: {
        token,
        email: 'roberto_ramirez@avansys.com.mx',
        name: 'Roberto Ramírez',
        id: '1',
        status: '1',
      }
    })
    
    // this.props.navigation.navigate('Loading');
    this.props.navigation.navigate('App');
  }

  getUserConnectionStatus = () => {
    NetInfo.isConnected.fetch().then(isUserOnline => {
      this.state.isUserOnline = isUserOnline;
      this.setState(this.state);
    })

    alert(isUserOnline);
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <StatusBar
          backgroundColor="black"
          barStyle="light-content"
        />
        <View style={styles.container_logo}>
          <Image
              source={require('../../../assets/logo-corona.png')}
              style={styles.logo}
            />
        </View>
        <View style={styles.container_form}>
          <View style={styles.container_form_input} >
            <Icon style={styles.icon} name="envelope" size={20} color="#4FD2D5" />
            <TextInput
              style={styles.input}
              placeholder="nombre@correo.com"
              placeholderTextColor="#333333"
              maxLength={20}
              keyboardType="email-address"
              underlineColorAndroid='white'
            />
          </View>
          <View style={styles.container_form_input} >
            <Icon style={styles.icon} name="unlock" size={20} color="#4FD2D5" />
            <TextInput
              style={styles.input}
              placeholder="Contraseña"
              placeholderTextColor="#333333"
              secureTextEntry={true}
              maxLength={40}
              keyboardType="default"
              underlineColorAndroid='white'
            />
          </View>
        </View>
        <View style={styles.container_button}>
          <TouchableOpacity
            onPress={this.handleLogin}
            style={styles.button}
          >
            <Text style={styles.buttonLabel}>Ingresar</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.container_button}>
          <TouchableOpacity
            onPress={this.handleLogin}
            style={styles.button}
          >
            <Text style={styles.buttonLabel}>¿Esta online?</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'black',
  },
  icon: {
    marginTop: 10,
  },
  container_logo: {
    flex: 3,
    alignItems: 'center',
    justifyContent: 'center',
  },
  container_button: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 155,
    height: 140,
    resizeMode: 'contain',
  },
  container_form: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  container_form_input: {
    flexDirection: 'row',
    flex: 1,
  },
  input: {
    width: 200,
    height: 40,
    color: 'white',
    marginLeft: 10,
  },
  button: {
    backgroundColor: '#4FD2D5',
    borderRadius: 5,
    width: 200,
    height: 35,
  },
  buttonLabel: {
    color: 'white',
    padding: 5,
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  }
})

export default connect(null)(Login)