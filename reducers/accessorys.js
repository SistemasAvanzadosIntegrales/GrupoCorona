import { fromJS } from 'immutable';

const initialState = fromJS({
  isFetching: false,
  error: false,
  success: false
})

const accessorys = (state = initialState, action) => {

  switch(action.type) {
    case 'ACCESSORY_REQUEST':
      return state.merge({
        isFetching: true, 
        error: false,
        success: false
      })

    case 'ACCESSORY_SUCCESS':
      return state.merge({
        data: action.payload.response,
        isFetching: false, 
        error: false,
        success: false
      })

    case 'ACCESSORY_FAILURE':
      return state.merge({
        isFetching: false, 
        error: true,
        success: false
      })

    case 'ACCESSORY_UPDATE_REQUEST':
      return state.merge({
        isFetching: true, 
        error: false,
        success: false
      })

    case 'ACCESSORY_UPDATE_SUCCESS':
      return state.merge({
        data: action.payload.response,
        isFetching: false, 
        error: false,
        success: true
      })

    case 'ACCESSORY_UPDATE_FAILURE':
      return state.merge({
        isFetching: false, 
        error: true,
        success: false
      })

    default:
      return state
  }
}

export default accessorys