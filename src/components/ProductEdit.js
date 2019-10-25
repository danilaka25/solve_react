// @flow

import React, {Component} from 'react';
//import PropTypes from 'prop-types';

import {
  StyleSheet,
  View,
  Text,
  Alert,
  Platform,
  Button,
  TextInput,
  Picker,
} from 'react-native';

type Props = {};

type State = {
  productName: string,
  productWeight: string,
  productSize: string,
  productCountry: string,
  btnCreate: boolean,
  btnEdit: boolean,
  formIsValid: boolean,
  isFieldEditable: boolean,
};

class ProductEdit extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

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

  handleUserInput = (inputName: string, inputValue: string) => {
    //console.log(e);
    const name = inputName;
    const value = inputValue;
    this.setState(
      {
        [name]: value,
      },
      () => {
        this.validateField();
      },
    );
  };

  handleValueChange = (inputName: string, inputValue: string) => {
    const name = inputName;
    const value = inputValue;

    this.setState(
      {
        [name]: value,
      },
      () => {
        this.validateField();
      },
    );
  };

  validateField() {
    if (
      this.state.productName.length > 2 &&
      this.state.productWeight.length > 2 &&
      this.state.productSize.length > 2 &&
      this.state.productCountry.length > 2
    ) {
      this.setState({
        formIsValid: true,
      });
    } else {
      this.setState({
        formIsValid: false,
      });
    }
  }

  handleCreateBtn = () => {
    if (this.state.formIsValid) {
      this.setState({
        btnCreate: true,
        btnEdit: false,
        isFieldEditable: false,
      });
    } else {
      this.showError();
    }
  };

  handleEditBtn = () => {
    this.setState({
      btnCreate: false,
      btnEdit: true,
      isFieldEditable: true,
    });
  };

  showError = () => {
    Alert.alert('Some of your field is leth then 2 character');
  };

  render() {
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
          {/* <TextInput
            style={[stylesProduct.productInput]}
            placeholder="productCountry"
            onChangeText={val => this.handleUserInput('productCountry', val)}
            editable={this.state.isFieldEditable}
          /> */}

          <Picker
            selectedValue={this.state.productCountry}
            style={[stylesProduct.productPicker]}
            enabled={this.state.isFieldEditable}
            onValueChange={val =>
              this.handleValueChange('productCountry', val)
            }>
            <Picker.Item label="Usa" value="usa" />
            <Picker.Item label="Jahpan" value="jahpan" />
            <Picker.Item label="Germany" value="germany" />
            <Picker.Item label="Ukraine" value="ukraine" />
          </Picker>

          <Text style={{marginTop: 200}}>{JSON.stringify(this.state)} </Text>
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
    paddingLeft: 10,
    backgroundColor: '#cccccc',
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 20,
  },

  productPicker: {
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
