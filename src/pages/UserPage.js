import React from 'react';
import {Text} from 'react-native';
import {useSelector} from 'react-redux';

function UserPage() {
  //o useSelector retorna a store
  //dizemoes que a constante userData desse component é igual a da user na store
  const userData = useSelector(state => state.user);
  return <Text>{userData.login}</Text>;
}

export default UserPage;
