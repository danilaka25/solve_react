import {
  SERVER_HAS_ERRORED,
  SERVER_IS_LOADING,
  SERVER_RESPONSE_SUCCESS,
  AUTH_USER,
} from '../types/actionTypes';

const initialValue = {
  phone: '',
  password: '',
  serverIsLoading: false,
  serverWasLoaded: false,
};

export const authReducer = (state = initialValue, action) => {
  console.log('we are in reducer AUTH');
  switch (action.type) {
    case SERVER_IS_LOADING:
      //console.log('SERVER_IS_LOADING');
      return {
        ...state,
        serverIsLoading: true,
        //data: action.payload,
      };

    case SERVER_HAS_ERRORED:
      //console.log('SERVER_HAS_ERRORED');
      return {
        ...state,
        serverIsLoading: false,
        serverWasLoaded: true,
        //err: action.err,
      };

    case SERVER_RESPONSE_SUCCESS:
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

  // switch (action.type) {

  //   case AUTH_ON_SERVER:
  //     //console.log('SERVER_RESPONSE_SUCCESS');
  //     return {
  //       ...state,
  //       ...action.payload,
  //     };

  //   default:
  //     return state;
  // }
};
