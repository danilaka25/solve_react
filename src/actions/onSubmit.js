// @flow

import {onServerValidation} from '../services/onServerValidation';

export const serverSendData = (data: Object) => (
  dispatch: void,
  getState: void,
) => {
  //console.log('we are in action/validate');
  dispatch({type: 'SERVER_IS_LOADING'});

  onServerValidation(data)
    .then(data => {
      dispatch({type: 'SERVER_RESPONSE_SUCCESS', payload: data});
    })
    .catch(err => dispatch({type: 'SERVER_HAS_ERRORED', err}));
};
