/* eslint-disable react-native/no-inline-styles */
// @flow

//import CheckCard from './CheckCard';
//import PropTypes from 'prop-types';
//import onServerValidation from '../services/onServerValidation';
//import formReducer from '../reducers/formReducer';
import React from 'react';
import {connect} from 'react-redux';
import {serverSendData} from '../actions/onSubmit';
import {
  TextInput,
  View,
  Text,
  TouchableHighlight,
  StyleSheet,
} from 'react-native';

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
  serverSendData: State => void,
  form: Object,
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

  handleUserInput = (inputName: string, inputValue: string) => {
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

    const formIsLoading = this.props.form.serverIsLoading;

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
                  borderBottomColor: this.state.formErrors.cardNunmber
                    ? '#ffffff'
                    : 'red',
                },
              ]}
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

const stylesForm = StyleSheet.create({
  isLoadingView: {
    zIndex: 999,
    backgroundColor: '#cccccc',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },

  isLoadingText: {
    fontSize: 20,
    fontWeight: 'bold',
  },

  formTitle: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 30,
  },

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
    marginBottom: 20,
  },

  inputCardnumber: {
    flex: 10,
  },

  inputExpiration: {
    flex: 4,
    marginLeft: 15,
    marginRight: 15,
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
    marginBottom: 20,
  },

  inputStandart: {
    flex: 1,
  },

  formInput: {
    height: 45,
    borderBottomColor: 'yellow',
    borderBottomWidth: 1,
    paddingLeft: 10,
    backgroundColor: '#cccccc',
  },

  formButton: {
    backgroundColor: 'green',
    alignItems: 'center',
    flex: 1,
    flexDirection: 'row',
    height: 55,
    justifyContent: 'center',
  },

  formButtonText: {
    color: '#FFFFFF',
    textAlign: 'center',
    fontSize: 25,
  },
});

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
