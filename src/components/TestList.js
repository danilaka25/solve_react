/* eslint-disable */
// @flow

import React, {Component} from 'react';
//import PropTypes from 'prop-types';

import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Modal,
  Alert,
  Image,
  FlatList,
  Platform,
} from 'react-native';

class TestList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      Obj: {},
    };
  }

  fetchData() {
    return fetch('https://randomuser.me/api/?results=500')
      .then(response => response.json())
      .then(responseJson => {
        let Obj2 = [];
        //console.log(responseJson);

        let newObj = responseJson;

        for (let i of Object.keys(newObj.results)) {
          //console.log(newObj.results)
          //console.log(newObj.results[i].name.first)
          Obj2.push({
            firstname: newObj.results[i].name.first,
            lastname: newObj.results[i].name.last,
            img: newObj.results[i].picture.thumbnail,
            id: i,
          });
        }

        this.setState({
          Obj: Obj2,
        });
      })
      .catch(error => {
        console.error(error);
      });
  }

  componentDidMount(prevProps, prevState) {
    this.fetchData();
  }

  Item({name, lastname, img}) {
    return (
      <View style={ stylesList.listItem }>
        <Image style={{width: 50, height: 50}} source={{uri: img}} />
        <View style={ stylesList.listInfo }>
          <Text style={{color: '#000'}}>{name}</Text>
          <Text style={{color: '#000'}}>{lastname}</Text>
        </View>  
      </View>
    );
  }

  render() {
    console.log(this.state.Obj);

    return (
      <View>
        <View style={{height: 0}}>
          <Text style={{color: '#999999'}}>Form</Text>
        </View>

        <FlatList
         getItemLayout={(data, index) => (
            {length: 60, offset: 60 * index, index}
            //console.log("get item layout " + index)
          )}
          style={ stylesList.listWrapper }
          data={this.state.Obj}
          renderItem={({item}) => <this.Item name={item.firstname} lastname={item.lastname} img={item.img}/>}
          keyExtractor={item => item.id}
        />
      </View>
    );
  }
}

const stylesList = StyleSheet.create({

  listWrapper: {
    marginTop: Platform.OS === 'ios' ? 35 : 0,
  },

  listItem: {
          flexDirection: 'row',
          height: 60,
          color: '#999999',
          borderBottomColor: '#999999',
          borderBottomWidth: 0.5,
          alignItems: 'center',
  },
  listInfo: {         
          
          alignItems: 'flex-start',
          paddingLeft: 20,
  },


});

export default TestList;
