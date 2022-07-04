import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import FlatListComponent from './src/FlatListComponent';
import ListDetailComponent from './src/ListDetailsComponent';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="FlatListComponent" component={FlatListComponent} />
        <Stack.Screen name="ListDetailComponent" component={ListDetailComponent} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;