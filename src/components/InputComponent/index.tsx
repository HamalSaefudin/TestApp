import {
  Text,
  StyleProp,
  ViewStyle,
  TextStyle,
  StyleSheet,
  TextInputProps,
} from 'react-native';
import React from 'react';
import TextInput from '@components/TextInput';
import View from '@components/View';
import Button from '@components/Button';
import _ from 'lodash';
import Ionicons from 'react-native-vector-icons/Ionicons';

interface InputComponentProps extends TextInputProps {
  label?: string;
  containerStyle?: StyleProp<ViewStyle>;
  type?: 'text' | 'password';
  showTitle?: boolean;
  onChange?: (value: any) => void;
  labelStyle?: StyleProp<TextStyle>;
  inputStyle?: StyleProp<TextStyle>;
  showSecureIcon?: Boolean;
}

function InputComponent(props: InputComponentProps) {
  const {
    label,
    containerStyle,
    showTitle = true,
    type,
    onChange,
    inputStyle,
    labelStyle,
    showSecureIcon = false,
  } = props;
  let Component: any = null;

  const [isFocus, setFocus] = React.useState(false);
  const [secureText, setSecureText] = React.useState(true);

  switch (type) {
    case 'password':
      Component = (
        <TextInput
          secureTextEntry={secureText}
          onFocus={() => {
            setFocus(true);
          }}
          onBlur={() => {
            setFocus(false);
          }}
          {..._.omit(props)}
          style={[
            {
              borderWidth: isFocus ? 1 : 0,
              borderColor: '#4780DB',
              color: 'black',
            },
            inputStyle,
          ]}
          onChangeText={onChange}
        />
      );
      break;

    default:
      Component = (
        <TextInput
          onFocus={() => {
            setFocus(true);
          }}
          onBlur={() => {
            setFocus(false);
          }}
          {..._.omit(props)}
          style={[
            {
              borderWidth: isFocus ? 1 : 0,
              borderColor: '#4780DB',
              color: 'black',
            },
            inputStyle,
          ]}
          onChangeText={onChange}
        />
      );
      break;
  }
  return (
    <View style={containerStyle}>
      {showTitle && <Text style={[styles.label, labelStyle]}>{label}</Text>}
      <View>
        {Component}
        {showSecureIcon && (
          <Button
            style={{
              position: 'absolute',
              right: 5,
              top: 10,
            }}
            onPress={() => {
              setSecureText(!secureText);
            }}
          >
            <Ionicons
              name={secureText ? 'eye-off-outline' : 'eye-outline'}
              size={26}
              color="#B4B4B4"
            />
          </Button>
        )}
      </View>
    </View>
  );
}

export default InputComponent;

const styles = StyleSheet.create({
  label: {
    color: 'black',
    fontWeight: '500',
    fontSize: 16,
    marginBottom: 10,
  },
});
