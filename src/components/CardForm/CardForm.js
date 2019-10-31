// @flow

import React from 'react';
import {TextInput, View, Text, TouchableHighlight} from 'react-native';
import stylesForm from './Styles';
// import {connect} from 'react-redux';
// import {serverSendData} from '../../actions/onSubmit';

type State = {
  fields: {
    cardNunmber: string,
    cardExpirationDate: string,
    cvv: string,
    firstName: string,
    lastName: string,
    secretQuestion: string,
    secretAnswer: string,
  },

  formErrors: {
    cardNunmber: boolean,
    cardExpirationDate: boolean,
    cvv: boolean,
    firstName: boolean,
    lastName: boolean,
    secretQuestion: boolean,
    secretAnswer: boolean,
  },

  formValid: boolean,
  paySystem: string,
};

type Props = {
  data: State,
  formIsLoading: boolean,
  handleUserInput: (inputName: string, inputName: string) => void,
  handleSubmit: () => void,
};

const CardForm = ({
  data,
  formIsLoading,
  handleUserInput,
  handleSubmit,
}: Props) => {

  return (
    <>
      {formIsLoading && (
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
            onChangeText={val =>
              handleUserInput('cardExpirationDate', val)
            }
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

export default CardForm;
