import React from 'react';
import {View, Text, Button, TextInput} from 'react-native';
import stylesProduct from './Styles';


const FormComponent = ({
    handleCreateBtn,
    handleEditBtn,
    //    productName,
    //     productWeight,
        btnCreate,
        btnEdit,
    //     formIsValid,
        isFieldEditable,
        handleUserInput
}) => {

  return (
    <>

      <View style={stylesProduct.productWrapper}>
          <View style={stylesProduct.buttonRow}>
            <Button
              title="Create"
              color="#f194ff"
              onPress={handleCreateBtn}
              disabled={btnCreate}
            />
            <Button
              title="Edit"
              color="#f194ff"
              onPress={handleEditBtn}
              disabled={btnEdit}
            />
          </View>
          <View>
            <TextInput
              style={[stylesProduct.productInput]}
              placeholder="productName"
              onChangeText={val => handleUserInput('productName', val)}
              editable={isFieldEditable}
            />
            <TextInput
              style={[stylesProduct.productInput]}
              placeholder="productWeight"
              onChangeText={val => handleUserInput('productWeight', val)}
             editable={isFieldEditable}
            />

            {/* <Text style={{marginTop: 200}}>{JSON.stringify(this.state)} </Text> */}
          </View>

          
        </View>
    </>
  );
};

export default FormComponent;