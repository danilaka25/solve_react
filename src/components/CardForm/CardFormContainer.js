// @flow
// logic

import React from 'react';
import CardForm from './CardForm';
import {connect} from 'react-redux';
import {serverSendData} from '../../actions/onSubmit';

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
  serverSendData: (State) => void,
  handleUserInput: (inputName: string, inputName: string) => void,
  form: State,
//   serverIsLoading: boolean,
 };

class CardFormContainer extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

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
      serverIsLoading: false,
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

    //formIsLoading = this.props.form.serverIsLoading;

    return (
      <CardForm
        data = {this.props.form}
        formIsLoading={this.props.form.serverIsLoading}
        handleUserInput={this.handleUserInput}
        handleSubmit={this.handleSubmit}
      />
    );
  }
}

const FormReduxContainer = connect(
  state => {
    return {
      form: state.formReducer,
    };
  },
  {
    serverSendData,
  },
)(CardFormContainer);

export default FormReduxContainer;
