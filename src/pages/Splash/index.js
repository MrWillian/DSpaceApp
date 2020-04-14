import React from 'react';
import { SafeAreaView, View, ImageBackground, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Button from "../../components/Button";

import styles from './styles';
import image from '../../assets/images/splash-background.jpg';

export default function Splash() {
  const navigation = useNavigation();

  function navigateToLogin() {
    navigation.navigate('Login');
  }

  function navigateToRegister() {
    navigation.navigate('Register');
  }

  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground source={image} style={styles.image} />
      <Text style={styles.text}>Nós te Mantemos Localizado</Text>
      <View style={styles.groupButton}>
        <Button 
          type="Primary" text="Login" 
          buttonStyle={{ width: '40%', height: '100%' }}
          onPress={navigateToLogin} />
        <Button 
          type="Secundary" text="Registrar"
          buttonStyle={{ width: '40%', height: '100%' }}
          onPress={navigateToRegister} />
      </View>
    </SafeAreaView>
  );
}
