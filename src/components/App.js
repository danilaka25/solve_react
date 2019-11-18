import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {Provider} from 'react-redux';
import {store} from '../configs/createStore';
import AuthComponent from './Auth/AuthComponent';
import MainActivity from './MainActivity/MainActivity';
import ChatsItem from './Chats/ChatsItem';
import ChatsList from './Chats/ChatsList';

const AppNavigator = createStackNavigator(
  {
    AuthComponent: {
      screen: AuthComponent,
      navigationOptions: {
        header: null,
      },
    },

    ChatsList: {
      screen: ChatsList,
      navigationOptions: {
        header: null,
      },
    },

    ChatsItem: {
      screen: ChatsItem,
      navigationOptions: {
        header: null,
      },
    },

    MainActivity: {
      screen: MainActivity,
      navigationOptions: {
        header: null,
      },
    },
  },
  {
    //initialRouteName: 'AuthComponent',
    initialRouteName: 'MainActivity',
  },
);

const FlexibleFormContainer = createAppContainer(AppNavigator);

export default () => (
  <Provider store={store}>
    <FlexibleFormContainer />
  </Provider>
);
