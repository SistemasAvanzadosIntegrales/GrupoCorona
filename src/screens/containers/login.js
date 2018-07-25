import React, { Component } from 'react'
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  Image,
  TouchableOpacity,
  StatusBar,
  ImageBackground,
  Alert,
} from 'react-native'
import { connect } from 'react-redux'
import { loginFetch } from '../../../actions'
import Icon from 'react-native-vector-icons/dist/FontAwesome'
import Loader from '../components/loader.js'
import ErrorText from '../components/error.js'

class Login extends Component {

  constructor(props) {
    super(props)

    this.state = {
      email: '',
      password: '',
    }
  }

  validateEmail = (email) => {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email)
  }

  handleSubmit = () => {
    if ( this.validateEmail(this.state.email) && this.state.password != '' ) {
      this.props.loginFetch(this.state)
    } else {
      Alert.alert(
        '¡Alerta!',
        'Email invalido o campos vacios',
        [
          {text: 'Aceptar'},
        ],
      )
    }
  }

  render() {
    
    let error

    if (this.props.auth.error) {
      error = <ErrorText text="Usuario o contraseña incorrecto" />
    }

    if (this.props.auth.access_token) {
      this.props.navigation.navigate('Home')
    } else {
      this.props.navigation.navigate('Login')
    }

    return (
      <ImageBackground
        source={require('../../../assets/login-fondo.png')}
        style={ styles.container } >
        <StatusBar
          barStyle="light-content"
        />
        { this.props.auth.isFetching && <Loader /> }
        <View style={ styles.container_logo }>
          <Image
              source={ require('../../../assets/login-logo.png') }
              style={ styles.logo }
            />
        </View>
        <View style={ styles.container_form }>
          <View style={ styles.container_form_input } >
            <Icon style={ styles.icon } name="envelope" size={20} color="#4FD2D5" />
            <TextInput
              style={ styles.input }
              placeholder="nombre@correo.com"
              placeholderTextColor="#333333"
              maxLength={40}
              keyboardType="email-address"
              underlineColorAndroid='white'
              onChangeText={ (email) => this.setState({email}) }
            />
          </View>
          <View style={ styles.container_form_input } >
            <Icon style={ styles.icon } name="unlock" size={20} color="#4FD2D5" />
            <TextInput
              style={ styles.input }
              placeholder="Contraseña"
              placeholderTextColor="#333333"
              secureTextEntry={true}
              maxLength={40}
              keyboardType="default"
              underlineColorAndroid='white'
              onChangeText={ (password) => this.setState({password}) }
            />
          </View>
        </View>
        <View style={ styles.container_button }>
          <TouchableOpacity
            onPress={ this.handleSubmit }
            style={ styles.button }
          >
            <Text style={ styles.buttonLabel }>Ingresar</Text>
          </TouchableOpacity>
          { error }
        </View>
      </ImageBackground>
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

const mapStateToProps = (state) => {
  return {
    auth: state.auth.toJS()
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    loginFetch: (props) => dispatch(loginFetch(props.email, props.password))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)