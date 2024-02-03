import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Home from './src/components/Home';
import Second from './src/components/StartingPages/Second';
import Landing from './src/components/LandingPage/Landing';
import GetStarted from './src/components/StartingPages/GetStarted';
import Third from './src/components/StartingPages/Third';
import Fourth from './src/components/StartingPages/Fourth';
import Signin from './src/components/Account/Signin';
import Login from './src/components/Account/Login';
import Otp from './src/components/Otp/Otp';
import Profile from './src/components/Profile/Profile';
import Location from './src/components/Location/Location';
import New from './src/components/Account/New';
import Notification from './src/components/StartingPages/Notification';
import Accept from './src/components/Account/Accept';

const Stack = createStackNavigator();

const App = () => {
  return (

    <>
     <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Accept"
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Landing" component={Landing} />
        <Stack.Screen name="GetStarted" component={GetStarted} />
        <Stack.Screen name="Second" component={Second} />
        <Stack.Screen name="Third" component={Third} />
        <Stack.Screen name="Fourth" component={Fourth} />
        <Stack.Screen name="Signin" component={Signin} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Otp" component={Otp} />
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="Location" component={Location} />
        <Stack.Screen name="New" component={New} />
        <Stack.Screen name="Notification" component={Notification} />
        <Stack.Screen name="Accept" component={Accept} />
      </Stack.Navigator>
    </NavigationContainer>
    
    </>
   
  );
};

export default App;

const styles = StyleSheet.create({});
