import {
  combineReducers
} from 'redux';
import auth from './auth'
import navigation from './navigation';
import vehicles from './vehicles';
import catalogs from './catalogs';
import accessorys from './accessorys';
import expensives from './expensives';
import documents from './documents';
import services from './services';

const reducer = combineReducers({
  auth,
  navigation,
  vehicles,
  catalogs,
  accessorys,
  expensives,
  documents,
  services
})

export default reducer