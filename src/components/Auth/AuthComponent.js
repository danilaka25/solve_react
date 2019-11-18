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
  
  componentDidMount() {
    getCurrentUserInfo = async () => {
      try {
        const userInfo = await GoogleSignin.signInSilently();
      } catch (error) {
        if (error.code === statusCodes.SIGN_IN_REQUIRED) {
        } else {
          console.log('some other error');
        }
      }
    };
  }

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
      <View style={styles.wrapper}>
        <GoogleSigninButton
          style={styles.signInButton}
          size={GoogleSigninButton.Size.Wide}
          color={GoogleSigninButton.Color.Dark}
          onPress={this.signIn}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  signInButton: {
    width: 192,
    height: 48,
  },
});

export default AuthComponent;
