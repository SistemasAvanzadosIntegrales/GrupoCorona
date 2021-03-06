import { fromJS } from 'immutable';

const initialState = fromJS({
  isFetching: false,
  error: false,
  success: false
})

const vehicles = (state = initialState, action) => {

  switch(action.type) {
    case 'VEHICLE_REQUEST':
      return state.merge({
        isFetching: true, 
        error: false,
        success: false
      })

    case 'VEHICLE_SUCCESS':
      return state.merge({
        data: action.payload.response,
        isFetching: false, 
        error: false,
        success: false
      })

    case 'VEHICLE_FAILURE':
      return state.merge({
        isFetching: false, 
        error: true,
        success: false
      })

    case 'SET_SELECTED_VEHICLE':
      return state.merge({
        data: state.get('data'),
        isFetching: false, 
        error: false,
        success: false,
        selectedVehicle: action.payload.vehicle
      })

    case 'VEHICLE_UPDATE_REQUEST':
      return state.merge({
        isFetching: true, 
        error: false,
        success: false
      })

    case 'VEHICLE_UPDATE_SUCCESS':
      return state.merge({
        isFetching: false, 
        error: false,
        success: true
      })

    case 'VEHICLE_UPDATE_FAILURE':
      return state.merge({
        isFetching: false, 
        error: true,
        success: false
      })

    case 'VEHICLE_SEARCH_REQUEST':
      return state.merge({
        isFetching: true, 
        error: false,
        success: false
      })

    case 'VEHICLE_SEARCH_SUCCESS':
      return state.merge({
        data: action.payload.response, 
        isFetching: false, 
        error: false,
        success: true
      })

    case 'VEHICLE_SEARCH_FAILURE':
      return state.merge({
        isFetching: false, 
        error: true,
        success: false
      })

    default:
      return state
  }
}

export default vehicles