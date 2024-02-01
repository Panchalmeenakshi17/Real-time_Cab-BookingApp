import {StyleSheet, Image, View, Text, TouchableOpacity} from 'react-native';
import React from 'react';

const GetStarted = ({navigation}) => {
  
  return (
    <View style={styles.container}>
      {/* Background Image */}
      <Image
        source={require('../assets/images/me2.png')}
        style={styles.backgroundImage}
      />
      <View style={styles.overlayContainer2}>
        <View style={styles.overlayContent}>
          <Image
            source={require('../assets/images/placeholder.png')}
            style={styles.Image}
          />
          <Image
            source={require('../assets/images/text.png')}
            style={styles.Image2}
          />

          <Image
            source={require('../assets/images/agent.png')}
            style={styles.Image3}
          />

          <Image
            source={require('../assets/images/telephone.png')}
            style={styles.Image4}
          />
        </View>
      </View>

      <View style={styles.overlayContainer}>
        <View style={styles.overlayContent}>
          <Text style={styles.text}>
            <Text style={styles.blackText}>Welcome to Your</Text>
            <Text style={styles.orangeText}> ultimate Transport Solution</Text>
          </Text>
          <Text style={styles.loremText}>
          Get ready for a seamless and reliable ride experience with our cab app. 
          {/* Whether you're heading to work, meeting friends, or exploring the city, we're here to make your journey comfortable and efficient. Our drivers are dedicated to providing safe and timely transportation, ensuring you arrive at your destination with ease. Enjoy the convenience of hassle-free booking, real-time tracking, and exceptional service. Your journey begins with us! */}
          </Text>
          
          <TouchableOpacity onPress={() => navigation.navigate('Second')} style={styles.button}>
            <Text style={styles.buttonText}>Get Started</Text>
          </TouchableOpacity>
          <Text style={styles.loremText2}>
            Already have an account ? <Text style={styles.orangeText2}>Log In</Text>
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e6dede5b',
  },
  blackText: {
    color: 'black',
    fontFamily: 'Montserrat-Bold',
     paddingHorizontal: 0, // Add horizontal padding
    paddingVertical: 10,
  },

  orangeText: {
    color: '#fea90a',
    fontFamily: 'Montserrat-Bold',
     paddingHorizontal: 0, // Add horizontal padding
    paddingVertical: 10,
  },
  orangeText2: {
    color: '#fea90a',
    fontFamily: 'Montserrat-BOld',
    //  paddingHorizontal: 0, // Add horizontal padding
    // paddingVertical: 10,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover', // or 'stretch' or 'contain'
    position: 'absolute',
    width: '90%',
    marginLeft: '5%',
    marginTop: '15%',
    height: '50%',
  },
  overlayContainer: {
    flex: 1,
    backgroundColor: 'rgba(255, 255, 255, 1)',
  },
  overlayContainer2: {
    flex: 1,
    backgroundColor: 'rgba(189, 177, 177, 0.189)',
  },
  overlayContent: {},
  text: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: '5%',
    color: '#fea90a',
    fontFamily: 'Montserrat-Regular',
     paddingHorizontal: 10, // Add horizontal padding
    paddingVertical: 10,
  },
  Image: {
    width: '10%',
    height: '20%',
    marginTop: '30%',
    marginLeft: '16%',

    resizeMode: 'contain',
  },
  Image2: {
    width: '10%',
    height: '20%',
    marginTop: '20%',
    marginLeft: '5%',
    resizeMode: 'contain',
  },
  Image3: {
    width: '10%',
    height: '10%',

    marginLeft: '75%',
    bottom: 240,
  },
  Image4: {
    width: '8%',
    height: '8%',

    marginLeft: '85%',
    bottom: 105,
  },

  loremText: {
    fontSize: 16,
    textAlign: 'center',
    color: '#333',
    marginTop: 5,
    fontFamily: 'Montserrat-Regular',
    paddingHorizontal: 10, // Add horizontal padding
    paddingVertical: 10,
  },

  loremText2: {
    fontSize: 16,
    textAlign: 'center',
    color: '#000000',
    marginTop: 30,
    fontFamily: 'Montserrat-Regular',
  },
  button: {
    backgroundColor: '#fea90a',
    paddingVertical: 15,
    paddingHorizontal: 30,
    width: '80%',
    borderRadius: 30,
    marginLeft: '10%',
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
});

export default GetStarted;
