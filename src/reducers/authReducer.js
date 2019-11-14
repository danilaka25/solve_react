import AUTH_USER from '../types/actionTypes';

const initialValue = {
  usersTemp: [],
};

export const authReducer = (state = initialValue, action) => {
  console.log('+++++++++++++REDUCER +++++++++++++');
  switch (action.type) {
    case 'AUTH_USER':
      return {
        ...state,
        ...action.payload,
      }


    case 'ADD_MASSAGE':
      console.log('ADD_MASSAGE REDUCER' );
      return {
        ...state,
        ...action.payload,
      }     

    default:
      return state;
  }
};
