import React, { useEffect, useState } from "react";
import { View, Text, TextInput, TouchableOpacity, ScrollView } from "react-native";
import styles from "./simulacaostyle";
import Resultado from "./Resultado";
import Inicio from "./inicio";

const API_URL = "http://10.128.131.223:8000"; 

const Simulacao = () => {
  const [status, setStatus] = useState({
    locais_em_chamas: [],
    locais_seguros: [],
  });

  const [origem, setOrigem] = useState("");
  const [destino, setDestino] = useState("");
  const [mostrarResultado, setMostrarResultado] = useState(false);
  const [showInicio, setShowInicio] = useState(false);

  const buscarDados = async () => {
    try {
      const response = await fetch(`${API_URL}/status`);
      const data = await response.json();

      setStatus({
        locais_em_chamas: data.locais_em_chamas,
        locais_seguros: data.locais_seguros.filter((local: string) => !data.locais_em_chamas.includes(local)),
      });

      if (mostrarResultado) {
        setMostrarResultado(false);
        setTimeout(() => setMostrarResultado(true), 100);
      }
    } catch (error) {
      console.error(" Erro ao buscar dados da API:", error);
    }
  };

  useEffect(() => {
    buscarDados();
  }, []);

  if (showInicio) {
    return <Inicio voltar={() => setShowInicio(false)} />;
  }

  if (mostrarResultado) {
    return (
      <Resultado
        origem={origem.trim()} 
        destino={destino.trim()}
        locaisSeguros={status.locais_seguros}
        locaisEmChamas={status.locais_em_chamas}
        voltar={() => setMostrarResultado(false)}
      />
    );
  }

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <Text style={styles.h1}>WayOut</Text>

      <Text style={styles.warning}>🔥 Locais em Chamas:</Text>
      {status.locais_em_chamas.map((local: string, index: number) => (
        <Text key={index} style={styles.alert}>{local}</Text>
      ))}

      <Text style={styles.info}>🛡️ Locais Seguros:</Text>
      {status.locais_seguros.map((local: string, index: number) => (
        <Text key={index} style={styles.safe}>{local}</Text>
      ))}

      <Text style={styles.inputLabel}>👕 Partida:</Text>
      <TextInput
        style={styles.input}
        placeholder="Digite o local de partida"
        value={origem}
        onChangeText={(text) => setOrigem(text)}
      />

      <Text style={styles.inputLabel}>🏁 Destino:</Text>
      <TextInput
        style={styles.input}
        placeholder="Digite o destino"
        value={destino}
        onChangeText={(text) => setDestino(text)}
      />

      <TouchableOpacity style={styles.button1} onPress={() => setMostrarResultado(true)}>
        <Text style={styles.buttonText1}>🚀 Iniciar</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button2} onPress={buscarDados}>
        <Text style={styles.buttonText2}>🔄 Atualizar Dados</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button3} onPress={() => setShowInicio(true)}>
        <Text style={styles.buttonText3}>🏠 Voltar para Início</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default Simulacao;
