/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {View, StyleSheet} from 'react-native';
import {Provider} from 'react-redux';

import {store} from './configs/createStore';

import CardForm from './components/CardForm';
import DisplayCardInfo from './components/DisplayCardInfo';
import TestList from './components/TestList';
import ProductEdit from './components/ProductEdit';

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
      <Provider store={store}>
        <View style={stylesMainscreen.mainActivity}>
          {/* <TestList />
        <ProductEdit /> */}
          <CardForm updateData={this.updateData} />
          <DisplayCardInfo />
        </View>
      </Provider>
    );
  }
}

const stylesMainscreen = StyleSheet.create({
  mainActivity: {
    flex: 1,
  },
});

export default CardApp;
