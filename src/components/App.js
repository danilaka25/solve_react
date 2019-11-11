import React from 'react';
import { View, Text, Button } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import {Provider} from 'react-redux';
import {store} from '../configs/createStore';

import AuthComponent from './Auth/AuthComponent';
import MainActivity from './MainActivity/MainActivity';
import UserSettings from './UserSettings/UserSettings';
import ChatsItem from './Chats/ChatsItem';

 import CardForm from './CardForm';




const AppNavigator = createStackNavigator({  
    AuthComponent: AuthComponent,
    MainActivity: MainActivity,
    UserSettings: UserSettings,
    ChatsItem: ChatsItem,
  },
  {
    initialRouteName: 'AuthComponent',
  }
);

const FlexibleFormContainer = createAppContainer(AppNavigator);



  export default () => (
  <Provider store={store}>  
 
    <FlexibleFormContainer />
    {/* <CardForm /> */}
 
  </Provider>
);

// // @flow

// import React from 'react';
// import {View, StyleSheet} from 'react-native';
// import {Provider} from 'react-redux';
// import {store} from '../configs/createStore';
// import CardForm from './CardForm';
// import DisplayCardInfo from './CardDispalyResult';
// import TestList from './TestList';
// import ProductEdit from './ProductEdit';
// import FlatList from './FlatList';

// import FlexibleForm from './FlexibleForm';

// // type Props = {};

// class CardApp extends React.Component {
//   render() {
//     return (
//       <Provider store={store}>
//         <View style={stylesMainscreen.mainActivity}>
//           <FlexibleForm />
//           {/* <TestList /> */}
//           {/* <ProductEdit /> */}
//           {/* <CardForm /> */}
//           {/* <DisplayCardInfo />   */}
//           {/* <FlatList /> */}
//         </View>
//       </Provider>
//     );
//   }
// }

// const stylesMainscreen = StyleSheet.create({
//   mainActivity: {
//     flex: 1,
//   },
// });

// export default CardApp;
