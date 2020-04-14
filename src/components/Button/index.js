import React from 'react';
import { TouchableOpacity, Text } from 'react-native';

import styles from './styles';

export default function Button({ type, text, onPress, buttonStyle }) {
  const PRIMARY = 'Primary';

  return (
    <TouchableOpacity 
      style={[buttonStyle, styles.container, 
        type == PRIMARY ? styles.primaryBtn : styles.secundaryBtn]}
      onPress={onPress}>

      <Text style={[styles.text, 
        type == PRIMARY ? styles.primaryText : styles.secundaryText]}>
        {text}
      </Text>
      
    </TouchableOpacity>
  );
}
