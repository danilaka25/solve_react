/* eslint-disable react-native/no-inline-styles */
// @flow

//import CheckCard from './CheckCard';
//import PropTypes from 'prop-types';
//import onServerValidation from '../services/onServerValidation';
//import formReducer from '../reducers/formReducer';
import React from 'react';
import {connect} from 'react-redux';
import {serverSendData} from '../actions/onSubmit';
import {stylesForm} from '../styles/stylesheet.js';
import {TextInput, View, Text, TouchableHighlight} from 'react-native';

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

class CardForm extends React.Component<Props, State> {
  //static whyDidYouRender = true;

  static defaultProps = {
    cardNunmber: '0000 0000 0000 0000',
    cardExpirationDate: 'MM/YYYY',
    cvv: 'CVV',
    firstName: 'First Name',
    lastName: 'Last Name',
    secretQuestion: 'Secret Question',
    secretAnswer: 'Secret Answer',
  };

  constructor(props: Props) {
    super(props);

    // this.handleUserInput = this.handleUserInput.bind(this);

    this.state = {
      fields: {
        cardNunmber: '',
        cardExpirationDate: '',
        cvv: '',
        firstName: '',
        lastName: '',
        secretQuestion: '',
        secretAnswer: '',
      },

      formErrors: {
        cardNunmber: true,
        cardExpirationDate: true,
        cvv: true,
        firstName: true,
        lastName: true,
        secretQuestion: true,
        secretAnswer: true,
      },

      formValid: false,
      paySystem: '--',
    };
  }

  handleUserInput = (inputName, inputValue) => {
    const name = inputName;
    const value = inputValue;
    this.setState({
      fields: {...this.state.fields, [name]: value},
    });
  };

  handleSubmit = (event: any) => {
    event.preventDefault();
    this.props.serverSendData(this.state);
  };

  render() {
    //console.log('this.props.form', this.props.form);

    const isLoading = this.props.form.serverIsLoading;

    return (
      <>
        {isLoading && (
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
                  borderBottomColor: this.state.formErrors.cardNunmber
                    ? '#ffffff'
                    : 'red',
                },
              ]}
              name="cardNunmber"
              placeholder="Card Nunmber"
              onChangeText={val => this.handleUserInput('cardNunmber', val)}
            />

            <TextInput
              style={[
                stylesForm.formInput,
                stylesForm.inputExpiration,
                {
                  borderBottomColor: this.state.formErrors.cardExpirationDate
                    ? '#ffffff'
                    : 'red',
                },
              ]}
              name="cardExpirationDate"
              placeholder="mm/yyyy"
              onChangeText={val =>
                this.handleUserInput('cardExpirationDate', val)
              }
            />

            <TextInput
              style={[
                stylesForm.formInput,
                stylesForm.inputCvv,
                {
                  borderBottomColor: this.state.formErrors.cvv
                    ? '#ffffff'
                    : 'red',
                },
              ]}
              name="cvv"
              placeholder="cvv"
              onChangeText={val => this.handleUserInput('cvv', val)}
            />
          </View>

          <View style={stylesForm.fieldsRow}>
            <TextInput
              style={[
                stylesForm.formInput,
                stylesForm.inputStandart,
                {
                  borderBottomColor: this.state.formErrors.firstName
                    ? '#ffffff'
                    : 'red',
                },
              ]}
              name="firstName"
              placeholder="First Name"
              onChangeText={val => this.handleUserInput('firstName', val)}
            />
          </View>
          <View style={stylesForm.fieldsRow}>
            <TextInput
              style={[
                stylesForm.formInput,
                stylesForm.inputStandart,
                {
                  borderBottomColor: this.state.formErrors.lastName
                    ? '#ffffff'
                    : 'red',
                },
              ]}
              name="lastName"
              placeholder="Last Name"
              onChangeText={val => this.handleUserInput('lastName', val)}
            />
          </View>

          <View style={stylesForm.fieldsRow}>
            <TextInput
              style={[
                stylesForm.formInput,
                stylesForm.inputStandart,
                {
                  borderBottomColor: this.state.formErrors.secretQuestion
                    ? '#ffffff'
                    : 'red',
                },
              ]}
              name="secretQuestion"
              placeholder="Secret Question"
              onChangeText={val => this.handleUserInput('secretQuestion', val)}
            />
          </View>
          <View style={stylesForm.fieldsRow}>
            <TextInput
              style={[
                stylesForm.formInput,
                stylesForm.inputStandart,
                {
                  borderBottomColor: this.state.formErrors.secretAnswer
                    ? '#ffffff'
                    : 'red',
                },
              ]}
              name="secretAnswer"
              placeholder="Secret Answer"
              onChangeText={val => this.handleUserInput('secretAnswer', val)}
            />
          </View>

          <View style={stylesForm.fieldsRow}>
            <TouchableHighlight
              style={stylesForm.formButton}
              onPress={this.handleSubmit}>
              <Text style={stylesForm.formButtonText}>Sign up</Text>
            </TouchableHighlight>
          </View>

          {/* <CheckCard /> */}
        </View>
      </>
    );
  }
}

const FormContainer = connect(
  state => {
    return {
      form: state.formReducer,
    };
  },
  {
    serverSendData,
  },
)(CardForm);

export default FormContainer;
