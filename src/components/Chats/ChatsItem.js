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

import { withNavigation } from 'react-navigation';


class ChatsItem extends React.Component {
  render() {
    //console.log(this.state);
    return (
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
    );
  }
}

export default ChatsItem;
