import React from 'react';
import { Image, ImageSourcePropType, StyleSheet, Text } from 'react-native';
import View from '@components/View';

type ItemServiceProps = {
  icon: ImageSourcePropType;
  title?: string;
};

function index({ icon, title }: ItemServiceProps) {
  return (
    <View style={styles.containerItemService}>
      <View style={styles.roundedItem}>
        <Image
          source={icon}
          style={styles.imageItemService}
          resizeMode="contain"
        />
      </View>
      <Text style={styles.titleItemService}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  containerItemService: {
    flex: 1 / 2,
    margin: 10,
    flexDirection: 'row',
    backgroundColor: '#F3F5F7',
    alignItems: 'center',
    borderRadius: 10,
  },
  roundedItem: {
    height: 35,
    width: 35,
    backgroundColor: '#356FD6',
    borderRadius: 20,
    marginHorizontal: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleItemService: { color: 'black', fontWeight: '500', fontSize: 14 },
  imageItemService: { height: 20, width: 20, alignSelf: 'center' },
});

export default index;
