import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View, TouchableOpacity
} from 'react-native';

import { StackNavigator } from  'react-navigation';
import IOSIcon from "react-native-vector-icons/Ionicons";
import MainActivity from "../MainActivity/MainActivity";
import ChatsList from "../ChatsList/ChatsList";

const stackNav = StackNavigator({
  Main : {
    screen: MainActivity,
    navigationOptions: ({navigation}) => ({
      title: "MainActivity",
      headerLeft:(<TouchableOpacity onPress={() => navigation.navigate("DrawerOpen")}>
                    <IOSIcon name="ios-menu" size={30} />
                  </TouchableOpacity>
      ),
      headerStyle: { paddingRight: 10, paddingLeft: 15 }
    })
  },
  Detail: {
    screen: ChatsList,
    navigationOptions: ({navigation}) => ({
      title: "ChatsList",
    })     
  }
});

export default stackNav;