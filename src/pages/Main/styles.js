import { StyleSheet } from 'react-native';
import colors from '../../assets/colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primary,
  },
  containerSearch: {
    width: '70%',
    height: '5%',
    position: 'absolute',
    flexDirection: 'row',
    alignSelf: 'center',
    marginTop: '5%',
  },
  search: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: colors.secundary,
    borderRadius: 20,
    elevation: 10,
  },
  searchIcon: {
    color: colors.white,
    marginLeft: '5%',
  },
  searchText: {
    color: colors.white,
    width: '80%',
  },
  menuDrawerButton: {
    width: 35,
    height: 35,
    backgroundColor: colors.secundary,
    borderRadius: 35,
    marginLeft: '5%',
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 15,
  },
  menuIcon: {
    color: colors.white,
  }
});
