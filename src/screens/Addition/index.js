import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import { Container } from '../../components';
import { styles } from './styles';

export const Addition = ({navigation}) => {
  return (
    <Container>
      <Text>Addition</Text>
      <TouchableOpacity onPress={() => navigation.navigate('CandidatesList')}>
        <Text>Candidates List</Text>
      </TouchableOpacity>
    </Container>
  );
};
