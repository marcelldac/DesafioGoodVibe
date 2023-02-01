import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Itens from './src/pages/Itens/';
import Main from './src/pages/Main/';

/* Ini Area de Navegacao */
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Main'>
        <Stack.Screen name="Main" component={Main} />
        <Stack.Screen name="Itens" component={Itens} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const Stack = createStackNavigator();
/* Fim Area de Navegacao */