import Badge from '@components/Badge';
import Button from '@components/Button';
import InputComponent from '@components/InputComponent';
import View from '@components/View';
import React from 'react';
import Header from '@components/Header';
import { ActivityIndicator, Image, StyleSheet, Text } from 'react-native';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';

export default function LoginComponent(props: any) {
  const { socmedOptions, handleLogin, isLoading, goBack } = props;
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');

  return (
    <View style={styles.wrapperPage}>
      <Header
        containerStyle={{ marginTop: 20 }}
        leftComponent={
          <Button style={styles.backButton} onPress={goBack}>
            <SimpleLineIcons name="arrow-left" size={25} color="black" />
          </Button>
        }
        rightComponent={<Badge label="EN" />}
      />
      <Text style={styles.txtWelcom}>Welcome</Text>
      <Text style={{ color: '#858585', fontSize: 14 }}>
        Sign to continue and manage all you need
      </Text>
      <InputComponent
        label="Username"
        inputStyle={styles.inputStyle}
        containerStyle={{ marginTop: 20 }}
        placeholderTextColor="#858585"
        placeholder="Enter your username"
        onChange={setUsername}
      />
      <InputComponent
        type="password"
        label="Password"
        showSecureIcon={true}
        inputStyle={styles.inputStyle}
        containerStyle={{ marginTop: 15 }}
        placeholderTextColor="#858585"
        placeholder="Enter your password"
        onChange={setPassword}
      />
      <Text style={styles.txtForgetPass}>Forget Password</Text>
      <Button
        onPress={() => {
          handleLogin(username, password);
        }}
        style={styles.btnLogin}
      >
        {isLoading && (
          <ActivityIndicator
            size="small"
            color="white"
            style={{ marginRight: 10 }}
          />
        )}
        <Text style={styles.txtLogin}>Log In</Text>
      </Button>
      <Text style={styles.optionLogin}>Continue with</Text>
      <View style={styles.wrapperOptionItem}>
        {socmedOptions.map(({ icon, key }: any) => (
          <View key={key.toString()} style={styles.containerImageOption}>
            <Image
              source={icon}
              resizeMode="contain"
              style={styles.imageOption}
            />
          </View>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapperPage: { paddingHorizontal: 20, flex: 1, backgroundColor: 'white' },
  backButton: {
    height: 40,
    width: 40,
    backgroundColor: '#F6F5F6',
    borderRadius: 40 / 2,
    paddingTop: 5,
    paddingLeft: 3,
  },
  txtWelcom: {
    color: 'black',
    fontSize: 35,
    fontWeight: '600',
    marginTop: 10,
  },
  inputStyle: {
    backgroundColor: '#F6F5F6',
    borderRadius: 10,
    paddingLeft: 15,
  },
  txtForgetPass: { color: '#3570D6', fontSize: 12, marginTop: 15 },
  btnLogin: {
    backgroundColor: '#3570D6',
    paddingVertical: 15,
    marginVertical: 30,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    flexDirection: 'row',
  },
  txtLogin: { color: 'white', fontSize: 16, fontWeight: '500' },
  optionLogin: { color: 'black', textAlign: 'center', fontWeight: '400' },
  wrapperOptionItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 15,
  },
  containerImageOption: {
    height: 45,
    width: 45,
    marginHorizontal: 10,
    borderWidth: 1,
    borderColor: '#EFEFEF',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
  },
  imageOption: {
    height: 30,
    width: 30,
  },
});
