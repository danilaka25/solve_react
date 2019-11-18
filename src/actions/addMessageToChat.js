import {ADD_MESSAGE} from '../types/actionTypes';

export const addMessageToChat = data => {
  return {type: ADD_MESSAGE, payload: data};
};
