import React from 'react';
import {View, Text} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';
import {colors} from '../../assets/colors';
import {PrimaryButton} from '../PrimaryButton';

export const ListItem = ({item, removeItem}) => {
  return (
    <View style={styles.container}>
      <View style={styles.nameContainer}>
        <Text style={styles.nameStyle}>{item.fullname}</Text>
      </View>
      <Text style={styles.headingStyle}>Email:</Text>
      <Text style={styles.subHeadingStyle}>{item.email}</Text>
      <Text style={styles.headingStyle}>Phone:</Text>
      <Text style={styles.subHeadingStyle}>{item.phone}</Text>
      <Text style={styles.headingStyle}>Position:</Text>
      <Text style={styles.subHeadingStyle}>{item.position}</Text>
      <PrimaryButton
        title={'Remove Candidate'}
        onPress={removeItem}
        style={styles.btnStyle}
        titleStyle={styles.btnTitleStyle}
      />
    </View>
  );
};

const styles = ScaledSheet.create({
  container: {
    backgroundColor: colors.white,
    shadowColor: colors.darkgray,
    shadowOffset: {
      width: 0,
      height: '2@vs',
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    paddingHorizontal: '15@s',
    paddingVertical: '10@vs',
    borderRadius: 3,
  },
  nameContainer: {
    borderBottomWidth: '1@vs',
    borderBottomColor: colors.gray,
  },
  nameStyle: {
    fontSize: 22,
    marginVertical: 10,
    color: colors.darkgray,
  },
  headingStyle: {
    fontSize: 16,
    marginTop: 10,
    color: colors.darkgray,
  },
  subHeadingStyle: {
    fontSize: 16,
    color: colors.subheading,
    marginTop: 10,
  },
  btnStyle: {
    width: null,
    height: '30@vs',
    backgroundColor: null,
    paddingHorizontal: '5@s',
    alignSelf: 'center',
    marginTop: '10@vs',
  },
  btnTitleStyle: {
    color: colors.red,
    fontSize: '14@ms',
    fontWeight: '400',
  },
});
