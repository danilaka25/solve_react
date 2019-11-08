import React from 'react';
import {View, Text, Button} from 'react-native';
// import { createAppContainer } from 'react-navigation';
// import { createStackNavigator } from 'react-navigation-stack';

class UpdateFormContainer extends React.Component {
static navigationOptions = {
      //  headerLeft: null,
       title: 'Update'
  };
  render() {
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        {/* <Text>Details Screen</Text> */}
        <Button
          title="Go to CreateForm"
          onPress={() => this.props.navigation.navigate('CreateForm')}
        />
      </View>
    );
  }
}

export default UpdateFormContainer;
