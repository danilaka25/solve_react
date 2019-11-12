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
  FlatList,
} from 'react-native';

import TopBarChatsItem from '../TopBar/TopBarChatsItem';

import UserAvatar from './UserAvatar';

import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

class ChatsItem extends React.Component {

constructor(props) {
    super(props);


    // this.state = {
    //   chatBranch: params.massages

    // }


}   

  sendMassage = () => {

  };

  render() {
    const {params} = this.props.navigation.state;

    console.log(params.navigation);
    return (
      <>
        <TopBarChatsItem
          navigation={params.navigation}
          avatar={params.img}
          name={params.firstname}
        />

        <FlatList
          ref="flatList"
          //onContentSizeChange={() => this.refs.flatList.scrollToEnd()}
          data={params.massages}
          width="100%"
          keyExtractor={item => item.id.toString()}
          // ItemSeparatorComponent={this.FlatListItemSeparator}
          renderItem={({item}) => (
            <View style={styles.listItem}>
            <View style={item.owner ? styles.outputMassage : styles.inputMassage}>
              <Text
                style={styles.item}
                //onPress={this.deleteData.bind(this, item.firstname)}
              >

              
              {item.massage}
              </Text>
            </View>
            </View>
          )}  
        />

        <View style={styles.footer}>
          <View style={styles.textInputRow}>
            <TextInput style={styles.textInput} placeholder="Type Your Text" />
            <TouchableHighlight
              style={styles.sendButton}
              onPress={this.sendMassage}>
              <Text style={styles.sendButtonText}>Send massage</Text>
            </TouchableHighlight>
          </View>
        </View>
      </>
    );
  }
}

const styles = StyleSheet.create({
  massageRow: {},

  inputMassage: {},

  outputMassage: {
    flexDirection: 'row',
    justifyContent: 'flex-end'
  },

  footer: {
    // flex: 1,
    justifyContent: 'flex-end',
    marginBottom: 66,
  },

  textInputRow: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'row',
    //alignContent: 'stretch',
    justifyContent: 'space-between',
    paddingLeft: 10,
    paddingRight: 10,
  },

  textInput: {
    textAlign: 'center',
    height: 40,
    //alignContent: 'stretch',

    borderWidth: 1,
    borderColor: '#4CAF50',
    borderRadius: 7,

    flex: 3,
  },

  sendButton: {
    textAlign: 'center',
    height: 40,
    borderWidth: 1,
    borderColor: '#cccccc',
    borderRadius: 7,
    flex: 1,
    marginLeft: 20,
    justifyContent: 'center',
  },

  sendButtonText: {
    textAlign: 'center',
  },
});

export default ChatsItem;
