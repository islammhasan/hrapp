import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import { Container } from '../../components';
import { styles } from './styles';

export const CandidatesList = ({navigation}) => {
  return (
    <Container>
      <Text>Candidates List</Text>
      <TouchableOpacity onPress={() => navigation.navigate('Addition')}>
        <Text>Addition</Text>
      </TouchableOpacity>
    </Container>
  );
};
