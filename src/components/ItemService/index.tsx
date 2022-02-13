import React from 'react';
import { Image, ImageSourcePropType, Text, View } from 'react-native';

type ItemServiceProps = {
  icon: ImageSourcePropType;
  title?: string;
};

function index({ icon, title }: ItemServiceProps) {
  return (
    <View
      style={{
        flex: 1 / 2,
        margin: 10,
        flexDirection: 'row',
        backgroundColor: '#F3F5F7',
        alignItems: 'center',
        borderRadius: 10,
      }}
    >
      <View
        style={{
          height: 35,
          width: 35,
          backgroundColor: '#356FD6',
          borderRadius: 20,
          marginHorizontal: 10,
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Image
          source={icon}
          style={{ height: 20, width: 20, alignSelf: 'center' }}
          resizeMode="contain"
        />
      </View>
      <Text style={{ color: 'black', fontWeight: '500', fontSize: 14 }}>
        {title}
      </Text>
    </View>
  );
}

export default index;
