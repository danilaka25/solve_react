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
  Image,
  TouchableOpacity
} from 'react-native';

import ChatsList from '../Chats/ChatsList';

import {withNavigation} from 'react-navigation';

import {createStackNavigator} from 'react-navigation-stack';
import { StackNavigator } from 'react-navigation';

 

 



class TopBarChatsItem extends React.Component {

static navigationOptions = {
    //To hide the ActionBar/NavigationBar
    title: 'Home',
      header: null //this will hide the header
};


  render() {
    console.log(this.props.navigation);

    const navigate = this.props.navigation;



    return (
         
      <View style={TopBarStyles.row}>
      
      {/* <Icon name="rocket" size={30} color="#900" />; */}
       <TouchableOpacity
              onPress={() => navigate('MainActivity')}
              >
              <Image
                    source={require('../../assets/icons/back.png')}
                    style={{height: 35, width: 35}}
                  />

             

        </TouchableOpacity>   

        <Text style={TopBarStyles.userName}>{this.props.name}</Text>   
      

        <Image source={{uri: this.props.avatar}} style={{width: 45, height: 45, borderRadius: 45 / 2}} />

      </View>
    );
  }
}

const TopBarStyles = StyleSheet.create({
  userName: {
      color: '#ffffff',
      fontSize: 20

  }  ,
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 5,
    paddingBottom: 5,
    backgroundColor: '#1488db',
    marginTop: 50,
  },
});

export default TopBarChatsItem;
