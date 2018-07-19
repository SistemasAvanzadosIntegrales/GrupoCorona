import React, { Component, Fragment } from 'react'
import {
  Text,
  StatusBar,
  NetInfo,
} from 'react-native'
import { connect } from 'react-redux'
import { vehiclesFetch, userFetch, catalogsFetch } from '../../../actions'
import API from '../../../utils/api'
import Header from '../../sections/components/header'
import VehiclesList from '../../fleet/containers/vehicles-list'
import Loader from '../components/loader.js'
import ErrorText from '../components/error.js'

class Home extends Component {

  constructor() {
    super()
  }
  
  // getUserConnectionStatus = () => {
  //   NetInfo.isConnected.fetch().then(isUserOnline => {
  //     this.state.isUserOnline = isUserOnline;
  //     this.setState(this.state);

  //     console.log(this.state.isUserOnline);
  //     alert(this.state.isUserOnline);
  //   })
  // }

  async componentDidMount() {
    this.props.onUser(this.props.auth)
    this.props.vehiclesFetch(this.props.auth)
    this.props.catalogsFetch(this.props.auth)
  }

  render() {

    let error

    if (this.props.vehicles.error) {
      error = <ErrorText text="Hubo un problema al obtener vehículos" />
    }

    return (
      <Fragment>
        <StatusBar
          backgroundColor="#262626"
          barStyle="light-content"
        />
        { this.props.vehicles.isFetching && this.props.catalogs.isFetching && <Loader /> }
        <Header title={'GRUPO CORONA'} />
        <VehiclesList />
        { error }
      </Fragment>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.auth.toJS(),
    vehicles: state.vehicles.toJS(),
    catalogs: state.catalogs.toJS()
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onUser: (auth) => { dispatch(userFetch(auth)) },
    vehiclesFetch: (auth) => { dispatch(vehiclesFetch(auth)) },
    catalogsFetch: (auth) => { dispatch(catalogsFetch(auth)) }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)