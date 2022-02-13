import { NavigationContainerRef } from '@react-navigation/native';
import React from 'react';

const navigation = React.createRef<NavigationContainerRef<any>>();

const navigate = (routeName: string, params?: { [key: string]: any }) => {
  if (!navigation) {
    throw new Error('Navigation is null');
  }
  navigation.current?.navigate(routeName, params);
};

const reset = (routeName: string, params?: { [key: string]: any }) => {
  if (!navigation) {
    throw new Error('Navigation is null');
  }
  const routes = [{ name: routeName, params }];
  navigation.current?.reset({
    index: 1,
    routes,
  });
};

const back = () => {
  if (!navigation.current) {
    throw new Error('navigation is null');
  }

  if (navigation.current?.canGoBack()) {
    navigation.current.goBack();
  }
};

const Route = {
  AuthSelection: 'Authentication.AuthSelection',
  Login: 'Authentication.Login',
  Dashboard: 'Main.Dashboard',
  navigation,
  navigate,
  reset,
  back,
};

export default Route;
