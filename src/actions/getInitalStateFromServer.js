import returnDataFromServer from '../services/returnDataFromServer';
import {
  GET_INITAL_STATE,
} from '../types/actionTypes';



export const getInitalStateFromServer = () => (
  dispatch,
) => {
  console.log('INITAL ACTION' );
  dispatch({type: GET_INITAL_STATE, payload: returnDataFromServer.returnDataFromServer});
};



