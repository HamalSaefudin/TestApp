import {
  StyleProp,
  StyleSheet,
  Text,
  TextStyle,
  ViewStyle,
} from 'react-native';
import React from 'react';
import View from '@components/View';

type BadgeProps = {
  label?: string;
  badgeStyle?: StyleProp<ViewStyle>;
  labelStyle?: StyleProp<TextStyle>;
};

const index = ({ label, badgeStyle, labelStyle }: BadgeProps) => {
  return (
    <View style={[styles.containerBadge, badgeStyle]}>
      <Text style={[styles.badgeTitle, labelStyle]}>{label}</Text>
    </View>
  );
};

export default index;

const styles = StyleSheet.create({
  containerBadge: {
    height: 40,
    width: 40,
    backgroundColor: '#356FD6',
    borderRadius: 40 / 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  badgeTitle: { fontWeight: 'bold', color: 'white' },
});
