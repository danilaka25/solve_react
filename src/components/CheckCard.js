/* eslint-disable */
// @flow
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {chekCard} from '../actions/onSubmit';

type Props = {
  cardNunmber: string,
  updateData: (v1: string) => void,
  chekCard: (
    paySystem: string,
  ) => void,
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
    if (this.props.formData.cardNunmber.length === 16) {
      let count: number = +this.props.formData.cardNunmber.substring(0, 4);

      if (this.props.formData.cardNunmber !== prevProps.formData.cardNunmber) {
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

        // console.log('card number', this.props.formData.cardNunmber);

        // console.log('-----', prevProps.cardNunmber);
        // console.log('+++++', this.props.formData.cardNunmber);
      }

      // console.log('card', this.props.formData.cardNunmber);

      //console.log('card type', this.state.paySystem);

     //this.props.onSubmit(this.state.paySystem);
    }
  }

  render() {
    //console.log('card', this.state.paySystem);
    //console.log('(render) CheckCard');
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
