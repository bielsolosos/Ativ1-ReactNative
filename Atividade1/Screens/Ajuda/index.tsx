import { View, Text, Button } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import Botao from '../../components/Botao';

export default function Ajuda() {

  const navigation = useNavigation();

  function navegarHome(){
    navigation.navigate('Home')
  }

  return (
    <View>
      <Text>Ajuda</Text>
      <Button title='teste' onPress={navegarHome} />
    </View>
  )
}