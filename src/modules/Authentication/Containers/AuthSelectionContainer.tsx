import React from 'react';
import { connect } from 'react-redux';
import Route from '../../../app/Routes';
import AuthSelectionComponent from '../Components/AuthSelectionComponent';

function AuthSelectionContainer(props: any) {
  return <AuthSelectionComponent {...props} />;
}

const mapStateToProps = () => ({});

const mapDispatchToProps = () => ({
  goLogin: () => {
    Route.navigate(Route.Login);
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(AuthSelectionContainer);
