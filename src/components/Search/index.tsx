import React from 'react';
import { TextInput, View } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';

export default function index() {
  return (
    <View
      style={{
        marginTop: 20,
        borderWidth: 0.6,
        borderColor: '#C7C4CC',
        paddingLeft: 10,
        borderRadius: 20,
        flexDirection: 'row',
        alignItems: 'center',
        height: 40,
      }}
    >
      <Feather name="search" size={20} color="#C7C4CC" />
      <TextInput
        style={{ flex: 1, color: 'black', fontSize: 14, marginLeft: 10 }}
        placeholder="Search your job"
        placeholderTextColor="#C7C4CC"
      />
    </View>
  );
}
