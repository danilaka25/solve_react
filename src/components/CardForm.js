/* eslint-disable react-native/no-inline-styles */
// @flow

import React from 'react';
import CheckCard from './CheckCard';
import {connect} from 'react-redux';
import {onSubmit} from '../actions/onSubmit';
// import PropTypes from 'prop-types';

import Server from '../server/index';

import {
  SafeAreaView,
  StyleSheet,
  TextInput,
  View,
  Text,
  Button,
  ScrollView,
  TouchableHighlight,
} from 'react-native';

type Props = {
  onSubmit: (
    firstName: string,
    lastName: string,
    cardNunmber: string,
    formValid: string,
    paySystem: string,
  ) => void,
};

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

    this.handleUserInput = this.handleUserInput.bind(this);

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
        cardNunmber: 'false',
        cardExpirationDate: 'false',
        cvv: 'false',
        firstName: 'false',
        lastName: 'false',
        secretQuestion: 'false',
        secretAnswer: 'false',
      },

      formValid: 'false',
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

  sendData = (data: Array) => {
    Server(data)
      .then(response => {
        //console.log(resp);
        this.setState(
          {formErrors: response.formErrors, formValid: response.formValid},
          () => this.validateForm(),
        );
      })
      .catch(err => console.log(err));
  };

  validateForm = () => {
    console.log('validateForm', this.state.formValid);
    // console.log(this.state.formErrors.lastName);
    //console.log(typeof(this.state.formErrors.lastName));

    this.props.onSubmit(
      this.state.fields.firstName,
      this.state.fields.lastName,
      this.state.fields.cardNunmber,
      this.state.formValid,
      //this.state.paySystem,
    );

    //console.log(this.state.formValid);
    // if (this.state.formErrors.indexOf( 'false' ) != -1 ) {
    //   console.log("yes false")
    // }
  };

  handleSubmit = (event: any) => {
    event.preventDefault();

    this.sendData(this.state); ///////

    //console.log(this.state.formValid);
  };

  render() {
    return (
      <View style={stylesForm.mainActivity}>
        <View style={{height: 60}}>
          <Text>Form</Text>
        </View>

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
              // {
              //   borderBottomColor: this.state.errorsForRedLines
              //     .cardExpirationDate
              //     ? '#ffffff'
              //     : 'red',
              // },
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
              // {
              //   borderBottomColor: this.state.errorsForRedLines.cvv
              //     ? '#ffffff'
              //     : 'red',
              // },
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
              // {
              //   borderBottomColor: this.state.errorsForRedLines.secretQuestion
              //     ? '#ffffff'
              //     : 'red',
              // },
            ]}
            name="secretQuestion"
            placeholder="Secret Question"
            onChangeText={val => this.handleUserInput('secretQuestion', val)}
          />

          <TextInput
            style={[
              stylesForm.formInput,
              stylesForm.inputStandart,
              // {
              //   borderBottomColor: this.state.errorsForRedLines.secretAnswer
              //     ? '#ffffff'
              //     : 'red',
              // },
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

        <CheckCard />
      </View>
    );
  }
}

const stylesForm = StyleSheet.create({
  isInvalid: {
    backgroundColor: '#e8301c',
  },

  errorLine: {
    borderBottomWidth: 1,
  },

  mainActivity: {
    backgroundColor: '#00b5ec',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  cardRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: 20,
    paddingRight: 20,
    marginBottom: 30,
  },

  inputCardnumber: {
    flex: 10,
  },

  inputExpiration: {
    flex: 4,
    marginLeft: 5,
    marginRight: 5,
  },

  inputCvv: {
    flex: 2,
  },

  fieldsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: 20,
    paddingRight: 20,
    marginBottom: 30,

    //backgroundColor: 'skyblue'
  },

  inputStandart: {
    flex: 1,
  },

  // inputContainer: {
  //   width: 300,
  //   height: 50,
  //   backgroundColor: '#999999',

  //   flexDirection: 'row',
  //    alignItems: 'center',
  // },

  formInput: {
    height: 45,
    borderBottomColor: 'yellow',
    borderBottomWidth: 1,
    paddingLeft: 10,
    backgroundColor: '#cccccc',
  },

  formButton: {
    backgroundColor: '#cccccc',
    alignItems: 'center',
    flex: 0.5,
    flexDirection: 'row',
    height: 45,
    justifyContent: 'center',
  },

  formButtonText: {
    color: '#FFFFFF',
    textAlign: 'center',
  },
});

const FormContainer = connect(
  state => ({
    form: state.formReducer,
  }),
  {
    onSubmit,
  },
)(CardForm);

export default FormContainer;
