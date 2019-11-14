//import {cardValidationService} from '../services/cardValidationService';

//import {ReturnDataFromServer} from '../services/returnDataFromServer';

import returnDataFromServer from '../services/returnDataFromServer';

import {
  SERVER_HAS_ERRORED,
  SERVER_IS_LOADING,
  SERVER_RESPONSE_SUCCESS,
  AUTH_USER,
} from '../types/actionTypes';



export const authOnServer = () => (
  dispatch,
) => {
  console.log('INITAL ACTION' );
  dispatch({type: "AUTH_USER", payload: returnDataFromServer.returnDataFromServer});
};



