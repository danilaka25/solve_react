import React from 'react';
// import { createAppContainer } from 'react-navigation';
// import { createStackNavigator } from 'react-navigation-stack';
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

//import FormComponent from './FormComponent';
import {connect} from 'react-redux';
// import {authOnServer} from '../../actions/authOnServer';
import {serverSendData} from '../../actions/onSubmit';

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

    this.state = {
      phone: '',
      password: '',
    };
  }

  componentDidMount() {
     //this._signIn();
  }

  // Fetch the token from storage then navigate to our appropriate place
  _bootstrapAsync = async () => {
    const userToken = await AsyncStorage.getItem('userToken');

    // This will switch to the App screen or Auth screen and this loading
    // screen will be unmounted and thrown away.
    this.props.navigation.navigate(userToken ? 'App' : 'Auth');
  };

  handleUserInput = (inputName, inputValue) => {
    const name = inputName;
    const value = inputValue;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    console.log(this.state);

    authOnServer(this.state);

    //this.props.navigation.navigate('MainActivity');

    //serverSendData(this.state);
  };



  _signIn = async () => {
  try {
    await GoogleSignin.hasPlayServices();
    const userInfo = await GoogleSignin.signIn();
    //this.setState({ userInfo });

    this.props.navigation.navigate('MainActivity');
  } catch (error) {
    if (error.code === statusCodes.SIGN_IN_CANCELLED) {
      // user cancelled the login flow
    } else if (error.code === statusCodes.IN_PROGRESS) {
      // operation (e.g. sign in) is in progress already
    } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
      // play services not available or outdated
    } else {
      // some other error happened
    }
  }
};

  render() {
    //console.log(this.state);
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <GoogleSigninButton
          style={{width: 192, height: 48}}
          size={GoogleSigninButton.Size.Wide}
          color={GoogleSigninButton.Color.Dark}
          onPress={this._signIn}
          disabled={this.state.isSigninInProgress}
        />

        {/* <View>
          <TextInput
            style={stylesAuthForm.formInput}
            placeholder="Phone"
            onChangeText={val => this.handleUserInput('phone', val)}
          />
        </View>
        <View>
          <TextInput
            style={stylesAuthForm.formInput}
            placeholder="Password"
            onChangeText={val => this.handleUserInput('password', val)}
          />
        </View>

        <View>
          <TouchableHighlight
            style={stylesAuthForm.formButton}
            onPress={this.handleSubmit}>
            <Text>Auth</Text>
          </TouchableHighlight>
        </View> */}

        {/* <ActivityIndicator />   */}
        {/* <StatusBar barStyle="default" />


       {/* <Button
          title="Go to CreateForm"
          onPress={() => this.props.navigation.navigate('UpdateForm')}
        /> */}
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
    // flex: 1,
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

// const AuthRedux = connect(state => {
//   return {
//     data: state,
//   };
// })(AuthComponent);

// export default AuthComponent;
