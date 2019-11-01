import {
  StyleSheet,
} from 'react-native';

export default styles = StyleSheet.create({
  listItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    //alignItems: 'center',
    flex: 1,
  },
  enabled: {
    color: 'green',
  },
  disabled: {
    color: 'red',
  },
  MainContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    margin: 2,
    marginTop: 40,
  },

  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },

  textInputStyle: {
    textAlign: 'center',
    height: 40,
    width: '90%',
    borderWidth: 1,
    borderColor: '#4CAF50',
    borderRadius: 7,
    marginTop: 12,
  },

  btn: {
    textAlign: 'center',
    height: 40,
    width: '90%',
    borderWidth: 1,
    borderColor: '#cccccc',
    borderRadius: 7,
    marginTop: 12,
  },

  add: {
    width: '90%',
    height: 40,
    padding: 10,
    // backgroundColor: '#4CAF50',
    color: '#ffffff',
    borderRadius: 8,
    marginTop: 10,
    //marginBottom: 10,
  },

  delete: {
    width: '90%',
    height: 40,
    padding: 10,
    backgroundColor: '#4CAF50',
    borderRadius: 8,
    marginTop: 10,
    marginBottom: 70,
  },

  buttonRow: {
    marginBottom: 60,
    //color: '#fff',
    // textAlign: 'center',
  },
});