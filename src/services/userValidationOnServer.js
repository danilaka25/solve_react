

const callServerMock = (data) => {
  return new Promise(resolve => {
    setTimeout(() => resolve(validateUser(data)), 1000);
  });
};

const validateUser = (data) => {



  const allData = data;
  // const fields = data.fields;

  const fields = {
    phone: allData.phone,
    password: allData.password,
    
  };
  

  //console.log("-----server-----" , data.formErrors)

//   const formErrors = data.formErrors;

//   let formValid = data.formValid;
//   let paySystem = data.paySystem;

 

  

//   if (formErrors.cardNunmber) {
//     +fields.cardNunmber.substring(0, 4) < 2000
//       ? (paySystem = 'VISA')
//       : (paySystem = 'MasterCard');
//   }

//   allDataAfterValidation.paySystem = paySystem;
//   allDataAfterValidation.formErrors = formErrors;
//   allDataAfterValidation.formValid = formValid;

  //return allDataAfterValidation;

  console.log('on server' , fields)
};

//const cardValidationService = (data: State) => callServerMock(data);

class UserValidationOnServer {
  validateUser(data) {
    return callServerMock(data);
  }
}

const userValidationOnServer = new UserValidationOnServer();

export {userValidationOnServer};
