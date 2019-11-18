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
  Alert,
} from 'react-native';

import moment from 'moment';
import TopBarChatsItem from '../TopBar/TopBarChatsItem';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {connect} from 'react-redux';
import {addMessageToChat} from '../../actions/addMessageToChat';
import {deleteMessageFromChat} from '../../actions/deleteMessageFromChat';

class ChatsItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputMessage: '',
      isForwardMessage: false,
      forwaredMessageId: '',
      SendBtnDisabled: true,
    };
  }

  handleUserInput = inputValue => {
    const value = inputValue;
    this.setState({
      inputMessage: value,
    });
    if (inputValue.length >= 1) {
      this.setState({
        SendBtnDisabled: false,
      });
    } else {
      this.setState({
        SendBtnDisabled: true,
      });
    }
  };

  sendMessage = () => {
    let messageTemp = this.props.navigation.state.params.messages;
    messageTemp.push({
      id: Object.keys(this.props.navigation.state.params.messages).length + 1,
      message: this.state.isForwardMessage
        ? `${
            this.props.navigation.state.params.messages[
              this.state.forwaredMessageId - 1
            ].message
          } -->  ${this.state.inputMessage} `
        : this.state.inputMessage,
      time: moment(Date.now()).format('DD.MM.YYYY'),
      wasSeen: false,
      owner: true,
    });

    this.props.addMessageToChat(messageTemp);

    this.setState({
      isForwardMessage: false,
      forwaredMessageId: '',
      inputMessage: '',
      SendBtnDisabled: true,
    });
    this.textInput.clear();
  };

  detectForwardMessage = messageId => {
    this.setState({
      forwaredMessageId: messageId,
      isForwardMessage: true,
    });
  };

  pressOnMessage = messageId => {
    Alert.alert(
      'Do thomething',
      '',
      [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {text: 'Delete', onPress: () => this.deleteOwnMessage(messageId)},
        {text: 'Forward', onPress: () => this.detectForwardMessage(messageId)},
      ],
      {cancelable: false},
    );
  };

  deleteOwnMessage = messageId => {
    let userId = this.props.navigation.state.params.id;
    let messageTemp = this.props.data.usersTemp[userId - 1].messages.filter(
      x => {
        return x.id != messageId;
      },
    );

    this.props.deleteMessageFromChat(messageTemp);
  };

  render() {
    const {params} = this.props.navigation.state;

    return (
      <View style={styles.main}>
        <TopBarChatsItem
          navigation={params.navigation}
          avatar={params.img}
          name={params.firstname}
        />

        <View style={styles.messageBg}>
          <FlatList
            ref="flatList"
            data={params.messages}
            width="100%"
            keyExtractor={item => item.id.toString()}
            renderItem={({item}) => (
              <View style={styles.messageRow}>
                <TouchableHighlight
                  onPress={() => this.pressOnMessage(item.id)}>
                  <View
                    style={
                      item.owner ? styles.outputMessage : styles.inputMessage
                    }>
                    <Text style={styles.item}>{item.message}</Text>
                  </View>
                </TouchableHighlight>
              </View>
            )}
          />
        </View>

        <View style={styles.footer}>
          <View style={styles.textInputRow}>
            <TextInput
              onChangeText={val => this.handleUserInput(val)}
              style={styles.textInput}
              placeholder={
                this.state.isForwardMessage
                  ? 'Type Forward Text'
                  : 'Type Your Text'
              }
              ref={input => {
                this.textInput = input;
              }}
            />
            <Button
              style={styles.sendButton}
              title={
                this.state.isForwardMessage ? 'Forward Message' : 'Send message'
              }
              onPress={this.sendMessage}
              disabled={this.state.SendBtnDisabled}
            />
          </View>
        </View>
      </View>
    );
  }
}

const ChatsItemReduxContainer = connect(
  state => {
    return {
      data: state.messangerReducer,
    };
  },
  {
    addMessageToChat,
    deleteMessageFromChat,
  },
)(ChatsItem);

export default ChatsItemReduxContainer;

const styles = StyleSheet.create({
  main: {
    flex: 1,
  },

  messageBg: {
    backgroundColor: '#e0e0e0',
    flex: 6,
  },

  messageRow: {
    marginTop: 10,
    paddingLeft: 10,
    paddingRight: 10,
  },

  inputMessage: {
    backgroundColor: '#ffffff',
    width: '60%',
    padding: 10,
    borderRadius: 5,
  },

  outputMessage: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignSelf: 'flex-end',
    backgroundColor: '#76e060',
    width: '60%',
    padding: 10,
    borderRadius: 5,
  },

  footer: {
    flex: 1,
    justifyContent: 'flex-end',
    marginBottom: 16,
  },

  textInputRow: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 10,
    paddingRight: 10,
  },

  textInput: {
    textAlign: 'center',
    height: 40,
    borderWidth: 1,
    borderColor: '#4CAF50',
    borderRadius: 7,
    flex: 3,
  },

  sendButton: {
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
