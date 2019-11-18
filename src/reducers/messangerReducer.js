import {
  GET_INITAL_STATE,
  ADD_MESSAGE,
  DELETE_MESSAGE,
} from '../types/actionTypes';

const initialValue = {
  usersTemp: [],
};

export const messangerReducer = (state = initialValue, action) => {
  switch (action.type) {
    case GET_INITAL_STATE:
      return {
        ...state,
        ...action.payload,
      };

    case ADD_MESSAGE:
      return {
        ...state,
        ...action.payload,
      };

    case DELETE_MESSAGE:
      return {
        ...state,
        ...action.payload,
      };

    default:
      return state;
  }
};
