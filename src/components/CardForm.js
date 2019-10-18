/* eslint-disable */
// @flow

import React, {Component} from 'react';
import CheckCard from './CheckCard';
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
  updateData: (
    firstName: string,
    lastName: string,
    cardNunmber: string,
    formValid: string,
    paySystem: string,
  ) => void,
};

type State = {
  cardNunmber: string,
  cardNunmberValid: boolean,
  cardExpirationDate: string,
  cardExpirationDateValid: boolean,
  cvv: string,
  cvvValid: boolean,
  firstName: string,
  firstNameValid: boolean,
  lastName: string,
  lastNameValid: boolean,
  secretQuestion: string,
  secretQuestionValid: boolean,
  secretAnswer: string,
  secretAnswerValid: boolean,
  formErrors: {
    cardNunmber: string,
    cardExpirationDate: string,
    cvv: string,
    firstName: string,
    lastName: string,
    secretQuestion: string,
    secretAnswer: string,
  },
  formValid: string,
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
      // cardNunmber: '',
      // cardNunmberValid: false,
      // cardExpirationDate: '',
      // cardExpirationDateValid: false,
      // cvv: '',
      // cvvValid: false,
      // firstName: '',
      // firstNameValid: false,
      // lastName: '',
      // lastNameValid: false,
      // secretQuestion: '',
      // secretQuestionValid: false,
      // secretAnswer: '',
      // secretAnswerValid: false,

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
        cardNunmber: 'true',
        cardExpirationDate: 'true',
        cvv: 'true',
        firstName: 'false',
        lastName: 'false',
        secretQuestion: 'true',
        secretAnswer: 'true',
      },

      formValid: 'false',
      paySystem: '--',
    };
  }

  handleUserInput = (inputName, inputValue) => {
    const name = inputName;
    const value = inputValue;
    this.setState(
      {
        fields: {...this.state.fields, [name]: value},
      },
      () => {
        this.validateField(name, value);
      },
    );
  };

  validateField(fieldName: string, value: string) {
    //let fieldValidationErrors = this.state.formErrors;

    let {formErrors} = this.state;

    // switch (fieldName) {
    //   case 'cardNunmber':
    //     fieldName = value.match(/^[0-9]{16}$/);
    //     fieldName
    //       ? (formErrors.cardNunmber = true)
    //       : (formErrors.cardNunmber = false);
    //     break;
    //   case 'cardExpirationDate':
    //     fieldName = value.match(
    //       /((0[1-9])|(1[0-2]))\/[2-9](([1-9]\d\d)|(01[0-9])|(0[2-9]\d))/,
    //     );
    //     fieldName
    //       ? (formErrors.cardExpirationDate = true)
    //       : (formErrors.cardExpirationDate = false);
    //     break;
    //   case 'cvv':
    //     fieldName = value.match(/^[0-9]{3,4}$/);
    //     fieldName
    //       ? (formErrors.cvv = true)
    //       : (formErrors.cvv = false);
    //     break;
    //   case 'firstName':
    //     fieldName = value.match(/([a-zA-Z]{3,30}\s*)+/);
    //     fieldName
    //       ? (formErrors.firstName = true)
    //       : (formErrors.firstName = false);
    //     break;
    //   case 'lastName':
    //     fieldName = value.match(/([a-zA-Z]{3,30}\s*)+/);
    //     fieldName
    //       ? (formErrors.lastName = true)
    //       : (formErrors.lastName = false);
    //     break;
    //   case 'secretQuestion':
    //     fieldName = value.match(/([a-zA-Z]{3,30}\s*)+/);
    //     fieldName
    //       ? (formErrors.secretQuestion = true)
    //       : (formErrors.secretQuestion = false);
    //     break;
    //   case 'secretAnswer':
    //     fieldName = value.match(/([a-zA-Z]{3,30}\s*)+/);
    //     fieldName
    //       ? (formErrors.secretAnswer = true)
    //       : (formErrors.secretAnswer = false);
    //     break;
    //   default:
    //     break;
    // }

    this.setState({
      formErrors: formErrors,
    });
  }

  // zzz Не понял что тут происходит. Перегруженная конструкция, я бы подумал над упрощением

  updateData = (paySystem: string) => {
    if (this.state.paySystem !== paySystem) {
      this.setState({
        paySystem: paySystem,
      });
    }
  };

  sendData = (data: Array) => {
    Server(data)
      .then(response => {
        //console.log(resp);
        this.setState({formErrors: response}, () => this.validateForm());
      })
      .catch(err => console.log(err));
  };

  validateForm = () => {
    //console.log(this.state.formErrors)

    for (let fieldName of Object.keys(this.state.formErrors)) {
      //console.log(this.state.formErrors[fieldName]);
      if (this.state.formErrors[fieldName] === 'false') {
        // form NOT valid

        this.setState({
          formValid: 'false',
        },
        function() {
          this.props.updateData(this.state.formValid);
        })
        return

        

      } 

      
    }

    console.log(this.state.formValid);

    // if (this.state.formErrors.indexOf( 'false' ) != -1 ) {
    //   console.log("yes false")

    // }
  };

  handleSubmit = (event: any) => {
    this.sendData(this.state); ///////

    event.preventDefault();

    // if (
    //   this.state.formErrors.firstName //&&
    //   //this.state.formErrors.lastName === "true"
    // ) {
    //   this.setState(
    //     {
    //       formValid: 'true',
    //     },
    //     function() {
    //       console.log;
    //       // this.props.updateData(
    //       //   this.state.firstName,
    //       //   this.state.lastName,
    //       //   this.state.cardNunmber,
    //       //   this.state.formValid,
    //       //   this.state.paySystem,
    //       // );
    //     },
    //   );
    // } else {
    //   this.setState(
    //     {
    //       formValid: 'false',
    //     },
    //     // function() {
    //     //   this.props.updateData(this.state.formValid);
    //     // },
    //   );
    // }
  };

  render() {
    // console.log("(render) CardForm");
    // console.log("-----FIELDS----");
    // console.log(this.state.fields);
    //console.log(this.state);
    //console.log(this.state.formValid);
    // console.log("----State-----");
    // console.log(this.state.fields.firstName);
    // console.log(this.state.formErrors.firstName);
    //console.log(this.state);

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
              // {
              //   borderBottomColor: this.state.errorsForRedLines.cardNunmber
              //     ? '#ffffff'
              //     : 'red',
              // },
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

        <CheckCard
          cardNunmber={this.state.cardNunmber}
          updateData={this.updateData}
        />
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

export default CardForm;
