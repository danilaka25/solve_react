/* eslint-disable */
// @flow

import React, {Component} from 'react';
import PropTypes from 'prop-types';

import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Modal,
  Alert,
  Dimensions,
} from 'react-native';

type Props = {
  firstName: string,
  lastName: string,
  cardNunmber: string,
  paySystem: string,
  formValid: string,
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
    }, 2000);
    this.setState({
      visible: true,
      timerId,
      startAt: Date.now(),
    });
  };

  componentDidUpdate = (prevProps: Props) => {
    if (
      prevProps.firstName === this.props.firstName &&
      prevProps.lastName === this.props.lastName &&
      prevProps.cardNunmber === this.props.cardNunmber
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
    //console.log(this.props.formValid);

    // if (!this.state.visible) {
    //   return null;
    // }

    const isValid = this.props.formValid === 'true';

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
              <Text> First Name: {this.props.firstName} </Text>
              <Text> Last Name: {this.props.lastName} </Text>
              <Text>
                {' '}
                Card Nunmber: **** **** ****
                {this.props.cardNunmber.substr(
                  this.props.cardNunmber.length - 4,
                )}
              </Text>
              <Text> Pay System: {this.props.paySystem} </Text>
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
  },

  okBg: {
    backgroundColor: '#82e81c',
    padding: 30,
  },
});

//defaultProps пишем полюбому даже с flow

export default DisplayCardInfo;
