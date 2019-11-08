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

import { withNavigation } from 'react-navigation';


import ChatsItem from './ChatsItem';




class Chats extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      usersList: [],
      textInput_Holder: '',
      btnAdd: false,
      btnDelete: false,
      inputValid: false,
    };
  }

  fetchData() {
    return fetch('https://randomuser.me/api/?results=50')
      .then(response => response.json())
      .then(responseJson => {
        let usersTemp = [];
        let id = 1;
        for (let i of Object.keys(responseJson.results)) {
          usersTemp.push({
            firstname: responseJson.results[i].name.first,
            id: id,
            isChecked: false,
          });
          id++;
        }
        this.setState({
          usersList: usersTemp,
        });
      })
      .catch(error => {
        console.error(error);
      });
  }

  componentDidMount() {
    this.fetchData();
  }

  FlatListItemSeparator = () => {
    return (
      <View
        style={{
          height: 1,
          width: '100%',
          backgroundColor: '#607D8B',
        }}
      />
    );
  };

  render() {
    //console.log(this.state);
    return (
      <View style={{flex: 10, alignItems: 'center', justifyContent: 'center'}}>
        <Text>CHATS</Text>

        <FlatList
          ref="flatList"
          onContentSizeChange={() => this.refs.flatList.scrollToOffset({ animated: true, offset: 0 })
}
          data={this.state.usersList}
          width="100%"
          keyExtractor={item => item.id.toString()}
          ItemSeparatorComponent={this.FlatListItemSeparator}
          renderItem={({item}) => (
            <View style={styles.listItem}>
              <Text
                style={styles.item}
                //onPress={this.deleteData.bind(this, item.firstname)}
              >
                {item.firstname} {item.isChecked}
              </Text>
              <Button title="Press me" onPress={() => this.props.navigation.navigate('ChatsItem')} />
            </View>
          )} //onPress={this.GetItem.bind(this, item.title)}
        />
      </View>
    );
  }
}




const styles = StyleSheet.create({
    listItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',

  },
  container: {
    flex: 1,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});

export default Chats;
