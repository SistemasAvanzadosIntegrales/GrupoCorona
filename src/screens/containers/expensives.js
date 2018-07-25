import React, { Component, Fragment } from 'react'
import {
  Text,
  StatusBar,
  // NetInfo,
} from 'react-native'
import { connect } from 'react-redux'
import API from '../../../utils/api'
import Header from '../../sections/components/header'
import ExpensivesList from '../../fleet/containers/expensives-list';
import Loader from '../components/loader'
import ErrorText from '../components/error'
import Search from '../../sections/containers/search-expensive'

class Expensives extends Component {

  constructor(props) {
    super(props)
  }

  render() {

    let error

    if (this.props.expensives.error) {
      error = <ErrorText text="Hubo un problema al obtener gastos" />
    }

    return (
      <Fragment>
        <StatusBar
          backgroundColor="#262626"
          barStyle="light-content"
        />
        { this.props.expensives.isFetching && <Loader /> }
        <Header title={'GASTOS'} />
        <Search />
        <ExpensivesList />
        { error }
      </Fragment>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    expensives: state.expensives.toJS(),
  }
}

export default connect(mapStateToProps)(Expensives)