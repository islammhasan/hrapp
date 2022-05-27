import {ScaledSheet} from 'react-native-size-matters';
import {colors} from '../../assets/colors';

export const styles = ScaledSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: '20@ms',
    color: colors.blue,
    marginBottom: '20@vs',
    textTransform: 'uppercase',
    fontWeight: '500',
  },
  btnStyle: {
    marginTop: '50@vs',
  },
  secondaryBtnStyle: {
    backgroundColor: null,
    marginTop: '10@vs',
  },
  secondaryBtnTitle: {
    color: colors.blue,
    fontSize: 16,
  },
});
