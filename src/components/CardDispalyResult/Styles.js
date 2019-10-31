import {
  StyleSheet,
} from 'react-native';

export default stylesPopup = StyleSheet.create({
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