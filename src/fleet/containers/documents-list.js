import React, { Component } from 'react'
import {
  FlatList,
  Text,
  Alert,
} from 'react-native'
import Layout from '../components/layout-list'
import Empty from '../components/empty'
import Document from '../components/document'
import { connect } from 'react-redux'
import { NavigationActions } from 'react-navigation'
import API from '../../../utils/api'

class DocumentList extends Component {

  constructor(props) {
    super(props)
  }

  keyExtractor = (item) => item.id.toString()
  renderEmtpy = () => <Empty text="No hay resultado de documentos" />
  viewDocument = (item) => {
    
    this.props.dispatch({
      type: 'SET_SELECTED_DOCUMENT',
      payload: {
        document: item,
      }
    })
    
    this.props.dispatch(
      NavigationActions.navigate({
        routeName: 'DocumentsDetail'
      })
    )
  }

  destroyDocument = (item) => {

    let response = false;
    
    API.destroyDocument(this.props.auth, item.id)
    .then(json => {
      this.props.dispatch(
        NavigationActions.navigate({
          routeName: 'Login'
        })
      )
    })
    .catch((error) => {
      Alert.alert(
        '¡Alerta!',
        'Hubo un error al eliminar, por favor intente de nuevo',
        [
          {text: 'Aceptar'},
        ],
      )
    })
  }

  downloadDocument = (item) => {

    let response = false;
    
    API.downloadDocument(this.props.auth, item.id)
    .then(json => {
      response = json
      // this.props.dispatch(
      //   NavigationActions.navigate({
      //     routeName: 'Login'
      //   })
      // )
    })
    .catch((error) => {
      Alert.alert(
        '¡Alerta!',
        'Hubo un error al descargar el archivo, por favor intente de nuevo',
        [
          {text: 'Aceptar'},
        ],
      )
    })
  }
  
  renderItem = ({item}) => {
    return (
      <Document
        {...item}
        onPress={ () => { this.viewDocument(item) } }
        onDestroy={ () => { this.destroyDocument(item) } }
        onDownload={ () => { this.downloadDocument(item) } }
      />
    )
  }

  render() {
    return (
      <Layout>
        <FlatList
          keyExtractor={this.keyExtractor}
          data={this.props.documents.data}
          ListEmptyComponent={this.renderEmtpy}
          renderItem={this.renderItem}
        />
      </Layout>
    )
  }
}

function mapStateToProps(state) {
  return {
    documents: state.documents.toJS(),
    auth: state.auth.toJS(),
  }
}


export default connect(mapStateToProps)(DocumentList)