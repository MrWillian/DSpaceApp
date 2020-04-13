import { StyleSheet } from 'react-native';
import colors from '../../assets/colors';

export default StyleSheet.create({
  container: {
    width: '40%',
    height: '100%',
    borderRadius: 10,
    margin: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
  },

  loginBtn: {
    backgroundColor: colors.accent,
  },
  registerBtn: {
    backgroundColor: colors.white,
  },
  loginText: {
    color: colors.white,
  },
  registerText: {
    color: colors.accent,
  },
});
