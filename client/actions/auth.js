import axios from 'axios';
import { browserHistory } from 'react-router';
import { AUTH_USER, UNAUTH_USER, AUTH_ERROR , ALL_ORGS} from './types';

const ROOT_URL = 'http://localhost:3000';

export function fetchOrgs() {
  console.log("inside fetch ORG ")
  let url = `${ROOT_URL}/api/organizations`;
  return function(dispatch) {
    axios.get(url)
     .then(function(response) {
       console.log('payload in fetchORGS=', response);
       dispatch({ type: ALL_ORGS, payload: response.data });
     })
   }
}


 export function signinUser(formProps) {
    console.log("auth sign IN user " ,formProps)
    const orgId = formProps.organizationId;

   return function(dispatch) {
     axios.post(`${ROOT_URL}/api/users/login`, formProps)
       .then(response => {
         dispatch({type: AUTH_USER})
         localStorage.setItem('token', response.data.token);
         localStorage.setItem('currentUser', response.data.currentUser);
         localStorage.setItem('orgId', orgId)
         browserHistory.push(`/organizations/${orgId}`);
       })
       .catch(() => {
         console.log("in catch err ");
         dispatch(authError('Bad login info'));
       });
   }
 }


export function signupUser(formProps) {
    console.log("inside auth", formProps)
    const orgId = formProps.organizationId;
  return function(dispatch){
    axios.post(`${ROOT_URL}/api/users/signup`, formProps)
    .then(response => {
        dispatch({type: AUTH_USER})
        console.log("HEADERS", response)
        localStorage.setItem('token', response.data.token);
        localStorage.setItem('currentUser', response.data.currentUser);
        localStorage.setItem('orgId', orgId)
        browserHistory.push(`/organizations/${orgId}`);
    })
    .catch(() => {
      console.log("in catch err ");
      dispatch(authError('Bad Signup info'));
    });
  }
}
//
// export function authError(error) {
//   return {
//     type: AUTH_ERROR,
//     payload: error
//   };
// }
//
 export function signoutUser() {

    return function(dispatch){
        localStorage.removeItem('token');
        localStorage.removeItem('currentUser');
        localStorage.removeItem('orgId');
        dispatch({type: UNAUTH_USER });
        browserHistory.push("/");


    }
 }

// export function fetchMessage() {
//   return function(dispatch) {
//     axios.get(ROOT_URL, {headers: { Auth: localStorage.getItem('token')}})
//     .then(response => {
//       console.log(response);
//       dispatch({
//         type: FETCH_MESSAGE,
//         payload: response.data.message
//       });
//     });
//   }
// }
