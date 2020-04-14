import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const AppStack = createStackNavigator();

import Splash from './pages/Splash';
import Login from './pages/Login';
import Register from './pages/Register';
import Address from './pages/Address';
import Main from './pages/Main';

export default function Routes() {
  return (
    <NavigationContainer>
      <AppStack.Navigator screenOptions={{ headerShown: false }}>
        <AppStack.Screen name="Main" component={Main} />
        <AppStack.Screen name="Splash" component={Splash} />
        <AppStack.Screen name="Login" component={Login} />
        <AppStack.Screen name="Register" component={Register} />
        <AppStack.Screen name="Address" component={Address} />
      </AppStack.Navigator>
    </NavigationContainer>
  );
}