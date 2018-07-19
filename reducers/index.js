import {
  combineReducers
} from 'redux';
import auth from './auth'
import navigation from './navigation';
import vehicles from './vehicles';
import catalogs from './catalogs';

const reducer = combineReducers({
  auth,
  navigation,
  vehicles,
  catalogs
})

export default reducer