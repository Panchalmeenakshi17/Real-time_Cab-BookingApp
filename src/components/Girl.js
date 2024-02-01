import { StyleSheet, Image, View, Text,TouchableOpacity } from 'react-native';
import React from 'react';

const Girl = () => {
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
          <Text style={styles.text}>Welcome to Your ultimate Transport Solution</Text>
          <Text style={styles.loremText}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </Text>
          <Text style={styles.loremText}>
            Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </Text>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Get Started</Text>
          </TouchableOpacity>
          <Text style={styles.loremText2}>
          Already have an account ? Log In
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#e6dede5b',
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover', // or 'stretch' or 'contain'
    position: 'absolute',
    width: '90%',
marginLeft:'5%',
marginTop:'15%',
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
  overlayContent: {
  
  },
  text: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign:"center",
    marginTop:'5%',
    color: '#fea90a',
  },
  Image:{
width:"10%",
height:"20%",
marginTop:'30%',
marginLeft:'16%',


resizeMode:'contain',


  },
  Image2:{
    width:"10%",
    height:"20%",
    marginTop:'20%',
    marginLeft:'5%',
    resizeMode:'contain',
    },
    Image3:{
        width:"10%",
        height:"10%",
   
        marginLeft:'75%',
        bottom:240,
     
        },
        Image4:{
            width:"8%",
            height:"8%",
  
            marginLeft:'85%',
            bottom:105,
          
            },

 loremText: {
  fontSize: 16,
                textAlign: 'center',
                color: '#333',
                marginTop: 30,
              },     
              
              loremText2: {
                fontSize: 16,
                              textAlign: 'center',
                              color: '#000000',
                              marginTop: 30,
                            },                 
              button: {
                backgroundColor: '#fea90a',
                paddingVertical: 15,
                paddingHorizontal: 30,
                width:'80%',
                borderRadius: 30,
                marginLeft:'10%',
                marginTop: 50,
              },
            
              buttonText: {
                color: 'white',
                fontSize: 18,
                fontWeight: 'bold',
                textAlign: 'center',
              },             
});

export default Girl;
