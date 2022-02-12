import Badge from '@components/Badge';
import Button from '@components/Button';
import InputComponent from '@components/InputComponent';
import View from '@components/View';
import React from 'react';
import { Text } from 'react-native';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';

export default function LoginComponent() {
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
        >
          <SimpleLineIcons name="arrow-left" size={25} color="black" />
        </Button>
        <Badge label="EN" />
      </View>
      <Text
        style={{
          color: 'black',
          fontSize: 35,
          fontWeight: '600',
          marginTop: 10,
        }}
      >
        Welcome
      </Text>
      <Text style={{ color: '#858585', fontSize: 14 }}>
        Sign to continue and manage all you need
      </Text>
      <InputComponent
        label="Username"
        inputStyle={{
          backgroundColor: '#F6F5F6',
          borderRadius: 10,
          paddingLeft: 15,
        }}
        containerStyle={{ marginTop: 20 }}
        placeholderTextColor="#858585"
        placeholder="Enter your username"
      />
      <InputComponent
        type="password"
        label="Password"
        showSecureIcon={true}
        inputStyle={{
          backgroundColor: '#F6F5F6',
          borderRadius: 10,
          paddingLeft: 15,
        }}
        containerStyle={{ marginTop: 15 }}
        placeholderTextColor="#858585"
        placeholder="Enter your password"
      />
      <Text style={{ color: '#3570D6', fontSize: 12, marginTop: 15 }}>
        Forget Password
      </Text>
      <Button
        style={{
          backgroundColor: '#3570D6',
          paddingVertical: 15,
          marginVertical: 30,
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: 10,
        }}
      >
        <Text style={{ color: 'white', fontSize: 16, fontWeight: '500' }}>
          Log In
        </Text>
      </Button>
      <Text style={{ color: 'black', textAlign: 'center', fontWeight: '400' }}>
        Continue with
      </Text>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          marginTop: 15,
        }}
      >
        <View
          style={{
            height: 45,
            width: 45,
            backgroundColor: 'red',
            marginHorizontal: 10,
          }}
        />
        <View
          style={{
            height: 45,
            width: 45,
            backgroundColor: 'red',
            marginHorizontal: 10,
          }}
        />
        <View
          style={{
            height: 45,
            width: 45,
            backgroundColor: 'red',
            marginHorizontal: 10,
          }}
        />
      </View>
    </View>
  );
}
