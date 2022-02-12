import React from 'react';
import { Text, View } from 'react-native';
import Button from '@components/Button';
import Badge from '@components/Badge';
import Feather from 'react-native-vector-icons/Feather';
import TextInput from '@components/TextInput';

export default function DashboardComponent() {
  return (
    <View style={{ paddingHorizontal: 20, flex: 1, backgroundColor: 'white' }}>
      <View
        style={{
          flexDirection: 'row',
          marginTop: 20,
          justifyContent: 'space-between',
          paddingHorizontal: 5,
        }}
      >
        <Button
          style={{
            height: 40,
            width: 40,
            backgroundColor: '#F6F5F6',
            borderRadius: 40 / 2,
            paddingTop: 5,
            paddingLeft: 3,
          }}
        />
        <Badge label="EN" />
      </View>
      <View
        style={{
          marginTop: 20,
          borderWidth: 1,
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
      <Text
        style={{
          color: 'black',
          fontSize: 24,
          fontWeight: '500',
          marginTop: 20,
        }}
      >
        Welcome to Kerja 365
      </Text>
      <Text style={{ color: 'black', marginTop: 5, fontSize: 14 }}>
        Arrange all you need here
      </Text>
      <View
        style={{
          backgroundColor: '#F3F4F7',
          paddingVertical: 20,
          paddingHorizontal: 10,
          flexDirection: 'row',
          marginTop: 20,
          borderRadius: 25,
        }}
      >
        <View
          style={{
            height: 20,
            width: 50,
            backgroundColor: '#98999A',
            flex: 1 / 3,
            marginHorizontal: 10,
          }}
        />
        <View
          style={{
            height: 20,
            width: 50,
            backgroundColor: '#98999A',
            flex: 1 / 3,
            marginHorizontal: 10,
          }}
        />
        <View
          style={{
            height: 20,
            width: 50,
            backgroundColor: '#98999A',
            flex: 1 / 3,
            marginHorizontal: 10,
          }}
        />
      </View>
      <Text
        style={{
          color: 'black',
          fontSize: 20,
          fontWeight: '500',
          marginTop: 30,
        }}
      >
        Services By Category
      </Text>
      <Text
        style={{
          color: 'black',
          fontSize: 16,
          fontWeight: '400',
        }}
      >
        Find what you need
      </Text>
    </View>
  );
}
