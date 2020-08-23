import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {

  const [ output, setOutput ] = useState('Open up App.js to start working on your project')
  return (
    <View style={styles.container}>
      <Text>{output}</Text>
      <Button title="Change Text" onPress={() => setOutput('The text will not change')}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
