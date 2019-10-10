/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {View, StyleSheet} from 'react-native';

import CardForm from './components/CardForm';
import DisplayCardInfo from './components/DisplayCardInfo';

type Props = {
  updateData: (
    firstName: string,
    lastName: string,
    cardNunmber: string,
    formValid: string,
    paySystem: string,
  ) => void,
};

type State = {
  firstName: string,
  lastName: string,
  cardNunmber: string,
  paySystem: string,
  formValid: string,
};

class CardApp extends Component<Props, State> {
  static defaultProps = {
    cardNunmber: '0000 0000 0000 0000',
    firstName: 'First Name',
    lastName: 'Last Name',
  };

  state = {};

  updateData = (
    firstName: string,
    lastName: string,
    cardNunmber: string,
    formValid: string,
    paySystem: string,
  ) => {
    //get
    this.setState({
      firstName: firstName,
      lastName: lastName,
      cardNunmber: cardNunmber,
      formValid: formValid,
      paySystem: paySystem,
    });
  };

  render() {
    return (
      <View style={stylesMainscreen.mainActivity}>
        <CardForm updateData={this.updateData} />
        <DisplayCardInfo
          firstName={this.state.firstName}
          lastName={this.state.lastName}
          cardNunmber={this.state.cardNunmber}
          formValid={this.state.formValid}
          paySystem={this.state.paySystem}
        />
      </View>
    );
  }
}

const stylesMainscreen = StyleSheet.create({
  mainActivity: {
    flex: 1,
  },
});

export default CardApp;
