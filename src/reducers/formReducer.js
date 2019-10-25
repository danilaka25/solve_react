// @flow

// import {
//   SERVER_HAS_ERRORED,
//   SERVER_IS_LOADING,
//   SERVER_RESPONSE_SUCCESS,
// } from '../types/actionTypes';
// import { RequestStatus } from "../utils/RequestStatus";

type State = {
  fields: {
    cardNunmber: string,
    cardExpirationDate: string,
    cvv: string,
    firstName: string,
    lastName: string,
    secretQuestion: string,
    secretAnswer: string,
  },

  formErrors: {
    cardNunmber: boolean,
    cardExpirationDate: boolean,
    cvv: boolean,
    firstName: boolean,
    lastName: boolean,
    secretQuestion: boolean,
    secretAnswer: boolean,
  },

  formValid: boolean,
  paySystem: string,

  serverIsLoading: boolean,
  serverWasLoaded: boolean,
};

const initialValue = {
  fields: {
    cardNunmber: '',
    cardExpirationDate: '',
    cvv: '',
    firstName: '',
    lastName: '',
    secretQuestion: '',
    secretAnswer: '',
  },

  formErrors: {
    cardNunmber: true,
    cardExpirationDate: true,
    cvv: true,
    firstName: true,
    lastName: true,
    secretQuestion: true,
    secretAnswer: true,
  },

  formValid: false,
  paySystem: '--',

  serverIsLoading: false,
  serverWasLoaded: false,
};

export const formReducer = (state: State = initialValue, action: Object) => {
  switch (action.type) {
    case 'SERVER_IS_LOADING':
      //console.log('SERVER_IS_LOADING');
      return {
        ...state,
        serverIsLoading: true,
        //data: action.payload,
      };

    case 'SERVER_HAS_ERRORED':
      //console.log('SERVER_HAS_ERRORED');
      return {
        ...state,
        serverIsLoading: false,
        serverWasLoaded: true,
        err: action.err,
      };

    case 'SERVER_RESPONSE_SUCCESS':
      //console.log('SERVER_RESPONSE_SUCCESS');
      return {
        ...state,
        serverIsLoading: false,
        serverWasLoaded: true,
        ...action.payload,
      };

    default:
      return state;
  }
};
