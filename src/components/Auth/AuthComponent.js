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

import {connect} from 'react-redux';
import {withNavigation} from 'react-navigation';

import {
  GoogleSignin,
  GoogleSigninButton,
  statusCodes,
} from '@react-native-community/google-signin';

GoogleSignin.configure();

class AuthComponent extends React.Component {
  constructor(props) {
    super(props);
    
  }

  componentDidMount() {
    getCurrentUserInfo = async () => {
      try {
        const userInfo = await GoogleSignin.signInSilently();

        console.log(userInfo);
      } catch (error) {
        if (error.code === statusCodes.SIGN_IN_REQUIRED) {
        } else {
          console.log('some other error');
        }
      }
    };
  }

  // Fetch the token from storage then navigate to our appropriate place
  _bootstrapAsync = async () => {
    const userToken = await AsyncStorage.getItem('userToken');

    // This will switch to the App screen or Auth screen and this loading
    // screen will be unmounted and thrown away.
    this.props.navigation.navigate(userToken ? 'App' : 'Auth');
  };



  signIn = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      this.props.navigation.navigate('MainActivity');
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <GoogleSigninButton
          style={{width: 192, height: 48}}
          size={GoogleSigninButton.Size.Wide}
          color={GoogleSigninButton.Color.Dark}
          onPress={this.signIn}
         />
      </View>
    );
  }
}

const stylesAuthForm = StyleSheet.create({
  isLoadingView: {
    zIndex: 999,
    backgroundColor: '#cccccc',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },

  isLoadingText: {
    fontSize: 20,
    fontWeight: 'bold',
  },

  formTitle: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 30,
  },

  isInvalid: {
    backgroundColor: '#e8301c',
  },

  errorLine: {
    borderBottomWidth: 1,
  },

  mainActivity: {
    backgroundColor: '#00b5ec',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  cardRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: 20,
    paddingRight: 20,
    marginBottom: 20,
  },

  inputCardnumber: {
    flex: 10,
  },

  inputExpiration: {
    flex: 4,
    marginLeft: 15,
    marginRight: 15,
  },

  inputCvv: {
    flex: 2,
  },

  fieldsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: 20,
    paddingRight: 20,
    marginBottom: 20,
  },

  inputStandart: {
    flex: 1,
  },

  formInput: {
    height: 40,
    borderBottomColor: 'yellow',
    borderBottomWidth: 1,
    paddingLeft: 10,
    backgroundColor: '#cccccc',
    width: 250,
    marginTop: 20,
  },

  formButton: {
    backgroundColor: 'green',
    alignItems: 'center',
    flexDirection: 'row',
    height: 40,
    justifyContent: 'center',
    width: 250,
    marginTop: 20,
  },

  formButtonText: {
    color: '#FFFFFF',
    textAlign: 'center',
    fontSize: 25,
  },
});

export default AuthComponent;

