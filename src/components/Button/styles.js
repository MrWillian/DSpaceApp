import { StyleSheet } from 'react-native';
import colors from '../../assets/colors';

export default StyleSheet.create({
  container: {
    borderRadius: 10,
    margin: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
  },

  primaryBtn: {
    backgroundColor: colors.accent,
  },
  secundaryBtn: {
    backgroundColor: colors.white,
  },
  
  primaryText: {
    color: colors.white,
  },
  secundaryText: {
    color: colors.accent,
  },
});
