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

class TopBarChatsItem extends React.Component {
  render() {
    //console.log(this.state);
    return (
      <View
        style={TopBarStyles.listItem}>
        <Text>Name</Text>
        <Text>massage</Text>
      </View>
    );
  }
}


const TopBarStyles = StyleSheet.create({
  listItem: {
    //flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingLeft: 10,
    paddingRight: 10,

  },
 
});

export default TopBarChatsItem;
