/* eslint-disable */

const initialValue = {
  firstName: '',
  lastName: '',
  cardNunmber: '',
  formValid: 'false',
  paySystem: 'i dont know',
};

export const formReducer = (state = initialValue, action) => {
  switch (action.type) {
    case 'ON_SUBMIT':
      return {
        ...state,
        ...action.payload,
      };

    default:
      return state;
  }
};
