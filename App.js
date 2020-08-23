import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, TextInput, View, Button } from 'react-native';

export default function App() {

  const [ output, setOutput ] = useState('Open up App.js to start working on your project')
  return (
    <View style={styles.screen}>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between'}}>
        <TextInput 
        placeholder='Enter your goal' 
        style={{ width: '80%', borderBottomColor: 'grey', borderBottomWidth: 1, padding: 10 }} 
        />
        <Button title='ADD'/>
      </View>
      <View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  screen: {
    padding: 50
  }
})

