import React, { Component, Fragment } from 'react'
import {
  Text,
  StatusBar,
  // NetInfo,
} from 'react-native'
import { connect } from 'react-redux'
import API from '../../../utils/api'
import Header from '../../sections/components/header'
import ServicesList from '../../fleet/containers/services-list';
import Loader from '../components/loader'
import ErrorText from '../components/error'
import Search from '../../sections/containers/search-service'

class Services extends Component {

  constructor(props) {
    super(props)
  }
  
  render() {

    let error

    if (this.props.services.error) {
      error = <ErrorText text="Hubo un problema al obtener servicios" />
    }

    return (
      <Fragment>
        <StatusBar
          backgroundColor="#262626"
          barStyle="light-content"
        />
        { this.props.services.isFetching && <Loader /> }
        <Header title={'SERVICIOS'} />
        <Search />
        <ServicesList />
        { error }
      </Fragment>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    services: state.services.toJS(),
  }
}

export default connect(mapStateToProps)(Services)