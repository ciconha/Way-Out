import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';
import styles from './iniciosctyle';
import Simulacao from './simulacao';

const Inicio = () => {
  const [mostrarSimulacao, setMostrarSimulacao] = useState(false); 

  if (mostrarSimulacao) {
    return <Simulacao />; 
  }

  return (
    <View style={styles.container}>
      <Text style={styles.h1}>Bem-vindo ao WayOut!</Text>

    
      <View style={styles.buttonSimulacao}>
        <Button title="Fazer Simulação" onPress={() => setMostrarSimulacao(true)} color="#b0a482" />
      </View>

      
      <View style={styles.buttonMapa}>
        <Button title="Mapa" onPress={() => console.log('Abrindo mapa')} color="#b0a482" />
      </View>
    </View>
  );
};

export default Inicio;
