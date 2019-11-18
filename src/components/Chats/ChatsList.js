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
import {getInitalStateFromServer} from '../../actions/getInitalStateFromServer';

class ChatsList extends React.Component {
  componentDidMount() {
    this.props.getInitalStateFromServer();
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
    const {navigate} = this.props.navigation;

    return (
      <View style={styles.main}>
        <FlatList
          ref="flatList"
          onContentSizeChange={() =>
            this.refs.flatList.scrollToOffset({animated: true, offset: 0})
          }
          data={this.props.data.usersTemp}
          keyExtractor={item => item.id.toString()}
          ItemSeparatorComponent={this.FlatListItemSeparator}
          renderItem={({item}) => (
            <TouchableOpacity
              onPress={() =>
                navigate('ChatsItem', {
                  firstname: item.firstname,
                  img: item.img,
                  navigation: navigate,
                  messages: item.messages,
                  id: item.id,
                })
              }>
              <View style={styles.listItem}>
                <View style={styles.listItemLeft}>
                  <Image style={styles.avatar} source={{uri: item.img}} />

                  <View style={styles.listItemLeftText}>
                    <Text style={styles.itemLeftName}>{item.firstname}</Text>

                    <Text style={styles.itemLeftMessage}>
                      {item.messages.length
                        ? item.messages[item.messages.length - 1].message
                        : 'no messages yet'}
                    </Text>
                    
                  </View>
                </View>
                <View style={styles.listItemRight}>
                  <Text style={styles.itemRightTime}>
                    {item.messages.length
                      ? item.messages[item.messages.length - 1].time
                      : ''}
                  </Text>
                  <Text style={styles.itemRightUnread}>
                    {item.messages.length &&
                    !item.messages[item.messages.length - 1].wasSeen &&
                    !item.messages[item.messages.length - 1].owner
                      ? item.messages.length
                      : ''}
                  </Text>
                </View>
              </View>
            </TouchableOpacity>
          )}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  main: {
    flex: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
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
  avatar: {
    width: 45,
    height: 45,
    borderRadius: 45 / 2,
  },
  listItemLeftText: {
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

const ChatsListReduxContainer = connect(
  state => {
    return {
      data: state.messangerReducer,
    };
  },
  {
    getInitalStateFromServer,
  },
)(ChatsList);

export default withNavigation(ChatsListReduxContainer);
