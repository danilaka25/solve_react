// @flow

import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Provider} from 'react-redux';
import {store} from './configs/createStore';
import CardForm from './components/CardForm';
import DisplayCardInfo from './components/DisplayCardInfo';
//import TestList from './components/TestList';
//import ProductEdit from './components/ProductEdit';

type Props = {};

class CardApp extends React.Component<Props> {
  render() {
    return (
      <Provider store={store}>
        <View style={stylesMainscreen.mainActivity}>
          {/* <TestList /> */}
          {/* <ProductEdit /> */}
          <CardForm />
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
