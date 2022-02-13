import React from 'react';
import { Text, View } from 'react-native';

function index({ icon, title }: any) {
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        marginHorizontal: 15,
      }}
    >
      {icon}
      <Text style={{ color: '#929394', marginLeft: 10, fontWeight: '400' }}>
        {title}
      </Text>
    </View>
  );
}

// const styles = StyleSheet.create({});

export default index;
