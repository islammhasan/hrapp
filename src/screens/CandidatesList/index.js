import React from 'react';
import {View, Text, FlatList, Alert} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {Container, PrimaryButton, ListItem} from '../../components';
import {removeCandidate} from '../../redux/candidates';
import {strings} from '../../strings';
import {styles} from './styles';

export const CandidatesList = ({navigation}) => {
  const candidates = useSelector(state => state.candidates.data);
  const dispatch = useDispatch();

  const deleteCandidate = item => {
    Alert.alert(
      'Warning',
      `You are about to delete "${item.fullname}" info, this action can not be undone! `,
      [
        {
          text: 'CANCEL',
          style: 'cancel',
        },
        {
          text: 'DELETE',
          onPress: () => dispatch(removeCandidate(item.id)),
          style: 'destructive',
        },
      ],
    );
  };

  const renderItem = ({item}) => {
    return <ListItem removeItem={() => deleteCandidate(item)} item={item} />;
  };

  const separator = () => {
    return <View style={styles.separator} />;
  };

  const noCandidates = candidates.length > 0;

  return (
    <Container style={styles.container}>
      {noCandidates ? (
        <FlatList
          data={candidates}
          contentContainerStyle={styles.listContainerStyle}
          showsVerticalScrollIndicator={false}
          keyExtractor={item => item.id.toString()}
          renderItem={renderItem}
          ItemSeparatorComponent={separator}
        />
      ) : (
        <View style={styles.secondaryContainer}>
          <Text style={styles.noCandidatesText}>{strings.noCandidatesTxt}</Text>
          <PrimaryButton
            title="Add Candidate"
            style={styles.btnStyle}
            onPress={() => navigation.goBack()}
          />
        </View>
      )}
    </Container>
  );
};
