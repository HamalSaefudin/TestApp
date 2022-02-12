import { AUTO_PATCH_STYLE } from '@components/Helpers';
import React from 'react';
import { Pressable, PressableProps } from 'react-native';
import _ from 'lodash';

const index: React.FC<PressableProps> = (props: any) => {
  const { children, style, onPress } = props;
  const patchedStyle = AUTO_PATCH_STYLE(style);
  return (
    <Pressable
      {...props}
      style={patchedStyle}
      onPress={
        onPress
          ? _.debounce(onPress, 1000, { leading: true, trailing: false })
          : undefined
      }
    >
      {children}
    </Pressable>
  );
};

export default index;
