import {
  ADD_MASSAGE,
} from '../types/actionTypes';

export const addMassageToChat = (data) => (
  dispatch,
) => {
  console.log('ADD_MASSAGE ACTION' , data);
  dispatch({type: ADD_MASSAGE, payload: data});
};