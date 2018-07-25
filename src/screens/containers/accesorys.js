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
  CheckBox,
} from 'react-native'
import { connect } from 'react-redux'
import Header from '../../sections/components/header'
import { accessoryUpdateFetch } from '../../../actions'
import Loader from '../components/loader.js'

class Accesorys extends Component {

  constructor(props) {
    super(props)
    
    let data = {}
    
    this.props.catalogs.data.accessory.map((value) => {
      let key = 'check-'+value.id
      data[key] = false
    })
    
    this.state = data
  }

  componentWillMount() {

    let data = {}

    this.props.catalogs.data.accessory.map((value) => {
      let key = 'check-'+value.id

      this.props.accessorys.data.map((value1) => {
        if (value.id == value1.accessory_type_id) {
          data[key] = true
        }
      })
    })

    this.setState(data)
  }
  
  handleCancel = () => {
    this.props.navigation.navigate('Home')
  }

  handleSuccess = () => {

    let data = []

    Object.keys(this.state).forEach( (value, key) => {
      let request = value.slice(value.indexOf("-") + 1)

      if ( this.state[value] ) {
        data.push(request)
      }
    })

    if ( data.length ) {
      this.props.accessoryUpdateFetch(this.props.auth, this.props.vehicles.selectedVehicle.id, data)
    }
    else {
      this.props.navigation.navigate('Login')
    }
  }

  handleChangeValue = (id) => {
    let state = {}
    let key = 'check-'+id
    state[key] = !this.state[key]

    this.setState(state)
  }
  
  render() {

    if (this.props.accessorys.success) {
      this.props.navigation.navigate('Drawer')
    }

    return (
      <SafeAreaView>
        <StatusBar
          backgroundColor="#262626"
          barStyle="light-content"
        />
        { this.props.accessorys.isFetching && <Loader /> }
        <Header title={'ACCESORIOS'} />
        <ScrollView contentContainerStyle={styles.container} >
          <View style={styles.container_form} >
            
            {
              this.props.catalogs.data.accessory.map((value) => {
                let key = 'check-'+value.id

                return (<View key={value.id} style={styles.container_checkbox} >
                  <Text style={styles.text} >{ value.name }</Text>
                  <CheckBox
                    value={this.state[key]}
                    onChange={ () => this.handleChangeValue(value.id) }
                    containerStyle={ {backgroundColor: '#4FD2D5'} }
                  />
                </View>)
              })
            }

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

const mapStateToProps = (state) => {
  return {
    auth: state.auth.toJS(),
    catalogs: state.catalogs.toJS(),
    accessorys: state.accessorys.toJS(),
    vehicles: state.vehicles.toJS(),
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    accessoryUpdateFetch: (auth, id, props) => { dispatch(accessoryUpdateFetch(auth, id, props)) },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Accesorys)