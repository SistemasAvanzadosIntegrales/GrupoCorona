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
  CheckBox,
} from 'react-native'
import { connect } from 'react-redux'
import { serviceUpdateFetch } from '../../../actions'
import DateTimePicker from 'react-native-modal-datetime-picker'
import moment from 'moment'
import Header from '../../sections/components/header'
import Loader from '../components/loader.js'

class ServicesDetail extends Component {

  constructor(props) {
    super(props)
    
    let data = {}
    
    this.props.catalogs.data.failure.map((value) => {
      let key = 'check-'+value.id
      data[key] = false
    })
    
    this.state = {
      id           : '',
      idService    : '',
      date         : '',
      type         : '',
      provider_id  : '',
      mileage      : '',
      promise      : '',
      delivery     : '',
      bill         : '',
      cost         : '',
      status       : '',
      observations : '',
      failures     : data,
      isVisible1   : false,
      isVisible2   : false,
      isVisible3   : false,
    }
  }

  componentWillMount() {
    let data = {}

    this.props.catalogs.data.failure.map((value) => {
      let key = 'check-'+value.id

      data[key] = false

      this.props.services.selectedService.failure.map((value1) => {
        if (value.id == value1.failure_type_id) {
          data[key] = true
        }
      })
    })

    this.setState({
      id           : this.props.vehicles.selectedVehicle.id,
      idService    : this.props.services.selectedService.id,
      date         : this.props.services.selectedService.date,
      type         : this.props.services.selectedService.type,
      provider_id  : this.props.services.selectedService.provider_id,
      mileage      : this.props.services.selectedService.mileage,
      promise      : this.props.services.selectedService.promise,
      delivery     : this.props.services.selectedService.delivery,
      bill         : this.props.services.selectedService.bill,
      cost         : this.props.services.selectedService.cost,
      status       : this.props.services.selectedService.status,
      observations : this.props.services.selectedService.observations,
      failures     : data,
      isVisible1   : false,
      isVisible2   : false,
      isVisible3   : false,
    })
  }
  
  /**
   * DatetimePicker Date
   **/
  handlePickerDate = (datetimeDate) => {
    this.setState({ 
      isVisible1: false,
      date: moment(datetimeDate).format('YYYY-MM-DD')
    })
  }

  showPickerDate = () => {
    this.setState({ isVisible1: true })
  }

  hidePickerDate = () => {
    this.setState({ isVisible1: false })
  }

  /**
   * DatetimePicker Delivery
   **/
  handlePickerDelivery = (datetimeDelivery) => {
    this.setState({ 
      isVisible2: false,
      delivery: moment(datetimeDelivery).format('YYYY-MM-DD')
    })
  }

  showPickerDelivery = () => {
    this.setState({ isVisible2: true })
  }

  hidePickerDelivery = () => {
    this.setState({ isVisible2: false })
  }

  /**
   * DatetimePicker Promise
   **/
  handlePickerPromise = (datetimePromise) => {
    this.setState({
      isVisible3: false,
      promise: moment(datetimePromise).format('YYYY-MM-DD')
    })
  }

  showPickerPromise = () => {
    this.setState({ isVisible3: true })
  }

  hidePickerPromise = () => {
    this.setState({ isVisible3: false })
  }

  handleSuccess = async () => {

    if ( this.state.date != '' && 
         this.state.type != '' ) {

      let failures = []

      Object.keys(this.state.failures).forEach( (value, key) => {
        let request = value.slice(value.indexOf("-") + 1)

        if ( this.state.failures[value] ) {
          failures.push(request)
        }
      })

      this.props.serviceUpdateFetch(this.props.auth, this.state, failures)
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

  handleChangeValue = (id) => {
    
    let _this  = this.state.failures
    let key    = 'check-'+id
    _this[key] = !this.state.failures[key]

    this.setState( {failures: _this} )
  }
  
  render() {

    if (this.props.services.success) {
      this.props.navigation.navigate('Login')
    }

    return (
      <SafeAreaView>
        <StatusBar
          backgroundColor="#262626"
          barStyle="light-content"
        />
        { this.props.services.isFetching && <Loader /> }

        <Header title={'GESTIÓN DE SERVICIO'} />
        <ScrollView contentContainerStyle={styles.container} >
          <View style={styles.container_form} >
            <Text style={styles.text} >Fecha <Text style={ {color: '#4FD2D5' } }>*</Text></Text>
            <TouchableOpacity onPress={ this.showPickerDate }>
              <TextInput
                style={styles.input}
                placeholder="2018/07/24 - Ejemplo"
                placeholderTextColor="#D1D1D1"
                maxLength={40}
                keyboardType="default"
                underlineColorAndroid='#D1D1D1'
                value={ this.state.date }
                editable={false}
              />
            </TouchableOpacity>
            <DateTimePicker
              cancelTextIOS={'Salir'}
              confirmTextIOS={'Aceptar'}
              cancelTextStyle={ {color: 'red', fontSize: 20} }
              confirmTextStyle={ {color: 'blue', fontSize: 20} }
              isVisible={this.state.isVisible1}
              onConfirm={this.handlePickerDate}
              onCancel={this.hidePickerDate}
              mode={'date'}
              is24Hour={true}
              datePickerModeAndroid={'spinner'}
            />

            {/* --------------------------------------- */}

            <Text style={styles.text} >Tipo de servicio</Text>
            <View style={styles.container_picker} >
              <Picker 
                selectedValue={this.state.type}
                style={styles.picker}
                onValueChange={ (itemValue, itemIndex) => this.setState( {type : itemValue} ) }
                mode='dialog'
              >
                <Picker.Item label="Seleccione un tipo de servicio" value="" />
                <Picker.Item key="Correctiva" label="Correctiva" value="Correctiva" />
                <Picker.Item key="Preventiva" label="Preventiva" value="Preventiva" />
                <Picker.Item key="Conservación" label="Conservación" value="Conservación" />
              </Picker>
            </View>

            {/* --------------------------------------- */}

            <Text style={styles.text} >Taller <Text style={ {color: '#4FD2D5' } }>*</Text></Text>
            <View style={styles.container_picker} >
              <Picker 
                selectedValue={this.state.provider_id}
                style={styles.picker}
                onValueChange={ (itemValue, itemIndex) => this.setState( {provider_id : itemValue} ) }
                mode='dialog'
              >
                <Picker.Item label="Seleccione un taller" value="" />
                { this.props.catalogs.data.provider.map( (value) => <Picker.Item key={value.id} label={ value.name } value={ value.id } /> )}
              </Picker>
            </View>

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

            <Text style={styles.text} >Fecha promesa</Text>
            <TouchableOpacity onPress={ this.showPickerPromise }>
              <TextInput
                style={styles.input}
                placeholder="2018/07/24 - Ejemplo"
                placeholderTextColor="#D1D1D1"
                maxLength={40}
                keyboardType="default"
                underlineColorAndroid='#D1D1D1'
                value={ this.state.promise }
                editable={false}
              />
            </TouchableOpacity>
            <DateTimePicker
              cancelTextIOS={'Salir'}
              confirmTextIOS={'Aceptar'}
              cancelTextStyle={ {color: 'red', fontSize: 20} }
              confirmTextStyle={ {color: 'blue', fontSize: 20} }
              isVisible={this.state.isVisible3}
              onConfirm={this.handlePickerPromise}
              onCancel={this.hidePickerPromise}
              mode={'date'}
              is24Hour={true}
              datePickerModeAndroid={'spinner'}
            />

            {/* --------------------------------------- */}

            <Text style={styles.text} >Fecha de entrega</Text>
            <TouchableOpacity onPress={ this.showPickerDelivery }>
              <TextInput
                style={styles.input}
                placeholder="2018/07/24 - Ejemplo"
                placeholderTextColor="#D1D1D1"
                maxLength={40}
                keyboardType="default"
                underlineColorAndroid='#D1D1D1'
                value={ this.state.delivery }
                editable={false}
              />
            </TouchableOpacity>
            <DateTimePicker
              cancelTextIOS={'Salir'}
              confirmTextIOS={'Aceptar'}
              cancelTextStyle={ {color: 'red', fontSize: 20} }
              confirmTextStyle={ {color: 'blue', fontSize: 20} }
              isVisible={this.state.isVisible2}
              onConfirm={this.handlePickerDelivery}
              onCancel={this.hidePickerDelivery}
              mode={'date'}
              is24Hour={true}
              datePickerModeAndroid={'spinner'}
            />

            {/* --------------------------------------- */}

            <Text style={styles.text} >Factura</Text>
            <TextInput
              style={styles.input}
              placeholder="123"
              placeholderTextColor="#D1D1D1"
              maxLength={40}
              keyboardType="default"
              underlineColorAndroid='#D1D1D1'
              onChangeText={ (bill) => this.setState( {bill} ) }
              value={ this.state.bill }
            />

            {/* --------------------------------------- */}

            <Text style={styles.text} >Monto</Text>
            <TextInput
              style={styles.input}
              placeholder="$"
              placeholderTextColor="#D1D1D1"
              maxLength={40}
              keyboardType="default"
              underlineColorAndroid='#D1D1D1'
              onChangeText={ (cost) => this.setState( {cost} ) }
              value={ `${this.state.cost}` }
            />

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

            {/* --------------------------------------- */}

            <Text style={ {
              fontSize: 14,
              color: '#333333',
              fontWeight: 'bold',
              paddingLeft: 5,
              marginBottom: 15
            } } >Fallas</Text>

            {
              this.props.catalogs.data.failure.map((value) => {
                let key = 'check-'+value.id

                return (<View key={value.id} style={styles.container_checkbox} >
                  <Text style={styles.textCheckbox} >{ value.name }</Text>
                  <CheckBox
                    value={this.state.failures[key]}
                    onChange={ () => this.handleChangeValue(value.id) }
                    containerStyle={ {backgroundColor: '#4FD2D5'} }
                  />
                </View>)
              })
            }

            {/* --------------------------------------- */}

            <Text style={styles.text} >Observaciones</Text>
            <TextInput
              style={styles.textArea}
              placeholder="Escriba aquí sus observaciones"
              placeholderTextColor="#D1D1D1"
              maxLength={250}
              keyboardType="default"
              underlineColorAndroid='#D1D1D1'
              multiline={true}
              numberOfLines={4}
              onChangeText={ (observations) => this.setState( {observations} ) }
              value={ `${this.state.observations}` }
            />

            {/* --------------------------------------- */}

            <View style={styles.container_button}>
              <TouchableOpacity
                onPress={this.handleSuccess}
                style={styles.buttonSuccess}
              >
                <Text style={styles.buttonLabel}>Guardar</Text>
              </TouchableOpacity>
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
  textArea: {
    height: 180,
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
  container_button: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
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
  },
  container_checkbox: {
    flexDirection: 'row',
    borderBottomColor: '#CBCBCB',
    borderBottomWidth: 1,
    marginHorizontal: 5,
    marginBottom: 8,
  },
  textCheckbox: {
    flex: 1,
    fontSize: 12,
    color: '#333333',
    paddingLeft: 10,
  },
})

const mapStateToProps = (state) => {
  return {
    auth: state.auth.toJS(),
    vehicles: state.vehicles.toJS(),
    catalogs: state.catalogs.toJS(),
    services: state.services.toJS(),
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    serviceUpdateFetch: (auth, props, failures) => { dispatch(serviceUpdateFetch(auth, props, failures)) },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ServicesDetail)