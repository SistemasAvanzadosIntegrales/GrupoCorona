import React, { Component } from 'react';
import {
  FlatList,
  Text
} from 'react-native';
import Layout from '../components/layout-list';
import Empty from '../components/empty';
import Vehicle from '../components/vehicle';
import { connect } from 'react-redux';
import { NavigationActions } from 'react-navigation';

class VehiclesList extends Component {
  
  constructor() {
    super()
  }

  keyExtractor = (item) => item.id.toString()
  renderEmtpy = () => <Empty text="No hay resultado de vehículos" />
  viewVehicle = (item) => {
    
    this.props.dispatch({
      type: 'SET_SELECTED_VEHICLE',
      payload: {
        vehicle: item,
      }
    })
    
    this.props.dispatch(
      NavigationActions.navigate({
        routeName: 'SubMain'
      })
    )
  }
  
  renderItem = ({item}) => {
    return (
      <Vehicle
        {...item}
        onPress={ () => { this.viewVehicle(item) } }
      />
    )
  }
  
  render() {
    return (
      <Layout>
        <FlatList
          keyExtractor={this.keyExtractor}
          data={this.props.vehicles.data}
          ListEmptyComponent={this.renderEmtpy}
          renderItem={this.renderItem}
        />
      </Layout>
    )
  }
}

function mapStateToProps(state) {
  return {
    vehicles: state.vehicles.toJS()
  }
}

export default connect(mapStateToProps)(VehiclesList)