// @flow
// logic

import React, {useState, useCallback, useEffect} from 'react';
// import CardForm from './CardForm';
import {useSelector, useDispatch} from 'react-redux';
import {serverSendData} from '../../actions/onSubmit';

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

    serverIsLoading: false,
    serverWasLoaded: false,
  });

  const dispatch = useDispatch();

  const handleUserInput = (inputName: string, inputValue: string) => {
    const name = inputName;
    const value = inputValue;
    setData({...data, [name]: value});
  };

  // const handleSubmit = (event: any) => {
  //   event.preventDefault();
  //   //this.props.serverSendData(this.state);
  // };

  const handleSubmit = useCallback(() => {
    dispatch(serverSendData(data));
    // handleCardSubmit();
  }, [data]);

  // const handleSubmit = useCallback(() => {
  //   dispatch(validateCreditCard(cardData));
  //   handleCardSubmit();
  // }, [cardData]);

  //formIsLoading = data.serverIsLoading;

  //formIsLoading = false;

  // return (
  //   <CardForm
  //     data = {this.props.form}
  //     formIsLoading={this.props.form.serverIsLoading}
  //     handleUserInput={this.handleUserInput}
  //     handleSubmit={this.handleSubmit}
  //   />
  // );

  return {
    data,
    handleUserInput,
    handleSubmit,
  };
};

// const FormReduxContainer = connect(
//   state => {
//     return {
//       form: state.formReducer,
//     };
//   },
//   {
//     serverSendData,
//   },
// )(useCardForm);

// export default FormReduxContainer;
