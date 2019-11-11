import React from 'react';
import {
  ActivityIndicator,
  AsyncStorage,
  StatusBar,
  StyleSheet,
  View,
  Button,
  TextInput,
  TouchableHighlight,
  Text,
} from 'react-native';

import TopBarChatsItem from '../TopBar/TopBarChatsItem';

import {withNavigation} from 'react-navigation';

const ChatsItem = ({props}) => {
  //console.log(this.state);
  return (
    <>
      <TopBarChatsItem />
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          flexDirection: 'row',
          alignContent: 'stretch',
          justifyContent: 'center',
        }}>
        <Text>ChatsItem</Text>
      </View>
    </>
  );
};

export default ChatsItem;
