import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import styles from "./simulacaostyle";
import Resultado from "./Resultado";
import Inicio from "./inicio";

const API_URL = "http://192.168.0.109:8000";

const Simulacao = () => {
  const [status, setStatus] = useState({
    locais_em_chamas: [],
    locais_seguros: [],
  });

  const [origem, setOrigem] = useState<string | null>(null);
  const [destino, setDestino] = useState<string | null>(null);
  const [mostrarResultado, setMostrarResultado] = useState(false);
  const [showInicio, setShowInicio] = useState(false);
  const [carregando, setCarregando] = useState(true);

  const buscarDados = async () => {
    try {
      setCarregando(true);
      console.log("🔄 Buscando dados da API STATUS:", API_URL + "/status");

      const response = await fetch(`${API_URL}/status`);
      const data = await response.json();

      console.log(" Locais seguros carregados:", data.locais_seguros);
      console.log(" Locais em chamas carregados:", data.locais_em_chamas);

      setStatus({
        locais_em_chamas: Array.isArray(data.locais_em_chamas) ? data.locais_em_chamas : [],
        locais_seguros: Array.isArray(data.locais_seguros) ? data.locais_seguros.filter((local: string) => !data.locais_em_chamas.includes(local)) : [],
      });

      if (mostrarResultado) {
        setMostrarResultado(false);
        setTimeout(() => setMostrarResultado(true), 100);
      }
    } catch (error) {
      console.error("❌ Erro ao buscar dados da API:", error);
    } finally {
      setCarregando(false);
    }
  };

  useEffect(() => {
    buscarDados();
  }, []);

  const selecionarLocal = (local: string, tipo: "origem" | "destino") => {
    if (tipo === "origem") {
      setOrigem(local);
    } else {
      setDestino(local);
    }
  };

  const excluirLocal = (tipo: "origem" | "destino") => {
    if (tipo === "origem") {
      setOrigem(null);
    } else {
      setDestino(null);
    }
  };

  if (showInicio) {
    return <Inicio voltar={() => setShowInicio(false)} />;
  }

  if (mostrarResultado) {
    return (
      <Resultado
        origem={origem?.trim() || ""}
        destino={destino?.trim() || ""}
        locaisSeguros={status.locais_seguros}
        locaisEmChamas={status.locais_em_chamas}
        voltar={() => setMostrarResultado(false)}
      />
    );
  }

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <Text style={styles.h1}>WayOut</Text>

      <Text style={styles.warning}> Locais em Chamas:</Text>
      {status.locais_em_chamas.map((local: string, index: number) => (
        <Text key={index} style={styles.alert}>{local}</Text>
      ))}

      <Text style={styles.info}> Locais Seguros:</Text>
      <View>
        {carregando ? (
          <Text style={styles.placeholderText}> Carregando locais seguros...</Text>
        ) : status.locais_seguros.length > 0 ? (
          status.locais_seguros.map((local: string, index: number) => (
            <TouchableOpacity
              key={index}
              style={styles.buttonLocal}
              onPress={() => selecionarLocal(local, origem ? "destino" : "origem")}
            >
              <Text style={styles.buttonLocalText}>{local}</Text>
            </TouchableOpacity>
          ))
        ) : (
          <Text style={styles.alert}> Nenhum local seguro encontrado!</Text>
        )}
      </View>

      <Text style={styles.inputLabel}> Partida:</Text>
      <View style={styles.selectionContainer}>
        {origem ? (
          <View style={styles.selectedItem}>
            <Text style={styles.selectedText}>{origem}</Text>
            <TouchableOpacity style={styles.deleteButton} onPress={() => excluirLocal("origem")}>
              <Text style={styles.deleteText}>🗑️</Text>
            </TouchableOpacity>
          </View>
        ) : (
          <Text style={styles.placeholderText}>Selecione um local</Text>
        )}
      </View>

      <Text style={styles.inputLabel}> Destino:</Text>
      <View style={styles.selectionContainer}>
        {destino ? (
          <View style={styles.selectedItem}>
            <Text style={styles.selectedText}>{destino}</Text>
            <TouchableOpacity style={styles.deleteButton} onPress={() => excluirLocal("destino")}>
              <Text style={styles.deleteText}>🗑️</Text>
            </TouchableOpacity>
          </View>
        ) : (
          <Text style={styles.placeholderText}>Selecione um local</Text>
        )}
      </View>

      <TouchableOpacity style={styles.button1} onPress={() => setMostrarResultado(true)}>
        <Text style={styles.buttonText1}> Iniciar</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button2} onPress={buscarDados}>
        <Text style={styles.buttonText2}> Atualizar Dados</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button3} onPress={() => setShowInicio(true)}>
        <Text style={styles.buttonText3}> Voltar para Início</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default Simulacao;
