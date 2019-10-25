// @flow

import React from 'react';
//import PropTypes from 'prop-types';
import {connect} from 'react-redux';
//import {formReducer} from '../reducers/formReducer';

import {View, Text, Modal, StyleSheet} from 'react-native';

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

class DisplayCardInfo extends React.Component<Props, State> {
  //static whyDidYouRender = true;

  static defaultProps = {
    cardNunmber: '0000 0000 0000 0000',
    firstName: 'First Name',
    lastName: 'Last Name',
  };

  state = {
    visible: false,
    timerId: undefined,
    startAt: undefined,
  };

  startTimer = () => {
    const timerId = setTimeout(() => {
      // console.log('clear')
      this.setState({
        visible: false,
        timerId: undefined,
        startAt: undefined,
      });
    }, 1500);
    this.setState({
      visible: true,
      timerId,
      startAt: Date.now(),
    });
  };

  componentDidUpdate = (prevProps: Props) => {
    console.log('prevProps', prevProps.formData);
    if (
      prevProps.formData.fields.firstName ===
        this.props.formData.fields.firstName &&
      prevProps.formData.fields.lastName ===
        this.props.formData.fields.lastName &&
      prevProps.formData.fields.cardNunmber ===
        this.props.formData.fields.cardNunmber &&
      prevProps.formData.fields.cardExpirationDate ===
        this.props.formData.fields.cardExpirationDate &&
      prevProps.formData.fields.cvv === this.props.formData.fields.cvv &&
      prevProps.formData.fields.secretQuestion ===
        this.props.formData.fields.secretQuestion &&
      prevProps.formData.fields.secretAnswer ===
        this.props.formData.fields.secretAnswer
    ) {
      return;
    }

    if (!this.state.visible) {
      return this.startTimer();
    }
    // Timer is already rendered. Reset prev timer + start new timer for 5 sec
    // console.log("update timer");
    const {timerId} = this.state;
    clearTimeout(timerId);
    this.startTimer();
  };

  render() {
    console.log('formValid', this.props.formData.formValid);

    if (!this.state.visible) {
      return null;
    }

    const isValid = this.props.formData.formValid;

    return (
      <Modal
        style={stylesPopup.modalStyles}
        animationType="slide"
        transparent={true}
        visible={this.state.visible} //this.state.visible
      >
        <View style={stylesPopup.popupWrapper}>
          {isValid ? (
            <View style={stylesPopup.okBg}>
              <Text> Result </Text>
              <Text> First Name: {this.props.formData.fields.firstName} </Text>
              <Text> Last Name: {this.props.formData.fields.lastName} </Text>
              <Text>
                {' '}
                Card Nunmber: **** **** ****
                {this.props.formData.fields.cardNunmber.substr(
                  this.props.formData.fields.cardNunmber.length - 4,
                )}
              </Text>
              <Text> Pay System: {this.props.formData.paySystem} </Text>
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
  }
}

const stylesPopup = StyleSheet.create({
  modalStyles: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 2,
  },

  popupWrapper: {
    alignItems: 'center',
    flex: 1,

    justifyContent: 'center',
    // backgroundColor: '#999999',
  },

  errorBg: {
    backgroundColor: '#e8301c',
    padding: 30,
    fontSize: 30,
  },

  okBg: {
    backgroundColor: '#82e81c',
    padding: 30,
  },
});

//defaultProps пишем полюбому даже с flow

const DisplayCardInfoContainer = connect(state => {
  return {
    formData: state.formReducer,
  };
})(DisplayCardInfo);

export default DisplayCardInfoContainer;

// export default DisplayCardInfo;
