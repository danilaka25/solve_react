// @flow

import React from 'react';
import stylesPopup from './Styles';
import {View, Text, Modal} from 'react-native';

type Props = {
  cardNunmber: string,
  cardExpirationDate: string,
  cvv: string,
  firstName: string,
  lastName: string,
  secretQuestion: string,
  secretAnswer: string,
  formData: Object,
};

type State = {
  visible: boolean,
  timerId?: TimeoutID,
  startAt?: number,
};

const DisplayCardInfo = ({data, isValid, visible}) => {
  
  // console.log('formValid', this.props.formData.formValid);

  // if (!this.state.visible) {
  //   return null;
  // }

  // const isValid = this.props.formData.formValid;

  return (
    <Modal
      style={stylesPopup.modalStyles}
      animationType="slide"
      transparent={true}
      visible={visible} //this.state.visible
    >
      <View style={stylesPopup.popupWrapper}>
        {isValid ? (
          <View style={stylesPopup.okBg}>
            <Text> Result </Text>
            <Text> First Name: {data.fields.firstName} </Text>
            <Text> Last Name: {data.fields.lastName} </Text>
            <Text>
              {' '}
              Card Nunmber: **** **** ****
              {data.fields.cardNunmber.substr(
                data.fields.cardNunmber.length - 4,
              )}
            </Text>
            <Text> Pay System: {data.paySystem} </Text>
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


export default DisplayCardInfo;