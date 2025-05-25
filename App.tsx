import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './style';
import Inicio from './src/screens/inicio';
import { Image } from 'expo-image';


const App = () => {
  const [progress, setProgress] = useState(0);
  const [showButton, setShowButton] = useState(false);
  const [showInicio, setShowInicio] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 110) {
          clearInterval(interval);
          setShowButton(true);
          return prev;
        }
        return prev + 19;
      });
    }, 400);
  }, []);

  if (showInicio) {
    return <Inicio />;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.h1}>WayOut</Text>


      <View style={styles.progressContainer}>
        <View style={[styles.progressBar, { width: `${progress}%` }]} />
      </View>


      <Image
        source={{ uri: 'https://pa1.narvii.com/6909/632e7f8c93327a9ad2650e4fbb5c89648d49a7ear1-426-475_hq.gif' }}
        style={styles.image}
      />

      {showButton && (
        <TouchableOpacity style={styles.button} onPress={() => setShowInicio(true)}>
          <Text style={styles.buttonText}>Ir para Início</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

export default App;
