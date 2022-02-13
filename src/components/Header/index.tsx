import View from '@components/View';
import React from 'react';
import {
  StyleProp,
  StyleSheet,
  Text,
  TextStyle,
  ViewStyle,
} from 'react-native';

type HeaderProps = {
  leftComponent?: any;
  rightComponent?: any;
  containerStyle?: StyleProp<ViewStyle>;
  headerTitle?: string;
  titleStyle?: StyleProp<TextStyle>;
};

const index: React.FC<HeaderProps> = ({
  leftComponent,
  rightComponent,
  containerStyle,
  headerTitle,
  titleStyle,
}) => {
  return (
    <View style={[styles.containerHeader, containerStyle]}>
      <View style={{ flex: 0.2 }}>{leftComponent}</View>
      <View style={{ flex: 0.6, justifyContent: 'center' }}>
        <Text style={[{ fontSize: 16, color: 'black' }, titleStyle]}>
          {headerTitle}
        </Text>
      </View>
      <View style={{ flex: 0.2, alignItems: 'center' }}>{rightComponent}</View>
    </View>
  );
};

export default index;

const styles = StyleSheet.create({
  containerHeader: {
    height: 56,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10,
    alignItems: 'center',
  },
});
