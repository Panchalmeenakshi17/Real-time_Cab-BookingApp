import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Landing from './src/components/Landing'
import Navbar from './src/components/Navbar'

const App = () => {
  return (
    <View style={styles.back}>
      <Landing/>
      {/* <Navbar/> */}
    </View>
  )
}

export default App

const styles = StyleSheet.create({

  back:{
backgroundColor: '#eb8d00',
height:800,
  },

})