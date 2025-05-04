import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import styles from "./simulacaostyle";
import { fetchSafePath } from "../api/apiService";
import Inicio from "./inicio";

const Simulacao = () => {
  const [status, setStatus] = useState({
    locais_em_chamas: [],
    locais_seguros: [],
  });

  const [showInicio, setShowInicio] = useState(false);

  const buscarDados = async () => {
    try {
      console.log("🔄 Buscando dados do backend...");
      const response = await fetch("http://192.168.0.113:8000/status");
      const data = await response.json();
      console.log("📡 Dados recebidos:", data);
      setStatus(data);
    } catch (error) {
      console.error("❌ Erro ao buscar dados:", error);
    }
  };

  
  useEffect(() => {
    buscarDados();
  }, []);

  if (showInicio) {
    return <Inicio />;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.h1}>WayOut</Text>

    
      <Text style={styles.warning}>🔥 Locais em Chamas:</Text>
      {status.locais_em_chamas.length > 0 ? (
        status.locais_em_chamas.map((local) => <Text key={local} style={styles.alert}>{local}</Text>)
      ) : (
        <Text style={styles.safe}>Nenhum local em chamas!</Text>
      )}

    
      <Text style={styles.info}>🛡️ Locais Seguros:</Text>
      {status.locais_seguros.map((local) => (
        <Text key={local} style={styles.safe}>{local}</Text>
      ))}

      
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={() => buscarDados()}>
          <Text style={styles.buttonText}>🔄 Atualizar Dados</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={() => setShowInicio(true)}>
          <Text style={styles.buttonText}>↩️ Voltar para Início</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Simulacao;
