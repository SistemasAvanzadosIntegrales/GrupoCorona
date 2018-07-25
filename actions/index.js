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
  return (dispatch) => {
    dispatch(vehicleUpdateRequest(auth, props))

    API.updateVehicle(auth, props)
    .then(json => {
      if(json.hasOwnProperty('error'))
        dispatch(vehicleUpdateFailure(json.message))
      else 
        dispatch(vehicleUpdateSuccess(json))
    })
    .catch((error) => {
      dispatch(vehicleUpdateFailure(error))
    })
  }
}

export const vehicleUpdateRequest = (auth, props) => {
  return {
    type: 'VEHICLE_UPDATE_REQUEST',
    payload: { auth, props } 
  }
}

export const vehicleUpdateSuccess = (response) => {
  return {
    type: 'VEHICLE_UPDATE_SUCCESS',
    payload: { response }
  }
}

export const vehicleUpdateFailure = (error) => {
  return {
    type: 'VEHICLE_UPDATE_FAILURE',
    payload: { error }
  }
}

export const vehicleSearchFetch = (auth, props) => {
  return (dispatch) => {
    dispatch(vehicleSearchRequest(auth, props))

    API.getVehicle(auth, props)
    .then(json => {
      if(json.hasOwnProperty('error'))
        dispatch(vehicleSearchFailure(json.message))
      else 
        dispatch(vehicleSearchSuccess(json))
    })
    .catch((error) => {
      dispatch(vehicleSearchFailure(error))
    })
  }
}

export const vehicleSearchRequest = (auth, props) => {
  return {
    type: 'VEHICLE_SEARCH_REQUEST',
    payload: { auth, props } 
  }
}

export const vehicleSearchSuccess = (response) => {
  return {
    type: 'VEHICLE_SEARCH_SUCCESS',
    payload: { response }
  }
}

export const vehicleSearchFailure = (error) => {
  return {
    type: 'VEHICLE_SEARCH_FAILURE',
    payload: { error }
  }
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
 * @Accesorys
 **/
export const accessorysFetch = (auth, id) => {
  return (dispatch) => {
    dispatch(accessorysRequest(auth, id))

    API.getAccessorys(auth, id)
    .then(json => {
      if(json.hasOwnProperty('error'))
        dispatch(accessorysFailure(json.message))
      else 
        dispatch(accessorysSuccess(json))
    })
    .catch((error) => {
      dispatch(accessorysFailure(error))
    })
  }
}

export const accessorysRequest = (auth, id) => {
  return {
    type: 'ACCESORY_REQUEST',
    payload: auth
  }
}

export const accessorysSuccess = (response) => {
  return {
    type: 'ACCESSORY_SUCCESS',
    payload: { response }
  }
}

export const accessorysFailure = (error) => {
  return {
    type: 'ACCESSORY_FAILURE',
    payload: { error }
  }
}

export const accessoryUpdateFetch = (auth, id, props) => {
  return (dispatch) => {
    dispatch(accessoryUpdateRequest(auth, id, props))

    API.updateAccessory(auth, id, props)
    .then(json => {
      if(json.hasOwnProperty('error'))
        dispatch(accessoryUpdateFailure(json.message))
      else 
        dispatch(accessoryUpdateSuccess(json))
    })
    .catch((error) => {
      dispatch(accessoryUpdateFailure(error))
    })
  }
}

export const accessoryUpdateRequest = (auth, id, props) => {
  return {
    type: 'ACCESSORY_UPDATE_REQUEST',
    payload: { auth, id, props } 
  }
}

export const accessoryUpdateSuccess = (response) => {
  return {
    type: 'ACCESSORY_UPDATE_SUCCESS',
    payload: { response }
  }
}

export const accessoryUpdateFailure = (error) => {
  return {
    type: 'ACCESSORY_UPDATE_FAILURE',
    payload: { error }
  }
}

/**
 * @Documents
 **/
export const documentsFetch = (auth, id) => {
  return (dispatch) => {
    dispatch(documentsRequest(auth, id))

    API.getDocuments(auth, id)
    .then(json => {
      console.log(json)
      if(json.hasOwnProperty('error'))
        dispatch(documentsFailure(json.message))
      else 
        dispatch(documentsSuccess(json))
    })
    .catch((error) => {
      dispatch(documentsFailure(error))
    })
  }
}

export const documentsRequest = (auth, id) => {
  return {
    type: 'DOCUMENT_REQUEST',
    payload: auth
  }
}

export const documentsSuccess = (response) => {
  return {
    type: 'DOCUMENT_SUCCESS',
    payload: { response }
  }
}

export const documentsFailure = (error) => {
  return {
    type: 'DOCUMENT_FAILURE',
    payload: { error }
  }
}

export const documentSearchFetch = (auth, text, id) => {
  return (dispatch) => {
    dispatch(documentSearchRequest(auth, text, id))

    API.getDocument(auth, text, id)
    .then(json => {
      if(json.hasOwnProperty('error'))
        dispatch(documentSearchFailure(json.message))
      else 
        dispatch(documentSearchSuccess(json))
    })
    .catch((error) => {
      dispatch(documentSearchFailure(error))
    })
  }
}

export const documentSearchRequest = (auth, text, id) => {
  return {
    type: 'DOCUMENT_SEARCH_REQUEST',
    payload: { auth, text, id } 
  }
}

export const documentSearchSuccess = (response) => {
  return {
    type: 'DOCUMENT_SEARCH_SUCCESS',
    payload: { response }
  }
}

export const documentSearchFailure = (error) => {
  return {
    type: 'DOCUMENT_SEARCH_FAILURE',
    payload: { error }
  }
}

export const documentUpdateFetch = (auth, props) => {
  return (dispatch) => {
    dispatch(documentUpdateRequest(auth, props))

    API.updateDocument(auth, props)
    .then(json => {
      if(json.hasOwnProperty('error'))
        dispatch(documentUpdateFailure(json.message))
      else 
        dispatch(documentUpdateSuccess(json))
    })
    .catch((error) => {
      dispatch(documentUpdateFailure(error))
    })
  }
}

export const documentUpdateRequest = (auth, props) => {
  return {
    type: 'DOCUMENT_UPDATE_REQUEST',
    payload: { auth, props } 
  }
}

export const documentUpdateSuccess = (response) => {
  return {
    type: 'DOCUMENT_UPDATE_SUCCESS',
    payload: { response }
  }
}

export const documentUpdateFailure = (error) => {
  return {
    type: 'DOCUMENT_UPDATE_FAILURE',
    payload: { error }
  }
}

/**
 * @Expensives
 **/
export const expensivesFetch = (auth, id) => {
  return (dispatch) => {
    dispatch(expensivesRequest(auth, id))

    API.getExpensives(auth, id)
    .then(json => {
      if(json.hasOwnProperty('error'))
        dispatch(expensivesFailure(json.message))
      else 
        dispatch(expensivesSuccess(json))
    })
    .catch((error) => {
      dispatch(expensivesFailure(error))
    })
  }
}

export const expensivesRequest = (auth, id) => {
  return {
    type: 'EXPENSIVE_REQUEST',
    payload: auth
  }
}

export const expensivesSuccess = (response) => {
  return {
    type: 'EXPENSIVE_SUCCESS',
    payload: { response }
  }
}

export const expensivesFailure = (error) => {
  return {
    type: 'EXPENSIVE_FAILURE',
    payload: { error }
  }
}

export const expensiveSearchFetch = (auth, text, id) => {
  return (dispatch) => {
    dispatch(expensiveSearchRequest(auth, text, id))

    API.getExpensive(auth, text, id)
    .then(json => {
      if(json.hasOwnProperty('error'))
        dispatch(expensiveSearchFailure(json.message))
      else 
        dispatch(expensiveSearchSuccess(json))
    })
    .catch((error) => {
      dispatch(expensiveSearchFailure(error))
    })
  }
}

export const expensiveSearchRequest = (auth, text, id) => {
  return {
    type: 'EXPENSIVE_SEARCH_REQUEST',
    payload: { auth, text, id } 
  }
}

export const expensiveSearchSuccess = (response) => {
  return {
    type: 'EXPENSIVE_SEARCH_SUCCESS',
    payload: { response }
  }
}

export const expensiveSearchFailure = (error) => {
  return {
    type: 'EXPENSIVE_SEARCH_FAILURE',
    payload: { error }
  }
}

export const expensiveUpdateFetch = (auth, props) => {
  return (dispatch) => {
    dispatch(expensiveUpdateRequest(auth, props))

    API.updateExpensive(auth, props)
    .then(json => {
      if(json.hasOwnProperty('error'))
        dispatch(expensiveUpdateFailure(json.message))
      else 
        dispatch(expensiveUpdateSuccess(json))
    })
    .catch((error) => {
      dispatch(expensiveUpdateFailure(error))
    })
  }
}

export const expensiveUpdateRequest = (auth, props) => {
  return {
    type: 'EXPENSIVE_UPDATE_REQUEST',
    payload: { auth, props } 
  }
}

export const expensiveUpdateSuccess = (response) => {
  return {
    type: 'EXPENSIVE_UPDATE_SUCCESS',
    payload: { response }
  }
}

export const expensiveUpdateFailure = (error) => {
  return {
    type: 'EXPENSIVE_UPDATE_FAILURE',
    payload: { error }
  }
}

/**
 * @Services
 **/
export const servicesFetch = (auth, id) => {
  return (dispatch) => {
    dispatch(servicesRequest(auth, id))

    API.getServices(auth, id)
    .then(json => {
      if(json.hasOwnProperty('error'))
        dispatch(servicesFailure(json.message))
      else 
        dispatch(servicesSuccess(json))
    })
    .catch((error) => {
      dispatch(servicesFailure(error))
    })
  }
}

export const servicesRequest = (auth, id) => {
  return {
    type: 'SERVICE_REQUEST',
    payload: auth
  }
}

export const servicesSuccess = (response) => {
  return {
    type: 'SERVICE_SUCCESS',
    payload: { response }
  }
}

export const servicesFailure = (error) => {
  return {
    type: 'SERVICE_FAILURE',
    payload: { error }
  }
}

export const serviceSearchFetch = (auth, text, id) => {
  return (dispatch) => {
    dispatch(serviceSearchRequest(auth, text, id))

    API.getService(auth, text, id)
    .then(json => {
      if(json.hasOwnProperty('error'))
        dispatch(serviceSearchFailure(json.message))
      else 
        dispatch(serviceSearchSuccess(json))
    })
    .catch((error) => {
      dispatch(serviceSearchFailure(error))
    })
  }
}

export const serviceSearchRequest = (auth, text, id) => {
  return {
    type: 'SERVICE_SEARCH_REQUEST',
    payload: { auth, text, id } 
  }
}

export const serviceSearchSuccess = (response) => {
  return {
    type: 'SERVICE_SEARCH_SUCCESS',
    payload: { response }
  }
}

export const serviceSearchFailure = (error) => {
  return {
    type: 'SERVICE_SEARCH_FAILURE',
    payload: { error }
  }
}

export const serviceUpdateFetch = (auth, props, failures) => {
  return (dispatch) => {
    dispatch(serviceUpdateRequest(auth, props, failures))

    API.updateService(auth, props, failures)
    .then(json => {
      if(json.hasOwnProperty('error'))
        dispatch(serviceUpdateFailure(json.message))
      else 
        dispatch(serviceUpdateSuccess(json))
    })
    .catch((error) => {
      dispatch(serviceUpdateFailure(error))
    })
  }
}

export const serviceUpdateRequest = (auth, props, failures) => {
  return {
    type: 'SERVICE_UPDATE_REQUEST',
    payload: { auth, props, failures } 
  }
}

export const serviceUpdateSuccess = (response) => {
  return {
    type: 'SERVICE_UPDATE_SUCCESS',
    payload: { response }
  }
}

export const serviceUpdateFailure = (error) => {
  return {
    type: 'SERVICE_UPDATE_FAILURE',
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
