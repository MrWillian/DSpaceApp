import { StyleSheet } from 'react-native';
import colors from '../../assets/colors';

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center"
  },
  text: {
    position: 'absolute',
    marginTop: 10,
    marginLeft: 10,
    marginRight: 65,
    color: colors.white,
    fontSize: 36,
    fontWeight: 'bold',
  },
  groupButton: {
    flexDirection: 'row',
    width: '100%',
    height: '8%',
    bottom: '5%',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
  }
});
