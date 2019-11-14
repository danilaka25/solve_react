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
  Dimensions,
  ScrollView
  
} from 'react-native';
import TopBar from '../TopBar/TopBar';
import ChatsList from '../Chats/ChatsList';


//import { withNavigation } from 'react-navigation';
import {createAppContainer} from 'react-navigation';
//import {createDrawerNavigator} from 'react-navigation-drawer';
import {createStackNavigator} from 'react-navigation-stack';

import SlideMenu from '../UserSettings/SlideMenu';

 
import SafeAreaView from 'react-native-safe-area-view';
 
import {createDrawerNavigator} from 'react-navigation-drawer';

const {width} = Dimensions.get('window');



class MainActivity extends React.Component {
  render() {
    //console.log(this.state);
    return (
      <View
        style={{
          flex: 1,
        }}>
        {/* <TouchableHighlight
            onPress={() => this.props.navigation.openDrawer()}>
            <Text>123</Text>
          </TouchableHighlight> */}
        <TopBar openMenu={this.props.navigation.openDrawer}/>
        <ChatsList />
      </View>
    );
  }
}

// export default MainActivity;




const Drawer = createDrawerNavigator(
  {
    Home: {
      screen: MainActivity,
    },
  },
  {
    drawerPosition: 'left',
    contentComponent: SlideMenu,
    drawerOpenRoute: 'DrawerOpen',
    drawerCloseRoute: 'DrawerClose',
    drawerToggleRoute: 'DrawerToggle',
    drawerWidth: (width / 3) * 2,
  },
);

const App = createAppContainer(Drawer);

export default App;
