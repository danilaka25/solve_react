import {StyleSheet} from 'react-native';

export const stylesForm = StyleSheet.create({
  isLoadingView: {
    zIndex: 1,
    backgroundColor: '#cccccc',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },

  isLoadingText: {
    fontSize: 20,
    fontWeight: 'bold',
  },

  formTitle: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 30,
  },

  isInvalid: {
    backgroundColor: '#e8301c',
  },

  errorLine: {
    borderBottomWidth: 1,
  },

  mainActivity: {
    backgroundColor: '#00b5ec',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  cardRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: 20,
    paddingRight: 20,
    marginBottom: 20,
  },

  inputCardnumber: {
    flex: 10,
  },

  inputExpiration: {
    flex: 4,
    marginLeft: 15,
    marginRight: 15,
  },

  inputCvv: {
    flex: 2,
  },

  fieldsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: 20,
    paddingRight: 20,
    marginBottom: 20,
  },

  inputStandart: {
    flex: 1,
  },

  formInput: {
    height: 45,
    borderBottomColor: 'yellow',
    borderBottomWidth: 1,
    paddingLeft: 10,
    backgroundColor: '#cccccc',
  },

  formButton: {
    backgroundColor: 'green',
    alignItems: 'center',
    flex: 1,
    flexDirection: 'row',
    height: 55,
    justifyContent: 'center',
  },

  formButtonText: {
    color: '#FFFFFF',
    textAlign: 'center',
    fontSize: 25,
  },
});

export const stylesPopup = StyleSheet.create({
  modalStyles: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 2,
  },

  popupWrapper: {
    alignItems: 'center',
    flex: 1,

    justifyContent: 'center',
    // backgroundColor: '#999999',
  },

  errorBg: {
    backgroundColor: '#e8301c',
    padding: 30,
    fontSize: 30,
  },

  okBg: {
    backgroundColor: '#82e81c',
    padding: 30,
  },
});
