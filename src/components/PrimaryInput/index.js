import React, {useState} from 'react';
import {View, TextInput, Text} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';
import {colors} from '../../assets/colors';
import {strings} from '../../strings';

export const PrimaryInput = props => {
  const {placeholder, containerStyle, inputStyle, keyboardType, error} = props;
  const [isFocused, setIsFocused] = useState(false);

  return (
    <>
      <View
        style={[
          styles.inputContainer,
          error && styles.containerError,
          isFocused & !error && styles.containerFocused,
          containerStyle,
        ]}>
        <TextInput
          placeholderTextColor={colors.gray}
          placeholder={placeholder || strings.defaultPlaceholder}
          style={[styles.inputStyle, inputStyle]}
          keyboardType={keyboardType || 'default'}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          {...props}
        />
      </View>
      {error && <Text style={styles.errorTxt}>{error}</Text>}
    </>
  );
};

const styles = ScaledSheet.create({
  inputContainer: {
    marginHorizontal: '20@s',
    height: '50@vs',
    borderBottomWidth: 1,
    borderBottomColor: colors.gray,
    flexDirection: 'row',
    alignItems: 'flex-end',
    backgroundColor: colors.white,
  },
  containerFocused: {
    borderBottomColor: colors.blue,
  },
  containerError: {
    borderBottomColor: colors.red,
  },
  inputStyle: {
    fontSize: '16@ms',
    height: '40@vs',
    color: colors.darkgray,
    flex: 1,
  },
  errorTxt: {
    color: colors.red,
    marginTop: '10@vs',
    alignSelf: 'flex-start',
    marginStart: '20@s',
  },
});
