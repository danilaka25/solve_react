// @flow

import React from 'react';
//import PropTypes from 'prop-types';
import {connect} from 'react-redux';
//import {formReducer} from '../reducers/formReducer';
import {stylesPopup} from '../styles/stylesheet.js';

import {View, Text, Modal} from 'react-native';

type Props = {
  firstName: string,
  lastName: string,
  cardNunmber: string,
  paySystem: string,
  formValid: boolean,
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
    }, 4000);
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
        this.props.formData.fields.cardNunmber
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

//defaultProps пишем полюбому даже с flow

const DisplayCardInfoContainer = connect(state => {
  return {
    formData: state.formReducer,
  };
})(DisplayCardInfo);

export default DisplayCardInfoContainer;

// export default DisplayCardInfo;
