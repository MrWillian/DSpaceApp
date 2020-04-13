import React, { useState } from 'react';
import { SafeAreaView, View, TextInput, Text } from 'react-native';
import { styles } from './styles';

export default function Login() {
  const [email, setEmail] = useState('');

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.titleText}>Olá!</Text>
      <Text style={styles.subTitleText}>Por favor, entre com sua conta</Text>
      <View style={styles.form}>
        <Text>Email</Text>
        <TextInput 
          style={styles.textInput} 
          value={email} 
          onChangeText={email => setEmail(email)} />
      </View>
    </SafeAreaView>
  );
}
