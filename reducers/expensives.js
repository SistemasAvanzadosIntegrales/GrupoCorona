import { fromJS } from 'immutable';

const initialState = fromJS({
  isFetching: false,
  error: false,
  sucess: false
})

const expensives = (state = initialState, action) => {

  switch(action.type) {
    case 'EXPENSIVE_REQUEST':
      return state.merge({
        isFetching: true, 
        error: false,
        sucess: false
      })

    case 'EXPENSIVE_SUCCESS':
      return state.merge({
        data: action.payload.response,
        isFetching: false, 
        error: false,
        sucess: true
      })

    case 'EXPENSIVE_FAILURE':
      return state.merge({
        isFetching: false, 
        error: true,
        sucess: false
      })

    case 'SET_SELECTED_EXPENSIVE':
      return state.merge({
        data: state.get('data'),
        isFetching: false, 
        error: false,
        success: false,
        selectedExpensive: action.payload.expensive
      })

    case 'EXPENSIVE_UPDATE_REQUEST':
      return state.merge({
        isFetching: true, 
        error: false,
        success: false
      })

    case 'EXPENSIVE_UPDATE_SUCCESS':
      return state.merge({
        data: state.get('data'),
        isFetching: false, 
        error: false,
        success: true
      })

    case 'EXPENSIVE_UPDATE_FAILURE':
      return state.merge({
        isFetching: false, 
        error: true,
        success: false
      })

    case 'EXPENSIVE_SEARCH_REQUEST':
      return state.merge({
        isFetching: true, 
        error: false,
        success: false
      })

    case 'EXPENSIVE_SEARCH_SUCCESS':
      return state.merge({
        data: action.payload.response, 
        isFetching: false, 
        error: false,
        success: true
      })

    case 'EXPENSIVE_SEARCH_FAILURE':
      return state.merge({
        isFetching: false, 
        error: true,
        success: false
      })

    default:
      return state
  }
}

export default expensives