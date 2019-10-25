// @flow

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

const callServerMock = (data: State) => {
  return new Promise<State>(resolve => {
    setTimeout(() => resolve(validateFormOnServer(data)), 1000);
  });
};

const validateFormOnServer = (data: State) => {
  const allDataAfterValidation = data;
  const fields = data.fields;
  const formErrors = data.formErrors;

  let formValid = data.formValid;
  let paySystem = data.paySystem;

  formValid = true;

  for (let fieldName of Object.keys(fields)) {
    switch (fieldName) {
      case 'cardNunmber':
        fieldName = fields[fieldName].match(/^[0-9]{16}$/);
        fieldName
          ? (formErrors.cardNunmber = true)
          : ((formErrors.cardNunmber = false), (formValid = false));
        break;
      case 'cardExpirationDate':
        fieldName = fields[fieldName].match(
          /((0[1-9])|(1[0-2]))\/[2-9](([1-9]\d\d)|(01[0-9])|(0[2-9]\d))/,
        );
        fieldName
          ? (formErrors.cardExpirationDate = true)
          : ((formErrors.cardExpirationDate = false), (formValid = false));
        break;
      case 'cvv':
        fieldName = fields[fieldName].match(/^[0-9]{3,4}$/);
        fieldName
          ? (formErrors.cvv = true)
          : ((formErrors.cvv = false), (formValid = false));
        break;
      case 'firstName':
        fieldName = fields[fieldName].match(/([a-zA-Z]{3,30}\s*)+/);
        fieldName
          ? (formErrors.firstName = true)
          : ((formErrors.firstName = false), (formValid = false));
        break;
      case 'lastName':
        fieldName = fields[fieldName].match(/([a-zA-Z]{3,30}\s*)+/);
        fieldName
          ? (formErrors.lastName = true)
          : ((formErrors.lastName = false), (formValid = false));
        break;
      case 'secretQuestion':
        fieldName = fields[fieldName].match(/([a-zA-Z]{3,30}\s*)+/);
        fieldName
          ? (formErrors.secretQuestion = true)
          : ((formErrors.secretQuestion = false), (formValid = false));
        break;
      case 'secretAnswer':
        fieldName = fields[fieldName].match(/([a-zA-Z]{3,30}\s*)+/);
        fieldName
          ? (formErrors.secretAnswer = true)
          : ((formErrors.secretAnswer = false), (formValid = false));
        break;
      default:
        break;
    }
  }

  if (formErrors.cardNunmber) {
    +fields.cardNunmber.substring(0, 4) < 2000
      ? (paySystem = 'VISA')
      : (paySystem = 'MasterCard');
  }

  allDataAfterValidation.paySystem = paySystem;
  allDataAfterValidation.formErrors = formErrors;
  allDataAfterValidation.formValid = formValid;

  return allDataAfterValidation;
};

//const cardValidationService = (data: State) => callServerMock(data);

class CardValidationService {
  validateCreditCard(data: State) {
    return callServerMock(data);
  }
}

const cardValidationService = new CardValidationService();

export {cardValidationService};
