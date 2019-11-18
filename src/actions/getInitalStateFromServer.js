import getUsersMessagesFromServer from '../services/getUsersMessagesFromServer';
import {GET_INITAL_STATE} from '../types/actionTypes';

export const getInitalStateFromServer = () => {
  return {
    type: GET_INITAL_STATE,
    payload: getUsersMessagesFromServer.getUsersMessagesFromServer,
  };
};
