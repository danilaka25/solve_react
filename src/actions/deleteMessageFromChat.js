import {DELETE_MESSAGE} from '../types/actionTypes';

export const deleteMessageFromChat = data => {
  return {type: DELETE_MESSAGE, payload: data};
};
