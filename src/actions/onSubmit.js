/* eslint-disable */

import {onServerValidation} from '../services/onServerValidation';

export const serverSendData = data => (dispatch, getState) => {
  
  
  //console.log('we are in action/validate');
  dispatch({type: 'SERVER_IS_LOADING'});

   onServerValidation(data)
    .then((data) => {
      dispatch({type: 'SERVER_RESPONSE_SUCCESS', payload: data});
    })
    //.then(console.log(data.fields))

    .catch((err) => dispatch({type: 'SERVER_HAS_ERRORED', err}));
};

export const chekCard = paySystem => {
  return {
    type: 'CHEK_CARD',
    payload: {
      paySystem,
    },
  };
};

// export const onSubmit = (
//   firstName,
//   lastName,
//   cardNunmber,
//   formValid,
//   // paySystem,
// ) => {
//   // validation

//   return {
//     type: 'ON_SUBMIT',
//     payload: {
//       firstName,
//       lastName,
//       cardNunmber,
//       formValid,
//       // paySystem,
//     },
//   };
// };


