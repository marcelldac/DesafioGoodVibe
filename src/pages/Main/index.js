import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

function alerta(){
    alert('Botao clicado');
}

export default function Main({navigation}) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Good Vibe: Saude Mental Para Todos!</Text>
 		  <Text style={styles.text} onPress={()=> navigation.navigate('Itens')} onPressOut={() => alerta()} >Clique Aqui!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#262626',
      alignItems: 'center',
      justifyContent: 'center',
    },
    text: {
        color: 'white',
        fontSize: 20,
        fontWeight:'bold'
    }
  });