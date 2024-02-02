import React, { useState } from 'react';
import { StyleSheet, TextInput, Text,Image, View, ScrollView, TouchableWithoutFeedback } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

const Login = ({navigation}) => {
 
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isPasswordVisible, setPasswordVisible] = useState(false);

  const handleUsernameChange = (text) => {
    setUsername(text);
  };

  const handleEmailChange = (text) => {
    setEmail(text);
  };

  const handlePasswordChange = (text) => {
    setPassword(text);
  };

  const togglePasswordVisibility = () => {
    setPasswordVisible(!isPasswordVisible);
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollView}>
      <View style={styles.container}>
        <Text style={styles.heading}>Log In to Your Account</Text>
        <Text style={styles.sheading}>
          Thank you for again Re-starting your Journey with us!
        </Text>
        <View style={styles.textField}>
           
          {/* Email */}
          <View>
            <Text style={styles.label}>Email</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter your email"
              value={email}
              onChangeText={handleEmailChange}
            />
          </View>
          {/* Password */}
          <View>
            <Text style={styles.label}>Password</Text>
            <View style={styles.passwordContainer}>
              <TextInput
                style={styles.passwordInput}
                placeholder="Enter your password"
                secureTextEntry={!isPasswordVisible}
                value={password}
                onChangeText={handlePasswordChange}
              />
              <TouchableWithoutFeedback onPress={togglePasswordVisibility}>
                <View style={styles.eyeIcon}>
                  <Text style={styles.eyeIcon}>{isPasswordVisible ? '👁️' : '👁️‍🗨'}</Text>
                </View>
              </TouchableWithoutFeedback>
            </View>
          </View>
          <TouchableOpacity onPress={() => navigation.navigate('Otp')} style={styles.button}>
            <Text style={styles.buttonText}>Sign Up</Text>
          </TouchableOpacity>
        </View>
      
      <View>
      <TouchableOpacity onPress={()=>{navigation.navigate('Signin')}}>
      <Text style={{ fontFamily:'Montserrat-SemiBold',  justifyContent:'center', marginTop:0, }}> Don't have an account? <Text style={{fontFamily:'Montserrat-SemiBold', color:'#fea90a', textDecorationLine:'underline' }}>Sign In</Text></Text> 
      </TouchableOpacity> 
      </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  backgroundImage:{
width:'100%',
height:'100%',
borderRadius: 30,
  },
    button: {
        backgroundColor: '#fea90a',
        paddingVertical: 15,
        paddingHorizontal: 30,
        width: '100%',
        borderRadius: 30,
        marginLeft: '0%',
        marginTop: 20,
        fontFamily: 'Montserrat-Regular',
      },
    
      buttonText: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
        fontFamily: 'Montserrat-Regular',
      },
  scrollView: {
    flexGrow: 1,
  },
  container: {
    flex: 1,
    // justifyContent: 'center',
    alignItems: 'center',
    marginTop:60,
  },
  label: {
    fontFamily: 'Montserrat-SemiBold',
    paddingHorizontal: 2,
  },
  textField: {
    marginVertical: 65,
    paddingHorizontal: 30,
    width: '100%', // Set the width to 100%
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    width: '100%', // Set the width to 100%
    padding: 10,
    marginBottom: 16,
    borderRadius: 7,
    fontFamily: 'Montserrat-Regular',
  },
  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  passwordInput: {
    flex: 1,
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    padding: 10,
    marginBottom: 16,
    borderRadius: 7,
    fontFamily: 'Montserrat-Regular',
  },
  eyeIcon: {
    marginLeft: -17,
    marginTop: -10,
    fontSize: 22, // Adjust the size as needed
  },
  heading: {
    fontSize: 28,
    textAlign: 'center',
    marginVertical: 65,
    fontFamily: 'Montserrat-SemiBold',
  },
  sheading: {
    fontSize: 18,
    textAlign: 'center',
    marginVertical: -26,
    fontFamily: 'Montserrat-Regular',
  },
});

export default Login;
