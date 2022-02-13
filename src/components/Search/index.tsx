import React from 'react';
import { StyleSheet, TextInput } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import View from '@components/View';

export default function index() {
  return (
    <View style={styles.containerSearch}>
      <Feather name="search" size={20} color="#C7C4CC" />
      <TextInput
        style={styles.textInputStyle}
        placeholder="Search your job"
        placeholderTextColor="#C7C4CC"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  containerSearch: {
    marginTop: 10,
    borderWidth: 0.6,
    borderColor: '#C7C4CC',
    paddingLeft: 10,
    borderRadius: 20,
    flexDirection: 'row',
    alignItems: 'center',
    height: 40,
  },
  textInputStyle: { flex: 1, color: 'black', fontSize: 14, marginLeft: 10 },
});
