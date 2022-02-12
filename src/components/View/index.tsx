import { AUTO_PATCH_STYLE } from '@components/Helpers';
import React from 'react';
import { StyleProp, View as RNView, ViewStyle } from 'react-native';

type ViewProps = {
  children?: any;
  style?: StyleProp<ViewStyle>;
};

const index = ({ children, style }: ViewProps) => {
  const patchedStyle = AUTO_PATCH_STYLE(style);

  return <RNView style={patchedStyle}>{children}</RNView>;
};

export default index;
