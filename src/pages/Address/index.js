import React, { useState } from 'react';
import { SafeAreaView, View, TextInput, ImageBackground, Text } from 'react-native';

import Button from '../../components/Button';

import { styles } from './styles';
import addressImage from '../../assets/images/city-address-clipart.jpg';

export default function Address() {
  const [state, setState] = useState('');
  const [city, setCity] = useState('');
  const [street, setStreet] = useState('');
  const [number, setNumber] = useState('');

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.titleText}>Endereço</Text>
      <View style={styles.containerAddressImage}>
        <ImageBackground source={addressImage} style={styles.addressImage} />
      </View>
      <View style={styles.form}>
        <Text style={styles.label}>Estado</Text>
        <TextInput 
          style={styles.textInput} 
          value={state} 
          placeholder="Digite seu estado..."
          onChangeText={state => setState(state)} />

        <Text style={styles.label}>Cidade</Text>
        <TextInput 
          style={styles.textInput} 
          value={city} 
          placeholder="Digite sua cidade..."
          onChangeText={city => setCity(city)} />
        
        <View style={styles.containerPlace}>
          <View>
            <Text style={styles.label}>Rua</Text>
            <TextInput 
              style={styles.textInput} 
              value={street} 
              placeholder="Digite sua rua..."
              onChangeText={street => setStreet(street)} />
          </View>

          <View>
            <Text style={styles.label}>Numéro</Text>
            <TextInput 
              style={styles.textInput} 
              value={number} 
              placeholder="Digite seu número..."
              onChangeText={number => setNumber(number)} />
          </View>
        </View>
        <Button 
          type="Primary" text="Salvar" 
          buttonStyle={{ 
            width: '40%', height: '10%', alignSelf: 'flex-end', marginTop: 30
          }} />
      </View>
    </SafeAreaView>
  );
}
