import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import AuthSelectionContainer from '@modules/Authentication/Containers/AuthSelectionContainer';
import Route from './Routes';
import LoginComponent from '@modules/Authentication/Components/LoginComponent';
import { Provider } from 'react-redux';
import { store } from './Redux';
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer ref={Route.navigation}>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen
            name={Route.AuthSelection}
            component={AuthSelectionContainer}
          />
          <Stack.Screen name={Route.Login} component={LoginComponent} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
