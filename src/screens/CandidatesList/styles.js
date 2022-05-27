import {ScaledSheet} from 'react-native-size-matters';
import {colors} from '../../assets/colors';

export const styles = ScaledSheet.create({
  container: {
    backgroundColor: colors.offWhite,
  },
  title: {
    fontSize: '20@ms',
    color: colors.blue,
    marginVertical: '20@vs',
    textTransform: 'uppercase',
    fontWeight: '500',
    marginStart: '20@s',
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
