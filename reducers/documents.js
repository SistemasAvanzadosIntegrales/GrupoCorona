import { fromJS } from 'immutable';

const initialState = fromJS({
  isFetching: false,
  error: false,
  sucess: false,
  selectedDocument: false
})

const documents = (state = initialState, action) => {

  switch(action.type) {
    case 'DOCUMENT_REQUEST':
      return state.merge({
        isFetching: true, 
        error: false,
        sucess: false
      })

    case 'DOCUMENT_SUCCESS':
      return state.merge({
        data: action.payload.response,
        isFetching: false, 
        error: false,
        sucess: true,
        selectedDocument: false
      })

    case 'DOCUMENT_FAILURE':
      return state.merge({
        isFetching: false, 
        error: true,
        sucess: false
      })

    case 'SET_SELECTED_DOCUMENT':
      return state.merge({
        data: state.get('data'),
        isFetching: false, 
        error: false,
        success: false,
        selectedDocument: action.payload.document
      })

    case 'DOCUMENT_UPDATE_REQUEST':
      return state.merge({
        isFetching: true, 
        error: false,
        success: false
      })

    case 'DOCUMENT_UPDATE_SUCCESS':
      return state.merge({
        data: state.get('data'),
        isFetching: false, 
        error: false,
        success: true
      })

    case 'DOCUMENT_UPDATE_FAILURE':
      return state.merge({
        isFetching: false, 
        error: true,
        success: false
      })

    case 'DOCUMENT_SEARCH_REQUEST':
      return state.merge({
        isFetching: true, 
        error: false,
        success: false
      })

    case 'DOCUMENT_SEARCH_SUCCESS':
      return state.merge({
        data: action.payload.response, 
        isFetching: false, 
        error: false,
        success: true
      })

    case 'DOCUMENT_SEARCH_FAILURE':
      return state.merge({
        isFetching: false, 
        error: true,
        success: false
      })

    default:
      return state
  }
}

export default documents