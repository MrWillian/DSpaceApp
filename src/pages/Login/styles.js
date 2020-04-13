import { StyleSheet } from 'react-native';
import colors from '../../assets/colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primary,
    paddingTop: 30,
    paddingLeft: 30,
    paddingRight: 30,
  },
  titleText: {
    fontSize: 36,
    fontWeight: 'bold',
    color: colors.font,
  },
  subTitleText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: colors.font,
  },
  form: {
    paddingTop: 50,
    width: '100%',
    height: '70%',
  }
});
