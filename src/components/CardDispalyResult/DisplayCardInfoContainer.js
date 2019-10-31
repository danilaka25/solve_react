// @flow
//logic

import React from 'react';
import {connect} from 'react-redux';
import DisplayCardInfo from "./DisplayCardInfo";

type Props = {
  cardNunmber: string,
  cardExpirationDate: string,
  cvv: string,
  firstName: string,
  lastName: string,
  secretQuestion: string,
  secretAnswer: string,
  formData: Object,
};

type State = {
  visible: boolean,
  timerId?: TimeoutID,
  startAt?: number,
};

class DisplayCardInfoContainer extends React.Component<Props, State> {
  //static whyDidYouRender = true;

  static defaultProps = {
    cardNunmber: '0000 0000 0000 0000',
    firstName: 'First Name',
    lastName: 'Last Name',
  };

  state = {
    visible: false,
    timerId: undefined,
    startAt: undefined,
  };

  startTimer = () => {
    const timerId = setTimeout(() => {
      // console.log('clear')
      this.setState({
        visible: false,
        timerId: undefined,
        startAt: undefined,
      });
    }, 1500);
    this.setState({
      visible: true,
      timerId,
      startAt: Date.now(),
    });
  };

  componentDidUpdate = (prevProps: Props) => {
    console.log('prevProps', prevProps.formData);
    if (
      prevProps.formData.fields.firstName ===
        this.props.formData.fields.firstName &&
      prevProps.formData.fields.lastName ===
        this.props.formData.fields.lastName &&
      prevProps.formData.fields.cardNunmber ===
        this.props.formData.fields.cardNunmber &&
      prevProps.formData.fields.cardExpirationDate ===
        this.props.formData.fields.cardExpirationDate &&
      prevProps.formData.fields.cvv === this.props.formData.fields.cvv &&
      prevProps.formData.fields.secretQuestion ===
        this.props.formData.fields.secretQuestion &&
      prevProps.formData.fields.secretAnswer ===
        this.props.formData.fields.secretAnswer
    ) {
      return;
    }

    if (!this.state.visible) {
      return this.startTimer();
    }
    // Timer is already rendered. Reset prev timer + start new timer for 5 sec
    // console.log("update timer");
    const {timerId} = this.state;
    clearTimeout(timerId);
    this.startTimer();
  };

  render() {
    //console.log('formValid', this.props.formData.formValid);

    if (!this.state.visible) {
      return null;
    }

    const isValid = this.props.formData.formValid;

    return <DisplayCardInfo 
    data = {this.props.formData}
    isValid ={isValid}
    //visible ={}
    />;
  }
}

//defaultProps пишем полюбому даже с flow

const DisplayCardInfoReduxContainer = connect(state => {
  return {
    formData: state.formReducer,
  };
})(DisplayCardInfoContainer);

export default DisplayCardInfoReduxContainer;

// export default DisplayCardInfo;
