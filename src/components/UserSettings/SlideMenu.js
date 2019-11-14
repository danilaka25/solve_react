/*Example of Navigation Drawer with Sectioned Menu*/
 

import React from 'react';
import { NavigationActions } from 'react-navigation';
import { ScrollView, Text, View, StyleSheet, SafeAreaView, Button, Image } from 'react-native';

import { GoogleSignin, statusCodes } from '@react-native-community/google-signin';

 
class SlideMenu extends React.Component {


 constructor(props) {
    super(props);

    this.state = {
      firstName: '',
      lastName: '',
      email: '',
    };
  } 


signOut = async () => {
  try {
    await GoogleSignin.revokeAccess();
    await GoogleSignin.signOut();
    console.log("LOG OUT")
     
     
     navigate('AuthComponent')
  } catch (error) {
    console.error(error);
  }
};


  componentDidMount() {
     this.getCurrentUserInfo();
  }

getCurrentUserInfo = async () => {
  try {
    const userInfo = await GoogleSignin.signInSilently();
    this.setState({ 
      name: userInfo.user.name,
      photo: userInfo.user.photo,
      email: userInfo.user.email,
     });
    //console.log(userInfo)
  } catch (error) {
    if (error.code === statusCodes.SIGN_IN_REQUIRED) {

     

    } else {
      // some other error
    }
  }
}

 render() {
  return (
    <SafeAreaView style={{flex: 1, zIndex: 999}}>
      <ScrollView>
        <View
          style={{
             height: 150,
            backgroundColor: 'Green',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <Text>{this.state.name}</Text>
          <Text>{this.state.email}</Text>
           
          <Image
              source={{uri: this.state.photo}}
              style={{width: 50, height: 50, borderRadius: 50}}
            />
          
          <Button title="log out" onPress={this.signOut}/>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
 }
};

export default SlideMenu;