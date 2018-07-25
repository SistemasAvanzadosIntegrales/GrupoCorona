import React, { Component } from 'react'
import {
  FlatList,
  Text,
  Alert,
} from 'react-native';
import Layout from '../components/layout-list'
import Empty from '../components/empty'
import Expensive from '../components/expensive'
import { connect } from 'react-redux'
import { NavigationActions } from 'react-navigation'
import API from '../../../utils/api'

class ExpensiveList extends Component {

  constructor(props) {
    super(props)
  }

  keyExtractor = (item) => item.id.toString()
  renderEmtpy = () => <Empty text="No hay resultado de gastos" />
  viewExpensive = (item) => {
    
    this.props.dispatch({
      type: 'SET_SELECTED_EXPENSIVE',
      payload: {
        expensive: item,
      }
    })
    
    this.props.dispatch(
      NavigationActions.navigate({
        routeName: 'ExpensivesDetail'
      })
    )
  }
  
  destroyExpensive = (item) => {

    let response = false;
    
    API.destroyExpensive(this.props.auth, item.id)
    .then(json => {
      response = json

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
  
  renderItem = ({item}) => {
    return (
      <Expensive
        {...item}
        onPress={ () => { this.viewExpensive(item) } }
        onDestroy={ () => { this.destroyExpensive(item) } }
      />
    )
  }

  render() {
    return (
      <Layout>
        <FlatList
          keyExtractor={this.keyExtractor}
          data={this.props.expensives.data}
          ListEmptyComponent={this.renderEmtpy}
          renderItem={this.renderItem}
        />
      </Layout>
    )
  }
}

function mapStateToProps(state) {
  return {
    expensives: state.expensives.toJS(),
    auth: state.auth.toJS(),
  }
}


export default connect(mapStateToProps)(ExpensiveList)