import React, { useState } from "react";
import { View, Text, Button, Image, TouchableOpacity } from "react-native";
import styles from "./mapastyle";
import Inicio from "./inicio"; 

const Mapa = () => {
  const [mostrarInicio, setMostrarInicio] = useState(false);

  
  if (mostrarInicio) {
    return <Inicio />;
  }

  return (
    <View style={styles.container}>
    
      <Image source={require("../assets/Mapa.jpeg")} style={styles.mapa} />  


      <TouchableOpacity style={styles.button} onPress={() => setMostrarInicio(true)}>
          <Text style={styles.buttonText}>↩️ Voltar para Início</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Mapa;
