import React, { useState, useEffect } from 'react';
import { 
  SafeAreaView, View, TouchableOpacity, TextInput, ImageBackground, Text, Alert
} from 'react-native';
import Button from '../../components/Button';

import { useNavigation } from '@react-navigation/native';

import image from '../../assets/images/splash-background.jpg';
import { styles } from './styles';

import { login } from '../../controllers/AuthController';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigation = useNavigation();

  useEffect(() => {
    storage.load({ key: 'userState',})
    .then(user => {
      navigation.navigate('Main', user);
    }).catch(err => {
      console.log(err.message);
    })
  }, []);

  async function handleLogin() {
    const user = await login(email, password);
    if (!user) {
      Alert.alert('Erro', 'Ocorreu um erro ao tentar se autenticar, tente novamente!', [
        { test: "Cancelar", style: "cancel" }
      ]);
      return;
    }

    storage.save({
      key: 'userState',
      data: { user },
    });

    navigation.navigate('Main');
  }

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
          onChangeText={password => setPassword(password)}
          secureTextEntry={true} />
        <TouchableOpacity style={styles.forgetPassword}>
          <Text>Esqueceu sua senha?</Text>
        </TouchableOpacity>
        <Button 
          type="Primary" text="Login" 
          buttonStyle={{ width: '40%', height: '10%', alignSelf: 'center', marginTop: 30 }}
          onPress={handleLogin} />
          
      </View>
      <View style={styles.footer}>
        <ImageBackground source={image} style={styles.image} />
      </View>
    </SafeAreaView>
  );
}
