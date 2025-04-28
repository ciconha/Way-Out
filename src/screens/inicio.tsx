import React from 'react';
import { View, Text, Button } from 'react-native';
import styles from './iniciostyles';

const Inicio = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.h1}>Bem-vindo ao WayOut!</Text>

      {/* Botão "Fazer Simulação" */}
      <View style={styles.buttonSimulacao}>
        <Button title="Fazer Simulação" onPress={() => console.log('Simulação iniciada')} color="#b0a482" />
      </View>

      {/* Botão "Mapa" */}
      <View style={styles.buttonMapa}>
        <Button title="Mapa" onPress={() => console.log('Abrindo mapa')} color="#b0a482" />
      </View>
    </View>
  );
};

export default Inicio;
