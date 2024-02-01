import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './src/components/Home';
import Second from './src/components/Second';
import Landing from './src/components/Landing';
import GetStarted from './src/components/GetStarted';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
    <Stack.Navigator
      initialRouteName="Landing"
      screenOptions={{
        headerShown: false, 
      }}
    >
      {/* <Stack.Screen name="Home" component={Home} /> */}
      {/* <Stack.Screen name="Landing" component={Landing} /> */}
      <Stack.Screen name="GetStarted" component={GetStarted} />
      {/* <Stack.Screen name="Second" component={Second} /> */}
    

    </Stack.Navigator>
    </NavigationContainer>
      );
    }
    
    export default App
    
    const styles = StyleSheet.create({})