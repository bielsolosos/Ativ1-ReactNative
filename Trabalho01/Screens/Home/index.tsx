import { View, Text, Button } from 'react-native'
import React from 'react'
import OlaMundo from '../../components/OlaMundo'
import Botao from '../../components/Botao'
import { useNavigation } from '@react-navigation/native'

export default function Home() {
  
  const navigation = useNavigation();

  function navegarAjuda(){
    navigation.navigate("Ajuda");
  }

  return (
    <View>
      <OlaMundo/>
      <Button title='teste' onPress={navegarAjuda} />
    </View>
  )
}