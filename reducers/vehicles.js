import { fromJS } from 'immutable';

const initialState = fromJS({
  isFetching: false,
  error: false
})

const vehicles = (state = initialState, action) => {

  switch(action.type) {
    case 'VEHICLE_REQUEST':
      return state.merge({
        isFetching: true, 
        error: false
      })

    case 'VEHICLE_SUCCESS':
      return state.merge({
        data: action.payload.response,
        isFetching: false, 
        error: false
      })

    case 'VEHICLE_FAILURE':
      return state.merge({
        isFetching: false, 
        error: true
      })

    case 'SET_SELECTED_VEHICLE':
      return state.merge({
        data: state.get('data'),
        isFetching: state.get('isFetching'), 
        error: state.get('error'),
        selectedMovie: action.payload.vehicle
      })

    default:
      return state
  }
}

export default vehicles