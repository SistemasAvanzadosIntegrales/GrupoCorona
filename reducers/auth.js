import { 
  LOGIN_REQUEST, 
  LOGIN_SUCCESS, 
  LOGIN_FAILURE, 
  LOGOUT_REQUEST,
  USER_REQUEST, 
  USER_SUCCESS, 
  USER_FAILURE
} from '../actions/Types'
import { fromJS } from 'immutable';

const initialState = fromJS({
  email: '',
  password: '',
  access_token: '',
  refresh_token: '',
  expires_in: null,
  token_type: '',
  isFetching: false,
  error: false
})

const auth = (state = initialState, action) => {
  switch(action.type) {
    case LOGIN_REQUEST:
      return state.merge({
        email: action.payload.email,
        password: action.payload.password,
        created_at: action.payload.created_at,
        updated_at: action.payload.updated_at,
        isFetching: true,
        error: false
      })

    case LOGIN_SUCCESS:
      return state.merge({
        access_token: action.payload.response.access_token,
        refresh_token: action.payload.response.refresh_token,
        expires_in: action.payload.response.expires_in,
        password: '',
        isFetching: false,
        error: false
      })

    case LOGIN_FAILURE:
      return state.merge(initialState).merge({
        error: true
      })

    case USER_REQUEST:
      return state.merge({
        loading: true, 
        error: false
      })

    case USER_SUCCESS:
      return state.merge(action.payload.response).merge({
        loading: false, 
        error: false
      })

    case USER_FAILURE:
      return state.merge({
        loading: false, 
        error: true
      })

    case LOGOUT_REQUEST:
      return state.merge(initialState)

    default:
      return state
  }
}

export default auth