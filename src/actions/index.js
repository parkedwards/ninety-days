import axios from 'axios';
import * as types from './actionTypes';


export function createUser(props) {
  const url = '/users/';
  const request = axios.post(url, props);

  return {
    type: types.CREATE_USER,
    payload: request,
  };
}



// export function fetchWeight() {
//   const url = `/weight`; // figure out how to store and access user sessions
//   const request = axios.get(url);

//   return {
//     type: FETCH_WEIGHT,
//     payload: request,
//   };
// }
