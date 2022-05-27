import {verticalScale} from 'react-native-size-matters';
import {colors} from '../assets/colors';

export const navigationOptions = {
  headerShown: false,
  headerBackTitleVisible: false,
  headerTintColor: colors.black,
  headerStyle: {
    height: verticalScale(80),
    borderBottomWidth: 0,
    borderBottomColor: 'transparent',
    shadowColor: 'transparent',
    backgroundColor: colors.white,
    shadowRadius: 0,
    shadowOffset: {
      height: 0,
    },
    elevation: 0,
  },
};
