import React from 'react';
import { View, Text, Button } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import CreateFormContainer from './CreateFormContainer';
import UpdateFormContainer from './UpdateFormContainer';



const AppNavigator = createStackNavigator({  
    CreateForm: CreateFormContainer,
    UpdateForm: UpdateFormContainer,
  },
  {
    initialRouteName: 'CreateForm',
  }
);

const FlexibleFormContainer = createAppContainer(AppNavigator);



  export default () => (
  <View style={{ flex: 1 }}>
    <FlexibleFormContainer />
  </View>
);