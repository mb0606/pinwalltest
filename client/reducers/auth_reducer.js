import {
  AUTH_USER,
  UNAUTH_USER,
  AUTH_ERROR,
  ALL_ORGS

} from '../actions/types'

const INITIAL_STATE = { authenticated:null, error:'', allOrgs : [] };

export default function(state = INITIAL_STATE , action) {
  switch(action.type){
    case AUTH_USER:
      return { ...state, error: '', authenticated: true };
    case ALL_ORGS:
      return { ...state, allOrgs: action.payload };
    case UNAUTH_USER:
      return { ...state, error: '', authenticated: false};
    default:
      return state;
    }
}
