import React from 'react';
import {View, TouchableHighlight, Text, Image, StyleSheet} from 'react-native';

class TopBar extends React.Component {
  render() {
    return (
      <View style={TopBarStyles.main}>
        <TouchableHighlight onPress={() => this.props.openMenu()}>
          <Image
            source={require('../../assets/icons/menu.png')}
            style={TopBarStyles.image}
          />
        </TouchableHighlight>

        <Text style={{color: '#ffffff', fontSize: 22}}>TELEGRAM</Text>

        <TouchableHighlight>
          <Image
            source={require('../../assets/icons/search.png')}
            style={TopBarStyles.image}
          />
        </TouchableHighlight>
      </View>
    );
  }
}

const TopBarStyles = StyleSheet.create({
  main: {
    alignItems: 'center',
    flexDirection: 'row',
    alignContent: 'stretch',
    justifyContent: 'space-between',
    flex: 1,
    backgroundColor: '#1488db',
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 20,
  },
  image: {
    height: 25,
    width: 25,
  },
});

export default TopBar;
