/* eslint-disable */

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

  formValid: false,
  paySystem: 'none',

  serverIsLoading: false,
  serverWasLoaded: false,
};

export const formReducer = (state = initialValue, action) => {
  switch (action.type) {

    case 'CHEK_CARD':
      return {
        ...state,
        ...action.payload,
      };

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
        data: action.payload,
      };

    default:
      return state;
  }
};
