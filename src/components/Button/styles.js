import { StyleSheet } from 'react-native';
import colors from '../../assets/colors';

export const styles = StyleSheet.create({
  container = {
    flex: 1
  },
  text: {
    fontSize: '18',
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
