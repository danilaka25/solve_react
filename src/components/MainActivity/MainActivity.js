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
import TopBar from '../TopBar/TopBar';
import ChatsList from '../Chats/ChatsList';


//import { withNavigation } from 'react-navigation';
import {createAppContainer} from 'react-navigation';
//import {createDrawerNavigator} from 'react-navigation-drawer';
import {createStackNavigator} from 'react-navigation-stack';

import SlideMenu from '../UserSettings/SlideMenu';




class MainActivity extends React.Component {
  render() {
    //console.log(this.state);
    return (
      <View
        style={{
          flex: 1,
          //alignItems: 'center',
          justifyContent: 'center',
          
          alignContent: 'stretch',
        }}>
        <TopBar />
        <ChatsList />
      </View>
    );
  }
}

export default MainActivity;
