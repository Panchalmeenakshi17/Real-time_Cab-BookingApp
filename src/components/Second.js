import { StyleSheet,Image,Text, View,TouchableOpacity } from 'react-native';
import React from 'react';

const Second = () => {
  return(
    <>
    <View style={styles.parent}>
    <View style={styles.child}>
    <View style={styles.child1}>
    
    <Image
        source={require('../assets/images/4.jpg')}
        style={styles.backgroundImage}
      />
    </View>
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
          
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Get Started</Text>
          </TouchableOpacity>
          <Text style={styles.loremText2}>
            Already have an account ? <Text style={styles.orangeText2}>Log In</Text>
          </Text>
        </View>
      </View>
    </>

  );
}

export default Second;

const styles = StyleSheet.create({
  loremText: {
    fontSize: 16,
    textAlign: 'center',
    color: '#333',
    marginTop: 5,
    fontFamily: 'Montserrat-Regular',
    paddingHorizontal: 10, // Add horizontal padding
    paddingVertical: 10,
  },

  blackText: {
    color: 'black',
    fontFamily: 'Montserrat-Bold',
     paddingHorizontal: 0, // Add horizontal padding
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
  parent : {
      height : '60%',
      width : '100%',
      transform : [ { scaleX : 2 } ],
      borderBottomStartRadius : 200,
      borderBottomEndRadius : 200,
      overflow : 'hidden',
  },
  backgroundImage: {
    flex: 1,
    // resizeMode: 'cover', // or 'stretch' or 'contain'
    // position: 'absolute',
    width: '60%',
    marginLeft: '5%',
    // marginTop: '100%',
    height: '60%',
  },
  child : {
      flex : 1,
      transform : [ { scaleX : 0.5 } ],

      backgroundColor : '#fea90a',
      alignItems : 'center',
      justifyContent : 'center'
  },
  child1 : {
      flex : 1,
      // transform : [ { scaleX : 0.9 } ],
// width:'50%',
marginTop:20,
      backgroundColor : '#fea90a',
      alignItems : 'center',
      justifyContent : 'center'
  }
})