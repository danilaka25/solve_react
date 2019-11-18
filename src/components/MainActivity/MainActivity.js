import React from 'react';
import {View, Dimensions} from 'react-native';
import TopBar from '../TopBar/TopBar';
import ChatsList from '../Chats/ChatsList';
import {createAppContainer} from 'react-navigation';
import {createDrawerNavigator} from 'react-navigation-drawer';
import SlideMenu from '../UserSettings/SlideMenu';

const {width} = Dimensions.get('window');

class MainActivity extends React.Component {
  render() {
    return (
      <View
        style={{
          flex: 1,
        }}>
        <TopBar openMenu={this.props.navigation.openDrawer} />
        <ChatsList />
      </View>
    );
  }
}

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
