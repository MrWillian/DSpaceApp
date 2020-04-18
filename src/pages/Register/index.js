import React, { useState, useEffect } from 'react';
import { SafeAreaView, View, TextInput, Text, Alert } from 'react-native';
import { CheckBox } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';
import Button from '../../components/Button';

import { styles } from './styles';
import colors from '../../assets/colors';

import { createUser } from '../../controllers/UserController';

export default function Register() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [checkTermsAndServices, setCheckTermsAndServices] = useState(true);

  const navigation = useNavigation();

  useEffect(() => {
    storage.load({ key: 'userState',})
    .then(user => {
      navigation.navigate('Main', user);
    }).catch(err => {
      console.log(err.message);
    })
  }, []);

  async function handleRegisterUser() {
    const isCreated = await createUser(username, email, password);
    
    if (!isCreated)
      Alert.alert('Erro', 'Ocorreu um erro ao tentar salvar o usuário, tente novamente!', [
        { test: "Cancelar", style: "cancel" }
      ]);
    
    Alert.alert('Sucesso', 'Sucesso ao cadastrar-se!', [
      { test: "Ok" }
    ]);
    navigation.navigate('Main');
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.titleText}>Registre-se!</Text>
      <Text style={styles.subTitleText}>Por favor, informe seus dados</Text>
      <View style={styles.form}>
        
        <Text style={styles.label}>Username</Text>
        <TextInput 
          style={styles.textInput} 
          value={username} 
          placeholder="Digite seu username..."
          onChangeText={username => setUsername(username)} />

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

        <View style={styles.termsAndServices}>
          <CheckBox
            title='Concordo com os Termos e Serviços'
            checked={checkTermsAndServices}
            onPress={() => setCheckTermsAndServices(!checkTermsAndServices)}
          />
        </View>

        <Button 
          type="Secundary" text="Registrar" 
          buttonStyle={{ 
            width: '40%', height: '10%', alignSelf: 'center', marginTop: 30, borderWidth: 0.5, borderColor: colors.accent
          }}
          onPress={handleRegisterUser} />
      </View>
    </SafeAreaView>
  );
}
