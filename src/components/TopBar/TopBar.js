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

class TopBar extends React.Component {
  render() {
    //console.log(this.state);
    return (
      <View
        style={{
        //   flex: 1,
          alignItems: 'center',
          flexDirection: 'row',
          alignContent: 'stretch',
          justifyContent: 'center',
          height: 50,
          backgroundColor: 'grey',
        }}>
        <Text>TopBar</Text>
      </View>
    );
  }
}

export default TopBar;
