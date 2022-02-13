import React from 'react';
import { Keyboard } from 'react-native';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import ReduxState from '../../../app/ReduxState';
import Route from '../../../app/Routes';
import LoginComponent from '../Components/LoginComponent';
import { onPostLogin } from '../Store/AuthenticationActions';

function LoginContainer(props: any) {
  const socMedOptions = [
    {
      key: 1,
      icon: require('@property/images/google-logo.png'),
    },
    {
      key: 2,
      icon: require('@property/images/facebook-logo.png'),
    },
    {
      key: 3,
      icon: require('@property/images/apple-logo.png'),
    },
  ];
  return <LoginComponent socmedOptions={socMedOptions} {...props} />;
}

const mapStateToProps = (state: ReduxState) => ({
  isLoading: state.app.loading,
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  handleLogin: (username: string, password: string) => {
    Keyboard.dismiss();
    onPostLogin({ username, password }, dispatch);
  },
  goBack: () => {
    Route.back();
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);
