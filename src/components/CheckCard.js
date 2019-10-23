/* eslint-disable */
// @flow
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {chekCard} from '../actions/onSubmit';

type Props = {
  cardNunmber: string,
  updateData: (v1: string) => void,
  chekCard: (paySystem: string) => void,
};

type State = {
  paySystem: string,
};

class CheckCard extends React.Component<Props, State> {
  //static whyDidYouRender = true;

  static defaultProps = {
    cardNunmber: '0000 0000 0000 0000',
  };

  state = {
    paySystem: '',
  };

  componentDidUpdate(prevProps: Props) {
    //console.log('chekCars', this.props.formData.cardNunmber.length);
    if (this.props.formData.fields.cardNunmber.length === 16) {
      let count: number = +this.props.formData.fields.cardNunmber.substring(
        0,
        4,
      );

      if (
        this.props.formData.fields.cardNunmber !==
        prevProps.formData.fields.cardNunmber
      ) {
        //console.log('chekCars', this.props.formData.cardNunmber);
        if (count < 2000) {
          this.setState(
            {
              paySystem: 'Visa',
            },
            () => {
              this.props.chekCard(this.state.paySystem);
            },
          );
        } else {
          this.setState(
            {
              paySystem: 'MasterCard',
            },
            () => {
              this.props.chekCard(this.state.paySystem);
            },
          );
        }
      }
    }
  }

  render() {
    return null;
  }
}

const CheckCardContainer = connect(
  state => ({
    formData: state.formReducer,
  }),
  {
    chekCard,
  },
)(CheckCard);

export default CheckCardContainer;
