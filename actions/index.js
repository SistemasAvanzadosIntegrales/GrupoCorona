import {
  LOGIN_REQUEST, 
  LOGIN_SUCCESS, 
  LOGIN_FAILURE, 
  LOGOUT_REQUEST,
  USER_REQUEST, 
  USER_SUCCESS, 
  USER_FAILURE
} from './Types'
import API from '../utils/api'

/**
 * @login
 **/
export const loginRequest = (email, password) => {
  return {
    type: LOGIN_REQUEST,
    payload: { email, password }
  }
}

export const loginSuccess = (email, response) => {
  return {
    type: LOGIN_SUCCESS,
    payload: { email, response }
  }
}

export const loginFailure = (email, response) => {
  return {
    type: LOGIN_FAILURE,
    payload: { email, response }
  }
}

export const loginFetch = (email, password) => {
  return (dispatch) => {
    dispatch(loginRequest(email, password))
    
    API.login(email, password)
    .then(json => {
      if(json.hasOwnProperty('error'))
        dispatch(loginFailure(email, json.message))
      else 
        dispatch(loginSuccess(email, json))
    })
    .catch((error) => {
      dispatch(loginFailure(email, error))
    })
  }
}

/**
 * @User
 **/
export const userFetch = (auth) => {
  return (dispatch) => {
    dispatch(userRequest(auth))

    API.user(auth)
    .then(json => {
      if(json.hasOwnProperty('error'))
        dispatch(userFailure(auth, json.message))
      else 
        dispatch(userSuccess(auth, json))
    })
    .catch((error) => {
      dispatch(userFailure(auth, error))
    })
  }
}

export const userRequest = (auth) => {
  return {
    type: USER_REQUEST,
    payload: auth
  }
}

export const userSuccess = (auth, response) => {
  return {
    type: USER_SUCCESS,
    payload: { response }
  }
}

export const userFailure = (auth, error) => {
  return {
    type: USER_FAILURE,
    payload: { auth, error}
  }
}

/**
 * @Vehicles
 **/
export const vehiclesFetch = (auth) => {
  return (dispatch) => {
    dispatch(vehiclesRequest(auth))

    API.getVehicles(auth)
    .then(json => {
      if(json.hasOwnProperty('error'))
        dispatch(vehiclesFailure(json.message))
      else 
        dispatch(vehiclesSuccess(json))
    })
    .catch((error) => {
      dispatch(vehiclesFailure(error))
    })
  }
}

export const vehiclesRequest = (auth) => {
  return {
    type: 'VEHICLE_REQUEST',
    payload: auth
  }
}

export const vehiclesSuccess = (response) => {
  return {
    type: 'VEHICLE_SUCCESS',
    payload: { response }
  }
}

export const vehiclesFailure = (error) => {
  return {
    type: 'VEHICLE_FAILURE',
    payload: { error }
  }
}

export const vehicleUpdateFetch = (auth, props) => {
  
  console.log(auth)
  console.log(props)
  
  // return (dispatch) => {
    // dispatch(vehiclesRequest(auth))

    // API.getVehicles(auth)
    // .then(json => {
    //   if(json.hasOwnProperty('error'))
    //     dispatch(vehiclesFailure(json.message))
    //   else 
    //     dispatch(vehiclesSuccess(json))
    // })
    // .catch((error) => {
    //   dispatch(vehiclesFailure(error))
    // })
  // }
}

/**
 * @Catalogs
 **/
export const catalogsFetch = (auth) => {
  return (dispatch) => {
    dispatch(catalogsRequest(auth))

    API.getCatalogs(auth)
    .then(json => {
      if(json.hasOwnProperty('error'))
        dispatch(catalogsFailure(json.message))
      else 
        dispatch(catalogsSuccess(json))
    })
    .catch((error) => {
      dispatch(catalogsFailure(error))
    })
  }
}

export const catalogsRequest = (auth) => {
  return {
    type: 'CATALOGS_REQUEST',
    payload: auth
  }
}

export const catalogsSuccess = (response) => {
  return {
    type: 'CATALOGS_SUCCESS',
    payload: { response }
  }
}

export const catalogsFailure = (error) => {
  return {
    type: 'CATALOGS_FAILURE',
    payload: { error }
  }
}

/**
 * @Logout
 **/
export const logout = () => {
  return {
    type: LOGOUT_REQUEST
  }
}
