import React, { Component } from 'react'
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
  Alert,
} from 'react-native'
import { connect } from 'react-redux'
import { vehicleUpdateFetch, accessorysFetch, documentsFetch, expensivesFetch, servicesFetch } from '../../../actions'
import Header from '../../sections/components/header'
import Loader from '../components/loader.js'

class Vehicles extends Component {

  constructor(props) {
    super(props)

    this.state = {
      id            : '',
      folio         : '',
      brand_id      : '',
      model_type_id : '',
      version       : '',
      serial        : '',
      year          : '',
      plates        : '',
      mileage       : '',
      color         : '',
      gps           : '',
      office_id     : '',
      area          : '',
      status        : ''
    }
  }

  componentWillMount() {
    this.setState({
      id            : this.props.vehicles.selectedVehicle.id,
      folio         : this.props.vehicles.selectedVehicle.folio,
      brand_id      : this.props.vehicles.selectedVehicle.brand.id,
      model_type_id : this.props.vehicles.selectedVehicle.model_type.id,
      version       : this.props.vehicles.selectedVehicle.version,
      serial        : this.props.vehicles.selectedVehicle.serial,
      year          : this.props.vehicles.selectedVehicle.year,
      plates        : this.props.vehicles.selectedVehicle.plates,
      mileage       : this.props.vehicles.selectedVehicle.mileage,
      color         : this.props.vehicles.selectedVehicle.color,
      gps           : this.props.vehicles.selectedVehicle.gps,
      office_id     : this.props.vehicles.selectedVehicle.office.id,
      area          : this.props.vehicles.selectedVehicle.area,
      status        : this.props.vehicles.selectedVehicle.status
    })
  }

  async componentDidMount() {
    this.props.accessorysFetch(this.props.auth, this.props.vehicles.selectedVehicle.id)
    this.props.documentsFetch(this.props.auth, this.props.vehicles.selectedVehicle.id)
    this.props.expensivesFetch(this.props.auth, this.props.vehicles.selectedVehicle.id)
    this.props.servicesFetch(this.props.auth, this.props.vehicles.selectedVehicle.id)
  }
  
  handleCancel = () => {
    this.props.navigation.navigate('Login')
  }
  
  handleSuccess = async () => {

    if ( this.state.folio         != '' && 
         this.state.brand_id      != '' &&
         this.state.model_type_id != '' &&
         this.state.serial        != '' &&
         this.state.plates        != '' &&
         this.state.office_id     != '' ) {

      this.props.vehicleUpdateFetch(this.props.auth, this.state)
    } else {
      Alert.alert(
        '¡Alerta!',
        'Campos obligatorios vacios',
        [
          {text: 'Aceptar'},
        ],
      )
    }
  }
  
  render() {

    if (this.props.vehicles.success) {
      this.props.navigation.navigate('Login')
    }

    return (
      <SafeAreaView>
        <StatusBar
          backgroundColor="#262626"
          barStyle="light-content"
        />
        { this.props.vehicles.isFetching && <Loader /> }
        { this.props.catalogs.isFetching && <Loader /> }
        { this.props.services.isFetching && <Loader /> }
        { this.props.expensives.isFetching && <Loader /> }
        { this.props.documents.isFetching && <Loader /> }
        { this.props.accessorys.isFetching && <Loader /> }

        <Header title={'GESTIÓN DE VEHÍCULO'} />
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
              onChangeText={ (folio) => this.setState( {folio} ) }
              value={ this.state.folio }
            />

            {/* --------------------------------------- */}
            
            <Text style={styles.text} >Marca <Text style={ {color: '#4FD2D5' } }>*</Text></Text>
            <View style={styles.container_picker} >
              <Picker 
                selectedValue={this.state.brand_id}
                style={styles.picker}
                onValueChange={ (itemValue, itemIndex) => this.setState( {brand_id : itemValue} ) }
                mode='dialog'
              >
                <Picker.Item label="Seleccione una marca" value="" />
                { this.props.catalogs.data.brand.map( (value) => <Picker.Item key={value.id} label={ value.name } value={ value.id } /> )}
              </Picker>
            </View>

            {/* --------------------------------------- */}

            <Text style={styles.text} >Modelo <Text style={ {color: '#4FD2D5' } }>*</Text></Text>
            <View style={styles.container_picker} >
              <Picker 
                selectedValue={this.state.model_type_id}
                style={styles.picker}
                onValueChange={ (itemValue, itemIndex) => this.setState( {model_type_id : itemValue} ) }
                mode='dialog'
              >
                <Picker.Item label="Seleccione un modelo" value="" />
                { this.props.catalogs.data.model.map( (value) => <Picker.Item key={value.id} label={ value.name } value={ value.id } /> )}
              </Picker>
            </View>

            {/* --------------------------------------- */}

            <Text style={styles.text} >Versión</Text>
            <TextInput
              style={styles.input}
              placeholder="TDI"
              placeholderTextColor="#D1D1D1"
              maxLength={40}
              keyboardType="default"
              underlineColorAndroid='#D1D1D1'
              onChangeText={ (version) => this.setState( {version} ) }
              value={ this.state.version }
            />

            {/* --------------------------------------- */}

            <Text style={styles.text} >Número de serie <Text style={ {color: '#4FD2D5' } }>*</Text></Text>
            <TextInput
              style={styles.input}
              placeholder="1234 - 56789 - 12345"
              placeholderTextColor="#D1D1D1"
              maxLength={40}
              keyboardType="default"
              underlineColorAndroid='#D1D1D1'
              onChangeText={ (serial) => this.setState( {serial} ) }
              value={ `${this.state.serial}` }
            />

            {/* --------------------------------------- */}

            <Text style={styles.text} >Año</Text>
            <TextInput
              style={styles.input}
              placeholder="2018"
              placeholderTextColor="#D1D1D1"
              maxLength={40}
              keyboardType="numeric"
              underlineColorAndroid='#D1D1D1'
              onChangeText={ (year) => this.setState( {year} ) }
              value={ `${this.state.year}` }
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
              onChangeText={ (plates) => this.setState( {plates} ) }
              value={ this.state.plates }
            />

            {/* --------------------------------------- */}

            <Text style={styles.text} >Kilometraje</Text>
            <TextInput
              style={styles.input}
              placeholder="44567"
              placeholderTextColor="#D1D1D1"
              maxLength={40}
              keyboardType="numeric"
              underlineColorAndroid='#D1D1D1'
              onChangeText={ (mileage) => this.setState( {mileage} ) }
              value={ `${this.state.mileage}` }
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
              onChangeText={ (color) => this.setState( {color} ) }
              value={ this.state.color }
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
              onChangeText={ (gps) => this.setState( {gps} ) }
              value={ this.state.gps }
            />

            {/* --------------------------------------- */}

            <Text style={styles.text} >Sucursal <Text style={ {color: '#4FD2D5' } }>*</Text></Text>
            <View style={styles.container_picker} >
              <Picker 
                selectedValue={this.state.office_id}
                style={styles.picker}
                onValueChange={ (itemValue, itemIndex) => this.setState( {office_id : itemValue} ) }
                mode='dialog'
              >
                <Picker.Item label="Seleccione sucursal" value="" />
                { this.props.catalogs.data.office.map( (value) => <Picker.Item key={value.id} label={ value.name } value={ value.id } /> )}
              </Picker>
            </View>

            {/* --------------------------------------- */}

            <Text style={styles.text} >Área</Text>
            <View style={styles.container_picker} >
              <Picker 
                selectedValue={this.state.area}
                style={styles.picker}
                onValueChange={ (itemValue, itemIndex) => this.setState( {area : itemValue} ) }
                mode='dialog'
              >
                <Picker.Item label="Seleccione área" value="" />
                <Picker.Item key="Campo" label="Campo" value="Campo" />
                <Picker.Item key="Logística" label="Logística" value="Logística" />
                <Picker.Item key="Obras" label="Obras" value="Obras" />
                <Picker.Item key="Producción" label="Producción" value="Producción" />
                <Picker.Item key="Promotoria" label="Promotoria" value="Promotoria" />
                <Picker.Item key="Ventas" label="Ventas" value="Ventas" />
              </Picker>
            </View>

            {/* --------------------------------------- */}

            <Text style={styles.text} >Estatus</Text>
            <View style={styles.container_picker} >
              <Picker 
                selectedValue={this.state.status}
                style={styles.picker}
                onValueChange={ (itemValue, itemIndex) => this.setState( {status : itemValue} ) }
                mode='dialog'
              >
                <Picker.Item key="Activo" label="Activo" value="1" />
                <Picker.Item key="Inactivo" label="Inactivo" value="0" />
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

const mapStateToProps = (state) => {
  return {
    auth: state.auth.toJS(),
    vehicles: state.vehicles.toJS(),
    catalogs: state.catalogs.toJS(),
    accessorys: state.accessorys.toJS(),
    services: state.services.toJS(),
    expensives: state.expensives.toJS(),
    documents: state.documents.toJS(),
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    vehicleUpdateFetch: (auth, props) => { dispatch(vehicleUpdateFetch(auth, props)) },
    accessorysFetch: (auth, id) => { dispatch(accessorysFetch(auth, id)) },
    documentsFetch: (auth, id) => { dispatch(documentsFetch(auth, id)) },
    expensivesFetch: (auth, id) => { dispatch(expensivesFetch(auth, id)) },
    servicesFetch: (auth, id) => { dispatch(servicesFetch(auth, id)) }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Vehicles)