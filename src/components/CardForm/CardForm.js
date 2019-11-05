// @flow

import React from 'react';
import {TextInput, View, Text, TouchableHighlight} from 'react-native';
import stylesForm from './Styles';
import {useCardForm} from './useCardForm';
import {connect} from 'react-redux';

const CardForm = (form) => {
  const {data, handleUserInput, handleSubmit} = useCardForm();

  //console.log("********INPUTS*********", data)
  //console.log('********INPUTS*********', form.form.serverIsLoading);

  return (
    <>
      {form.form.serverIsLoading && (
        <View style={stylesForm.isLoadingView}>
          <Text style={stylesForm.isLoadingText}>Is loading ... </Text>
        </View>
      )}
      <View style={stylesForm.mainActivity}>
        <Text style={stylesForm.formTitle}>CARD FORM</Text>

        <View style={stylesForm.cardRow}>
          <TextInput
            style={[
              stylesForm.formInput,
              stylesForm.inputCardnumber,
              {
                borderBottomColor: data.formErrors.cardNunmber
                  ? '#ffffff'
                  : 'red',
              },
            ]}
            placeholder="Card Nunmber"
            onChangeText={val => handleUserInput('cardNunmber', val)}
          />

          <TextInput
            style={[
              stylesForm.formInput,
              stylesForm.inputExpiration,
              {
                borderBottomColor: data.formErrors.cardExpirationDate
                  ? '#ffffff'
                  : 'red',
              },
            ]}
            placeholder="mm/yyyy"
            onChangeText={val => handleUserInput('cardExpirationDate', val)}
          />

          <TextInput
            style={[
              stylesForm.formInput,
              stylesForm.inputCvv,
              {
                borderBottomColor: data.formErrors.cvv ? '#ffffff' : 'red',
              },
            ]}
            placeholder="cvv"
            onChangeText={val => handleUserInput('cvv', val)}
          />
        </View>

        <View style={stylesForm.fieldsRow}>
          <TextInput
            style={[
              stylesForm.formInput,
              stylesForm.inputStandart,
              {
                borderBottomColor: data.formErrors.firstName
                  ? '#ffffff'
                  : 'red',
              },
            ]}
            placeholder="First Name"
            onChangeText={val => handleUserInput('firstName', val)}
          />
        </View>
        <View style={stylesForm.fieldsRow}>
          <TextInput
            style={[
              stylesForm.formInput,
              stylesForm.inputStandart,
              {
                borderBottomColor: data.formErrors.lastName ? '#ffffff' : 'red',
              },
            ]}
            placeholder="Last Name"
            onChangeText={val => handleUserInput('lastName', val)}
          />
        </View>

        <View style={stylesForm.fieldsRow}>
          <TextInput
            style={[
              stylesForm.formInput,
              stylesForm.inputStandart,
              {
                borderBottomColor: data.formErrors.secretQuestion
                  ? '#ffffff'
                  : 'red',
              },
            ]}
            placeholder="Secret Question"
            onChangeText={val => handleUserInput('secretQuestion', val)}
          />
        </View>
        <View style={stylesForm.fieldsRow}>
          <TextInput
            style={[
              stylesForm.formInput,
              stylesForm.inputStandart,
              {
                borderBottomColor: data.formErrors.secretAnswer
                  ? '#ffffff'
                  : 'red',
              },
            ]}
            placeholder="Secret Answer"
            onChangeText={val => handleUserInput('secretAnswer', val)}
          />
        </View>

        <View style={stylesForm.fieldsRow}>
          <TouchableHighlight
            style={stylesForm.formButton}
            onPress={handleSubmit}>
            <Text style={stylesForm.formButtonText}>Sign up</Text>
          </TouchableHighlight>
        </View>

        {/* <CheckCard /> */}
      </View>
    </>
  );
};

const FormReduxContainer = connect(
  state => {
    return {
      form: state.formReducer,
    };
  }
)(CardForm);

export default FormReduxContainer;

