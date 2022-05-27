import React, {useState} from 'react';
import {Text} from 'react-native';
import {useDispatch} from 'react-redux';
import {Container, PrimaryButton, PrimaryInput} from '../../components';
import {insertCandidate} from '../../redux/candidates';
import {strings} from '../../strings';
import {styles} from './styles';

export const Addition = ({navigation}) => {
  const dispatch = useDispatch();
  const [candidate, setCandidate] = useState({
    fullname: '',
    email: '',
    phone: '',
    position: '',
  });
  const [error, setError] = useState({
    fullname: null,
    email: null,
    phone: null,
    position: null,
  });

  const validation = {
    fullname: Boolean(candidate.full) || candidate.fullname.length < 2,
    email: !String(candidate.email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      ),
    phone: candidate.phone === '' || candidate.phone.length < 2,
    position: candidate.position === '' || candidate.position.length < 2,
  };

  const validate = () => {
    let errors = {};
    if (validation.fullname)
      errors.fullname = '* Full Name should have 2 characters at least';
    if (validation.email) errors.email = '* Invalid email';
    if (validation.phone) errors.phone = '* Invalid phone number';
    if (validation.position) errors.position = '* Invalid input';

    return errors;
  };

  const addCandidate = () => {
    const errors = validate();
    console.log('erros from validate==>', errors);
    if (Object.keys(errors).length) {
      setError(errors);
    } else {
      setError({});
      dispatch(insertCandidate(candidate));
      setCandidate({
        fullname: '',
        email: '',
        phone: '',
        position: '',
      });
      navigation.navigate('CandidatesList');
    }
  };

  const onCandidatesListPress = () => {
    navigation.navigate('CandidatesList');
    setError({});
  };

  return (
    <Container style={styles.container}>
      <Text style={styles.title}>Candidate Info</Text>
      <PrimaryInput
        value={candidate.fullname}
        onChangeText={fullname => {
          setCandidate({...candidate, fullname});
          setError({...error, fullname: null});
        }}
        error={error.fullname}
        placeholder="Full Name"
      />
      <PrimaryInput
        value={candidate.email}
        onChangeText={email => {
          setCandidate({...candidate, email});
          setError({...error, email: null});
        }}
        keyboardType={'email-address'}
        error={error.email}
        placeholder="Email"
      />
      <PrimaryInput
        value={candidate.phone}
        onChangeText={phone => {
          setCandidate({...candidate, phone});
          setError({...error, phone: null});
        }}
        keyboardType={'phone-pad'}
        error={error.phone}
        placeholder="Phone"
      />
      <PrimaryInput
        value={candidate.position}
        onChangeText={position => {
          setCandidate({...candidate, position});
          setError({...error, position: null});
        }}
        error={error.position}
        placeholder="Position"
      />
      <PrimaryButton
        onPress={addCandidate}
        title={strings.addCandidate}
        style={styles.btnStyle}
      />
      <PrimaryButton
        title={'Candidates List'}
        onPress={() => onCandidatesListPress()}
        style={styles.secondaryBtnStyle}
        titleStyle={styles.secondaryBtnTitle}
      />
    </Container>
  );
};
