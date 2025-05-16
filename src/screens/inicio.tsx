import react from "react";
import { View, Text, Button } from "react-native";
import styles from "./iniciosctyle";
import Simulacao from "./simulacao";
import Mapa from "./mapa";
import React, { useState } from "react";

interface InicioProps {
  voltar?: () => void; 
}

const Inicio: React.FC<InicioProps> = ({ voltar }) => {
  const [mostrarSimulacao, setMostrarSimulacao] = useState(false);
  const [mostrarMapa, setMostrarMapa] = useState(false);

  if (mostrarSimulacao) {
    return <Simulacao />;
  }

  if (mostrarMapa) {
    return <Mapa />;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.h1}>Bem-vindo ao WayOut!</Text>

      <View style={styles.buttonSimulacao}>
        <Button title="Fazer Simulação" onPress={() => setMostrarSimulacao(true)} color="#b0a482" />
      </View>

      <View style={styles.buttonMapa}>
        <Button title="Mapa" onPress={() => setMostrarMapa(true)} color="#b0a482" />
      </View>
    </View>
  );
};

export default Inicio;
