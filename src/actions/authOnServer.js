//import {cardValidationService} from '../services/cardValidationService';

//import {ReturnDataFromServer} from '../services/returnDataFromServer';

import returnDataFromServer from '../services/returnDataFromServer';



import {
  SERVER_HAS_ERRORED,
  SERVER_IS_LOADING,
  SERVER_RESPONSE_SUCCESS,
  AUTH_USER,
} from '../types/actionTypes';



export const authOnServer = () => {

  console.log('we are in Action in AUTH', returnDataFromServer);

  return {
    type: AUTH_USER,
    payload: returnDataFromServer.returnDataFromServer
  }
}


// export const authOnServer = (data) => (dispatch) => {
  
//   console.log('we are in Action in AUTH');
  
//   dispatch({type: AUTH_USER, payload: data})

// }
