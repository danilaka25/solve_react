import {GET_INITAL_STATE, ADD_MASSAGE, DELETE_MASSAGE} from '../types/actionTypes';

const initialValue = {
  usersTemp: [],
};

export const authReducer = (state = initialValue, action) => {
  switch (action.type) {
    case GET_INITAL_STATE:
      return {
        ...state,
        ...action.payload,
      };

    case ADD_MASSAGE:
      console.log('ADD_MASSAGE REDUCER');
      return {
        ...state,
        ...action.payload,
      };

    case DELETE_MASSAGE:
      console.log('DELETE_MASSAGE REDUCER');
      return {
        ...state,
        ...action.payload,
      };

    default:
      return state;
  }
};
