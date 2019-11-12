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
  FlatList,
  TouchableOpacity,
  Image
} from 'react-native';


function UserAvatar (props) {
   
    return (
    //   <Image
    //     source={{uri: item.img}}
    //     style={{ width: 30, height: 30 }}
    //   />
    <Text>{props.firstname}</Text>
    );
  
}

export default UserAvatar;