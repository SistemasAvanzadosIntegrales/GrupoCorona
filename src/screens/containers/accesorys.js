import React, { Component } from 'react';
import {
  Text,
  TextInput,
  StatusBar,
  SafeAreaView,
  View,
  StyleSheet,
  Picker,
  ScrollView,
  Button,
  TouchableOpacity,
  CheckBox,
} from 'react-native';
import { connect } from 'react-redux';
import Header from '../../sections/components/headerNoSearch';
import { DrawerActions } from 'react-navigation';

class Accesorys extends Component {

  constructor(props) {
    super(props);

    this.state = {
      check: false,
      check1: true,
      check2: false,
    }
  }

  checkBox () {
    this.setState({
      check: !this.state.check
    })
  }

  checkBox1 () {
    this.setState({
      check1: !this.state.check1
    })
  }

  checkBox2 () {
    this.setState({
      check2: !this.state.check2
    })
  }
  
  handleCancel = () => {
    this.props.navigation.navigate('Home');
  }

  handleSuccess = () => {
    this.props.navigation.navigate('Home');
  }
  
  render() {
    return (
      <SafeAreaView>
        <StatusBar
          backgroundColor="#262626"
          barStyle="light-content"
        />
        <Header title={'ACCESORIOS'} />
        <ScrollView contentContainerStyle={styles.container} >
          <View style={styles.container_form} >
            <View style={styles.container_checkbox} >
              <Text style={styles.text} >Número de vehículo</Text>
              <CheckBox
                value={this.state.check}
                onChange={ () => this.checkBox() }
                containerStyle={{backgroundColor: '#4FD2D5'}}
              />
            </View>

            {/* --------------------------------------- */}

            <View style={styles.container_checkbox} >
              <Text style={styles.text} >Marca</Text>
              <CheckBox
                value={this.state.check1}
                onChange={ () => this.checkBox1() }
                containerStyle={{backgroundColor: '#4FD2D5'}}
              />
            </View>

            {/* --------------------------------------- */}

            <View style={styles.container_checkbox} >
              <Text style={styles.text} >Modelo</Text>
              <CheckBox
                value={this.state.check2}
                onChange={ () => this.checkBox2() }
                containerStyle={{backgroundColor: '#4FD2D5'}}
              />
            </View>

            <View style={styles.container_buttons} >
              <View style={styles.container_button}  >
                <TouchableOpacity
                  onPress={this.handleCancel}
                  style={styles.buttonCancel}
                >
                  <Text style={styles.buttonLabel}>Cancelar</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.container_button}>
                <TouchableOpacity
                  onPress={this.handleSuccess}
                  style={styles.buttonSuccess}
                >
                  <Text style={styles.buttonLabel}>Aceptar</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 15,
    paddingTop: 15,
    paddingBottom: 100,
  },
  container_form: {
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#D1D1D1',
    borderRadius: 2,
    paddingHorizontal: 10,
    paddingVertical: 15,
  },
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
  },
  container_buttons: {
    flex: 1,
    flexDirection: 'row',
    marginTop: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  container_button: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonCancel: {
    backgroundColor: '#A3A3A3',
    borderRadius: 5,
    width: 125,
    height: 30,
  },
  buttonSuccess: {
    backgroundColor: '#4FD2D5',
    borderRadius: 5,
    width: 125,
    height: 30,
  },
  buttonLabel: {
    color: 'white',
    padding: 3,
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  }
})

export default connect(null)(Accesorys);