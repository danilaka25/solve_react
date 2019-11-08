import React from 'react';
import {
  StyleSheet,
  FlatList,
  Text,
  View,
  Alert,
  TouchableOpacity,
  TextInput,
  Button,
  Image
} from 'react-native';
import CheckBox from 'react-native-check-box';

export default class TestList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      usersList: [],
      textInput_Holder: '',
      btnAdd: false,
      btnDelete: false,
      inputValid: false,
      isLoading: true,
    };
  }

  fetchData() {
    fetch("https://api-football-beta.p.rapidapi.com/teams?league=534", {
    "method": "GET",
    "headers": {
      "x-rapidapi-host": "api-football-beta.p.rapidapi.com",
      "x-rapidapi-key": "5cd0d9f62cmsh26e688ce8c24379p154337jsne3668a2c22f7"
    }
  })
  .then(response => response.json())
  .then(responseJson => {
    console.log(responseJson.response)

    let usersTemp = [];


        for ( let i of Object.keys(responseJson.response)) {
          console.log(i)
          usersTemp.push({
            firstname: responseJson.response[i].team.name,
            id: responseJson.response[i].team.id,
            img: responseJson.response[i].team.logo,
          });
          //id++;
        }
        this.setState({
          usersList: usersTemp,
        });

  })
  .catch(err => {
    console.log(err);
  });
  }



    fetchData2() {
    return fetch('https://randomuser.me/api/?results=5')
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

  addUser = () => {
    let usersTemp = this.state.usersList;
    usersTemp.push({
      firstname: this.state.textInput_Holder,
      id: this.state.usersList[this.state.usersList.length - 1].id + 1,
      isChecked: false,
    });
    this.setState({usersList: usersTemp, btnAdd: false});
    //console.log(usersTemp);
    this.textInput.clear();
  };

  deleteChekedItems = () => {
    //console.log('deleteChekedItems');

    let usersTemp = [];
    for (let i of Object.keys(this.state.usersList)) {
      if (this.state.usersList[i].isChecked === true) {
      } else {
        usersTemp.push({
          firstname: this.state.usersList[i].firstname,
          id: this.state.usersList[i].id,
          isChecked: this.state.usersList[i].isChecked,
        });
      }
    }

    this.setState({usersList: usersTemp, btnDelete: false});
  };

  chekItem = item => {
    //console.log('-----');

    let usersTemp = [];

    for (let i of Object.keys(this.state.usersList)) {
      if (this.state.usersList[i].id === item.id) {
        usersTemp.push({
          firstname: item.firstname,
          id: item.id,
          isChecked: item.isChecked ? false : true,
        });
      } else {
        usersTemp.push({
          firstname: this.state.usersList[i].firstname,
          id: this.state.usersList[i].id,
          isChecked: this.state.usersList[i].isChecked,
        });
      }
    }

    let result = usersTemp.find(obj => obj.isChecked == true);
    // console.log(result);
    if (result === undefined) {
      this.setState({btnDelete: false});
    } else {
      this.setState({btnDelete: true});
    }

    this.setState({usersList: usersTemp});
  };

  handleUserInput = val => {
    if (val.length >= 1) {
      this.setState(
        {
          btnAdd: true,
          textInput_Holder: val,
        },
        () => {
          //console.log(this.state.btnAdd);
        },
      );
    } else {
      this.setState({
        btnAdd: false,
      });
    }
  };


  sortItems = () => {

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
    return (
      <View style={styles.MainContainer}>
        <View style={{flexDirection: "row", alignContent: "space-between", flexWrap: "wrap"}}>
          <Button title="sort up" style={{alignSelf: "flex-start"}}/>
          <Button title="sort down" />
        </View>
        <FlatList
          style={{ flex: 1}}
          ref="flatList"
          onContentSizeChange={() => this.refs.flatList.scrollToEnd()}
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
                {item.firstname} {item.id}
              </Text>
              <Image
                style={{width: 40, height: 40}}
                source={{uri: item.img}} 
              />
               
            </View>
          )} //onPress={this.GetItem.bind(this, item.title)}
        />



        <TextInput
          placeholder="Enter Value Here"
          onChangeText={data => this.setState({textInput_Holder: data})}
          onChangeText={val => this.handleUserInput(val)}
          style={styles.textInputStyle}
          ref={input => {
            this.textInput = input;
          }}
        />
        <TouchableOpacity
          onPress={this.addUser}
          activeOpacity={0.7}
          // style={styles.buttonRow}
          style={[
            styles.btn,
            {backgroundColor: this.state.btnAdd ? 'green' : '#cccccc'},
          ]}>
          <Button
            style={styles.add}
            disabled={this.state.btnAdd}
            title="Add Values"
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={this.deleteChekedItems}
          activeOpacity={0.7}
          style={[
            styles.buttonRow,
            styles.btn,
            {backgroundColor: this.state.btnDelete ? 'green' : '#cccccc'},
          ]}>
          <Button
            style={styles.delete}
            disabled={this.state.btnDelete}
            title="Delete Values"
          />
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  listItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    //alignItems: 'center',
    //flex: 1,
  },
  enabled: {
    color: 'green',
  },
  disabled: {
    color: 'red',
  },
  MainContainer: {
    //  justifyContent: 'center',
      alignItems: 'center',
     flex: 1,
   // margin: 2,
     //marginTop: 40,
  },

  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },

  textInputStyle: {
    textAlign: 'center',
    height: 40,
    width: '90%',
    borderWidth: 1,
    borderColor: '#4CAF50',
    borderRadius: 7,
    marginTop: 12,
  },

  btn: {
    textAlign: 'center',
    height: 40,
    width: '90%',
    borderWidth: 1,
    borderColor: '#cccccc',
    borderRadius: 7,
    marginTop: 12,
  },

  add: {
    width: '90%',
    height: 40,
    padding: 10,
    // backgroundColor: '#4CAF50',
    color: '#ffffff',
    borderRadius: 8,
    marginTop: 10,
    //marginBottom: 10,
  },

  delete: {
    width: '90%',
    height: 40,
    padding: 10,
    backgroundColor: '#4CAF50',
    borderRadius: 8,
    marginTop: 10,
    marginBottom: 70,
  },

  buttonRow: {
    marginBottom: 60,
    // flex: 1
    //color: '#fff',
    // textAlign: 'center',
  },
});
