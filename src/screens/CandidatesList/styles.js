import {ScaledSheet} from 'react-native-size-matters';
import {colors} from '../../assets/colors';

export const styles = ScaledSheet.create({
  container: {
    backgroundColor: colors.offWhite,
  },
  listContainerStyle: {
    paddingHorizontal: '20@s',
    paddingVertical: '10@vs',
  },
  btnStyle: {
    alignSelf: 'center',
  },
  noCandidatesText: {
    color: colors.darkgray,
    fontSize: '16@ms',
    textAlign: 'center',
    marginBottom: '20@vs',
  },
  secondaryContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  separator: {
    height: '15@vs',
  },
});
