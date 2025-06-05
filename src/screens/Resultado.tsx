import React from "react";
import { View, Text, TouchableOpacity, ScrollView, Image } from "react-native";
import styles from "./simulacaostyle";

interface ResultadoProps {
  origem: string;
  destino: string;
  locaisSeguros: string[];
  locaisEmChamas: string[];
  voltar: () => void; 
}

const Resultado: React.FC<ResultadoProps> = ({ origem, destino, locaisSeguros, locaisEmChamas, voltar }) => {
const locaisUnicos = Array.from(new Set(locaisSeguros));
const locaisFiltrados = locaisUnicos.filter(local => local !== origem && local !== destino); 
const locaisSelecionados = locaisFiltrados.slice(0, 3); 
const caminhoCompleto = [origem, ...locaisSelecionados, destino]; 



  return (
    <ScrollView contentContainerStyle={styles.scrollContainer1}>
      <Text style={styles.h1}>WayOut</Text>

      <Text style={styles.resultTitle}> Rota Segura:</Text>
      <View style={styles.resultContainer}>
        {caminhoCompleto.map((local, index) => (
          <Text key={index} style={styles.route}>
            {index + 1}. {local} {index < caminhoCompleto.length - 1 ? "➡️" : "🏁"}
          </Text>
        ))}
      </View>

      <TouchableOpacity style={styles.button} onPress={voltar}>
        <Text style={styles.buttonText}> Voltar para Simulação</Text>
      </TouchableOpacity>

          <Image source={require("../assets/Mapa.jpeg")} style={styles.mapa} />  
    </ScrollView>
  );
};

export default Resultado;
