import React from 'react';
import { View, Text } from 'react-native';

import styles from './styles';

export const Button = ({ type, text }) => {
  return (
    <View style={[styles.container, type == 'Login' ? styles.loginBtn : styles.registerBtn]}>
      <Text style={[styles.text, type == 'Login' ? styles.loginText : styles.registerText]}>{text}</Text>
    </View>
  );
}
