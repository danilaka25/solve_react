// @flow

import React from 'react';
//import PropTypes from 'prop-types';

import {StyleSheet, View, Text, Image, FlatList, Platform} from 'react-native';

type Props = {
  Item: (name: string, lastname: string, img: string, id: number) => void,
};

type State = {
  usersList: Object,
};

class TestList extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      usersList: {},
    };
  }

  fetchData() {
    return fetch('https://randomuser.me/api/?results=150')
      .then(response => response.json())
      .then(responseJson => {
        let usersTemp = [];

        for (let i of Object.keys(responseJson.results)) {
          usersTemp.push({
            firstname: responseJson.results[i].name.first,
            lastname: responseJson.results[i].name.last,
            img: responseJson.results[i].picture.thumbnail,
            id: i,
          });
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

  // Item = (name: string, lastname: string, img: string, id: number) => {
  Item({name, lastname, img, id}) {
    return (
      <View style={stylesList.listItem}>
        <Image style={stylesList.listImg} source={{uri: img}} />
        <View style={stylesList.listInfo}>
          <Text style={stylesList.listText}>{name}</Text>
          <Text style={stylesList.listText}>{lastname}</Text>
        </View>
        <View>
          <Text style={stylesList.listText}>{id}</Text>
        </View>
      </View>
    );
  }

  render() {
    return (
      <View>
        <FlatList
          getItemLayout={
            (data, index) => ({
              length: 70,
              offset: 70 * index,
              index,
            })
            //console.log("get item layout " + index)
          }
          style={stylesList.listWrapper}
          data={this.state.usersList}
          renderItem={({item}) => (
            <this.Item
              name={item.firstname}
              lastname={item.lastname}
              img={item.img}
              id={item.id}
            />
          )}
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
  listImg: {
    width: 50,
    height: 50,
  },
  listItem: {
    flexDirection: 'row',
    height: 70,
    color: '#999999',
    borderBottomColor: '#999999',
    borderBottomWidth: 0.5,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingLeft: 10,
    paddingRight: 10,
  },
  listInfo: {
    alignItems: 'flex-start',
    paddingLeft: 20,
    flex: 1,
  },
  listText: {
    color: '#000',
  },
});

export default TestList;
