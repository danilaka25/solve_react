import React from 'react';
import {
  View,
  TouchableHighlight,
  Text,
  Image,
} from 'react-native';

class TopBar extends React.Component {
  render() {
    return (
      <View
        style={{
          alignItems: 'center',
          flexDirection: 'row',
          alignContent: 'stretch',
          justifyContent: 'space-between',
          flex: 1,
          backgroundColor: '#1488db',
          paddingLeft: 10,
          paddingRight: 10,
          paddingTop: 20,
          // height: 120
        }}>
        <TouchableHighlight onPress={() => this.props.openMenu()}>
          <Image
            source={require('../../assets/icons/menu.png')}
            style={{height: 25, width: 25}}
          />
        </TouchableHighlight>

        <Text style={{color: '#ffffff', fontSize: 22}}>TELEGRAM</Text>

        <TouchableHighlight>
          <Image
            source={require('../../assets/icons/search.png')}
            style={{height: 25, width: 25}}
          />
        </TouchableHighlight>
      </View>
    );
  }
}

export default TopBar;
