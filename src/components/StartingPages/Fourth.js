import {StyleSheet, Image, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import {Icon} from 'react-native-elements';

const Fourth = ({navigation}) => {
  return (
    <>
      <View style={styles.parent}>
        <View style={styles.child}>
          <View style={styles.child1}>
            <Image
              source={require('../../assets/images/122.png')}
              style={styles.backgroundImage}
            />
          </View>
        </View>
      </View>

      <View style={styles.overlayContainer}>
        <View style={styles.overlayContent}>
          <View style={styles.heading}>
            <Text style={styles.text}>
              <Text style={styles.blackText}>Elevate Your </Text>
              <Text style={styles.orangeText}>Ride Tracking Experience</Text>
            </Text>
          </View>
          <Text style={styles.loremText}>
          Your journey begins with us! 
            {/* Enjoy the convenience of hassle-free booking, real-time tracking, and exceptional service. Your journey begins with us! */}
          </Text>
          {/* <View style={styles.button}></View> */}
          {/* <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Get Started</Text>
          </TouchableOpacity>
          <Text style={styles.loremText2}>
            Already have an account ? <Text style={styles.orangeText2}>Log In</Text>
          </Text> */}
          <View style={styles.main}>
          <View style={styles.sd}>
              <View style={styles.button1}>
                <TouchableOpacity onPress={()=>{navigation.navigate('Third')}} style={styles.buttonText1}>
                  <Text style={styles.buttonText1}>￩</Text>
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.container}></View>
            <View style={styles.sd}>
              <View style={styles.container}>
                <Text style={styles.dot}>•</Text>
                <Text style={styles.dot}>•</Text>
                <Text style={styles.dot1}>•</Text>
              </View>
            </View>

            <View style={styles.sd}>
              <View style={styles.button}>
                <TouchableOpacity onPress={()=>{navigation.navigate('Signin')}} style={styles.buttonText}>
                  <Text style={styles.buttonText}>￫</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </View>
    </>
  );
};

export default Fourth;

const styles = StyleSheet.create({
    text:{
        paddingHorizontal: 17, // Add horizontal padding
        paddingVertical: 10,
    },
  main: {
    // backgroundColor:'red',
    flexDirection: 'row', // Set flexDirection to 'row' for horizontal arrangement
    alignItems: 'center', // Align items in the center vertically
    justifyContent: 'space-between', // Add space between the container and the button
    paddingHorizontal: 4,
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 0,
  },
  dot1: {
    color: '#fea90a',
    fontSize: 70,
    marginHorizontal: 5,
  },
  dot: {
    color: '#f5d8a2',
    fontSize: 40,
    marginHorizontal: 5,
  },

  heading: {
    // fontSize:16,
    alignItems: 'center',
    marginLeft: '3%',
    marginTop: 20,
  },
  loremText: {
    fontSize: 16,
    textAlign: 'center',
    color: '#333',
    marginTop: 5,
    fontFamily: 'Montserrat-Regular',
    paddingHorizontal: 18, // Add horizontal padding
    paddingVertical: 0,
  },

  blackText: {
    color: 'black',
    alignItems: 'center',
    fontSize: 24,
    textAlign: 'center',
    fontFamily: 'Montserrat-Bold',
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
  button1: {
    borderWidth: 2,
    borderColor: '#fea90a', // Set your desired border color
    justifyContent: 'center',
    // backgroundColor: '#fea90a',
    // paddingVertical: 15,
    // paddingHorizontal: 30,
    width: '38%',
    height: '41%',
    borderRadius: 100,
    marginLeft: '30%',
    marginTop: 1,
    fontFamily: 'Montserrat-Regular',
  },
  button: {
    backgroundColor: '#fea90a',
    // paddingVertical: 15,
    // paddingHorizontal: 30,
    width: '30%',
    height: '39%',
    borderRadius: 100,
    marginLeft: '40%',
    // marginTop: 20,
    fontFamily: 'Montserrat-Regular',
  },

  buttonText1: {
    color: '#fea90a',
    fontSize: 50,
    marginTop: -4,
    // fontWeight: 'bold',
    textAlign: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 50,
    marginTop: -4,
    // fontWeight: 'bold',
    textAlign: 'center',
  },
  orangeText: {
    alignItems: 'center',
    color: '#fea90a',
    fontSize: 24,
    textAlign: 'center',
    fontFamily: 'Montserrat-Bold',
    paddingHorizontal: 20, // Add horizontal padding
    paddingVertical: 10,
  },
  orangeText2: {
    color: '#fea90a',
    fontFamily: 'Montserrat-BOld',
    //  paddingHorizontal: 0, // Add horizontal padding
    // paddingVertical: 10,
  },
  parent: {
    height: '60%',
    width: '100%',
    transform: [{scaleX: 2}],
    borderBottomStartRadius: 100,
    borderBottomEndRadius: 300,
    overflow: 'hidden',
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover', // or 'stretch' or 'contain'
    position: 'absolute',
    width: '100%',
    marginLeft: '5%',
    marginTop: '100%',
    height: '70%',
  },
  child: {
    flex: 1,
    transform: [{scaleX: 0.5}],

    backgroundColor: '#fea90a',
    alignItems: 'center',
    justifyContent: 'center',
  },
  child1: {
    flex: 1,
    // transform : [ { scaleX : 0.9 } ],
    // width:'50%',
    backgroundColor: '#fea90a',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
