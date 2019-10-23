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

      formErrors: {
        cardNunmber: true,
        cardExpirationDate: true,
        cvv: true,
        firstName:  true,
        lastName: true,
        secretQuestion:  true,
        secretAnswer:  true,
      },

      formValid: false,
      paySystem: '--',

  serverIsLoading: false,
  serverWasLoaded: false,

  // cardExpirationDate: '',
  // firstName: '',
  // lastName: '',
};

export const formReducer = (state = initialValue, action) => {
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

    // case 'CHEK_CARD':
    //   return {
    //     ...state,
    //     ...action.payload,
    //   };

    default:
      return state;
  }
};
