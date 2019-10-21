/* eslint-disable */
export const onSubmit = (
  firstName,
  lastName,
  cardNunmber,
  formValid,
  paySystem,
) => {
  // validation

  return {
    type: 'ON_SUBMIT',
    payload: {
      firstName,
      lastName,
      cardNunmber,
      formValid,
      paySystem,
    },
  };
};

// payload, err(or), meta
