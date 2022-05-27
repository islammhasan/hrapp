import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';
import {colors} from '../../assets/colors';
import {strings} from '../../strings';

export const PrimaryButton = props => {
  const {title, style, titleStyle} = props;
  return (
    <TouchableOpacity
      {...props}
      activeOpacity={0.8}
      style={[styles.container, style]}>
      <Text style={[styles.titleStyle, titleStyle]} numberOfLines={1}>
        {title || strings.defaultTitle}
      </Text>
    </TouchableOpacity>
  );
};

const styles = ScaledSheet.create({
  container: {
    width: '300@s',
    height: '40@vs',
    backgroundColor: colors.blue,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: '20@s',
    borderRadius: '3@ms',
  },
  titleStyle: {
    fontSize: '18@ms',
    color: colors.white,
    fontWeight: '500',
    textTransform: 'uppercase',
  },
});
