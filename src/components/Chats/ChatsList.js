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
  TouchableOpacity,
  Image,
} from 'react-native';
import {connect} from 'react-redux';


import {withNavigation} from 'react-navigation';
import ChatsItem from './ChatsItem';

import {createStackNavigator} from 'react-navigation-stack';
import {StackNavigator} from 'react-navigation';

// import returnDataFromServer from '../../services/returnDataFromServer';

import {authOnServer} from '../../actions/authOnServer';

//import ChatsItem from './ChatsItem';

class ChatsList extends React.Component {
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
    return fetch('https://randomuser.me/api/?results=7')
      .then(response => response.json())
      .then(responseJson => {
        let usersTemp = [];
        let id = 1;
        for (let i of Object.keys(responseJson.results)) {
          usersTemp.push({
            firstname: responseJson.results[i].name.first,
            id: id,
            img: responseJson.results[i].picture.thumbnail,
            massages: [{}],
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
    // this.fetchData();

    authOnServer();


    console.log(this.props.data)

    //console.log(authOnServer);

    // this.setState({usersList: returnDataFromServer.returnDataFromServer});
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
    //const { navigate } = this.props.navigation;

    const {navigate} = this.props.navigation;

    return (
      <View style={{flex: 10, alignItems: 'center', justifyContent: 'center'}}>
        {/* <TopBarChatsItem /> */}
        <FlatList
          ref="flatList"
          onContentSizeChange={() =>
            this.refs.flatList.scrollToOffset({animated: true, offset: 0})
          }
          data={this.state.usersList}
          width="100%"
          keyExtractor={item => item.id.toString()}
          ItemSeparatorComponent={this.FlatListItemSeparator}
          renderItem={({item}) => (
            <TouchableOpacity
              onPress={() =>
                navigate('ChatsItem', {
                  firstname: item.firstname,
                  img: item.img,
                  navigation: navigate,
                  massages: item.massages,
                })
              }>
              <View style={styles.listItem}>
                <View style={styles.listItemLeft}>
                  <Image
                    style={{width: 45, height: 45, borderRadius: 45 / 2}}
                    source={{uri: item.img}}
                  />

                  <View style={styles.listItemLeftText}>
                    <Text style={styles.itemLeftName}>{item.firstname}</Text>

                    <Text style={styles.itemLeftMassage}>
                      {item.massages.length
                        ? item.massages[item.massages.length - 1].massage
                        : 'no massages yet'}
                    </Text>
                  </View>
                </View>

                <View style={styles.listItemRight}>
                  <Text style={styles.itemRightTime}>
                    {item.massages.length
                      ? item.massages[item.massages.length - 1].time
                      : ''}
                  </Text>
                  <Text style={styles.itemRightUnread}>
                    {/* {item.massages.length} */}
                    {item.massages.length &&
                    !item.massages[item.massages.length - 1].wasSeen &&
                    !item.massages[item.massages.length - 1].owner
                      ? item.massages.length
                      : ''}
                  </Text>
                </View>
              </View>
            </TouchableOpacity>
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
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 10,
    paddingBottom: 10,
  },
  listItemLeft: {
    flexDirection: 'row',
  },
  listItemLeftText: {
    //alignItems: 'center',
    justifyContent: 'center',
    paddingLeft: 20,
  },
  itemLeftName: {
    fontWeight: '800',
  },
  listItemRight: {
    alignItems: 'flex-end',
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


const ChatListReduxContainer = connect(
  state => {
    return {
      data: state.authReducer,
    };
  },
  {
    authOnServer,
  },
)(ChatsList);

export default withNavigation(ChatListReduxContainer);

//export default withNavigation(Chats);
