import axios from 'axios';

export const CREATE_USER = 'CREATE_USER';

export const FETCH_WEIGHT = 'FETCH_WEIGHT';
export const ADD_WEIGHT = 'ADD_WEIGHT';
export const FETCH_MEALS = 'FETCH_MEALS';
export const ADD_MEAL = 'ADD_MEAL';
export const FETCH_MACROS = 'FETCH_MACROS';
export const ADD_MACRO = 'ADD_MACRO';

export function createUser(props) {
  const url = '/users/';
  const request = axios.post(url, props);

  return {
    type: CREATE_USER,
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
