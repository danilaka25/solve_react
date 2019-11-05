// @flow
// logic

import React, {useState, useCallback, useEffect} from 'react';
// import CardForm from './CardForm';
import {useSelector, useDispatch} from 'react-redux';
import {serverSendData} from '../../actions/onSubmit';


type State = {
  cardNunmber: string,
  cardExpirationDate: string,
  cvv: string,
  firstName: string,
  lastName: string,
  secretQuestion: string,
  secretAnswer: string,

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

export const useCardForm = () => {
  const [data, setData] = useState({
    cardNunmber: '',
    cardExpirationDate: '',
    cvv: '',
    firstName: '',
    lastName: '',
    secretQuestion: '',
    secretAnswer: '',

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

  });

  const dispatch = useDispatch();

  const handleUserInput = (inputName: string, inputValue: string) => {
    const name = inputName;
    const value = inputValue;
    setData({...data, [name]: value});
  };

  const handleSubmit = useCallback(() => {
    dispatch(serverSendData(data));
  }, [data]);

  return {
    data,
    handleUserInput,
    handleSubmit,
  };
};
