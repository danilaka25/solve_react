// @flow
//logic

import React, {useState, useEffect, useCallback} from 'react';
//import DisplayCardInfo from './DisplayCardInfo';
import {connect} from 'react-redux';

// type Props = {
//   cardNunmber: string,
//   cardExpirationDate: string,
//   cvv: string,
//   firstName: string,
//   lastName: string,
//   secretQuestion: string,
//   secretAnswer: string,
//   formValid: boolean,
// };

// type State = {
//   visible: boolean,
//   timerId?: TimeoutID,
//   startAt?: number,
// };

export const useDisplayCardInfo = (
  cardNunmber: string,
  cardExpirationDate: string,
  cvv: string,
  firstName: string,
  lastName: string,
  secretQuestion: string,
  secretAnswer: string,
  formValid: boolean,
) => {
  const [visible, setVisible] = useState(false);
  const [startAt, setStartAt] = useState(undefined);

  const startTimer = () => {
    let timerId = setTimeout(() => {
      // console.log('clear')
      setVisible(false);
      setStartAt(setStartAt);
    }, 1500);

    setVisible(true);
    setStartAt(Date.now());
  };

  useEffect(() => {
    if (!visible) {
      return startTimer();
    }
    clearTimeout(timerId);
    // startTimer();
  }, [
    cardNunmber,
    cardExpirationDate,
    cvv,
    firstName,
    lastName,
    secretQuestion,
    secretAnswer,
    formValid,
  ]);

  return {visible};
};
