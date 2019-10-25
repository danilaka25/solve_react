// @flow
import React from 'react';
import {connect} from 'react-redux';

type Props = {
  cardNunmber: string,
  formData: Object,
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
  {},
)(CheckCard);

export default CheckCardContainer;
