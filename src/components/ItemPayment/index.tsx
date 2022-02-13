import React from 'react';
import { StyleSheet, Text } from 'react-native';
import View from '@components/View';

function index({ icon, title }: any) {
  return (
    <View style={styles.containerItemPayment}>
      {icon}
      <Text style={styles.titleItemPayment}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  containerItemPayment: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 15,
  },
  titleItemPayment: { color: '#929394', marginLeft: 10, fontWeight: '400' },
});

export default index;
