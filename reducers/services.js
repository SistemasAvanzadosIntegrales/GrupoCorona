import { fromJS } from 'immutable';

const initialState = fromJS({
  isFetching: false,
  error: false,
  success: false,
  selectedService: false
})

const services = (state = initialState, action) => {

  switch(action.type) {
    case 'SERVICE_REQUEST':
      return state.merge({
        isFetching: true, 
        error: false,
        success: false
      })

    case 'SERVICE_SUCCESS':
      return state.merge({
        data: action.payload.response,
        isFetching: false, 
        error: false,
        success: true,
        selectedService: false
      })

    case 'SERVICE_FAILURE':
      return state.merge({
        isFetching: false, 
        error: true,
        success: false
      })

    case 'SET_SELECTED_SERVICE':
      return state.merge({
        data: state.get('data'),
        isFetching: false, 
        error: false,
        success: false,
        selectedService: action.payload.service
      })

    case 'SERVICE_UPDATE_REQUEST':
      return state.merge({
        isFetching: true, 
        error: false,
        success: false
      })

    case 'SERVICE_UPDATE_SUCCESS':
      return state.merge({
        isFetching: false, 
        error: false,
        success: true
      })

    case 'SERVICE_UPDATE_FAILURE':
      return state.merge({
        isFetching: false, 
        error: true,
        success: false
      })

    case 'SERVICE_SEARCH_REQUEST':
      return state.merge({
        isFetching: true, 
        error: false,
        success: false
      })

    case 'SERVICE_SEARCH_SUCCESS':
      return state.merge({
        data: action.payload.response, 
        isFetching: false, 
        error: false,
        success: true
      })

    case 'SERVICE_SEARCH_FAILURE':
      return state.merge({
        isFetching: false, 
        error: true,
        success: false
      })

    default:
      return state
  }
}

export default services