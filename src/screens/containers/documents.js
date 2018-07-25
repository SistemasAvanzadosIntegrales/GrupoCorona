import React, { Component, Fragment } from 'react'
import {
  Text,
  StatusBar,
} from 'react-native'
import { connect } from 'react-redux'
import API from '../../../utils/api'
import Header from '../../sections/components/header'
import DocumentsList from '../../fleet/containers/documents-list';
import Loader from '../components/loader'
import ErrorText from '../components/error'
import Search from '../../sections/containers/search-document'

class Documents extends Component {

  constructor(props) {
    super(props)
  }

  render() {

    let error

    if (this.props.documents.error) {
      error = <ErrorText text="Hubo un problema al obtener documentos" />
    }

    return (
      <Fragment>
        <StatusBar
          backgroundColor="#262626"
          barStyle="light-content"
        />
        { this.props.documents.isFetching && <Loader /> }
        <Header title={'DOCUMENTOS'} />
        <Search />
        <DocumentsList />
        { error }
      </Fragment>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    documents: state.documents.toJS(),
  }
}

export default connect(mapStateToProps)(Documents)