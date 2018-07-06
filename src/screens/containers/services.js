import React, { Component, Fragment } from 'react';
import {
  Text,
  StatusBar
} from 'react-native';
import { connect } from 'react-redux';

import API from '../../../utils/api';
import Header from '../../sections/components/header';
import ServicesList from '../../fleet/containers/services-list';

class Services extends Component {

  async componentDidMount() {

    const vehiclesList = await API.getSuggestion(10);
    
    this.props.dispatch({
      type: 'SET_SEGGESTION_LIST',
      payload: {
        vehiclesList
      }
    })
  }

  render() {
    return (
      <Fragment>
        <StatusBar
          backgroundColor="#262626"
          barStyle="light-content"
        />
        <Header title={'GESTIÓN DE SERVICIOS'} />
        <ServicesList />
      </Fragment>
    )
  }
}

export default connect(null)(Services);