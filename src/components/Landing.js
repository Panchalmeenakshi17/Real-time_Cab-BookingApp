import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Landing = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Taxi</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: 'white',
    // Add any additional text styles as needed
  },
});

export default Landing;
