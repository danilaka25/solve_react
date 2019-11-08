//import {cardValidationService} from '../services/cardValidationService';

import {userValidationOnServer} from '../services/userValidationOnServer';
import {
  SERVER_HAS_ERRORED,
  SERVER_IS_LOADING,
  SERVER_RESPONSE_SUCCESS,
} from '../types/actionTypes';

// export const authOnServer = (data) =>  {

//    console.log('we are in action/validate in AUTH', data);

//    dispatch({type: SERVER_IS_LOADING, payload: data}),
//    getState

// };

export const authOnServer = data => {
  // validation

  console.log('we are in action/validate in AUTH');

  return {
    type: 'AUTH_USER',
    payload: {
      data,
    },
  };

  UserValidationOnServer.validateUser(data)
    // cardValidationService(data)
    .then(data => {
      dispatch({type: SERVER_RESPONSE_SUCCESS, payload: data});
    })
    .catch(err => dispatch({type: SERVER_HAS_ERRORED, err}));
};

// export const authOnServer = (data) => (

//   dispatch,
//   getState

// ) => {
//    console.log('we are in action/validate in AUTH');
//   dispatch({type: SERVER_IS_LOADING, payload: data}),
//   getState

//   // UserValidationOnServer
//   //   .validateUser(data)
//   //   // cardValidationService(data)
//   //   .then(data => {
//   //     dispatch({type: SERVER_RESPONSE_SUCCESS, payload: data});
//   //   })
//   //   .catch(err => dispatch({type: SERVER_HAS_ERRORED, err}));
// };
