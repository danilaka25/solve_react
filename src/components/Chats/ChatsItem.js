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
import {addMassageToChat} from '../../actions/addMassageToChat';
import {deleteMassageFromChat} from '../../actions/deleteMassageFromChat';

class ChatsItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      inputMassage: '',
      isForwardMassage: false,
      forwaredMassageId: '',
      SendBtnDisabled: true,
    };
  }

  componentDidMount() {

  }

  handleUserInput = inputValue => {
    const value = inputValue;
    this.setState({
      inputMassage: value,
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

  sendMassage = () => {
    // let allMassages = this.props.data.usersTemp[this.props.navigation.state.params.id].massages

    let massageTemp = this.props.navigation.state.params.massages;
    massageTemp.push({
      id: Object.keys(this.props.navigation.state.params.massages).length + 1,
      massage: this.state.isForwardMassage
        ? `${
            this.props.navigation.state.params.massages[
              this.state.forwaredMassageId - 1
            ].massage
          } -->  ${this.state.inputMassage} `
        : this.state.inputMassage,
      time: moment(Date.now()).format('DD.MM.YYYY'),
      wasSeen: false,
      owner: true,
    });

    //console.log("*********" , this.props.navigation.state.params.massages[this.state.forwaredMassageId].massage)

    this.props.addMassageToChat(massageTemp);

    this.setState({
      isForwardMassage: false,
      forwaredMassageId: '',
      inputMassage: '',
      SendBtnDisabled: true,
    });
    this.textInput.clear();

    console.log(massageTemp);
  };

  detectForwardMassage = massageId => {
    this.setState({
      forwaredMassageId: massageId,
      isForwardMassage: true,
    });
  };

  pressOnMassage = massageId => {
    Alert.alert(
      'Do thomething',
      '',
      [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {text: 'Delete', onPress: () => this.deleteOwnMassage(massageId)},
        {text: 'Forward', onPress: () => this.detectForwardMassage(massageId)},
      ],
      {cancelable: false},
    );
  };

  deleteOwnMassage = massageId => {
    //let massageTemp = this.props.navigation.state.params.massages;

    // let massageTemp = this.props.navigation.state.params.massages.filter(x => {
    //   return x.id != massageId;
    // });

    let userId = this.props.navigation.state.params.id;

    console.log('STORE', this.props.data.usersTemp[userId].massages[1]);

    // let massageTemp = this.props.data.usersTemp[
    //   this.props.navigation.state.params.id
    // ].massages.filter(x => {
    //   return x.id != massageId;
    // });

    //this.props.deleteMassageFromChat(massageTemp, userId);

    //console.log(typeof deleteMassageFromChat(massageTemp))

    //setTimeout(this.props.deleteMassageFromChat(massageTemp), 3000);

    //console.log(massageTemp);
    //console.log(massageId)
  };

  render() {
    const {params} = this.props.navigation.state;
    //console.log('this.props.data ==============', this.props.data.usersTemp[0]);

    //console.log(this.props.navigation.state.params.massages);
    return (
      <View style={styles.main}>
        <TopBarChatsItem
          navigation={params.navigation}
          avatar={params.img}
          name={params.firstname}
        />

        <View style={styles.massageBg}>
          <FlatList
            ref="flatList"
            //onContentSizeChange={() => this.refs.flatList.scrollToEnd()}
            data={params.massages}
            //data={this.props.data.usersTemp[this.props.navigation.state.params.id -1].massages}
            width="100%"
            keyExtractor={item => item.id.toString()}
            // ItemSeparatorComponent={this.FlatListItemSeparator}
            renderItem={({item}) => (
              <View style={styles.massageRow}>
                <TouchableHighlight
                  onPress={() => this.pressOnMassage(item.id)}>
                  <View
                    style={
                      item.owner ? styles.outputMassage : styles.inputMassage
                    }>
                    <Text
                      style={styles.item}
                      //onPress={this.deleteData.bind(this, item.firstname)}
                    >
                      {item.massage}
                    </Text>
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
                this.state.isForwardMassage
                  ? 'Type Forward Text'
                  : 'Type Your Text'
              }
              ref={input => {
                this.textInput = input;
              }}
            />
            {/* <TouchableHighlight
              style={styles.sendButton}
              onPress={this.sendMassage}>
              <Text style={styles.sendButtonText}></Text>
            </TouchableHighlight> */}
            <Button
              style={styles.sendButton}
              title={
                this.state.isForwardMassage ? 'Forward Massage' : 'Send massage'
              }
              onPress={this.sendMassage}
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
      data: state.authReducer,
    };
  },
  {
    addMassageToChat,
    deleteMassageFromChat,
  },
)(ChatsItem);

export default ChatsItemReduxContainer;

const styles = StyleSheet.create({
  main: {
    flex: 1,
  },

  massageBg: {
    backgroundColor: '#e0e0e0',
    flex: 6,
  },

  massageRow: {
    marginTop: 10,
    paddingLeft: 10,
    paddingRight: 10,
  },

  inputMassage: {
    backgroundColor: '#ffffff',
    width: '60%',
    padding: 10,
    borderRadius: 5,
  },

  outputMassage: {
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
