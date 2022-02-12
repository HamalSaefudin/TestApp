import { AUTO_PATCH_STYLE } from '@components/Helpers';
import React from 'react';
import { TextInput, TextInputProps as RNTextInputProps } from 'react-native';

class index extends React.Component<RNTextInputProps> {
  render() {
    const { children, style } = this.props;
    const patchedStyle = AUTO_PATCH_STYLE(style);
    return (
      <TextInput
        {...this.props}
        style={patchedStyle}
        underlineColorAndroid="rgba(0, 0, 0, 0)"
        allowFontScaling={false}
      >
        {children}
      </TextInput>
    );
  }
}

export default index;
