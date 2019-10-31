// @flow

import React from 'react';
import stylesPopup from './Styles';
import {View, Text, Modal} from 'react-native';

type Props = {
  data: Object,
};

const DisplayCardInfo = ({data}: Props) => {

  return (
    <Modal
      style={stylesPopup.modalStyles}
      animationType="slide"
      transparent={true}
      visible={true} //this.state.visible
    >
      <View style={stylesPopup.popupWrapper}>
        {data.isValid ? (
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