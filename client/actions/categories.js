import axios              from 'axios';
import { browserHistory } from 'react-router';
import { CATEGORIES }     from './types'

const ROOT_URL = 'http://localhost:3000';


export function fetchCategories(orgId) {
  console.log("inside Cat line 9::")
  let url = `${ROOT_URL}/api/organizations/1/categories`;
    return function(dispatch) {
      console.log("inside thunk")
      axios.get(url).then(function(response) {
        console.log('payload in retrieveCategories...', response);
        dispatch( {type:CATEGORIES, payload: response.data} );
      });
    }
}
