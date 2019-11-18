import React from 'react';
import {NavigationActions} from 'react-navigation';
import {
  ScrollView,
  Text,
  View,
  StyleSheet,
  SafeAreaView,
  Button,
  Image,
} from 'react-native';
import {GoogleSignin, statusCodes} from '@react-native-community/google-signin';
import {withNavigation} from 'react-navigation';

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
      const navigate = this.props.navigation;
      navigate.navigate('AuthComponent');
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
    } catch (error) {
      // some other error
    }
  };

  render() {
    return (
      <SafeAreaView style={styles.main}>
        <ScrollView>
          <View style={styles.wrapper}>
            <Text>{this.state.name}</Text>
            <Text>{this.state.email}</Text>
            <Image source={{uri: this.state.photo}} style={styles.avatar} />
            <Button title="log out" onPress={this.signOut} />
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    zIndex: 999,
  },
  wrapper: {
    height: 150,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: 40,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 50,
    margin: 10,
  },
});

export default SlideMenu;
