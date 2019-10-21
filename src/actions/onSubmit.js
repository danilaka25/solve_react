/* eslint-disable */

import {onServerValidation} from '../services/onServerValidation'

import {
  POST_USER_FAILURE,
  POST_USER_REQUEST,
  POST_USER_SUCCESS,
} from '../types/actionTypes'



export const onSubmit = (
  firstName,
  lastName,
  cardNunmber,
  formValid,
  // paySystem,
) => {
  // validation

  return {
    type: 'ON_SUBMIT',
    payload: {
      firstName,
      lastName,
      cardNunmber,
      formValid,
      // paySystem,
    },
  };
};

export const chekCard = (
  paySystem,
) => {
  // validation

  return {
    type: 'CHEK_CARD',
    payload: {
      paySystem,
    },
  };
};

// payload, err(or), meta
