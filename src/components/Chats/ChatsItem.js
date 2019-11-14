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

import moment from "moment";


import TopBarChatsItem from '../TopBar/TopBarChatsItem';

import UserAvatar from './UserAvatar';

import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import {connect} from 'react-redux';
import {addMassageToChat} from '../../actions/addMassageToChat';

class ChatsItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      inputMassage: '',
    };
  }

  componentDidMount() {



    // console.log(
    //       Object.keys(this.props.navigation.state.params.massages).length
    // )
    //console.log(this.props.data.usersTemp[this.props.navigation.state.params.id - 1].massages)
  }

  handleUserInput = ( inputValue) => {
    
    const value = inputValue;
    this.setState({
      inputMassage: value,
    });
  };

  sendMassage = () => {
    let massageTemp = this.props.navigation.state.params.massages;
    massageTemp.push({
      id: Object.keys(this.props.navigation.state.params.massages).length + 1,
      massage: this.state.inputMassage,
      time: moment(Date.now()).format('DD.MM.YYYY'), 
      wasSeen: false,
      owner: true,
    });

    this.props.addMassageToChat(massageTemp);

   
  };



  render() {
    const {params} = this.props.navigation.state;

    console.log('this.props.data ==============', this.props.data.usersTemp[0]);

    //console.log(params.navigation);
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
          width="100%"
          keyExtractor={item => item.id.toString()}
          // ItemSeparatorComponent={this.FlatListItemSeparator}
          renderItem={({item}) => (
            <View style={styles.massageRow}>
              <View
                style={item.owner ? styles.outputMassage : styles.inputMassage}>
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

        </View>

        <View style={styles.footer}>
          <View style={styles.textInputRow}>
            <TextInput
              onChangeText={val => this.handleUserInput(val)}
              style={styles.textInput}
              placeholder="Type Your Text"
            />
            <TouchableHighlight
              style={styles.sendButton}
              onPress={this.sendMassage}>
              <Text style={styles.sendButtonText}>Send massage</Text>
            </TouchableHighlight>
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
    // mapDispatchToProps
  },
)(ChatsItem);

export default ChatsItemReduxContainer;

// export default withNavigation(ChatsItemReduxContainer);

const styles = StyleSheet.create({


  main: {
    flex: 1
  },

  

  massageBg: {
    backgroundColor: '#e0e0e0',
    flex: 6
  },

  massageRow: {
    marginTop: 10,
    paddingLeft: 10,
    paddingRight: 10
  },

  inputMassage: {
    backgroundColor: '#ffffff',
     width: '60%',
     padding: 10,
     borderRadius: 5
  },

  outputMassage: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignSelf: 'flex-end',
    backgroundColor: '#76e060',
    width: '60%',
    padding: 10,
    borderRadius: 5
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
    // textAlign: 'center',
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

// export default ChatsItem;
