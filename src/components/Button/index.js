import React from 'react';
import { TouchableOpacity, Text } from 'react-native';

import styles from './styles';

export default function Button({ type, text, onPress }) {
  return (
    <TouchableOpacity 
      style={[styles.container, type == 'Login' ? styles.loginBtn : styles.registerBtn]}
      onPress={onPress}>
      <Text style={[styles.text, type == 'Login' ? styles.loginText : styles.registerText]}>
        {text}
      </Text>
    </TouchableOpacity>
  );
}
