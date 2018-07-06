import React, { Component } from 'react';
import {
  FlatList,
  Text
} from 'react-native';
import Layout from '../components/layout-list';
import Empty from '../components/empty';
import Service from '../components/service';
import { connect } from 'react-redux';
import { NavigationActions } from 'react-navigation';

function mapStateToProps(state) {
  return {
    list: state.videos.vehiclesList
  }
}

class ServicesList extends Component {
  
  keyExtractor = item => item.id.toString()
  renderEmtpy = () => <Empty text="No hay resultado de vehículos" />

  viewMovie = (item) => {
    
    this.props.dispatch({
      type: 'SET_SELECTED_MOVIE',
      payload: {
        movie: item,
      }
    })

    this.props.dispatch(
      NavigationActions.navigate({
        routeName: 'ServicesDetail'
      })
    )
  }
  
  renderItem = ({item}) => {
    return (
      <Service
        {...item}
        onPress={ () => { this.viewMovie(item) } }
      />
    )
  }
  
  render() {
    return (
      <Layout>
        <FlatList
          keyExtractor={this.keyExtractor}
          data={this.props.list}
          ListEmptyComponent={this.renderEmtpy}
          renderItem={this.renderItem}
        />
      </Layout>
    )
  }
}

export default connect(mapStateToProps)(ServicesList)