import React from 'react';
import { TouchableOpacity, Text } from 'react-native';

import styles from './styles';

export default function Button({ type, text }) {
  return (
    <TouchableOpacity style={[styles.container, type == 'Login' ? styles.loginBtn : styles.registerBtn]}>
      <Text style={[styles.text, type == 'Login' ? styles.loginText : styles.registerText]}>
        {text}
      </Text>
    </TouchableOpacity>
  );
}
