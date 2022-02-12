import { NavigationContainerRef } from '@react-navigation/native';
import React from 'react';

const navigation = React.createRef<NavigationContainerRef<any>>();

const navigate = (routeName: string, params?: { [key: string]: any }) => {
  if (!navigation) {
    throw new Error('Navigation is null');
  }
  navigation.current?.navigate(routeName, params);
};

// const reset = (routeName: string, params?: { [key: string]: any }) => {
//   if (!navigation) {
//     throw new Error('Navigation is null');
//   }
//   navigation.current?.reset(routeName, params);
// };

const Route = {
  AuthSelection: 'Authentication.AuthSelection',
  Login: 'Authentication.Login',
  Dashboard: 'Main.Dashboard',
  navigation,
  navigate,
  // reset,
};

export default Route;
