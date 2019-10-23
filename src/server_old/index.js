/* eslint-disable */

const Server = data => {
  return new Promise(resolve => {
    setTimeout(() => resolve(validateFormOnServer(data)), 1000);
  });
};

const validateFormOnServer = data => {
  
  const allDataAfterValidation = data;

  const fields = data.fields;
  const formErrors = data.formErrors;

  let formValid = data.formValid;

  formValid = true;
  //console.log(formValid);

  for (let fieldName of Object.keys(fields)) {
    // console.log(fieldName);
    // console.log(fields[fieldName]);

    switch (fieldName) {
      case 'cardNunmber':
        fieldName = fields[fieldName].match(/^[0-9]{16}$/);
        fieldName
          ? (formErrors.cardNunmber = true)
          : (formErrors.cardNunmber = false, formValid = false);
        break;
      case 'cardExpirationDate':
        fieldName = fields[fieldName].match(
          /((0[1-9])|(1[0-2]))\/[2-9](([1-9]\d\d)|(01[0-9])|(0[2-9]\d))/,
        );
        fieldName
          ? (formErrors.cardExpirationDate = true)
          : (formErrors.cardExpirationDate = false);
        break;
      case 'cvv':
        fieldName = fields[fieldName].match(/^[0-9]{3,4}$/);
        fieldName ? (formErrors.cvv = true) : (formErrors.cvv = false);
        break;
      case 'firstName':
        fieldName = fields[fieldName].match(/([a-zA-Z]{3,30}\s*)+/);
        fieldName
          ? (formErrors.firstName = true)
          : (formErrors.firstName = false, formValid = false)
        break;
      case 'lastName':
        fieldName = fields[fieldName].match(/([a-zA-Z]{3,30}\s*)+/);
        fieldName
          ? (formErrors.lastName = true)
          : (formErrors.lastName = false , formValid = false);
        break;
      case 'secretQuestion':
        fieldName = fields[fieldName].match(/([a-zA-Z]{3,30}\s*)+/);
        fieldName
          ? (formErrors.secretQuestion = true)
          : (formErrors.secretQuestion = false);
        break;
      case 'secretAnswer':
        fieldName = fields[fieldName].match(/([a-zA-Z]{3,30}\s*)+/);
        fieldName
          ? (formErrors.secretAnswer = true)
          : (formErrors.secretAnswer = false);
        break;
      default:
        break;
    }
  }

  allDataAfterValidation.formErrors = formErrors;
  allDataAfterValidation.formValid = formValid;

   //console.log(formErrors.firstName)
   //console.log(formValid);
   
  return allDataAfterValidation;
};

export default Server;