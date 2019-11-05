// @flow

import React from 'react';
import stylesPopup from './Styles';
import {View, Text, Modal} from 'react-native';
import {connect} from 'react-redux';
import {useDisplayCardInfo} from './useDisplayCardInfo';

// type Props = {
//   data: Object,
// };

const DisplayCardInfo = form => {
  
  const {
    cardNunmber,
    cardExpirationDate,
    cvv,
    firstName,
    lastName,
    secretQuestion,
    secretAnswer,
    formValid,
  } = form.form;

  const {visible} = useDisplayCardInfo(
    cardNunmber,
    cardExpirationDate,
    cvv,
    firstName,
    lastName,
    secretQuestion,
    secretAnswer,
    formValid,
  );

  ///console.log('++++++++form in component serverIsLoading++++++++', form.form);

  return (
    <Modal
      style={stylesPopup.modalStyles}
      animationType="slide"
      transparent={true}
      visible={visible && form.form.serverWasLoaded} //this.state.visible
    >
      <View style={stylesPopup.popupWrapper}>
        {formValid ? (
          <View style={stylesPopup.okBg}>
            <Text> Result </Text>
            <Text> First Name: {form.form.firstName} </Text>
            <Text> Last Name: {form.form.lastName} </Text>
            <Text>
              {' '}
              Card Nunmber: **** **** ****
              {form.form.cardNunmber.substr(form.form.cardNunmber.length - 4)}
            </Text>
            <Text> Pay System: {form.form.paySystem} </Text>
          </View>
        ) : (
          <View style={stylesPopup.errorBg}>
            <Text> Result </Text>
            <Text> Error </Text>
          </View>
        )}
      </View>
    </Modal>
  );
};

const DisplayCardInfoRedux = connect(state => {
  return {
    form: state.formReducer,
  };
})(DisplayCardInfo);

export default DisplayCardInfoRedux;
