import React, { Component } from 'react'
import {
  FlatList,
  Text,
  Alert,
} from 'react-native'
import Layout from '../components/layout-list'
import Empty from '../components/empty'
import Service from '../components/service'
import { connect } from 'react-redux'
import { NavigationActions } from 'react-navigation'
import API from '../../../utils/api'

class ServiceList extends Component {
  
  constructor(props) {
    super(props)
  }

  keyExtractor = (item) => item.id.toString()
  renderEmtpy = () => <Empty text="No hay resultado de servicios" />
  viewService = (item) => {
    
    this.props.dispatch({
      type: 'SET_SELECTED_SERVICE',
      payload: {
        service: item,
      }
    })
    
    this.props.dispatch(
      NavigationActions.navigate({
        routeName: 'ServicesDetail'
      })
    )
  }

  destroyService = (item) => {

    let response = false;
    
    API.destroyService(this.props.auth, item.id)
    .then(json => {
      response = json

      this.props.dispatch(
        NavigationActions.navigate({
          routeName: 'Login'
        })
      )
    })
    .catch((error) => {
      console.log(error)

      Alert.alert(
        '¡Alerta!',
        'Hubo un error al eliminar, por favor intente de nuevo',
        [
          {text: 'Aceptar'},
        ],
      )
    })
  }
  
  renderItem = ({item}) => {
    return (
      <Service
        {...item}
        onPress={ () => { this.viewService(item) } }
        onDestroy={ () => { this.destroyService(item) } }
      />
    )
  }

  render() {
    return (
      <Layout>
        <FlatList
          keyExtractor={this.keyExtractor}
          data={this.props.services.data}
          ListEmptyComponent={this.renderEmtpy}
          renderItem={this.renderItem}
        />
      </Layout>
    )
  }
}

function mapStateToProps(state) {
  return {
    services: state.services.toJS(),
    auth: state.auth.toJS(),
  }
}

export default connect(mapStateToProps)(ServiceList)