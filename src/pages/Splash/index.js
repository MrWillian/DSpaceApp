import React from 'react';
import { SafeAreaView, View, ImageBackground, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Button from "../../components/Button";

import styles from './styles';
import image from '../../assets/images/splash-background.jpg';

export default function Splash() {
  const navigation = useNavigation();

  function navigateToLogin() {
    console.log('Login');
    navigation.navigate('Login');
  }

  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground source={image} style={styles.image} />
      <Text style={styles.text}>Nós te Mantemos Localizado</Text>
      <View style={styles.groupButton}>
        <Button type="Login" text="Login" onPress={navigateToLogin} />
        <Button type="Register" text="Registrar" />
      </View>
    </SafeAreaView>
  );
}
