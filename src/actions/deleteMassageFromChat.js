import {
  DELETE_MASSAGE,
} from '../types/actionTypes';

export const deleteMassageFromChat = (data, id) => (
  dispatch,
) => {
  console.log('DELETE_MASSAGE ACTION' , data);
  dispatch({type: DELETE_MASSAGE, payload: data});
};