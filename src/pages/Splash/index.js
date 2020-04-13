import React from 'react';
import { SafeAreaView, View, ImageBackground, Text } from 'react-native';
import Button from "../../components/Button";

import styles from './styles';
import image from '../../assets/images/splash-background.jpg';

export default function Splash() {
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground source={image} style={styles.image} />
      <Text style={styles.text}>Nós te Mantemos Localizado</Text>
      <View style={styles.groupButton}>
        <Button type="Login" text="Login" />
        <Button type="Register" text="Registrar" />
      </View>
    </SafeAreaView>
  );
}
