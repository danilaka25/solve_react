import React, {useState} from 'react';

import {
  FlatList,
  Text,
  View,
  Alert,
  TouchableOpacity,
  TextInput,
  Button,
} from 'react-native';
import CheckBox from 'react-native-check-box';
import {styles} from './Styles';
import {useTestList} from './useTestList';

const TestList = () => {
  const {
    users,
    addUser,
    deleteChekedItems,
    chekItem,
    handleUserInput,
    btnAdd,
    btnDelete,
    inputEl
  } = useTestList();

  console.log("*********" , inputEl);

  const FlatListItemSeparator = () => {
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

  return (
    <View style={styles.MainContainer}>
      <FlatList
        //onContentSizeChange={() => {this.ref.flatList.scrollToEnd()}}
        data={users}
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
            <CheckBox
              style={{padding: 10}}
              onClick={val => chekItem(item)}
              isChecked={item.isChecked}
            />
          </View>
        )} //onPress={this.GetItem.bind(this, item.title)}
      />

      <TextInput
        placeholder="Enter Value Here"
        onChangeText={val => handleUserInput(val)}
        //value={textInput}

        style={styles.textInputStyle}

        ref={inputEl}
      />
      <TouchableOpacity
        onPress={addUser}
        activeOpacity={0.7}
        style={[styles.btn, {backgroundColor: btnAdd ? 'green' : '#cccccc'}]}>
        <Button style={styles.add} disabled={btnAdd} title="Add Values" />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={deleteChekedItems}
        activeOpacity={0.7}
        style={[
          styles.buttonRow,
          styles.btn,
          {backgroundColor: btnDelete ? 'green' : '#cccccc'},
        ]}>
        <Button
          style={styles.delete}
          disabled={btnDelete}
          title="Delete Values"
        />
      </TouchableOpacity>
    </View>
  );
};

export default TestList;
