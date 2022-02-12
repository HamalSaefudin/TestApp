import React from 'react';
import { Image, StyleSheet, Text } from 'react-native';
import View from '@components/View';
import Button from '@components/Button';
import Badge from '@components/Badge';

export default function AuthSelectionComponent(props: any) {
  const { goLogin } = props;
  return (
    <View style={styles.wrapperPage}>
      <View style={styles.containerImage}>
        <Badge
          label="EN"
          badgeStyle={{ right: 15, position: 'absolute', top: 15 }}
        />
        <Image
          source={require('@property/images/login-wallpaper.png')}
          resizeMode="contain"
          style={{ height: 250 }}
        />
      </View>
      <Text style={styles.title}>{'Makes Your Ideas\n Come Alive'}</Text>
      <Text style={styles.subTitle}>
        {
          'Join us to build your awsome idea, there will be\n more teams you can meet'
        }
      </Text>
      <View style={styles.containerBtn}>
        <Button style={styles.btnSignup}>
          <Text style={styles.txtSignup}>Sign Up</Text>
        </Button>
        <Button style={styles.btnLogin} onPress={goLogin}>
          <Text style={styles.txtLogin}>Log in</Text>
        </Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapperPage: {
    flex: 1,
    paddingHorizontal: 10,
    paddingTop: 20,
    backgroundColor: 'white',
  },
  containerImage: {
    backgroundColor: '#F2F2F2',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 45,
    paddingVertical: 65,
    marginBottom: 20,
  },
  containerBadge: {
    position: 'absolute',
    height: 40,
    width: 40,
    backgroundColor: '#356FD6',
    right: 15,
    top: 15,
    borderRadius: 40 / 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  badgeTitle: { fontWeight: 'bold', color: 'white' },
  title: {
    color: 'black',
    textAlign: 'center',
    fontSize: 30,
    fontWeight: '600',
  },
  subTitle: {
    color: 'black',
    textAlign: 'center',
    fontSize: 14,
    marginTop: 10,
    fontWeight: '400',
  },
  containerBtn: { flexDirection: 'row', marginTop: 60 },
  btnSignup: {
    backgroundColor: 'white',
    marginHorizontal: 10,
    flex: 1,
    paddingVertical: 15,
    borderWidth: 1,
    borderColor: '#EFF0EF',
    borderRadius: 10,
  },
  txtSignup: { color: 'black', fontWeight: '600', textAlign: 'center' },
  btnLogin: {
    backgroundColor: '#356FD6',
    marginHorizontal: 10,
    flex: 1,
    paddingVertical: 15,
    borderWidth: 1,
    borderColor: '#EFF0EF',
    borderRadius: 10,
  },
  txtLogin: { fontWeight: '600', textAlign: 'center', color: 'white' },
});
