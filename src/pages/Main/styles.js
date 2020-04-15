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
  },
  containerBottomButtons: {
    width: '100%',
    height: '10%',
    position: 'absolute',
    bottom: 0,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnLeft: {
    width: 35,
    height: 35,
    backgroundColor: colors.secundary,
    borderRadius: 35,
    elevation: 15,
    margin: '5%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnMiddle: {
    width: 60,
    height: 60,
    backgroundColor: colors.accent,
    borderRadius: 60,
    elevation: 15,
    margin: '5%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    color: colors.white
  },
  btnRight: {
    width: 35,
    height: 35,
    backgroundColor: colors.secundary,
    borderRadius: 35,
    elevation: 15,
    margin: '5%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  }
});
