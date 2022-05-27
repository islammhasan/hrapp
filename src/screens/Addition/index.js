import React, {useState} from 'react';
import {Text} from 'react-native';
import {useDispatch} from 'react-redux';
import {Container, PrimaryButton, PrimaryInput} from '../../components';
import {insertCandidate} from '../../redux/candidates';
import {strings} from '../../strings';
import {styles} from './styles';

export const Addition = ({navigation}) => {
  const [fullname, setFullname] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [position, setPosition] = useState('');
  const [error, setError] = useState({
    fullname: false,
    email: false,
    phone: false,
    position: false,
  });

  const errorsInit = {
    fullname: false,
    email: false,
    phone: false,
    position: false,
  };

  const dispatch = useDispatch();

  const candidate = {
    fullname,
    email,
    phone,
    position,
  };

  console.log(candidate);

  const validation = {
    fullname: fullname === '' || fullname.length < 2,
    email: !String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      ),
    phone: phone === '' || phone.length < 2,
    position: position === '' || position.length < 2,
  };

  const addCandidate = () => {
    switch (true) {
      case validation.fullname:
        setError({
          ...error,
          fullname: '* Full Name should have 2 characters at least',
        });
        break;
      case validation.email:
        setError({...error, email: '* Invalid email'});
        break;
      case validation.phone:
        setError({...error, phone: '* Invalid phone number'});
        break;
      case validation.position:
        setError({...error, position: '* Invalid input'});
        break;
      default: {
        setError(errorsInit);
        dispatch(insertCandidate(candidate));
        navigation.navigate('CandidatesList');
      }
    }
  };

  return (
    <Container style={styles.container}>
      <Text style={styles.title}>Candidate Info</Text>
      <PrimaryInput
        value={fullname}
        onChangeText={fullname => {
          setFullname(fullname);
          setError({...error, fullname: false});
        }}
        error={error.fullname}
        placeholder="Full Name"
      />
      <PrimaryInput
        onChangeText={email => {
          setEmail(email);
          setError({...error, email: false});
        }}
        keyboardType={'email-address'}
        error={error.email}
        placeholder="Email"
      />
      <PrimaryInput
        onChangeText={phone => {
          setPhone(phone);
          setError({...error, phone: false});
        }}
        keyboardType={'phone-pad'}
        error={error.phone}
        placeholder="Phone"
      />
      <PrimaryInput
        onChangeText={position => {
          setPosition(position);
          setError({...error, position: false});
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
        onPress={() => navigation.navigate('CandidatesList')}
        style={styles.secondaryBtnStyle}
        titleStyle={styles.secondaryBtnTitle}
      />
    </Container>
  );
};


// primary button and input => just input and button
//
