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
import Header from '../../sections/components/header'
import { expensiveUpdateFetch } from '../../../actions'
import DateTimePicker from 'react-native-modal-datetime-picker'
import moment from 'moment'
import Loader from '../components/loader.js'

class ExpensivesDetail extends Component {

  constructor(props) {
    super(props)
    
    this.state = {
      id             : '',
      idExpensive    : '',
      date           : '',
      expense_type_id: '',
      provider_id    : '',
      bill           : '',
      cost           : '',
      observations   : '',
      status         : '',
      isVisible      : false,
    }
  }

  componentWillMount() {

    this.setState({
      id              : this.props.vehicles.selectedVehicle.id,
      idExpensive     : this.props.expensives.selectedExpensive.id,
      date            : this.props.expensives.selectedExpensive.date,
      expense_type_id : this.props.expensives.selectedExpensive.expense_type_id,
      provider_id     : this.props.expensives.selectedExpensive.provider_id,
      bill            : this.props.expensives.selectedExpensive.bill,
      cost            : this.props.expensives.selectedExpensive.cost,
      observations    : this.props.expensives.selectedExpensive.observations,
      status          : this.props.expensives.selectedExpensive.status,
      isVisible       : false,
    })
  }

  /**
   * DatetimePicker Date
   **/
  handlePickerDate = (datetimeDate) => {
    this.setState({ 
      isVisible: false,
      date: moment(datetimeDate).format('YYYY-MM-DD')
    })
  }

  showPickerDate = () => {
    this.setState({ isVisible: true })
  }

  hidePickerDate = () => {
    this.setState({ isVisible: false })
  }

  handleSuccess = async () => {

    if ( this.state.date            != '' && 
         this.state.expense_type_id != '' &&
         this.state.provider_id     != '' ) {

      this.props.expensiveUpdateFetch(this.props.auth, this.state)
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

    if (this.props.expensives.success) {
      this.props.navigation.navigate('Login')
    }

    return (
      <SafeAreaView>
        <StatusBar
          backgroundColor="#262626"
          barStyle="light-content"
        />
        { this.props.expensives.isFetching && <Loader /> }

        <Header title={'GESTIÓN DE GASTO'} />
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
              isVisible={this.state.isVisible}
              onConfirm={this.handlePickerDate}
              onCancel={this.hidePickerDate}
              mode={'date'}
              is24Hour={true}
              datePickerModeAndroid={'spinner'}
            />

            {/* --------------------------------------- */}

            <Text style={styles.text} >Tipo de gasto <Text style={ {color: '#4FD2D5' } }>*</Text></Text>
            <View style={styles.container_picker} >
              <Picker 
                selectedValue={this.state.expense_type_id}
                style={styles.picker}
                onValueChange={ (itemValue, itemIndex) => this.setState( {expense_type_id : itemValue} ) }
                mode='dialog'
              >
                <Picker.Item label="Seleccione el tipo de gasto" value="" />
                { this.props.catalogs.data.expense.map( (value) => <Picker.Item key={value.id} label={ value.name } value={ value.id } /> )}
              </Picker>
            </View>

            {/* --------------------------------------- */}

            <Text style={styles.text} >Proveedor <Text style={ {color: '#4FD2D5' } }>*</Text></Text>
            <View style={styles.container_picker} >
              <Picker 
                selectedValue={this.state.provider_id}
                style={styles.picker}
                onValueChange={ (itemValue, itemIndex) => this.setState( {provider_id : itemValue} ) }
                mode='dialog'
              >
                <Picker.Item label="Seleccione proveedor" value="" />
                { this.props.catalogs.data.provider.map( (value) => <Picker.Item key={value.id} label={ value.name } value={ value.id } /> )}
              </Picker>
            </View>

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
})

const mapStateToProps = (state) => {
  return {
    auth: state.auth.toJS(),
    vehicles: state.vehicles.toJS(),
    catalogs: state.catalogs.toJS(),
    expensives: state.expensives.toJS(),
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    expensiveUpdateFetch: (auth, props) => { dispatch(expensiveUpdateFetch(auth, props)) },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ExpensivesDetail)