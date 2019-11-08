import {
  StyleSheet,
} from 'react-native';

export default stylesProduct = StyleSheet.create({
  productWrapper: {
    marginTop: Platform.OS === 'ios' ? 35 : 0,
  },

  productInput: {
    height: 45,
    paddingLeft: 10,
    backgroundColor: '#cccccc',
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 20,
  },

  productPicker: {
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 20,
  },

  buttonRow: {
    marginTop: 30,
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 10,
  },

  listItem: {
    flexDirection: 'row',
    height: 60,
    color: '#999999',
    borderBottomColor: '#999999',
    borderBottomWidth: 0.5,
    alignItems: 'center',
  },

  listInfo: {
    alignItems: 'flex-start',
    paddingLeft: 20,
  },
});