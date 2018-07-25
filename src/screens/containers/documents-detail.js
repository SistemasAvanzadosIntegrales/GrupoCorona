import React, { Component } from 'react'
import {
  Text,
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
import Header from '../../sections/components/header'
import { documentUpdateFetch } from '../../../actions'
import Loader from '../components/loader.js'

class DocumentsDetail extends Component {

  constructor(props) {
    super()

    this.state = {
      id              : '',
      idDocument      : '',
      document_type_id: '',
      // file            : '',
      status          : '',
    }
  }

  componentWillMount() {

    this.setState({
      id              : this.props.vehicles.selectedVehicle.id,
      idDocument      : this.props.documents.selectedDocument.id,
      document_type_id: this.props.documents.selectedDocument.document_type_id,
      // file            : this.props.documents.selectedDocument.file,
      status          : this.props.documents.selectedDocument.status,
    })
  }

  handleSuccess = async () => {

    // if ( this.state.file             != '' && 
    //      this.state.document_type_id != '' ) {
    if ( this.state.document_type_id != '' ) {
      this.props.documentUpdateFetch(this.props.auth, this.state)
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

    if (this.props.documents.success) {
      this.props.navigation.navigate('Login')
    }

    return (
      <SafeAreaView>
        <StatusBar
          backgroundColor="#262626"
          barStyle="light-content"
        />
        { this.props.documents.isFetching && <Loader /> }

        <Header title={'GESTIONAR DOCUMENTO'} />
        <ScrollView contentContainerStyle={styles.container} >
          <View style={styles.container_form} >
            <Text style={styles.text} >Tipo de documento<Text style={ {color: '#4FD2D5' } }>*</Text></Text>
            <View style={styles.container_picker} >
              <Picker 
                selectedValue={this.state.document_type_id}
                style={styles.picker}
                onValueChange={ (itemValue, itemIndex) => this.setState( {document_type_id : itemValue} ) }
                mode='dialog'
              >
                <Picker.Item label="Seleccione el tipo de documento" value="" />
                { this.props.catalogs.data.document.map( (value) => <Picker.Item key={value.id} label={ value.name } value={ value.id } /> )}
              </Picker>
            </View>
            
            {/* --------------------------------------- */}

            

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
  }
})

const mapStateToProps = (state) => {
  return {
    auth: state.auth.toJS(),
    vehicles: state.vehicles.toJS(),
    catalogs: state.catalogs.toJS(),
    documents: state.documents.toJS(),
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    documentUpdateFetch: (auth, props) => { dispatch(documentUpdateFetch(auth, props)) },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DocumentsDetail)