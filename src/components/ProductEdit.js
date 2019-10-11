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
  Button,
  TextInput,
} from 'react-native';

class ProductEdit extends React.Component {
  constructor(props) {

    super(props);
    //this._handleCreateBtn = this._handleCreateBtn.bind(this);
    //this.handleUserInput = this.handleUserInput.bind(this);

  
     

    this.state = {
      productName: '',
      productWeight: '',
      productSize: '',
      productCountry: '',
      btnCreate: false,
      btnEdit: true,
      formIsValid: false,
      isFieldEditable: true,
    };
  }

  componentDidMount(prevProps, prevState) {}

  handleUserInput = (inputName, inputValue) => {
    //console.log(e);
    const name = inputName;
    const value = inputValue;
    this.setState(
      {
        [name]: value,
      },
      () => {
        this.validateField(name, value);
      },
    );
  };

 validateField(name, value) {
     if (value.length > 2) {
         this.setState({
             formIsValid: true

         })

         

     }

 }

  handleCreateBtn = () => {
    this.setState({
    //   formIsValid: true,
      btnCreate: true,
      btnEdit: false,
      isFieldEditable: false,
    });
     //console.log(event);

  }

  handleEditBtn = () => {
   this.setState({
    //   formIsValid: true,
      btnCreate: false,
      btnEdit: true,
      isFieldEditable: true,
    });

  }


  render() {
    console.log(this.state);

    return (
      <View style={stylesProduct.productWrapper}>
        <View style={stylesProduct.buttonRow}>
          <Button
            title="Create"
            color="#f194ff"
            onPress={this.handleCreateBtn}
            disabled={this.state.btnCreate}
          />

          <Button
            title="Edit"
            color="#f194ff"
            onPress={this.handleEditBtn}
            disabled={this.state.btnEdit}
          />
        </View>
        <View>
          <TextInput
            style={[stylesProduct.productInput]}
            placeholder="productName"
            onChangeText={val => this.handleUserInput('productName', val)}
            editable={this.state.isFieldEditable}
          />

          <TextInput
            style={[stylesProduct.productInput]}
            placeholder="productWeight"
            onChangeText={val => this.handleUserInput('productWeight', val)}
            editable={this.state.isFieldEditable}
          />

          <TextInput
            style={[stylesProduct.productInput]}
            placeholder="productSize"
            onChangeText={val => this.handleUserInput('productSize', val)}
            editable={this.state.isFieldEditable}
          />

          <TextInput
            style={[stylesProduct.productInput]}
            placeholder="productCountry"
            onChangeText={val => this.handleUserInput('productCountry', val)}
            editable={this.state.isFieldEditable}
          />

          <Text>{JSON.stringify(this.state)} </Text>
        </View>
      </View>
    );
  }
}

const stylesProduct = StyleSheet.create({
  productWrapper: {
    marginTop: Platform.OS === 'ios' ? 35 : 0,
  },

  productInput: {
    height: 45,
    // borderBottomColor: 'yellow',
    // borderBottomWidth: 1,
    paddingLeft: 10,
    backgroundColor: '#cccccc',
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 20,
  },

  buttonRow: {
    marginTop: 30,
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 10,
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

export default ProductEdit;
