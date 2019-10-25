// @flow

import {cardValidationService} from '../services/cardValidationService';
import {
  SERVER_HAS_ERRORED,
  SERVER_IS_LOADING,
  SERVER_RESPONSE_SUCCESS,
} from '../types/actionTypes';

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

export const serverSendData = (data: State) => (
  dispatch: (type: string, payload?: State) => {},
  getState: void,
) => {
  //console.log('we are in action/validate');
  dispatch({type: SERVER_IS_LOADING});

  cardValidationService
    .validateCreditCard(data)
    // cardValidationService(data)
    .then(data => {
      dispatch({type: SERVER_RESPONSE_SUCCESS, payload: data});
    })
    .catch(err => dispatch({type: SERVER_HAS_ERRORED, err}));
};
