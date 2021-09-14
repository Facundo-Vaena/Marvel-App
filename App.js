import * as React from 'react';
// import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './components/Home'
import Detail from './components/Detail';
import { Provider } from 'react-native-paper';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
        <Provider>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name='Detail' component={Detail} />
        </Stack.Navigator>
    </Provider>
      </NavigationContainer>
  );
}

