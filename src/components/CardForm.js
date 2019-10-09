/* eslint-disable */
// @flow

import React, {Component} from 'react';
import CheckCard from './CheckCard';
// import PropTypes from 'prop-types';

import {
  SafeAreaView,
  StyleSheet,
  TextInput,
  View,
  Text,
  Button,
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

    this.handleUserInput= this.handleUserInput.bind(this);


    this.state = {
      cardNunmber: '',
      cardNunmberValid: false,
      cardExpirationDate: '',
      cardExpirationDateValid: false,
      cvv: '',
      cvvValid: false,
      firstName: '',
      firstNameValid: false,
      lastName: '',
      lastNameValid: false,
      secretQuestion: '',
      secretQuestionValid: false,
      secretAnswer: '',
      secretAnswerValid: false,
      formErrors: {
        cardNunmber: '',
        cardExpirationDate: '',
        cvv: '',
        firstName: '',
        lastName: '',
        secretQuestion: '',
        secretAnswer: '',
      },
      formValid: 'false',
      paySystem: '--',
    };
  }

  handleUserInput = (inputName, inputValue) => {
    //console.log(e);
    const name =  inputName;
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

  validateField(fieldName: string, value: string) {
    let fieldValidationErrors = this.state.formErrors;
    let cardNunmberValid = this.state.cardNunmberValid;
    let cardExpirationDateValid = this.state.cardExpirationDateValid;
    let cvvValid = this.state.cvvValid;
    let firstNameValid = this.state.firstNameValid;
    let lastNameValid = this.state.lastNameValid;
    let secretQuestionValid = this.state.secretQuestionValid;
    let secretAnswerValid = this.state.secretAnswerValid;
    switch (fieldName) {
      case 'cardNunmber':
        fieldName = value.match(/^[0-9]{16}$/);
        if (fieldName) {
          cardNunmberValid = true;
          fieldValidationErrors.cardNunmber = '';
        } else {
          cardNunmberValid = false;
          fieldValidationErrors.cardNunmber = ' is invalid';
        }
        break;
      case 'cardExpirationDate':
        fieldName = value.match(
          /((0[1-9])|(1[0-2]))\/[2-9](([1-9]\d\d)|(01[0-9])|(0[2-9]\d))/,
        );
        if (fieldName) {
          cardExpirationDateValid = true;
          fieldValidationErrors.cardExpirationDate = '';
        } else {
          cardExpirationDateValid = false;
          fieldValidationErrors.cardExpirationDate = ' is invalid';
        }
        break;
      case 'cvv':
        fieldName = value.match(/^[0-9]{3,4}$/);
        if (fieldName) {
          cvvValid = true;
          fieldValidationErrors.cvv = '';
        } else {
          cvvValid = false;
          fieldValidationErrors.cvv = ' is invalid';
        }
        break;

      case 'firstName':
        fieldName = value.match(/([a-zA-Z]{3,30}\s*)+/);
        if (fieldName) {
          firstNameValid = true;
          fieldValidationErrors.firstName = '';
        } else {
          firstNameValid = false;
          fieldValidationErrors.firstName = ' is invalid';
        }
        break;
      case 'lastName':
        fieldName = value.match(/([a-zA-Z]{3,30}\s*)+/);
        if (fieldName) {
          lastNameValid = true;
          fieldValidationErrors.lastName = '';
        } else {
          lastNameValid = false;
          fieldValidationErrors.lastName = ' is invalid';
        }
        break;
      case 'secretQuestion':
        fieldName = value.match(/([a-zA-Z]{3,30}\s*)+/);
        if (fieldName) {
          secretQuestionValid = true;
          fieldValidationErrors.secretQuestion = '';
        } else {
          secretQuestionValid = false;
          fieldValidationErrors.secretQuestion = ' is invalid';
        }
        break;
      case 'secretAnswer':
        fieldName = value.match(/([a-zA-Z]{3,30}\s*)+/);
        if (fieldName) {
          secretAnswerValid = true;
          fieldValidationErrors.secretAnswer = '';
        } else {
          secretAnswerValid = false;
          fieldValidationErrors.secretAnswer = ' is invalid';
        }
        break;
      default:
        break;
    }
    this.setState({
      formErrors: fieldValidationErrors,
      cardNunmberValid: cardNunmberValid,
      cardExpirationDateValid: cardExpirationDateValid,
      cvvValid: cvvValid,
      firstNameValid: firstNameValid,
      lastNameValid: lastNameValid,
      secretQuestionValid: secretQuestionValid,
      secretAnswerValid: secretAnswerValid,
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

  handleSubmit = (event: any) => {
    event.preventDefault();
    if (
      //this.state.cardNunmberValid &&
      // this.state.cardExpirationDateValid &&
      // this.state.cvvValid &&
      this.state.firstNameValid &&
      this.state.lastNameValid
      // this.state.secretQuestionValid &&
      // this.state.secretAnswerValid
    ) {
      this.setState(
        // zzz  6) Думаю эта функция работает, но выглядит неправильно с точки зрения чистого кода
        {
          formValid: 'true',
        },
        function() {
          this.props.updateData(
            this.state.firstName,
            this.state.lastName,
            this.state.cardNunmber,
            this.state.formValid,
            this.state.paySystem,
          );
        },
      );
    } else {
      this.setState(
        {
          formValid: 'false',
        },
        function() {
          this.props.updateData(this.state.formValid);
        },
      );
    }
  };

  errorClass(error: Object) {
    return error.length === 0 ? '' : 'has-error';
  }

  render() {
    //  console.log("(render) CardForm");
    console.log(this.state);
    return (
      <View>
        <View>
          <Text>Form</Text>
          <View className="card_row">
                    <View
                      className={`form-group ${this.errorClass(
                        this.state.formErrors.cardNunmber,
                      )}`}>
                      <TextInput
                
                        // className="form-control"
                        name="cardNunmber"
                        placeholder="Card Nunmber"
                        
                        onChangeText={val => this.handleUserInput("cardNunmber", val)}
                      />
                    </View>
                    {/* <View
                      className={`form-group ${this.errorClass(
                        this.state.formErrors.cardExpirationDate,
                      )}`}>
                      <TextInput
                        
                        className="form-control"
                        name="cardExpirationDate"
                        placeholder="mm/yyyy"
                        
                        onChangeText={val => this.handleUserInput("cardExpirationDate", val)}
                      />
                    </View> */}
                    <View
                      className={`form-group ${this.errorClass(
                        this.state.formErrors.cvv,
                      )}`}>
                      <TextInput
                         
                        className="form-control"
                        name="cvv"
                        placeholder="cvv"
                        value={this.state.cvv}
                        onChangeText={this.handleUserInput}
                      />
                    </View>
          </View>
          
            <View
              className={`col-md-6 form-group ${this.errorClass(
                this.state.formErrors.firstName,
              )}`}>
              <TextInput
                 
                // className="form-control"
                name="firstName"
                placeholder="First Name"
                //value={this.state.firstName}
                onChangeText={val => this.handleUserInput("firstName", val)}
              />
            </View>
            <View
              className={`col-md-6 form-group ${this.errorClass(
                this.state.formErrors.lastName,
              )}`}>
              <TextInput
               
                // className="form-control"
                name="lastName"
                placeholder="Last Name"
                //value={this.state.lastName}
                onChangeText={val => this.handleUserInput("lastName", val)}
              />
            </View>
            {/* <View className="row">
          </View>
          <View className="row">
            <View
              className={`col-md-6 form-group ${this.errorClass(
                this.state.formErrors.secretQuestion,
              )}`}>
              <TextInput
                type="text"
                className="form-control"
                name="secretQuestion"
                placeholder="Secret Question"
                value={this.state.secretQuestion}
                onChange={this.handleUserInput}
              />
            </View>
            <View
              className={`col-md-6 form-group ${this.errorClass(
                this.state.formErrors.secretAnswer,
              )}`}>
              <TextInput
                type="text"
                className="form-control"
                name="secretAnswer"
                placeholder="Secret Answer"
                value={this.state.secretAnswer}
                onChange={this.handleUserInput}
              />
            </View> */}
           


           <View><Button onPress={this.handleSubmit} title="Sign up" /></View>


        </View>
        <CheckCard cardNunmber={this.state.cardNunmber} updateData={this.updateData} />
      </View>
    );
  }
}

export default CardForm;
