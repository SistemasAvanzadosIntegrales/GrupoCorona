import { fromJS } from 'immutable';

const initialState = fromJS({
  isFetching: false,
  error: false
})

const catalogs = (state = initialState, action) => {

  switch(action.type) {
    case 'CATALOGS_REQUEST':
      return state.merge({
        isFetching: true, 
        error: false
      })

    case 'CATALOGS_SUCCESS':
      return state.merge({
        data: action.payload.response,
        isFetching: false, 
        error: false
      })

    case 'CATALOGS_FAILURE':
      return state.merge({
        isFetching: false, 
        error: true
      })

    default:
      return state
  }
}

export default catalogs