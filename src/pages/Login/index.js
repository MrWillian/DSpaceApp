import React, { useState } from 'react';
import { SafeAreaView, View, TouchableOpacity, TextInput, ImageBackground, Text } from 'react-native';

import Button from '../../components/Button';

import image from '../../assets/images/splash-background.jpg';
import { styles } from './styles';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.titleText}>Olá!</Text>
      <Text style={styles.subTitleText}>Por favor, entre com sua conta</Text>
      <View style={styles.form}>
        <Text style={styles.label}>Email</Text>
        <TextInput 
          style={styles.textInput} 
          value={email} 
          placeholder="Digite seu email..."
          onChangeText={email => setEmail(email)} />
        <Text style={styles.label}>Senha</Text>
        <TextInput 
          style={styles.textInput} 
          value={password}
          placeholder="Digite sua senha..."
          onChangeText={password => setPassword(password)} />
        <TouchableOpacity style={styles.forgetPassword}>
          <Text>Esqueceu sua senha?</Text>
        </TouchableOpacity>
        <Button 
          type="Login" text="Login" 
          buttonStyle={{ width: '40%', height: '10%', alignSelf: 'center', marginTop: 30 }} />
      </View>
      <View style={styles.footer}>
        <ImageBackground source={image} style={styles.image} />
      </View>
    </SafeAreaView>
  );
}
