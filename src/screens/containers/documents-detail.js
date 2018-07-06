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
} from 'react-native';
import { connect } from 'react-redux';
import Header from '../../sections/components/headerNoSearch';

class DocumentsDetail extends Component {

  constructor() {
    super();
    this.state = {
      MarcaValue: '',
      ModeloValue: '',
      VersionValue: '',
      SucursalValue: '',
      AreaValue: '',
      EstatusValue: '',
    }
  }

  handleCancel = () => {
    this.props.navigation.navigate('Documents');
  }

  handleSuccess = () => {
    this.props.navigation.navigate('Documents');
  }
  
  render() {
    return (
      <SafeAreaView>
        <StatusBar
          backgroundColor="#262626"
          barStyle="light-content"
        />
        <Header title={'AGREGAR DOCUMENTO'} />
        <ScrollView contentContainerStyle={styles.container} >
          <View style={styles.container_form} >
            <Text style={styles.text} >Número de vehículo <Text style={ {color: '#4FD2D5' } }>*</Text></Text>
            <TextInput
              style={styles.input}
              placeholder="12345 - 6789 - 11"
              placeholderTextColor="#D1D1D1"
              maxLength={40}
              keyboardType="default"
              underlineColorAndroid='#D1D1D1'
            />

            {/* --------------------------------------- */}

            <Text style={styles.text} >Marca</Text>
            <View style={styles.container_picker} >
              <Picker 
                selectedValue={this.state.MarcaValue}
                style={styles.picker}
                onValueChange={ (itemValue, itemIndex) => this.setState( {MarcaValue : itemValue} ) }
                mode='dialog'
              >
                <Picker.Item label="Seleccione una marca" value="" />
                <Picker.Item label="option1" value="option1" />
                <Picker.Item label="option2" value="option2" />
              </Picker>
            </View>

            {/* --------------------------------------- */}

            <Text style={styles.text} >Modelo</Text>
            <View style={styles.container_picker} >
              <Picker 
                selectedValue={this.state.ModeloValue}
                style={styles.picker}
                onValueChange={ (itemValue, itemIndex) => this.setState( {ModeloValue : itemValue} ) }
                mode='dialog'
              >
                <Picker.Item label="Seleccione un modelo" value="" />
                <Picker.Item label="option1" value="option1" />
                <Picker.Item label="option2" value="option2" />
              </Picker>
            </View>

            {/* --------------------------------------- */}

            <Text style={styles.text} >Versión</Text>
            <View style={styles.container_picker} >
              <Picker 
                selectedValue={this.state.VersionValue}
                style={styles.picker}
                onValueChange={ (itemValue, itemIndex) => this.setState( {VersionValue : itemValue} ) }
                mode='dialog'
              >
                <Picker.Item label="Seleccione versión" value="" />
                <Picker.Item label="option1" value="option1" />
                <Picker.Item label="option2" value="option2" />
              </Picker>
            </View>

            {/* --------------------------------------- */}

            <Text style={styles.text} >Número de serie <Text style={ {color: '#4FD2D5' } }>*</Text></Text>
            <TextInput
              style={styles.input}
              placeholder="1234 - 56789 - 12345"
              placeholderTextColor="#D1D1D1"
              maxLength={40}
              keyboardType="default"
              underlineColorAndroid='#D1D1D1'
            />

            {/* --------------------------------------- */}

            <Text style={styles.text} >Año</Text>
            <TextInput
              style={styles.input}
              placeholder="2018"
              placeholderTextColor="#D1D1D1"
              maxLength={40}
              keyboardType="default"
              underlineColorAndroid='#D1D1D1'
            />

            {/* --------------------------------------- */}

            <Text style={styles.text} >Placas <Text style={ {color: '#4FD2D5' } }>*</Text></Text>
            <TextInput
              style={styles.input}
              placeholder="AAA2222"
              placeholderTextColor="#D1D1D1"
              maxLength={40}
              keyboardType="default"
              underlineColorAndroid='#D1D1D1'
            />

            {/* --------------------------------------- */}

            <Text style={styles.text} >Kilometraje</Text>
            <TextInput
              style={styles.input}
              placeholder="44 567 km"
              placeholderTextColor="#D1D1D1"
              maxLength={40}
              keyboardType="default"
              underlineColorAndroid='#D1D1D1'
            />

            {/* --------------------------------------- */}

            <Text style={styles.text} >Color</Text>
            <TextInput
              style={styles.input}
              placeholder="Turquesa"
              placeholderTextColor="#D1D1D1"
              maxLength={40}
              keyboardType="default"
              underlineColorAndroid='#D1D1D1'
            />

            {/* --------------------------------------- */}

            <Text style={styles.text} >Número de gps</Text>
            <TextInput
              style={styles.input}
              placeholder="1111 - 2222 - 22222"
              placeholderTextColor="#D1D1D1"
              maxLength={40}
              keyboardType="default"
              underlineColorAndroid='#D1D1D1'
            />

            {/* --------------------------------------- */}

            <Text style={styles.text} >Sucursal</Text>
            <View style={styles.container_picker} >
              <Picker 
                selectedValue={this.state.SucursalValue}
                style={styles.picker}
                onValueChange={ (itemValue, itemIndex) => this.setState( {SucursalValue : itemValue} ) }
                mode='dialog'
              >
                <Picker.Item label="Seleccione sucursal" value="" />
                <Picker.Item label="option1" value="option1" />
                <Picker.Item label="option2" value="option2" />
              </Picker>
            </View>

            {/* --------------------------------------- */}

            <Text style={styles.text} >Área</Text>
            <View style={styles.container_picker} >
              <Picker 
                selectedValue={this.state.AreaValue}
                style={styles.picker}
                onValueChange={ (itemValue, itemIndex) => this.setState( {AreaValue : itemValue} ) }
                mode='dialog'
              >
                <Picker.Item label="Seleccione área" value="" />
                <Picker.Item label="option1" value="option1" />
                <Picker.Item label="option2" value="option2" />
              </Picker>
            </View>

            {/* --------------------------------------- */}

            <Text style={styles.text} >Estatus</Text>
            <View style={styles.container_picker} >
              <Picker 
                selectedValue={this.state.EstatusValue}
                style={styles.picker}
                onValueChange={ (itemValue, itemIndex) => this.setState( {EstatusValue : itemValue} ) }
                mode='dialog'
              >
                <Picker.Item label="Activo" value="Activo" />
                <Picker.Item label="Inactivo" value="Inactivo" />
              </Picker>
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
    fontSize: 14,
    color: '#333333',
    fontWeight: 'bold',
    paddingLeft: 5,
  },
  input: {
    height: 42,
    color: '#262626',
    fontSize: 16,
    paddingLeft: 12,
    paddingBottom: 15,
  },
  container_picker: {
    borderBottomColor: '#CBCBCB',
    borderBottomWidth: 1,
    marginHorizontal: 5,
    marginBottom: 8,
  },
  picker: {
    height: 37,
    color: '#262626',
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

export default connect(null)(DocumentsDetail);