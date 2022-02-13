import AuthSelectionContainer from '@modules/Authentication/Containers/AuthSelectionContainer';
import LoginContainer from '@modules/Authentication/Containers/LoginContainer';
import DashboardContainer from '@modules/Dashboard/Container/DashboardContainer';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { Provider } from 'react-redux';
import { store } from './Redux';
import Route from './Routes';
const Stack = createNativeStackNavigator();

export default function App() {
  const { token } = store?.getState()?.auth;
  return (
    <Provider store={store}>
      <NavigationContainer ref={Route.navigation}>
        <Stack.Navigator
          initialRouteName={token ? Route.Dashboard : Route.AuthSelection}
          screenOptions={{ headerShown: false }}
        >
          <Stack.Screen
            name={Route.AuthSelection}
            component={AuthSelectionContainer}
          />
          <Stack.Screen name={Route.Login} component={LoginContainer} />
          <Stack.Screen name={Route.Dashboard} component={DashboardContainer} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
