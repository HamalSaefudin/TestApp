import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Fontisto from 'react-native-vector-icons/Fontisto';

type ItemNotifProps = {
  totalNotif: number;
};

function index({ totalNotif }: ItemNotifProps) {
  return (
    <View style={styles.containerNotif}>
      <View style={styles.containerTotalNotif}>
        <Text style={styles.totalNotif}>{totalNotif}</Text>
      </View>
      <Fontisto name="bell" size={16} color="black" />
    </View>
  );
}

export default index;

const styles = StyleSheet.create({
  containerNotif: {
    height: 35,
    width: 35,
    backgroundColor: '#F7F6F6',
    borderRadius: 35 / 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  containerTotalNotif: {
    height: 15,
    width: 15,
    backgroundColor: 'black',
    borderRadius: 15 / 2,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    right: 3,
    top: 3,
  },
  totalNotif: { fontSize: 10, fontWeight: '600' },
});
